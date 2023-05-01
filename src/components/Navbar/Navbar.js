import styles from "./Navbar.module.css";

function Navbar({setCurrentPage}) {

    function NavigateToAllMovies() {
        setCurrentPage("AllMovies");
    }

    return (
        <nav className={styles.container}>
            <a className={styles.logo} onClick={NavigateToAllMovies}>
                CineSpective
            </a>
            <div>        
            </div>
        </nav>
    )
}

export default Navbar;