import "./App.css";
import NavFooter from "./Components/NavFooter";
import { LoginProvider } from "./ContextApi/LoginContext";
import RoutePages from "./RoutePages";
import Footer from "./Views/Footer";
import Header from "./Views/Header";
import Demo from "./Components/joyin-components/demo";
import TableComponent from "./Components/joyin-components/DataInTableFormat";
import Responsive from "./Components/joyin-components/responsive-page"

function App() {
  return (
    <div className="App">
      <LoginProvider>
        <Header />
        {/* <TableComponent/> */}
        <Responsive/>
        {/* <Demo /> */}
        {/* <RoutePages /> */}
        <Footer />
      </LoginProvider>
    </div>
  );
}

export default App;
