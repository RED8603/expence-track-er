import { createStore , combineReducers} from "redux";
import transationReducer from "./transationReducer";
import transationHistoryReducer from './transationHistoryReducer'


let allRedcers = combineReducers({transationReducer , transationHistoryReducer});

const myStore = createStore(allRedcers , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default myStore;