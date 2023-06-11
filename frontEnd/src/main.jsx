
import '../styles/modern-normalize.css';
import '../styles/index.css';
import '../styles/frontPage.css';
import '../styles/utils.css';

function HomePage() {
    
    return (
        <form>
            <button className="btn-Register" >Sou novo aqui.</button>
            <button className="btn-login" >Já tenho uma agenda!</button>
            <button className="btn-share">Profile</button>
        </form>
    )
}

export default HomePage;