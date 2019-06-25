import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import apiKey from '../config.js'
import axios from 'axios';

//App components
import Header from './Header';
import ImageGallery from './ImageGallery';
import Error from './Error';

class App extends Component {
  state = { 
    searchImages: [],
    amalfiImages: [],
    hallstatImages: [],
    santoriniImages: [],
    loading: true
  }

  componentDidMount() {
    this.performSearch('amalfi%20coast');
    this.performSearch('hallstat');
    this.performSearch('santorini');
  }

  performSearch = (query) => {
    this.setState({ loading: true });
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${query}&sort=interestingness-desc&safe_search=1&content_type=1&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      let responseData = response.data.photos.photo;
      if (query === 'amalfi%20coast') {
        this.setState({ amalfiImages: responseData })
      } else if (query === 'hallstat') {
        this.setState({ hallstatImages: responseData })
      } else if (query === 'santorini') {
        this.setState({ santoriniImages: responseData })
      } else {
        this.setState({ searchImages: responseData });
      }
      this.setState({ loading: false });
    })
    .catch(error => {
      console.log('Error fetching data', error);
    });
  }

  render() { 
    return ( 
      <BrowserRouter>
        <div className="container">
          <Route path="/" render={ (props) => <Header {...props} onSearch={this.performSearch} /> } />
          <Switch>
            <Route exact path="/" render={ () => <Redirect to="/hallstat" /> } />
            <Route path="/amalficoast" render={() => <ImageGallery loading={this.state.loading} images={this.state.amalfiImages} title={'Amalfi Coast Photos'} />} />
            <Route path="/hallstat" render={() => <ImageGallery images={this.state.hallstatImages} title={'hallstat Photos'} />} />
            <Route path="/santorini" render={() => <ImageGallery images={this.state.santoriniImages} title={'Santorini Photos'} />} />
            <Route path='/search/:topic' render={({match}) => <ImageGallery loading={this.state.loading} images={this.state.searchImages} title={`${match.params.topic} Photos`} /> } />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter> 
    );
  }
}
 
export default App;
