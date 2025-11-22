import "../styles/home.css";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="home">

            {/* ===== HERO SECTION ===== */}
            <section className="hero">
                <p className="hero-brand">مستغل</p> {/* دي الكلمة فوق */}
                <h1>وسيط ذكي يربط المستهلك بالبائع</h1>
                <p className="hero-sub">ابحث — قارن — اطلب</p>

                <Link to="/products" className="hero-btn">
                    تصفح المنتجات
                </Link>
            </section>


            {/* ===== WHAT WE OFFER SECTION ===== */}
            <section className="offer-section">
                <h2>لماذا مستغل؟</h2>

                <div className="offer-grid">

                    <div className="offer-box">
                        <img src="/images/search.png" alt="بحث" />
                        <h3>ابحث بسهولة</h3>
                        <p>نوفر لك طريقة سريعة للبحث عن أي منتج تريده من عدة بائعين.</p>
                    </div>

                    <div className="offer-box">
                        <img src="/images/compare.png" alt="قارن" />
                        <h3>قارن الأسعار</h3>
                        <p>قارن الأسعار والميزات بين البائعين بسهولة قبل أن تتخذ قرارك.</p>
                    </div>

                    <div className="offer-box">
                        <img src="/images/order.png" alt="اطلب" />
                        <h3>اطلب بسرعة</h3>
                        <p>اطلب المنتج بضغطة زر وسيتم التواصل معك من البائع.</p>
                    </div>

                </div>
            </section>
        </div>
    );
}
