import React from 'react';
import profil from './assets/img/profil.png'

export default class Header extends React.Component{
    render() {
        return (
            <header className="header">
                <h1>KurzGedanke</h1>
                <img className="responsive-image" src={profil} alt=""/>
            </header>
        )
    }
}