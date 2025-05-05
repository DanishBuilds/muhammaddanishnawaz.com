import React, { useEffect, useState } from "react";
import { FaInstagram, FaXTwitter, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
    const [visits, setVisits] = useState(null);

    useEffect(() => {
        fetch("https://danishlashari.goatcounter.com/api/v0/stats/totals")
            .then((res) => res.json())
            .then((data) => setVisits(data.views))
            .catch((err) => console.error("Failed to fetch visit count:", err));
    }, []);

    return (
        <footer className="w-full py-4 bg-black-100/55 text-white flex justify-center gap-6 flex-wrap text-sm">
            <a href="https://www.instagram.com/danish_lashari" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={24} />
            </a>
            <a href="https://x.com/danishlashari07" target="_blank" rel="noopener noreferrer">
                <FaXTwitter size={24} />
            </a>
            <a href="https://www.linkedin.com/in/muhammad-danish-nawaz" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={24} />
            </a>
            <span>0092 302 752 7777</span>
            {visits !== null && <span>Total visits: {visits}</span>}
        </footer>
    );
};

export default Footer;
