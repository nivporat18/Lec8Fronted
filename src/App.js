import './App.css';
import UserSignUpPage from './Pages/UserSignUpPage'
import * as apiCalls from './Api/apiCalls'
import {LoginPage} from './Pages/LoginPage'
import {BrowserRouter,Navigate,Route,Routes} from 'react-router-dom'
import MainHeader from './Components/MainHeader';
import HomePage from "./Pages/HomePage"
import OtherPage from "./Pages/OtherPage"



function App() {

  const actions = {
    postSignUp: apiCalls.signUp,
    postLogin: apiCalls.login
  }

  return (
    <BrowserRouter>
    <MainHeader/>
 
  <Routes>

    <Route path ="/"  element ={<HomePage/>}/>
    <Route path ="/other"  element ={<OtherPage/>}/>
    <Route path ="/login"  element ={<LoginPage actions ={actions}/>}/>
    <Route path ="/signup"  element ={<UserSignUpPage actions ={actions} />}/>


<Route path="/" element ={<Navigate replace to={"/home"}/>}/>
  </Routes>
    </BrowserRouter>



  );
}

export default App;
