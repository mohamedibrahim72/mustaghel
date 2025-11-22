import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-container">

                {/* logo */}
                <div className="nav-logo">
                    <img src="/logo.png" alt="Logo" />
                    <h1>مستغل</h1>
                </div>

                {/* links */}
                <ul className="nav-links">
                    <li><Link to="/">الرئيسية</Link></li>
                    <li><Link to="/products">المنتجات</Link></li>
                    <li><Link to="/about">من نحن</Link></li>
                    <li><Link to="/contact">تواصل معنا</Link></li>
                </ul>

                {/* button */}
                <Link to="/seller" className="seller-btn">كن بائعًا</Link>

            </div>
        </nav>
    );
}
