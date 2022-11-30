import {combineReducer} from 'redux';

const rootReducer = combineReducer({
    userDetails:userReducer
})

export default rootReducer;