import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Header, Footer, Sidebar } from "./components/admin";
import GeneralDashboard from "./pages/Dashboard/GeneralDashboard";
import DefaultLayoutPage from "./pages/Strater/DefaultLayoutPage";
import Login from "./pages/Pages/Auth/Login";
import Admins from "./pages/Components/Admins";


function App() {

  return (
    <div className="App">
      <>
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={GeneralDashboard} />
          <Route path='/admins' component={Admins}/>
          <Route path="/layout/default" component={DefaultLayoutPage} />

        <Footer />
      </>
    </div>
  );
}

export default App;
