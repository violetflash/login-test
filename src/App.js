import { Redirect, Route, Switch } from "react-router-dom";
import { Login, Profile, NotFound } from "./pages";

function App() {

  return (
    <>
      <Switch>
        <Route path="/" component={Login} exact/>
        <Route path="/profile" component={Profile}/>
        <Route path="/page-404" component={NotFound}/>
        <Redirect to="/page-404" exact/>
      </Switch>
    </>
  );
}

export default App;
