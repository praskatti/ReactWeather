var React = require('react');

// var WeatherMessage = React.createClass(
//   {
//     render : function() {
//
//
//       var {location, temp} = this.props;
//       return(
//           <div>
//             <h2>The temperature in {location} is {temp}</h2>
//
//         </div>
//       );
//     }
//
//   }
// );

var WeatherMessage = ({temp, location}) =>{

 
  return(
      <div>
        <h2>The temperature in {location} is {temp}</h2>

    </div>
  );
}

module.exports = WeatherMessage;
