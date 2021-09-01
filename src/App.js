import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import LoginView from "./components/login-layout/LoginView";
import Topbar from "./components/navbar/Topbar";
import UsersPage from "./pages/users/UsersPage";
import NotFound from "./pages/not-found/NotFound";
import HomePage from "./pages/home/HomePage";
import React from "react";
import UserPage from "./pages/users/UserPage";

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
          <Topbar />
          <HomePage />
        </Route>
        <Route path="/users">
          <Topbar />
          <UsersPage />
        </Route>
        <Route exact path="/user/:id">
          <Topbar />
          <UserPage />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
