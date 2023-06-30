import {React,useContext} from 'react';
import Todo from './Components/Todo';
import Header from './Components/Header';
import Footer from './Components/Footer';
import SettingsPage from './Components/Settings/SettingsPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SettingsContext } from './Context/Settings';
import { AuthContext } from './Context/Auth';
import { When } from 'react-if';

export default function App() {
const { isLoggedIn, can } = useContext(AuthContext);
const { list } = useContext(SettingsContext);

  return (

    <BrowserRouter>
      <Header />
      <When condition={isLoggedIn && can('read')}>
      <Routes>
        <Route path="/" element={<Todo />}list={list} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
      </When>
      <Footer />
    </BrowserRouter>



  );
}






