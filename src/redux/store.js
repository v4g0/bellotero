import { connectRouter, routerMiddleware } from 'connected-react-router'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/RootReducer';
import { history } from '../helpers/history';

const loggerMiddleware = createLogger()

// export const store = createStore(
//     // connectRouter(history)(rootReducer), // new root reducer with router state
//     // connectRouter(rootReducer), // new root reducer with router state
//     rootReducer,
//     compose(
//       applyMiddleware(
//         thunkMiddleware, // lets us dispatch() functions
//         loggerMiddleware, // neat middleware that logs actions
//         // routerMiddleware(history), // for dispatching history actions
//       ),
//     ),
// );


export const store = createStore(
  rootReducer, // new root reducer with router state
  compose(
      applyMiddleware(
          thunkMiddleware, // lets us dispatch() functions
          // loggerMiddleware, // neat middleware that logs actions
          routerMiddleware(history), // for dispatching history actions
      ),
  ),
);