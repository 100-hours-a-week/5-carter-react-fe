// import logo from "./logo.svg";
import "./App.css";
import "./styles/style.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Posts from "./Pages/Posts";
import PostDetail from "./Pages/PostDetail";
import PostEdit from "./Pages/PostEdit";
import PostCreate from "./Pages/PostCreate";
import UserEditProfile from "./Pages/UserEditProfile";
import UserEditPassword from "./Pages/UserEditPassword";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact Component={Login} />
        <Route path="/signup" Component={Signup} />
        <Route path="/post/list" Component={Posts} />
        <Route path="/post/detail" Component={PostDetail} />
        <Route path="/post/edit" Component={PostEdit} />
        <Route path="/post/create" Component={PostCreate} />
        <Route path="/user/edit/profile" Component={UserEditProfile} />
        <Route path="/user/edit/password" Component={UserEditPassword} />
      </Routes>
    </Router>
  );
}

export default App;
