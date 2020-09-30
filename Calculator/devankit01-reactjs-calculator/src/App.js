import React, { useState } from "react";

function App() {
  const [x, setx] = useState("");

  const handle = (e) => {
    // console.log(e.target.value);
    let count = e.target.value;
    let z;


      // if (count)
      z = x + count;


      setx(z);
     
    
  };

  const cal = () => {
    let c = x;

    try{
      console.log(eval(c));
      setx(eval(c));
    }
    catch{setx('Error 🚫');}
 


  };

  const clr = () => {
    setx("");
  };
  return (
    <div className="App">
      <div className="container">
        <input value={x} readOnly />

        <div className="row">
        <button onClick={handle} value="1">
          1
        </button>
        <button onClick={handle} value="2">
          2
        </button>
        <button onClick={handle} value="3">
          3
        </button>
        </div>
        <div className="row">
        <button onClick={handle} value="4">
          4
        </button>
        <button onClick={handle} value="5">
          5
        </button>
        <button onClick={handle} value="6">
          6
        </button>
        </div>
        <div className="row">

        <button onClick={handle} value="7">
          7
        </button>
        <button onClick={handle} value="8">
          8
        </button>
        <button onClick={handle} value="9">
          9
        </button>
        </div>
        <div className="row">

        <button onClick={handle} value="0">
          0
        </button>
        <button onClick={handle} value=".">
          .
        </button>

        <button onClick={handle} value="+">
          +
        </button>
        </div>
        <div className="row">

        <button onClick={handle} value="-">
          -
        </button>
        <button onClick={handle} value="*">
          *
        </button>
        <button onClick={handle} value="/">
          /
        </button>
        </div>
        <div className="row">

        <button onClick={handle} value="%">
          %
        </button>
        <button onClick={cal}>=</button>
        <button onClick={clr}>C</button>
        </div>
      </div>
    </div>
  );
}

export default App;
