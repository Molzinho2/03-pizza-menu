import React from 'react';
import { createRoot } from 'react-dom/client';
import { pizzaData } from './data';
import "./index.css"

function App(){
    return (
    <div className='container'>
        <Header/>
        <Menu/>
        <Footer/>
    </div>
    );
}

function Header(){
    const style = {};

    return (
        <header className='header'>
                <h1 style={style}> Fast React Pizza Co.</h1>;
        </header>
)};

function Menu(){
    return (
    <main className='menu'>
        <h2>Our Menu</h2>
        <Pizza name={pizzaData[2].name} ingredient={pizzaData[2].ingredients} price={12} photoname='pizzas/spinaci.jpg' />
        <Pizza name={pizzaData[0].name} ingredient={pizzaData[0].ingredients} price={10} photoname='pizzas/focaccia.jpg' />
        <Pizza name={pizzaData[1].name} ingredient={pizzaData[1].ingredients} price={15} photoname='pizzas/margherita.jpg' />
        <Pizza name={pizzaData[3].name} ingredient={pizzaData[3].ingredients} price={20} photoname='pizzas/funghi.jpg' />
    </main>
)};

function Footer(){
    return <footer className='footer'>{new Date().toLocaleTimeString()} We're currently open!</footer>
};

function Pizza(props){
    return (
    <div className='pizza'>
        <img src={props.photoname}  alt={props.name}/>
        <div>
            <h3>{props.name}</h3>
            <p>{props.ingredient}</p>
            <span>{props.price}</span>
        </div>
    </div>
)};

const root = createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);