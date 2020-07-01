const redux = require('redux');
const createStore = redux.createStore;

const intialState = {
    counter: 0
}

// Reducer
// here initialState assign as a default value
const rootReducer = (state = intialState, action) => { 
    if(action.type === 'INC_COUNTER'){
        return{
            ...state,
            counter: state.counter + 1
        };
    }

    if(action.type === 'ADD_COUNTER'){
        return{
            ...state,
            counter: state.counter + action.value
        };
    }

    return state;
};

// Store
const store = createStore(rootReducer);
console.log(store.getState());

// Dispatching Action
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10});
console.log(store.getState());

// Subscription