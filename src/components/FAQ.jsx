import React from "react";
import { FAQ_DATA } from "../data/faq";

const FAQ = () => {
  return (
    <section className="faq section-container" id="faq">
      <div className="section-header">
        <h2 className="section-title">常見問題解答 (FAQ)</h2>
        <p className="section-subtitle">這裡有一些最常被問到的問題，希望能解決您的疑惑。</p>
      </div>
      <div className="faq__list">
        {FAQ_DATA.map((item, index) => (
          <details key={index} className="faq__item">
            <summary className="faq__question">{item.question}</summary>
            <div className="faq__answer">{item.answer}</div>
          </details>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
