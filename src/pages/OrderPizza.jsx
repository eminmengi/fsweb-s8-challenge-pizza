import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import "../styles/OrderPizza.css";

// Sabit listeler
const SIZES = ["Küçük", "Orta", "Büyük"];
const TOPPINGS = [
  "Pepperoni",
  "Sosis",
  "Kanada Jambonu",
  "Tavuk",
  "Soğan",
  "Domates",
  "Mantar",
  "Sucuk",
  "Jalapeno",
  "Sarımsak",
];

const BASE_PRICE = 85.5;

export default function OrderPizza() {
  const history = useHistory();

  // Form state
  const [form, setForm] = useState({
    name: "",
    size: "",
    dough: "",
    toppings: [],
    note: "",
    quantity: 1,
  });

  // Error state
  const [errors, setErrors] = useState({});

  // Submit disabled?
  const [isDisabled, setIsDisabled] = useState(true);

  // Validation rules
  useEffect(() => {
    const newErrors = {};

    if (form.name.trim().length < 3) newErrors.name = "İsim en az 3 karakter olmalı";
    if (!form.size) newErrors.size = "Lütfen boyut seçin";
    if (!form.dough) newErrors.dough = "Lütfen hamur tipini seçin";
    if (form.toppings.length < 4 || form.toppings.length > 10)
      newErrors.toppings = "En az 4, en fazla 10 malzeme seçin";

    setErrors(newErrors);
    setIsDisabled(Object.keys(newErrors).length !== 0);
  }, [form]);

  // Derived values
  const extrasPrice = form.toppings.length * 5;
  const lineTotal = (BASE_PRICE + extrasPrice) * form.quantity;

  // Handlers
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleToppingChange = (e) => {
    const { value, checked } = e.target;
    let updated = [...form.toppings];
    if (checked) {
      updated.push(value);
    } else {
      updated = updated.filter((t) => t !== value);
    }
    setForm({ ...form, toppings: updated });
  };

  const handleQuantity = (delta) => {
    setForm((prev) => ({ ...prev, quantity: Math.max(1, prev.quantity + delta) }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isDisabled) return;

    axios.post(
      "https://reqres.in/api/pizza",
      form,
      {
        headers: {
          "x-api-key": "reqres-free-v1",
        },
      }
    )
      .then((res) => {
        console.log("Sipariş kaydedildi:", res.data);
        history.push("/success", res.data);
      })
      .catch((err) => {
        console.error("Sipariş başarısız:", err);
        alert("Sipariş gönderilirken bir hata oluştu. Lütfen tekrar deneyin.");
      });
  };

  return (
    <div className="order-page">

      <header className="order-header">
        <div className="header-inner">
          <img src="/images/iteration-1-images/logo.svg" alt="Teknolojik Yemekler Logo" className="order-logo" />
          <nav>
            <span>Anasayfa - </span>
            <span>Seçenekler - </span>
            <span className="current">Sipariş Oluştur</span>
          </nav>
        </div>
      </header>

      <div className="order-container">
      

      <h2 className="pizza-title">Position Absolute Acı Pizza</h2>
      <div className="price-line">
        <span className="price">{BASE_PRICE.toFixed(2)}₺</span>
      </div>
      <p className="description">Frontend Dev olarak hâlâ position:absolute kullanıyorsan bu çok acı pizza tam <br />sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle<br />kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek<br />sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı<br />hamurdan oluşan İtalyan kökenli lezzetli bir yemktir..Küçük bir pizzaya<br />bazen pizzeta denir.</p>

      <form className="pizza-form" onSubmit={handleSubmit}>


        <div className="options-row">
        <section className="section option-block">
          <p>Boyut Seç *</p>
          {SIZES.map((s) => (
            <label key={s} className="radio">
              <input
                type="radio"
                name="size"
                value={s}
                checked={form.size === s}
                onChange={handleChange}
              />
              {s}
            </label>
          ))}
          {errors.size && <span className="error">{errors.size}</span>}
        </section>

        <section className="section">
          <label>
            Hamur Seç *
            <select name="dough" value={form.dough} onChange={handleChange}>
              <option value="">Hamur Kalınlığı</option>
              <option value="İnce">İnce</option>
              <option value="Normal">Normal</option>
              <option value="Kalın">Kalın</option>
            </select>
          </label>
          {errors.dough && <span className="error">{errors.dough}</span>}
        </section>
        </div>

        <section className="section">
          <p>Ek Malzemeler (4-10) *</p>
          <div className="toppings-grid">
            {TOPPINGS.map((t) => (
              <label key={t} className="checkbox">
                <input
                  type="checkbox"
                  value={t}
                  checked={form.toppings.includes(t)}
                  onChange={handleToppingChange}
                />
                {t}
              </label>
            ))}
          </div>
          {errors.toppings && <span className="error">{errors.toppings}</span>}
        </section>
                <section className="section">
          <label>
            İsim *
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Adınızı girin"
            />
          </label>
          {errors.name && <span className="error">{errors.name}</span>}
        </section>

        <section className="section">
          <label>
            Sipariş Notu
            <textarea
              name="note"
              value={form.note}
              onChange={handleChange}
              placeholder="Siparişine eklemek istediğin bir not var mı?"
              rows="3"
            />
          </label>
        </section>

        
        <div className="bottom-row">
          <section className="section quantity">
            <button type="button" onClick={() => handleQuantity(-1)}>-</button>
            <span>{form.quantity}</span>
            <button type="button" onClick={() => handleQuantity(1)}>+</button>
          </section>

          <div className="summary-card">
            <h3>Sipariş Toplamı</h3>
            <div className="row">
              <span>Seçimler</span>
              <span>{extrasPrice.toFixed(2)}₺</span>
            </div>
            <div className="row total">
              <span>Toplam</span>
              <span>{lineTotal.toFixed(2)}₺</span>
            </div>
                      <button type="submit" disabled={isDisabled} className="submit-btn">
              SİPARİŞ VER
            </button>
          </div>
        </div>
      </form>
      </div>
    </div>
  );
}