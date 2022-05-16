// Création d'un reducer 

const INITIAL_STATE = {
    count: 0
}

// fonction qui prends le state et va permettre d'effectuer des actions dessus

function CounterReducer(state = INITIAL_STATE, action){

    switch (action.type) {
        case 'INCR': {
            return {
                ...state,  // copie car state est un objet
                count: state.count + 1  // cette propriété va passer au dessus.
            }
        }    
        case 'DECR': {
            return {
                ...state,
                count: state.count - 1
            }
        }    
        
    
    }

    return state;
}

export default CounterReducer;