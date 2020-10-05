import React, { Component } from "react";
import { v4 as id } from "uuid";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import firebase from "../firebase";
import Header from "./Header";
import Submit from "./Submit";
import TodoElement from "./TodoElement";

const db = firebase.firestore();

class Todo extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      makeTodo: "",
    };
  }

  //updates the state from firebase
  componentDidMount() {
    const retrieved = [];
    db.collection("todos")
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          if (doc.data().user === this.state.userId) {
            retrieved.push(doc.data());
          }
        });
        this.setState({
          tasks: [...retrieved],
        });
      });

    firebase.auth().onAuthStateChanged((user) => {
        if(user){
            console.log(user)
            this.setState({userId:user.uid})
        } else {
          this.authenticate();
        }
    });

    if(!firebase.auth().currentUser){
      console.log("ouf")
    }
  }

  //updates state with value in the input prior to submission
  handleTodoChange = (e) => {
    e.preventDefault();
    
    this.setState({
      tasks: this.state.tasks,
      makeTodo: e.target.value,
    });
    console.log("changed");
  };

  //creates a todo by adding it to the state and displays it
  createTodo = (e) => {
    e.preventDefault();
    if (this.state.makeTodo === "") return false;

    //adds to db
    const taskId = id();
    db.collection("todos").doc(taskId).set({
      user: this.state.userId,
      id: taskId,
      name: this.state.makeTodo,
    });
    this.setState({
      tasks: [
        ...this.state.tasks,
        {
          user: "me",
          id: taskId,
          name: this.state.makeTodo,
        },
      ],
      makeTodo: "",
    });
    console.log("created");
  };

  //removes todo from state
  deleteTodo = (id) => {
    this.setState({
      tasks: [...this.state.tasks.filter((tasks) => tasks.id !== id)],
    });

    //deletes from db
    db.collection("todos")
      .doc(id)
      .delete()
      .catch((error) => {
        console.error("Deletion error", error);
      });
  };

  //auths a user and pushes uid to state
  authenticate = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithRedirect(provider)
      .then((result) => {
        console.log("auth");
        const userId = result.user.uid;
        console.log(`id:${userId}`);
        this.setState({ userId: userId });
        console.log("set");
      })
      .catch(function (error) {
        // Handle Errors here.
        // ...
        console.log(error.message)
      });

    
  };

  render() {
    //creates all the todos to be rendered
    const todos = this.state.tasks.map((tasks, index) => {
      return (
        <TodoElement tasks={tasks} key={index} deleteTodo={this.deleteTodo} />
      );
    });

    //send the rendered version of the todos and the submit
    return (
      <div>
        <Header debug={this.state.debug} />
            {todos}
            <Submit
              handleTodoChange={this.handleTodoChange}
              makeTodo={this.state.makeTodo}
              createTodo={this.createTodo}
            />
            {/* <button onClick={() => {firebase.auth().signOut()}}>SIgnout</button> */}
      </div>
    );
  }
}

export default Todo;
