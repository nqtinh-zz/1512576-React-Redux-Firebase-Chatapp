import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import  {rootReducer,createStoreWithFirebase} from './reducer/RootReducer';

const initialState = {}
const store = createStoreWithFirebase(rootReducer, initialState)

ReactDOM.render(
<Provider store={store}>
<App/> 
</Provider>, 
document.getElementById('root'));
serviceWorker.unregister();
