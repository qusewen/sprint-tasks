
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
  <React.StrictMode>
    <HashRouter>
    <Provider store={store}>
    <Header/>
      <Routes>
        <Route  path='/'  element={<MainPage />} />
        <Route path='/bookpage/:id' element={<BookPage/>} />
        <Route path='/books' element={<MainPage />} />
        <Route path='/books/business' element={<MainPage />} />
        <Route path='/books/detective' element={<MainPage />} />
        <Route path='/books/children' element={<MainPage />} />
        <Route path='/books/abroad' element={<MainPage />} />
        <Route path='/books/history' element={<MainPage />} />
        <Route path='/books/classic' element={<MainPage />} />
        <Route path='/books/psychology' element={<MainPage />} />
        <Route path='/books/computer' element={<MainPage />} />
        <Route path='/books/art' element={<MainPage />} />
        <Route path='/books/science' element={<MainPage />} />
        <Route path='/books/journalistic' element={<MainPage />} />
        <Route path='/books/directory' element={<MainPage />} />
        <Route path='/books/fantasy' element={<MainPage />} />
        <Route path='/books/humor' element={<MainPage />} />
        <Route path='/books' element={<MainPage />} />
        <Route path='/rules' element={<Rules/>} />
        <Route path='/treaty' element={<Treaty/>} />
      </Routes>
      </Provider>
    </HashRouter>
    <Footer/>
  </React.StrictMode>
);
