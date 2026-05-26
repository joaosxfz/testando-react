import './style.css'
import { Link } from 'react-router-dom'

function Menu() {
    return (
        <>
            <ul>
                <li><Link to="/"><button>Home</button></Link></li>
                <li><Link to="ex01"><button>Exercício 1</button></Link></li>
            </ul>
        </>
    )
}

export default Menu