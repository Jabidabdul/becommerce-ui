import './App.css';
import NavFooter from './Components/NavFooter';
import { LoginProvider } from './ContextApi/LoginContext';
import RoutePages from './RoutePages';
import Footer from './Views/Footer';
import Header from './Views/Header';
import Table from './mumin/table'

function App() {
  return (
    <div className="App">
      <LoginProvider>
        <Header />
        {/* <RoutePages /> */}
        <Table/>
        <Footer /> 
      </LoginProvider>
      
    </div>
  );
}

export default App;
