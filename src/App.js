import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import {Routes,Route,Link} from 'react-router-dom'
//import School from './projects/school/pages/0homa'; import Administration from './projects/school/pages/1adminis'; import Classes from './projects/school/pages/2depart'; import Teachers from './projects/school/pages/3teachers'; import Students from './projects/school/pages/4students'; import Sports from './projects/school/pages/5acad'; import Alumini from './projects/school/pages/6alumini';
import store from './projects/school/store';
import { Provider } from 'react-redux';
import First from './projects/others/pages/0';
import YHome from './projects/youtube/pages/0homa';
import HomeA from './pages/home';
import Dash from './pages/apiLogin/dash';
import Login from './pages/apiLogin/login';
import Prefer from './pages/apiLogin/prefer';
import useToken from './pages/apiLogin/useT';
import Dashboard from './dashboard';
import Cdashboard from './pages/chrome/Cdashboard';
//done by typing

// function setToken(userToken) {
//   sessionStorage.setItem('token', JSON.stringify(userToken));
// }

// function getToken() {
//   const tokenString = sessionStorage.getItem('token');
//   const userToken = JSON.parse(tokenString);
//   return userToken?.token
// }

function App() {
  const {token, setToken} = useToken();

  // if(!token) {
  //   console.log('here1',setToken)
  //   return <Login setToken={setToken} />
  // }

  return (
    <Provider store={store}>
    <div className="App">
     <Routes>
        <Route path='/' element={<Dashboard/>} />
        <Route path='/dash' element={<Dash/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/prefer' element={<Prefer/>} />
        <Route path='/youtube' element={<YHome/>}/>
        <Route path='/general' element={<YHome/>}/>
        <Route path='/redux' element={<YHome/>}/>
        <Route path='/rstrap' element={<YHome/>}/>
        <Route path='/css' element={<YHome/>}/>
        <Route path='/hooks' element={<YHome/>}/>
        <Route path='/lifecycle' element={<YHome/>}/>
        <Route path='/output' element={<YHome/>}/>
        <Route path='/chrome' element={<Cdashboard/>}/>
     </Routes>
   
    </div>
    </Provider>
  );
}

export default App;
