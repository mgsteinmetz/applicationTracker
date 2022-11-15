import styles from '../../styles/Navbar.module.css'

const Navbar = () => {
    return (
        <div className={styles.topnav}>
            <a href="/" className="active">Home</a>
            <a href="/jobs">Jobs</a>
        </div>
    )
}

export default Navbar;