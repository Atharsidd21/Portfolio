import { combineReducers } from 'redux';
import NavBar from "./navbar/navbar.js"
import SnackBar from "./snackbar/snackbar.js"
const rootReducer = combineReducers({
        nav:NavBar,
        snackbar:SnackBar
    });
    
    export default rootReducer;
    