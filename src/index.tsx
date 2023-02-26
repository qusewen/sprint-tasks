
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import { HashRouter, Route, Routes } from 'react-router-dom';
import {store} from './redux/store'
import { MainPage } from './pages/main';
import { BookPage } from './pages/book';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Treaty } from './pages/treaty/treaty';
import { Rules } from './pages/rules/rules';
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <>
    <HashRouter>
    <Provider store={store}>
    <Header/>
      <Routes>
      <Route  path='/'  element={<MainPage />} />
        <Route  path='/all'  element={<MainPage />} />
        <Route  path='/books/:categoria'  element={<MainPage />} />
        <Route path='/books/all/:id' element={<BookPage/>} />
        <Route path='/books/:categories/:id' element={<BookPage/>} />
        <Route path='/rules' element={<Rules/>} />
        <Route path='/treaty' element={<Treaty/>} />
      </Routes>
      </Provider>
    </HashRouter>
    <Footer/>
  </>
);
