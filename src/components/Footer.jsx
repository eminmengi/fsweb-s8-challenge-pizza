import React from "react";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Left column */}
        <div className="footer-column footer-left">
          <img
            src="/images/iteration-2-images/footer/logo-footer.svg"
            alt="Teknolojik Yemekler logo"
            className="footer-logo"
          />
          <ul className="footer-contact">
            <li>
              <img
                src="/images/iteration-2-images/footer/icons/icon-1.png"
                alt="address icon"
              />
              <span> 341 Londonderry Road,<br />Istanbul Türkiye</span>
            </li>
            <li>
              <img
                src="/images/iteration-2-images/footer/icons/icon-2.png"
                alt="email icon"
              />
              <span> aidanbir@teknolojikyemekler.com</span>
            </li>
            <li>
              <img
                src="/images/iteration-2-images/footer/icons/icon-3.png"
                alt="phone icon"
              />
              <span> +90 216 123 45 67</span>
            </li>
          </ul>
        </div>

        {/* Middle column */}
        <div className="footer-column footer-menu">
          <h4>Hot Menu</h4>
          <ul>
            <li>Terminal Pizza</li>
            <li>5 Kişilik Hackathon Pizza</li>
            <li>useEffect Tavuklu Pizza</li>
            <li>Bayer Console Frosty</li>
            <li>Tester Özel Popup Burger</li>
            <li>Position Absolute Acı Burger</li>
          </ul>
        </div>

        {/* Right column */}
        <div className="footer-column footer-insta">
          <h4>Instagram</h4>
          <ul className="insta-grid">
            {Array.from({ length: 6 }).map((_, i) => (
              <li key={i}>
                <img
                  src={`/images/iteration-2-images/footer/insta/li-${i}.png`}
                  alt={`Instagram ${i + 1}`}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bar">
        <p>© 2023 Teknolojik Yemekler.</p>
        <img
          src="/images/iteration-2-images/icons/x.png"
          alt="Twitter icon"
          className="footer-social"
        />
      </div>
    </footer>
  );
}
