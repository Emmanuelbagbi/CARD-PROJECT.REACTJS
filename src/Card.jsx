import profilePic from './assets/Screenshot_20220618-145500~2.jpg'

function Card() {
    return (
        <div className="card">
            <img className='card-image'src={profilePic} alt="Profile Picture" />
            <h2 className='card-title'>Emmy Boy</h2>
            <p className='card-text'>I am a backend Development and Play Video games</p>
        </div>
    );
}

export default Card