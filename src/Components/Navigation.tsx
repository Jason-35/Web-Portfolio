import "../Styles/Navigation.css"
const Navigation = () => {
    return (
    <nav>
        <div className="social">
            <img src="/github.png" alt="github" />
            <img src="/linkedin.png" alt="linkedin" />
        </div>
        <ul className="navbar">
            <li><a href="#top">Home</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
            <li></li>
        </ul>
    </nav>
    )
}

export default Navigation