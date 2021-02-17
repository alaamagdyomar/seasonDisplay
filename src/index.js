import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./seasonDisplay"

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
  state ={ lat:null , errorMessage:'' };

  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      (position)=>this.setState({ lat:position.coords.latitude }),
      (err)=>this.setState({errorMessage:err.message})
    );
  }


  render() {

      if(this.state.errorMessage && !this.state.lat){
          return <div>Error:{this.state.errorMessage}</div>
        }
     
        if(this.state.lat && !this.state.errorMessage){
          // return <div>latitude:{this.state.lat}</div>
          return <SeasonDisplay lat={this.state.lat} />
        }
     
        return <div> Loading.......!</div>
    
  }
};

ReactDOM.render(
  <App/>,
  document.getElementById("root")
);