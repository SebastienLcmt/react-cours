# Set Up
- ```npx create-react-app nomdemonapp```
- ```cd nomdemonapp```
- ```npm start```

# Le state (les données d'un composant)
useState() renvoit un tableau avec à l'index 0 le state (les données), et à l'index 1 une fonction, qui nous permettra de modifier le state

```js 
import {useState} from 'react' 
```

```js
    const [monState, setMonState] = useState(10);
    
    const modifyState = () => {
        setMonState(20);
    }
    
    <button onClick={modifyState}>Change state<button/>
```


# Les props 

C'est un objet contenant ce qu'un parent lui donne. 
On peut facilement transmettre le state du parent à l'enfant.
Un composant se met à jour quand son state change, ou quand les props qu'on lui passe changent également.


```js
function App(){

    return (
        <>
        <Item txt={"Props depuis le parent"}/>
        </>
    )
}
 // composant enfant

    function Item (props){
        console.log(props); // {txt : "Props depuis le parent"}
        console.log(props.txt); // "Props depuis le parent"
    }
```

Il est possible de passer une fonction dans les props

```js  

    <Item func={modifyState} />
    // 
    //Cela modifiera le state du parent comme précédemment
    <button onClick={props.func}>Change state<button/> 

```

Pour remonter le state avec un argument à notre fonction

```js
    // Dans App.js
    
    const modifyState = (data) => {
        console.log(data);
        // setMonState(data); D'ici je peux modifier le state parent à partir du composant enfant.
    }

    <Item func={modifyState} />


    // Dans Item.js

    const [itemState, setItemState] = useState('Item State')
    
    // Fonction anonyme sinon cela s'exécute directement.
    return (
        <div> 
            <button onClick={() => props.func(itemState)}><button/>
        </div>
    )

```

### props.children


```js
import Content from './Content'

return (
    <>
        <Content>
            <h1> Titre 1 </h1>
        </Content>

        <Content>
            <h1> Titre 2 </h1>
        </Content>
    </>
)

//  //   //  //   //   // 

export default function Content(props) {
    return (
        <div className="content">
            {props.children} 
        </div>
    )
} // Affichera correctement les éléments passés par le parent. 

```

# Utiliser les inputs

```js  
    
    const [inputData, setInputData] = useState();

    const changeInput = (e) => {
        setInputData(e); // Le state se modifiera avec la valeur de l'input
    }

    return (
        <div>
            <input
            type="text"
            onInput={e => changeInput(e.target.value)}
            />
        </div>
    )

```

# Listes 

``` npm install uuid```
```js
    import {v4 as uuidv4} from 'uuid'
```

```js
    function app() {
        const [dataArr, SetDataArr] = useState([
            {nom : "John", id: uuidv4()},
            {nom : "Seb", id: uuidv4()},
            {nom : "Zozo", id: uuidv4()},
        ]);
    }

    return (
        <>
            {dataArr.map(item => {
                return <p key={item.id}> Nom: {item.nom} </p>
            })}
        </>
    )
// Ici on obtient une erreur si on ne met pas de key à nos différents éléments.
// On utilise donc les uuids. 
```
# Never mutate state directly !

Pour les valeurs primitives : changer le state directement ne marchera pas (vu qu'on utilise const)
Pour les valeurs de référence : 
**Il faut toujours recopier le state avant de le modifier**

```js
    function Component () {

        const [state, setState] = useState([1,2,3]); 

        const mutateState = () => {
            const newState = [...state]
            newState.push(4)
            setState(newState)
        }



    }

```


# Les Hooks en profondeur

**Toujours mettre les Hooks à la racine de notre fonction**

## useEffect()

Fonction callback qui va s'exécuter à chaque fois que le state se met à jour. 

Si on lui passe un tableau vide en Second argument, useEffect va s'exécuter une fois au chargement, et c'est tout. 
Le second argument représente ce que useEffect doit surveiller. Si on met rien, il ne surveille rien et ne fait rien. (Peut etre utile lorsqu'on appelle une APi par exemple, pour ne l'appeler qu'une seule fois)



```js
    import {useState, useEffect} from 'react'

    const [data, setData] = useState();

    useEffect(() => {
        console.log('mise à jour') // ne s'affiche qu'une seule fois au chargement.
    }, [])

    // <button onClick={changeState}> qui change le state
    const changeState = () => {
        setData(data + 1);
    }

```

*** Par contre on peut par exemple passer le State dans le tableau. ***

```js
    useEffect(() => {
        console.log('mise à jour') // UseEffect va s'exécuter à chaque fois que le State sera modifié, donc à chaque fois que l'on cliquera sur le bouton dans notre cas.
    }, [data])
```
Si l'on a plusieurs State et qu'on modifie un state que useEffect ne surveille pas, useEffect ne s'exécutera pas. 

### useEffect et setInterval

```js

    const [timer, setTimer] = useState(1);
    // A chaque MAJ
    useEffect(() => {
        const intervalID = setInterval(() => {
            setTimer(timer => timer + 1) // Grâce à useState : Si setTimer a une fonction en argument, useState va lui fournir le state frais. 
        }, 1000 )

        return () => {  
            clearInterval (intervalID)
        }
            // cleanUp function. Quand le composant se détruit, useEffect va exécuter cette fonction. Très important de le faire pour éviter les memory leak (détruire un composant n'empeche pas au setInterval de tourner en fond dans la mémoire)
    }, [])

```

## useRef 

Permet de sélectionner un élément. 

Exemple avec vidéo. 


```js
import {useRef, useEffect} from "react"
import Video from "./Video.mp4"


const ref = useRef();
// ref est ici undefined, car on fait apparaitre la vidéo qu'après.
// Donc on utilise useEffect, qui va s'exécuter une fois le contenu chargé.

useEffect(() => {
    setTimeout(()=> {
        ref.current.pause();  // log(ref) renvoit un objet avec prop 'current'
    }, 5000)
}, [])


    return (
        <>
            <video ref={ref} autoPlay controls muted>
                <source src={Video} type="video/mp4"/>
            </video>
        </>
    )
```

### useRef avec tableau d'éléments.

```js
const ref = useRef([]); // on met un tableau vide
 
const addToRef = el =>{
    if(el && !ref.current.includes(el)){ // si el existe, et que notre tableau le contient pas déjà. 
        ref.current.push(el);
    }
}

    <>
        <video ref={addToRef}>
    </> 
 
 ```

### AddEventListener avec useEffect.

Pour faire des évènements sur l'objet window ou document, on est obligé de passer par un addeventlistener.
Il faut les mettre dans le useEffect.

**NE PAS OUBLIER**  de faire une cleanUp function pour removeEventListener. 


```js

    useEffect(() => {
        window.addEventListener('resize', actionResize)
        function actionResize () {
            console.log('Resized!');
        }

        return () => {
            window.removeEventListener('resize', actionResize)
        }
    }, [])

```

# useMemo et React.memo

Si un composant a des props, et que le composant parent se met à jour, alors le composant ayant les props se mettra également à jour, même s'il ne subit aucun modification, ce qui peut entrainer des problèmes de performance. 
On peut donc utiliser la memorisation. (Attention, elle ne marche pas quand il y a des props.children)

***Il ne faut pas l'utiliser de partout. Une utilisation excessive pourrait être moins performante que de ne pas l'utiliser. Utiliser quand :***
- **fonction qui exécute beaucoup de code avec des calculs etc...**
- **modification de plusieurs valeurs dans plein de composants**


### Pour les valeurs primitives
```js
import React from 'react' // obligé pour utiliser la méthode mémo. 

function Content(props) {
    return (
        <>  
            <h1> {props.num} </h1> 
        </>
    )
}

export default React.memo(Content); // A partir de maintenant, tant que props.num ne change pas, le composant ne sera pas mis à jour. 

```


### Pour les valeurs de références

```js 
import {useMemo} from 'react';

const tableau = useMemo(() => {
    return [1,2,3,4,5];
}, []) // tableau vide, comme useEffect, se lance qu'au premier affichage du composant

return (
    <>
        <Content arr={tableau}>
    </>
)

```

### Pour les fonctions passées en props

```js
import {useCallback} from 'react'

const foo = useCallback(() => {
    console.log('hello')
}, []) // tableau vide 

```

# Hook Personnalisé 

Créer son hook personnalisé permet de le réutiliser autant de fois que l'on en a besoin.

Pour se créer un hook, créer un nouveau fichier.js commençant par 'use'.
Exemple d'un hook qui donne la dimension de notre fenêtre. useDimension.js

```js
import { useState, useEffect } from "react";

export default function useDimension () {

    const [dimension, setDimension] = useState();

    useEffect(() => {
        window.addEventListener('resize', resizeFunc);
        function resizeFunc () {
            setDimension(window.innerWidth)
        }
        resizeFunc() // on l'appelle pour avoir une valeur de base
        return () => {
            window.removeEventListener('resize', resizeFunc);
        }
    }, [])

    return dimension; 
}

```
# React Rooter

```npm install react-router-dom```

Il faut commencer par englober toute notre application d'un BrowserRouter, pour nous donner accès à toutes les fonctionnalités.

Dans index.js :
```js

import {BrowserRouter} from 'react-router-dom'

<BrowserRouter>
      <App />
</BrowserRouter>

```

Dans le composant App:

```js
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />

      </Routes>


    </div>
  );
}

export default App;


```


**Voir react-router**





# Context Api

Pour effectuer des changements globaux et peu nombreux (thème, authentification, langues).

Pour faire beaucoup de changement de state -> redux. 

**Voir le projet react-context**

# React redux 

redux peut être utilisé avec d'autres outils que react. 

```npm install redux```
```npm install react-redux```

**Voir le projet redux-playground**

Store -> Contient le state global

Action -> le "nom" de l'action que l'on va faire, mais pas l'action en elle même.
Par exemple : "INCR" pour incrémenter

Reducer -> décrit comment l'action transforme le state en un nouveau state

Dispatch -> On exécute l'action. On dispatch l'action au reducer pour pouvoir update le state.

Pour utiliser les données et les modifier: 
```js
import { useSelector, useDispatch } from 'react-redux' 
```

### MiddleWare
```js
import {applyMiddleware} from 'redux'
```
Un middleWare s'effectue quand un dispatch est en train de s'exécuter. Il va faire une action entre l'exécution du dispatch et son envoi (modifier données, appel API, etc...)


**Librairie Thunk**
MiddleWare
Permet de passer des fonctions dans notre dispatch, qui va s'exécuter de manière asynchrone. 
Dans le cas d'un appel à une API par exemple, cela évite de renvoyer un nouveau state alors que l'appel n'est pas encore fini. 
- On fait un dispatch
- Le middleWare intervient et cherche les données
- Il renvoit un nouveau dispatch qui met à jour le state

```npm install redux-thunk```
```js
import thunk from 'redux-thunk'
const rootReducer = combineReducers({
    fooReducer,
    bardReducer,
    etcReducer
})
const store = createStore(rootReducer, applyMiddleware(thunk)) 

export default store;
```



# Mettre en Ligne une application React

Dans package.json{}
```json
"homepage" : "https://domaine.com" 
```
Dans le Router
```js
<Router basename={process.env.PUBLIC_URL}>
```
 
```npm run build```




Pour les images :
- Si on a besoin de les utiliser de manière dynamique, les mettre dans le dossier public. src={process.env.PUBLIC_URL + "/monImage"}
- Si on les reçoit de notre BDD ou d'une API, cela se passera la plupart du temps depuis le dossier SRC. (import monImage from '../../assets/monImage.jpg) src="monImage"




