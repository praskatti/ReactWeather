var React = require('react');
var WeatherForm = require('./WeatherForm');
var WeatherMessage = require('./WeatherMessage');

var openWeathermap = require('./openWeathermap.jsx');

var Weather = React.createClass(
  {

    getInitialState : function() {
      return ( {
        isLoading : false
      });
    },
    handleSearch : function(location) {

      var that = this;
      this.setState({isLoading : true});
      openWeathermap.getTemp(location).then(function(temp){

        that.setState({
          isLoading: false,
          location : location,
          temp : temp
        });
      }, function(error) {
          that.setState({isLoading : false,
            location : '',
            temp : ''
          });

          alert(error);
      }
    )

    },
    render : function() {
      var {isLoading, location, temp} = this.state;

      function renderMessage() {
        if(isLoading) {
          return <h3 className="text-centered">Fetching Weather ...</h3>;
        } else if(temp && location) {

            return   <WeatherMessage location={location} temp={temp}/>;

        }
     }
      return(
          <div>
            <h1 className="text-centered">Get Weather</h1>
            <WeatherForm onSearch={this.handleSearch}/>
            {renderMessage()}
        </div>
      );
    }

  }
);

module.exports = Weather;
