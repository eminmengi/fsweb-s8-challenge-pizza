import React from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import '../styles/Home.css';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

export default function Home() {
  const history = useHistory();

  const handleClick = () => history.push('/pizza');

  return (
    <div className="home-page">
    
    <div className="background">
      <div className="home-text">
        <div className="logo-homebanner">
          <img src="/images/iteration-1-images/logo.svg" alt="Teknolojik Yemekler Logosu" />
          <p> </p>
        </div>
        <p className="subtitle">fırsatı kaçırma</p>
        <p>KOD ACIKTIRIR</p>
        <p>PİZZA, DOYURUR</p>
        
        <button onClick={handleClick}>
          ACIKTIM
        </button>
      </div>
    </div>
    <div className="menu-row">
        <header>
          <nav className="menus">
            <ul>
              <img src="/images/iteration-2-images/icons/1.svg"/>
              <li>YENİ! Kore</li>
              <img src="/images/iteration-2-images/icons/2.svg"/>
              <li>Pizza</li>
              <img src="/images/iteration-2-images/icons/3.svg"/>
              <li>Burger</li>
              <img src="/images/iteration-2-images/icons/4.svg"/>
              <li>Kızartmalar</li>
              <img src="/images/iteration-2-images/icons/5.svg"/>
              <li>Fast food</li>
              <img src="/images/iteration-2-images/icons/6.svg"/>
              <li>Gazlı İçecek</li>
            </ul>
          </nav>
        </header>
        <main className="menu-main">
          <section className="menu-main">
            <div className="featured">
              <div className="special-offer-first">
                <img src="/images/iteration-2-images/cta/kart-1.png" />
                <h2>Özel Lezzetus</h2>
                <p>Position: Absolute Acı Burger</p>
                <button>SİPARİŞ VER</button>
              </div>
              <div className="special-offer-second">
                <div className="hackathon-menu">
                  <img src="/images/iteration-2-images/cta/kart-2.png" />
                  <p>Hackathon Burger Menüsü</p>
                  <button>SİPARİŞ VER</button>
                </div>
                <div className="fast-delivery">
                  <img src="/images/iteration-2-images/cta/kart-3.png" />
                  <p>
                    <span className="red-color">Çoooooook</span>
                     "hızlı npm gibi kurye"
                  </p>
                  <button>SİPARİŞ VER</button>
                </div>
              </div>
            </div>
          </section>
          <section className="popular-menus">
            <div className="popular-menus-text">
              <p>En çok paketlenen menüler</p>
              <h2>Acıktıran Kodlara Doyuran Lezzetler</h2>
            </div>
            <div className="header-menu-second">
              <nav className="menus">
                <ul>
                  <li>
                    <img src="/images/iteration-2-images/icons/1.svg" />
                    "Ramen"
                  </li>
                  <li>
                    <img src="/images/iteration-2-images/icons/2.svg" />
                    "pizza"
                  </li>
                  <li>
                    <img src="/images/iteration-2-images/icons/3.svg" />
                    "Burger"
                  </li>
                  <li>
                    <img src="/images/iteration-2-images/icons/4.svg" />
                    "Kızartmalar"
                  </li>
                  <li>
                    <img src="/images/iteration-2-images/icons/5.svg" />
                    "Fast food"
                  </li>
                  <li>
                    <img src="/images/iteration-2-images/icons/6.svg" />
                    "Gazlı İçecek"
                  </li>
                </ul>
              </nav>
            </div>
            <div className="menu-items">
              <div className="menu-item">
                <img src="/images/iteration-2-images/pictures/food-1.png" />
                <h3>Terminal Pizza</h3>
                <div className="menu-item-priceinfo">
                  <p>4.9</p>
                  <p>(200)</p>
                  <div className="menu-item-priceinfo-price">
                    <p>60₺</p>
                  </div>
                </div>
              </div>
              <div className="menu-item">
                <img src="/images/iteration-2-images/pictures/food-2.png" />
                <h3>Position Absolute Acı Pizza</h3>
                <div className="menu-item-priceinfo">
                  <p>4.9</p>
                  <p>(200)</p>
                </div>
              </div>
              <div className="menu-item">
                <img src="/images/iteration-2-images/pictures/food-3.png"/>
                <h3>useEffect Tavuklu Burger</h3>
                <div className="menu-item-priceinfo">
                  <p>4.9</p>
                  <p>(200)</p>
                  <div className="menu-item-priceinfo-price">
                    <p>60₺</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </div>

  );
}