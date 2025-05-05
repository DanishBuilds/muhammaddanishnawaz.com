import React, { useEffect, useState } from "react";
import { FaInstagram, FaXTwitter, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
    const [countError, setCountError] = useState(null);

    useEffect(() => {
        // Load GoatCounter script
        const script = document.createElement("script");
        script.src = "//gc.zgo.at/count.js";
        script.async = true;
        script.setAttribute("data-goatcounter", "https://danishlashari.goatcounter.com/count");
        document.body.appendChild(script);

        // Initialize visitor count
        const initVisitCount = () => {
            if (window.goatcounter && window.goatcounter.visit_count) {
                console.log("GoatCounter loaded, initializing visit_count");
                window.goatcounter.visit_count({
                    append: "#visitor-count",
                    type: "json",
                    no_branding: true,
                    path: "//", // Total site visits
                });
            } else {
                console.warn("GoatCounter or visit_count not available");
                setCountError("Visitor count unavailable");
            }
        };

        // Handle script load
        script.addEventListener("load", () => {
            console.log("GoatCounter script loaded");
            initVisitCount();
        });

        // Handle script error
        script.addEventListener("error", () => {
            console.error("Failed to load GoatCounter script");
            setCountError("Visitor count unavailable");
        });

        // Retry if script is slow
        const timeout = setTimeout(() => {
            if (!window.goatcounter) {
                console.warn("GoatCounter script timeout");
                setCountError("Visitor count unavailable");
            }
        }, 5000);

        return () => {
            document.body.removeChild(script);
            clearTimeout(timeout);
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
                Total visits: {countError ? countError : <span id="visitor-count">Loading...</span>}
            </span>
        </footer>
    );
};

export default Footer;