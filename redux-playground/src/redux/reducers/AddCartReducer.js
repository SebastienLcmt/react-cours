// Création d'un reducer

const INITIAL_STATE = {
    cart: 0
}

// fonction qui prends le state et va permettre d'effectuer des actions dessus

function AddCartReducer(state = INITIAL_STATE, action){

    switch (action.type) {
        case 'ADDCART': {
            return {
                ...state,
                cart: action.payload
                
            }
        }    
    }

    return state;
}

export default AddCartReducer;