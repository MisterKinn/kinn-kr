import Link from "next/link";
import "../../styles/navbar.css";

function NavBar() {
    return (
        <div>
            <nav id="nav-bar">
                <div></div>

                <div className="topnav">
                    <Link
                        href="/machim/#Home"
                        className="nav-link"
                        scroll={true}
                    >
                        <strong>Home</strong>
                    </Link>

                    <Link
                        href="/machim/#About"
                        className="nav-link"
                        scroll={true}
                    >
                        <strong>About</strong>
                    </Link>

                    <Link
                        href="/machim/#Manage"
                        className="nav-link"
                        scroll={true}
                    >
                        <strong>Manage</strong>
                    </Link>

                    <Link
                        href="/machim/#Utility"
                        className="nav-link"
                        scroll={true}
                    >
                        <strong>Utility</strong>
                    </Link>

                    <Link
                        href="/machim/#Support"
                        className="nav-link"
                        scroll={true}
                    >
                        <strong>Support</strong>
                    </Link>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
