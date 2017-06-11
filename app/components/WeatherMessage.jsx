var React = require('react');

 var WeatherMessage = ({temp, location}) =>{


  return(
      <div>
        <h2 className="text-centered">The temperature in {location} is {temp}</h2>

    </div>
  );
}

module.exports = WeatherMessage;
