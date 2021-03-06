import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import App from './components/App';
import { Router, Route, hashHistory } from 'react-router';
import { render } from 'react-dom';
import ShowGifs from './components/ShowGifs';
import SearchGiphy from './components/SearchGiphy';
import SearchGifs from './components/SearchGifs';
import CreateAccount from './components/CreateAccount';
import Login from './components/Login';
import Navigation from './components/Navigation';
import { Provider } from 'mobx-react';
import ImageStore from './stores/ImageStore';
import ShowGifsWrapper from './components/ShowGifsWrapper';

const imageStore = new ImageStore();




render((
  <Provider imageStore={imageStore}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <Route path="/ShowGifs" component={ShowGifsWrapper}/>
        <Route path="/SearchGiphy" component={SearchGiphy}/>
        <Route path="/SearchGifs" component={SearchGifs}/>
        <Route path="/CreateAccount" component={CreateAccount}/>
        <Route path="/Login" component={Login}/>
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'));




// ReactDOM.render(<App/>, document.getElementById('app'));
