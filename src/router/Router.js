import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthProvider from '../context/AuthContext';
import PrivateRoute from "./PrivateRouter";
import Navbar from "../components/AppBar";
import Login from "../pages/Login";
import Main from "../pages/Main";
import Register from "../pages/Register";
import NewBlog from "../pages/NewBlog";
import Profile from "../pages/Profile";

const AppRouter = () => {
  return (
    <Router> 
      <AuthProvider>
        <Switch>
          <PrivateRoute path="/newblog" component={NewBlog} />
          <PrivateRoute path="/profile" component={Profile} />
          <Route exact path="/" component={Main} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </AuthProvider>
    </Router>
  );
};

export default AppRouter;