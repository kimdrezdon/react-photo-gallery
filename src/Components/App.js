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

  performSearch(query = 'amalfi%20coast') {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${query}&sort=interestingness-desc&safe_search=1&content_type=1&per_page=24&format=json&nojsoncallback=1`)
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
            <Route exact path="/" render={ () => <Redirect to="/amalficoast" /> } />
            <Route path="/amalficoast" render={() => <ImageGallery images={this.state.images} />} />
            <Route path="/tulum" render={() => <ImageGallery images={this.state.images} />} />
            <Route path="/santorini" render={() => <ImageGallery images={this.state.images} />} />
            <Route component={NoResults} />
          </Switch>
        </div>
      </BrowserRouter> 
    );
  }
}
 
export default App;
