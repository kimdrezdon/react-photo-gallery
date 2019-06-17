import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import apiKey from '../config.js'
import axios from 'axios';

//App components
import Header from './Header';
import ImageGallery from './ImageGallery';
import NoResults from './NoResults';

class App extends Component {
  state = { 
    images: []
  }

  componentDidMount() {
    this.performSearch();
  }

  performSearch(query = 'beaches') {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&safe_search=1&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({
        images: response.data.photos.photo
      })
    })
    .catch(error => {
      console.log('Error fetching data', error);
    });
  }

  render() { 
    return ( 
      <BrowserRouter>
        <div className="container">
          <Header />
          <Switch>
            <Route exact path="/" render={ () => <Redirect to="/beaches" /> } />
            <Route path="/cats" component={() => <ImageGallery images={this.state.images} />} />
            <Route path="/dogs" component={() => <ImageGallery images={this.state.images} />} />
            <Route path="/beaches" render={() => <ImageGallery images={this.state.images} />} />
            <Route component={NoResults} />
          </Switch>
        </div>
      </BrowserRouter> 
    );
  }
}
 
export default App;
