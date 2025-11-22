import React from "react";
import "../styles/seller.css";
export default function SellerSignup() {
    return (
        <div className="container">
            <h2 className="section-title">تسجيل البائعين</h2>
            <form>
                <input placeholder="اسم المتجر" />
                <input placeholder="نوع المنتجات" />
                <input placeholder="وسيلة التواصل" />
                <button className="button">تسجيل</button>
            </form>
        </div>
    );
}