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
  constructor(props){
    super(props);
    this.state ={ lat:null };

    // to avoid rendering the component every time w get that state
    window.navigator.geolocation.getCurrentPosition(
      (position)=>{
        this.setState({ lat:position.coords.latitude });
      },
      (err)=>console.log(err));

  }
  render() {
    return <div> latitude: {this.state.lat} </div>;
  }
};

ReactDOM.render(
  <App/>,
  document.getElementById("root")
);