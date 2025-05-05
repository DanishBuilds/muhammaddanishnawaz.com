import React, { useEffect } from "react";
import { FaInstagram, FaXTwitter, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
    useEffect(() => {
        // Load GoatCounter script for tracking and visitor count
        const script = document.createElement("script");
        script.src = "//gc.zgo.at/count.js";
        script.async = true;
        script.setAttribute("data-goatcounter", "https://danishlashari.goatcounter.com/count");
        document.body.appendChild(script);

        // Initialize visitor count after script loads
        script.addEventListener("load", () => {
            if (window.goatcounter && window.goatcounter.visit_count) {
                window.goatcounter.visit_count({
                    append: "#visitor-count", // ID of the span to display count
                    type: "json", // Use JSON to extract raw count
                    no_branding: true, // Remove GoatCounter branding (if allowed)
                });
            }
        });

        return () => {
            document.body.removeChild(script);
        };
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
            <span>
                Total visits: <span id="visitor-count">Loading...</span>
            </span>
        </footer>
    );
};

export default Footer;