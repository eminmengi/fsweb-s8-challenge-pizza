import React from "react";
import "../styles/Success.css";

export default function Success() {
    
    return (
        <div className="success-page">
      <header>
        <img
          src="/images/iteration-1-images/logo.svg"
          alt="Teknolojik Yemekler Logo"
          className="home-logo"
        />
      </header>

      <main className="success">
        <h1>
          TEBRİKLER!
          <br />
          SİPARİŞİNİZ ALINDI!
        </h1>
      </main>
    </div>
    )
}