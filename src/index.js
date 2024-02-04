import React from 'react';
import { createRoot } from 'react-dom/client';

function App(){
    return (
    <div>
        <Header/>
        <Pizza/>
        <Pizza/>
        <Pizza/>
        <Footer/>
    </div>
    );
}

function Header(){
    return <h1> Fast React Pizza Co.</h1>;
};

function Menu(){
    return <h2>Our Menu</h2>
};

function Footer(){
    return <footer>{new Date().toLocaleTimeString()} We're currently open!</footer>
};

function Pizza(){
    return <h2>Pizza</h2>
};

const root = createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);