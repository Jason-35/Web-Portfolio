import "../Styles/Home.css"
const Home = () => {
    return (
    <div className="home" id="home">
        <div className="home-content">
            <div className="card-text">
                <h1 className="dynamic-text-l1">Hi! I'm Jason</h1>
                <h2 className="dynamic-text-l2">Software Engineer</h2>
                <p className="dynamic-text-l3">Studied at Stony Brook University</p>
                <p className="dynamic-text-l4">Graduated with B.S. in Computer Science</p>
                <p className="dynamic-text-l5">Actively pursuing a career in Software</p>
            </div>
            <img className="home-img" src="../../public/computer_image.jpg" height={600}/>
        </div>
    </div>)
}

export default Home