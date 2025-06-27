import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/OrderPizza.css';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import formBanner from '../../images/iteration-2-images/pictures/form-banner.png';

export default function OrderPizza() {
  const history = useHistory();

  const basePrice = 85.5; // ₺
  const toppingPrice = 5; // ₺ per topping

  const [form, setForm] = useState({
    name: '',
    size: '',
    dough: '',
    toppings: [],
    note: '',
  });
  const [quantity, setQuantity] = useState(1);

  const sizes = [
    { label: 'S', value: 'Küçük' },
    { label: 'M', value: 'Orta' },
    { label: 'L', value: 'Büyük' },
  ];

  const doughOptions = ['İnce', 'Normal', 'Kalın'];

  const toppingsList = [
    'Pepperoni',
    'Sosis',
    'Kanada Jambonu',
    'Tavuk Izgara',
    'Soğan',
    'Domates',
    'Mısır',
    'Jalapeno',
    'Sarımsak',
    'Biber',
    'Sucuk',
    'Ananas',
    'Kabak',
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setForm((prev) => {
        const newToppings = checked
          ? [...prev.toppings, value]
          : prev.toppings.filter((t) => t !== value);
        return { ...prev, toppings: newToppings };
      });
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const orderDetails = {
      pizzaName: 'Position Absolute Acı Pizza',
      size: form.size,
      dough: form.dough,
      toppings: form.toppings,
      toppingsPrice: extrasCost,
      total: total,
      quantity: quantity
    };
    
    history.push({
      pathname: '/success',
      state: { order: orderDetails }
    });
  };

  const incQty = () => setQuantity((q) => q + 1);
  const decQty = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  const extrasCost = form.toppings.length * toppingPrice;
  const total = (basePrice + extrasCost) * quantity;

  return (
    <div className="order-page">
      <Header />

      {/* HEADER ROW */}
      <div className="header-row">
        <img src={formBanner} alt="pizza" />
        <nav>
          <ul className="nav-list">
            <li>
              <a href="/">Anasayfa - </a>
            </li>
            <li>
              <a>Seçenekler - </a>
            </li>
              <li>
                <a href="/pizza">Sipariş Oluştur</a>
            </li>
          </ul>
        </nav>
        <div className="pizza">
          <h2>Position Absolute Acı Pizza</h2>
          <div className="pizza-details">
            <div className="price-rating">
              <p className="price">85.50₺</p>
              <div className="rating">
                <p>4.9</p>
                <p>(200)</p>
              </div>
            </div>
            <p className="description">
              Frontend Dev olarak hala position : absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza,
              domates, peynir ve genellikle çeşitli diğer malzemeler ile kaplanmış, daha sonra geleneksel
              olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş
              mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir.. Küçük bir pizzaya bazen pizzeta denir.
            </p>
          </div>
        </div>   
      </div>
      
      {/* FORM */}
      <div className="pizza-form">
      <form onSubmit={handleSubmit}>
        {/* SIZE & DOUGH */}
        <div className="selection-row">
          <label>
            <h4>Boyut Seç</h4>
            <div className="options-column">
              {sizes.map((s) => (
                <label key={s.value} className="size-option">
                  <input
                    type="radio"
                    name="size"
                    value={s.value}
                    checked={form.size === s.value}
                    onChange={handleChange}
                    required
                  />
                  <span>{s.label}</span>
                </label>
              ))}
            </div>
          </label>
          
          <label>
            <div className="select-row">
              <h4>Hamur Seç  </h4>
              <select
                name="dough"
                value={form.dough}
                onChange={handleChange}
                required
              >
                <option value="">--Hamur Kalınlığı--</option>
                <option value="İnce">İnce</option>
                <option value="Kalın">Kalın</option>
              </select>
            </div>
          </label>
        </div>

        {/* TOPPINGS */}
        <div className="toppings-section">
          <h4>Ek Malzemeler</h4>
          <p className="option-number">En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
          <div className="toppings-grid">
            {toppingsList.map((t) => (
              <label key={t} className="topping-option">
                {t}
                <input
                  type="checkbox"
                  name="toppings"
                  value={t}
                  checked={form.toppings.includes(t)}
                  onChange={handleChange}
                  disabled={!form.toppings.includes(t) && form.toppings.length >= 10}
                />
                <span className="checkmark" />
              </label>
            ))}
          </div>
        </div>

        {/* NOTE */}
        <div className="user-name">
          <h4>İsim</h4>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="İsminiz Nedir?"
          />
        </div>
        <div className="note-row">
          <h4 className="optional">Sipariş Notu</h4>
          <textarea
            name="note"
            value={form.note}
            onChange={handleChange}
            placeholder="Siparişine eklemek istediğin bir not var mı?"
          />
          <hr />
        </div>

        {/* ORDER ROW */}
        <div className="order">
          <div className="quantity-control">
            <button type="button" onClick={decQty}>-</button>
            <span>{quantity}</span>
            <button type="button" onClick={incQty}>+</button>
          </div>

          <div className="order-summary">
            <div className="order-summary-info">
              <div className='order-total'>
                <p>Sipariş Toplamı</p>
                </div>  
              <div className="user-selection">
                <p>Seçimler</p>
                <p className="user-amount">{extrasCost.toFixed(2)}₺</p>
              </div>
              <div className="user-selection">
                <p>Toplam</p>
                <p className="user-amount">{total.toFixed(2)}₺</p>
              </div>
            </div>
            <button type="submit" className="order-button">
              SİPARİŞ VER
            </button>
          </div>
        </div>
      </form>
      </div>
    <Footer />
    </div>
  );

}