import React from "react";
import "../styles/contact.css";
export default function Contact() {
    return (
        <div className="container form-box">
            <h2 className="section-title">تواصل معنا</h2>
            <form>
                <input placeholder="الاسم" />
                <input placeholder="البريد الإلكتروني" />
                <textarea placeholder="رسالتك" rows="4"></textarea>
                <button className="button">إرسال</button>
            </form>
        </div>
    );
}