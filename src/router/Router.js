import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "../components/AppBar";
import Login from "../pages/Login";
import Main from "../pages/Main";
import Register from "../pages/Register";
import NewBlog from "../pages/NewBlog";

const AppRouter = () => {
  return (
    <Router basename="react-blogpage">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/newblog" component={NewBlog} />
        
      </Switch>
    </Router>
  );
};

export default AppRouter;