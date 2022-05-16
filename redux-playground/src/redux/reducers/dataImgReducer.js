// Création d'un reducer

const INITIAL_STATE = {
    imgURL: ""
}

// fonction qui prends le state et va permettre d'effectuer des actions dessus

function dataImgReducer(state = INITIAL_STATE, action){

    switch (action.type) {
        case 'LOADIMG': {
            return {
                ...state,
                imgURL: action.payload
                
            }
        }    
    }

    return state;
}

export default dataImgReducer;

export const getCatImg = () => dispatch => {
    fetch('https://api.thecatapi.com/v1/images/search')
    .then(response => response.json())
    .then(data => {
        dispatch({
            type: 'LOADIMG',
            payload: data[0].url
        })
    })
}