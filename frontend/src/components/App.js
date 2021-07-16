import "./App.scss";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Instructors from "./Instructors/Instructors";
import LoginComponent from "./LandingLoginComponent/LoginComponent.js";
import Footer from "./Footer/Footer";
import Signup from "../components/Signup/Signup"
import AllCourses from './Courses/courses'
import MyProfile from './MyProfile/MyProfile'
import CourseDetails from './CourseDetails/CourseDetails'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MainRouter from './MainRouter'
import Login from './LandingLoginComponent/LoginComponent'


function App() {
  return (
    <Router>
      <div>
        {/* <Header />
        <Main />
        <Instructors />
        <LoginComponent />
        <Signup />
        <Footer /> */}
        {/* <Login />
        <Signup /> */}
        <MainRouter></MainRouter>  
        {/* <Login></Login> */}
        
      </div>
    </Router>

  );
}

export default App;
