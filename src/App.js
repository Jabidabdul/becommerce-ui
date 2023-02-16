import "./App.css";
import NavFooter from "./Components/NavFooter";
import { LoginProvider } from "./ContextApi/LoginContext";
import RoutePages from "./RoutePages";
import Footer from "./Views/Footer";
import Header from "./Views/Header";
import Demo from "./Components/joyin-components/demo";

function App() {
  return (
    <div className="App">
      <LoginProvider>
        <Header />
        <Demo />
        {/* <RoutePages /> */}
        <Footer />
      </LoginProvider>
    </div>
  );
}

export default App;
