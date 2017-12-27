import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class YelpApiService extends Component {
  // Do API request
  getRestaurantData(term, location) {
      return axios.post('http://localhost:4200/' + 'api', {
          term: term,
          location: location
      })
      .catch(err => console.log(err));
  };
}

export default YelpApiService
