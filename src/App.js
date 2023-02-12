import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import SplashScreen from './pages/SplashScreen/SplashScreen';
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';
import UserHome from './pages/UserInterface/UserHome'

const Routing =()=>{
  return (
      <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="/UserHome/:id" element={<UserHome />}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

function App() {
  return (
    <div className="App">
      <Routing />
    </div>
  );
}

export default App;
