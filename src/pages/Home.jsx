import React from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import '../styles/Home.css';

export default function Home() {
  const history = useHistory();

  const handleClick = () => history.push('/pizza');

  return (
    <div className="home-page">
      <header>
        <img
          src="/images/iteration-1-images/logo.svg"
          alt="Teknolojik Yemekler Logo"
          className="home-logo"
        />
      </header>

      <main className="hero">
        <h1>
          KOD ACIKTIRIR
          <br />
          PİZZA, DOYURUR
        </h1>
        <button onClick={handleClick}>
          ACIKTIM
        </button>
      </main>
    </div>
  );
}