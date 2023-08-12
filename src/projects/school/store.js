//s=c(r,c(a(lt)))
import {createStore,applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import logger from 'redux-logger'
import rootReducer from './rootReducer'
import reducers from './Redux/reducer'
import thunk from 'redux-thunk'

//<Provider store={store}></Provider> from 'react-redux' in App.js


//const store=createStore(rootReducer)
//,composeWithDevTools(applyMiddleware(logger,thunk)))
const store=createStore(reducers,composeWithDevTools(applyMiddleware(logger,thunk)))
console.log(store)
export default store