const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'INCREMENT':
            //copy the state in immutable way
            const newState = Object.assign({}, state);
            newState.counter = state.counter + 1;
            return newState; // newState is new object 
        case 'DECREMENT':
            return {
                // distrubte operator returns the new js object immutably just like above
                ...state,  
                counter: state.counter - 1
            }
        case 'ADD':
            return {
                ...state,
                counter: state.counter + action.val
            }
        case 'SUBTRACT':
            return {
                ...state,
                counter: state.counter - action.val
            }
        case 'STORE_RESULT':
                return {
                    ...state,
                    // results: state.results.concat(state.counter)
                    results: state.results.concat({id: new Date(), value: state.counter})
                }
    }

    return state;
}

export default reducer;