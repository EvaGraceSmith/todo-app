import React from 'react';
import Todo from './Components/Todo';
import Header from './Components/Header';
import Footer from './Components/Footer';
// import SettingsForm from './Components/SettingsForm';
import SettingsPage from './Components/Settings/SettingsPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import {HeaderSimple} from './Components/Header/index';


export default function App() {
  return (

    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>



  );
}




