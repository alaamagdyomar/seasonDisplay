import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner"

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


  // Helper Function to avoid multi return in the render function 
     renderContent() {
  if(this.state.errorMessage && !this.state.lat){
    return <div>Error:{this.state.errorMessage}</div>
  }

  if(this.state.lat && !this.state.errorMessage){
    // return <div>latitude:{this.state.lat}</div>
    return <SeasonDisplay lat={this.state.lat} />
  }

  return <Spinner message='Please accept location request'/>
};

  render() 
  {
    return (
      <div className="border red">
        {this.renderContent()}
      </div>
    );
  }
};

ReactDOM.render(
  <App/>,
  document.getElementById("root")
);