import {React,useContext} from 'react';
import Todo from './Components/Todo';
import Header from './Components/Header';
import Footer from './Components/Footer';
import SettingsPage from './Components/Settings/SettingsPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SettingsContext } from './Context/Settings';
import Auth from './Components/Auth';

export default function App() {
  const { title, email } = useContext(SettingsContext);
  return (

    <BrowserRouter>
      <Header />
      <Auth capability="read">
        <p>I can read!</p>
      </Auth>
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>



  );
}




