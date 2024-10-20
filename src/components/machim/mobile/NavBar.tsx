import Link from "next/link";
import "../../styles/navbar.css";

function NavBar() {
    return (
        <div>
            <nav id="nav-bar">
                <div></div>

                <div className="topnav">
                    <Link href="../#Home" className="nav-link" scroll={true}>
                        <strong>Home</strong>
                    </Link>

                    <Link href="../#About" className="nav-link" scroll={true}>
                        <strong>About</strong>
                    </Link>

                    <Link
                        href="../#Portfolio"
                        className="nav-link"
                        scroll={true}
                    >
                        <strong>Portfolio</strong>
                    </Link>

                    <Link
                        href="../#Experience"
                        className="nav-link"
                        scroll={true}
                    >
                        <strong>Experience</strong>
                    </Link>

                    <Link href="../#Skills" className="nav-link" scroll={true}>
                        <strong>Skills</strong>
                    </Link>

                    <Link href="../#Profile" className="nav-link" scroll={true}>
                        <strong>Profile</strong>
                    </Link>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
