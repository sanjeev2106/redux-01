import * as actionTypes from '../actions';

const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.INCREMENT:
            //copy the state in immutable way
            const newState = Object.assign({}, state);
            newState.counter = state.counter + 1;
            return newState; // newState is new object 
        case actionTypes.DECREMENT:
            return {
                // distrubte operator returns the new js object immutably just like above
                ...state,  
                counter: state.counter - 1
            }
        case actionTypes.ADD:
            return {
                ...state,
                counter: state.counter + action.val
            }
        case actionTypes.SUBTRACT:
            return {
                ...state,
                counter: state.counter - action.val
            }
    }

    return state;
}

export default reducer;