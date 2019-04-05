import { routerMiddleware } from 'connected-react-router'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/RootReducer';
import { history } from '../helpers/history';
import { composeWithDevTools } from 'redux-devtools-extension';

const loggerMiddleware = createLogger()

// const store = createStore(reducer, composeWithDevTools(
//   applyMiddleware(...middleware),
//   // other store enhancers if any
// ));

export const store = createStore(
  rootReducer, // new root reducer with router state
  composeWithDevTools(
      applyMiddleware(
          thunkMiddleware, // lets us dispatch() functions
          // loggerMiddleware, // neat middleware that logs actions
          routerMiddleware(history), // for dispatching history actions
      ),
  ),
);