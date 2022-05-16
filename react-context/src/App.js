import './App.css';
import Content from './Components/Content/Content'
import ThemeContextProvider from './Context/ThemeContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider> 
        {/* Content aura accès au State de ThemeContextProvider */}
        <Content />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
