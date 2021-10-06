const studentList = document.getElementById("student-list");
const form = document.getElementById('add-student');

const renderStudent = doc => {
    let li = document.createElement('li');
    let firstname = document.createElement('span');
    let lastname = document.createElement('span');
    let age  = document.createElement('span');


    // assign data to the elements
    firstname.textContent = doc.data().firstname;
    lastname.textContent = doc.data().lastname;
    age.textContent = doc.data().age;

    // append elements
    li.appendChild(firstname);
    li.appendChild(lastname);
    li.appendChild(age);
    studentList.appendChild(li);
}
// create a ref to firestore
const db = firebase.firestore();

// fetch element

db.collection("students").get()
    .then(snapshot => {
        snapshot.forEach(doc => {
            renderStudent(doc);
        })
    })

// Saving data to firestore
form.addEventListener('submit', (e) => {
    e.preventDefault();

    db.collection('students').add({
        firstname: form.firstname.value,
        lastname: form.lastname.value,
        age: form.age.value
    });
    form.name.value="";
})