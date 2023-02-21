import "./App.css";
import NavFooter from "./Components/NavFooter";
import { LoginProvider } from "./ContextApi/LoginContext";
import RoutePages from "./RoutePages";
import Footer from "./Views/Footer";
import Header from "./Views/Header";
import Demo from "./Components/joyin-components/demo";
import TableComponent from "./Components/joyin-components/DataInTableFormat";
import Component1 from "./mumin/UserContext";
import FetchDataTable from "./Components/habib-component/project02/FetchDataTable";
import FetchData from "./Components/habib-component/project01/FetchData";

function App() {
  return (
    <div className="App">
      <LoginProvider>
        <Header />
        {/* <TableComponent/> */}
        {/* <Component1 /> */}
        {/* <FetchDataTable /> */}
        <FetchData />
        {/* <Demo /> */}
        {/* <RoutePages /> */}
        {/* <Footer /> */}
      </LoginProvider>
    </div>
  );
}

export default App;
