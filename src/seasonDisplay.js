import './SeasonDisplay.css';


const configSeason = {
  winter :{
    text: 'kalsn 3shan elgaw wa7sh',
    iconName: 'snowflake'
  },
  summer:{
    text: 'mafesh wa7da eskendria :)',
    iconName:'sun'
  }
}

const getSeason = (lat ,month)=>{

     if (month > 2 && month < 9) {
       return lat > 0 ? 'summer' : 'winter'
     } else { 
       return lat > 0 ? 'winter' : 'summer'      
     }
};

const SeasonDisplay = (props) =>{
  const season = getSeason(props.lat, new Date().getMonth());
  
  // const text = season === 'winter' ? 'kalsen 3ashab elgaw wa7sh' : 'mafesh wa7da eskendria :)';
  // const icon = season === 'winter' ? 'snowflake' : 'sun';

    const { text,iconName } = configSeason[season];
    return <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>season:{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
          </div>
};

export default SeasonDisplay;