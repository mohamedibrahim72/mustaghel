import React, { useState } from "react";
import "../styles/products.css";

const productsData = [
    { id: 1, name: "iPhone 16", price: 65000, desc: 'موبايل بمواصفات متوسطة — شاشة 6.5"، كاميرا خلفية مزدوجة.', img: "/images/iphone16.webp" },
    { id: 2, name: "مكنسة كهربائية محمولة", price: 1450, desc: "خفيفة وقوية — مناسبة للبيت والسيارة.", img: "/images/مكنسة كهربائية.jpg" },
    { id: 3, name: "طقم أدوات صحية", price: 1200, desc: "أدوات طبية منزلية أساسية.", img: "/images/أدوات طبية منزلية.jpg" },
];


export default function Products() {
    const [cart, setCart] = useState([]);
    const [showCart, setShowCart] = useState(false);

const handleAddToCart = (product) => {
    setCart([...cart, product]);
};

const handleRemoveFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
};

const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

return (
    <section className="products-section">
        <div className="container">
            <h2 className="section-title">المنتجات</h2>

            <div className="products-grid">
                {productsData.map((p) => (
                    <article className="product-card" key={p.id}>
                        <div className="product-media">
                            <img src={p.img} alt={p.name} className="product-img" />
                        </div>

                        <div className="product-body">
                            <h3 className="product-name">{p.name}</h3>
                            <p className="product-desc">{p.desc}</p>
                            <div className="product-meta">
                                <span className="product-price">{p.price.toLocaleString()} ج.م</span>
                                <button
                                    className="button product-btn"
                                    onClick={() => handleAddToCart(p)}
                                >
                                    اطلب الآن
                                </button>
                            </div>
                        </div>
                    </article>
                ))}
            </div>

            {/* Cart Sidebar */}
            <div className={`cart - sidebar ${ showCart ? "open" : "" } `}>
                <h3>سلة الشراء</h3>
                {cart.length === 0 ? (
                    <p>السلة فارغة</p>
                ) : (
                    <>
                        <ul>
                            {cart.map((item, index) => (
                                <li key={index}>
                                    {item.name} — {item.price.toLocaleString()} ج.م
                                    <button
                                        className="button remove-btn"
                                        onClick={() => handleRemoveFromCart(index)}
                                    >
                                        ✖
                                    </button>
                                </li>
                            ))}
                        </ul>
                        <p><strong>إجمالي السعر: {totalPrice.toLocaleString()} ج.م</strong></p>
                        <button className="button checkout-btn">إتمام الطلب</button>
                    </>
                )}
                <button className="button close-cart" onClick={() => setShowCart(false)}>✖</button>
            </div>

            {/* Cart Toggle Button */}
            <button className="cart-toggle button" onClick={() => setShowCart(!showCart)}>
                🛒 {cart.length} منتجات
            </button>
        </div>
    </section>
);

}
