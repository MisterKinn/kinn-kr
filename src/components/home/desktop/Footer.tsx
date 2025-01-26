import { useEffect, useRef } from "react";

function Footer() {
    const yearRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const yearElement = yearRef.current;
        if (yearElement) {
            yearElement.textContent = new Date().getFullYear().toString();
        }
    }, []);

    return (
        <div>
            <p className="footer-text">
                &copy; <span id="copyright-year" ref={yearRef} />{" "}
                <strong>Kinn</strong>. All Rights Reserved.
            </p>
        </div>
    );
}

export default Footer;
