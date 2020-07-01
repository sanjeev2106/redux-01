const redux = require('redux');
const createStore = redux.createStore;

const intialState = {
    counter: 0
}

// Reducer
// here initialState assign as a default value
const rootReducer = (state = intialState, action) => { 
    return state;
};

// Store
const store = createStore(rootReducer);
console.log(store.getState());

// Dispatching Action