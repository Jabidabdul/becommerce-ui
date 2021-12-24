import './App.css';
import { LoginProvider } from './ContextApi/LoginContext';
import RoutePages from './RoutePages';
import Footer from './Views/Footer';
import Header from './Views/Header';


function App() {
  return (
    <div className="App" style={{height:'100%'}}>
      <LoginProvider>
        <Header />
        <RoutePages />
        <Footer /> 
      </LoginProvider>
      
    </div>
  );
}

export default App;
