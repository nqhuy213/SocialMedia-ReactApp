import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'semantic-ui-css/semantic.min.css'
import { Provider } from 'react-redux';
import { BrowserRouter} from 'react-router-dom';
import { history } from "./history";
import { getToken } from './utils/token';
import './index.scss'
import { store } from './redux/reduxStore';
var userLoggedIn = false

const admin = getToken('token')
if(admin){
  userLoggedIn = true
}


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter history={history}>
      <App userLoggedIn={userLoggedIn}/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
