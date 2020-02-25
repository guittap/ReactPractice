import React from "react";

class App extends React.Component {
  render() {
    return (
      <div className="Example">
        <div>
          <button onClick={() => example()}>PRESS ME</button>
        </div>
      </div>
    );
  }
}

function example() {
  alert("Hello World");
}

export default App;
