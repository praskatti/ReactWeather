var React = require('react');

// var About = React.createClass(
//   {
//     render : function() {
//
//       return(
//         <h3>About Component</h3>
//       );
//     }
//   }
// );

var About = (props) => {
    debugger;
    return(
      <div>
      <h1 className="text-centered">About </h1>
      <p>This is a weather Application built on React. !!</p>
      <p>Here are some tools I used.</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - This was the javascript framework used.

        </li>
        <li>
            <a href="http://openWeatherMap.org">openWeatherMap</a> - I used Open Weather Map to search for
            weather data by city name.
        </li>
      </ul>
    </div>
    );
};

module.exports = About;
