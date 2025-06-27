import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import "../styles/Success.css";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";

// Default order data in case of direct access to /success
const defaultOrder = {
  pizzaName: "Position Absolute Acı Pizza",
  size: "",
  dough: "",
  toppings: [],
  toppingsPrice: 0,
  total: 0,
  quantity: 1
};

export default function Success() {
  const location = useLocation();
  const [order, setOrder] = useState(defaultOrder);

  useEffect(() => {
    // Get order data from location state if available
    if (location.state?.order) {
      setOrder(location.state.order);
    }
  }, [location]);

  return (
    <div className="success-page">
      <Header />

      <main className="success">
        <div className="success-content">
          <p className="subtitle">lezzetin yolda</p>
          <h1>SİPARİŞ ALINDI</h1>
          <div className="divider"></div>
          
          <div className="order-details">
            <h2>{order.pizzaName}</h2>
            {order.size && <p>Boyut: {order.size}</p>}
            {order.dough && <p>Hamur: {order.dough}</p>}
            {order.toppings?.length > 0 && (
              <p>Ek Malzemeler: {order.toppings.join(", ")}</p>
            )}
          </div>

          <div className="suc-order-summary">
            <h3>Sipariş Toplamı</h3>
            <div className="summary-row">
              <span>Seçimler</span>
              <span>{order.toppingsPrice?.toFixed(2) || '0.00'}₺</span>
            </div>
            <div className="summary-row total">
              <span>Toplam</span>
              <span>{order.total?.toFixed(2) || '0.00'}₺</span>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}