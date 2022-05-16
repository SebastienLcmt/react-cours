import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux' // hook pour avoir accès aux données
import { getCatImg } from '../redux/reducers/dataImgReducer'; // getCatImg entre accolade car on a pas fait d'export default, juste un export. 
// useSelector pour utiliser les données du Store


export default function Counter() {

    const [cartData, setCartData] = useState(0);

    const {cart, count, imgURL} = useSelector(state => ({
        ...state.AddCartReducer,
        ...state.CounterReducer,
        ...state.dataImgReducer
    }))

    const dispatch = useDispatch(); 

    const incrFunc = () => { // quand on clique sur le bouton +1, ça va envoyer une action avec son type
        dispatch({
            type: "INCR"     // C'est pour ça qu'on a action.type dans le Switch dans CounterReducer.js
        })
    }
    const decrFunc = () => {
        dispatch({
            type: "DECR"
        })
    }

    const addToCartFunc = () =>{
        dispatch({
            type: "ADDCART",
            payload: cartData
        })
    }

    useEffect(() => {
        dispatch(getCatImg())
    },[]) 


    return (
        <div>
            <h1>Le compteur : {count} </h1>
            <button onClick={decrFunc}>-1</button> 
            <button onClick={incrFunc}>+1</button>

            <h1>Votre panier : {cart} </h1>
            <input 
            type="number" 
            name="" 
            id="" 
            value={cartData}
            onInput={e => setCartData(e.target.value)} />
            <button onClick={addToCartFunc}>Ajouter au panier</button>
            <br />
            {imgURL && <img style={{width: "400px"}} src={imgURL}/>}
        </div>
    )
}
