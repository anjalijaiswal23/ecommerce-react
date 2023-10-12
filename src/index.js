import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Addtocart from './components/Addtocart';
import Description from './components/Description';
import Footer from './components/Footer';
import Header from './components/Header';
import Heading from './components/heading';
import Login from './components/Login';


function RootComponent() {
  return (
    <>

    <Router>
    <Header/>

      <Routes>
      <Route path="/login" element={ <Login/>} />
        <Route path="/" element={<Heading/>} />

        <Route path="/description/:id" element={<Description/>} />
        <Route path="/addtocart" element={<Addtocart/>} />
      </Routes>

    </Router>
    <Footer/>
    </>
  );
}

ReactDOM.render(<RootComponent />, document.getElementById('root'));
