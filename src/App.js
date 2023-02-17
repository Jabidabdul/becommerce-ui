import "./App.css";
import NavFooter from "./Components/NavFooter";
import { LoginProvider } from "./ContextApi/LoginContext";
import RoutePages from "./RoutePages";
import Footer from "./Views/Footer";
import Header from "./Views/Header";
import Demo from "./Components/joyin-components/demo";
import FetchDataTable from "./Components/habib-component/project02/FetchDataTable";

function App() {
  return (
    <div className="App">
      <LoginProvider>
        <Header />
        {/* <Demo /> */}
        {/* <RoutePages /> */}
        <FetchDataTable />
        <Footer />
      </LoginProvider>
    </div>
  );
}

export default App;
