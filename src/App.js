import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage, Navbar, Checkout, SearchResults, ProductPage, CheckoutSuccess, RegisterPage,LoginPage } from './components'

const App = () => {
    return (
        <BrowserRouter>
        <Navbar />
            <Routes>
                <Route path='/' element={<HomePage />}/>
                <Route path='/search' element={<SearchResults />}/>
                <Route path='/product/:id' element={<ProductPage />}/>
                <Route path='/checkout' element={<Checkout />}/>
                <Route path='/register' element={<RegisterPage />}/>
                <Route path='/login' element={<LoginPage />}/>
                <Route path='/checkout/success' element={<CheckoutSuccess />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App