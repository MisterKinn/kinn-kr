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
            <p className="m-footer-text">
                &copy; <span id="copyright-year" ref={yearRef} />{" "}
                <strong>Kinn</strong>.
                <br />
                All Rights Reserved.
            </p>
        </div>
    );
}

export default Footer;
