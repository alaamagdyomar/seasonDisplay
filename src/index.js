import React from "react";
import ReactDOM from "react-dom";

//  // function component 
// const App = () => {
//     window.navigator.geolocation.getCurrentPosition(
//         (position)=>console.log(position),
//         (err)=>console.log(err)
//     );
//     return <div> hi there </div>;
// };

// refacture to class based component 

class App extends React.Component {
  render() {
    window.navigator.geolocation.getCurrentPosition(
      (position)=>console.log(position),
      (err)=>console.log(err));

    return <div> latitude: </div>;
  }
};

ReactDOM.render(
  <App/>,
  document.getElementById("root")
);