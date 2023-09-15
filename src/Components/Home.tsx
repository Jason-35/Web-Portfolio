import { TypeAnimation } from "react-type-animation"
import "../Styles/Home.css"
const Home = () => {
    return (
    <div className="home" id="home">
        <div className="home-content">
            <div className="type-card">
                <TypeAnimation
                    style={{ whiteSpace: 'pre-line', height: '195px', display: 'block', fontSize: '1.8rem' }}
                    sequence={[
                        `Hi! I'm Jason\nSoftware Engineer\nStudied at Stony Brook University\nGraduated with B.S. in Computer Science\nActively pursuing a career in Software`,
                        1,
                        ]}
                    repeat={Infinity}
                    deletionSpeed={99}
                    speed={70}
                />
            </div>
            <img className="home-img" src="/computer_image.jpg" height={600}/>
        </div>
    </div>)
}

export default Home