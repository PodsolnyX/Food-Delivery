import { legacy_createStore as createStore, combineReducers} from 'redux'
import menuReducer from "./menu-reducer";
import basketReducer from "./basket-reducer";

let reducers = combineReducers({
    menuPage: menuReducer,
    basketPage: basketReducer
});

let store = createStore(reducers);

export default store;