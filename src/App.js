import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideNavigation from "./components/slide-naigation";
import Chat from "./pages/chat"
import Home from "./pages/home"
import Setting from "./pages/setting";
import Deshboard from "./pages/deshboard";
import Exit from "./pages/exit";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
     <Router>
        <SideNavigation/>
        {/* <Setting1/> */}
        <Switch>
            <Route exact path="/" component={Deshboard} />
            <Route path="/home" component={Home}/>
            <Route path="/massage" component={Chat} />
            <Route path="/massage" component={Chat} />
            <Route path="/setting" component={Setting}/>
            <Route path="/exit" component={Exit}/>
        </Switch>
    </Router>


      
    </>
  );
}

export default App;
