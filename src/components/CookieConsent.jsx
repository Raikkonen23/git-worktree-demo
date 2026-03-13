import React, { useState, useEffect } from 'react';

const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'true');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="cookie-consent">
            <div className="cookie-consent-content">
                <p>我們使用 Cookie 提升體驗，繼續使用代表您同意我們的隱私權政策。</p>
                <button className="cookie-consent-btn" onClick={handleAccept}>
                    同意
                </button>
            </div>
        </div>
    );
};

export default CookieConsent;
