import "./App.css";
import { Route, Redirect, Switch } from "react-router-dom";
import LoginView from "./components/login-layout/LoginView";
import Navbar from "./components/navbar/Navbar";
import NotFound from "./pages/not-found/NotFound";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/login"></Redirect>
        </Route>
        <Route path="/login">
          <LoginView />
        </Route>
        <Route path="/welcome">
          <Navbar />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
