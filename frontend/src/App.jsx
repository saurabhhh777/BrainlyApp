import React from 'react'
import {BrowserRouter,Routes,Route, Links} from "react-router-dom";
import Home from "./components/Home.jsx";
import Videos from './components/Videos.jsx';
import Tweets from './components/Tweets.jsx';
import Documents from './components/Documents.jsx';
import Links from './components/Links.jsx';
import Tags from './components/Tags.jsx';
import Signin from './components/Signin.jsx';
import Signup from './components/Signup.jsx';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/tweets" element={<Tweets/>}/>
          <Route path="/videos" element={<Videos/>}/>
          <Route path="/documents" element={<Documents/>}/>
          <Route path="/links" element={<Links/>}/>
          <Route path="/tags" element={<Tags/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/signin" element={<Signin/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App