import React, {createContext, useState} from 'react'; // createContext

export const ThemeContext = createContext();  // Initialisation du contexte

// Il faut ensuite créer un composant avec du state à l'intérieur. 

const ThemeContextProvider = props => { // on met props pour avoir accès à props.children. On englobe toute l'application avec notre contexte, et on affichera les enfants.
    //Création du state 
    const [theme, setTheme] = useState(false) // données partagées dans toute l'application 
    
    const toggleTheme = () => {
        setTheme(!theme);
    }

    if (theme){
        document.body.classList.add('dark-body')
    } else {
        document.body.classList.remove('dark-body')
    }

    return (
        <ThemeContext.Provider value={{toggleTheme, theme}}>
            {props.children}
        </ThemeContext.Provider>

        // .Provider vient de l'objet ThemeContext créé par 'createContext()'
        // Il permet d'apporter les données que l'on veut partager avec l'application. 
        // Ici les données sont les props que l'on passe (value)
    )
};

export default ThemeContextProvider;