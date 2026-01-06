"use client";
import { openMenu, closeMenu } from "@/app/sidebar";
import "@/styles/Mobile/sidebar.css";

function Sidebar() {
    return (
        <div id="sidebar">
            <div className="menu-container">
                <img
                    src="img/openbtn.png"
                    alt="메뉴 열기"
                    className="openbtn"
                    onClick={openMenu}
                />
            </div>

            <div className="sidebar">
                <div className="sidebar-content">
                    <a className="closebtn" onClick={closeMenu}>
                        <img
                            src="img/sidebar-close.png"
                            alt="CloseBtn"
                            className="close-img"
                        />
                    </a>

                    <a href="../#Home" title="Home">
                        Home
                    </a>

                    <a href="../#Portfolio" title="Portfolio">
                        Portfolio
                    </a>

                    <a href="../#Outsource" title="Portfolio">
                        Outsource
                    </a>

                    <a href="../#Experience" title="Experience">
                        Experience
                    </a>

                    <a href="../#Skills" title="Skills">
                        Skills
                    </a>

                    <a href="../#Profile" title="Profile">
                        Profile
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
