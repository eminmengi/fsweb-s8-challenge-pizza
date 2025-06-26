import React from 'react';
import '../styles/Header.css';

export default function Header() {
    return (
        <header className="header">
            <div className="header-content">
                <img src="/images/iteration-1-images/logo.svg" alt="Teknolojik Yemekler Logo" className="order-logo" />
            </div>
        </header>
    );
}