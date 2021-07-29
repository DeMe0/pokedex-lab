import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {
    return <div className = "navbar">
        <img className='pikachu'
        src="https://res.cloudinary.com/ademeo/image/upload/v1627488303/Pikachu-Transparent-Background_xq1ks2.png" alt="pika"/>
        <Link to ="/">Pokedex</Link>
        <img className="logo"
        src="https://res.cloudinary.com/ademeo/image/upload/v1627488659/PinClipart.com_pokemon-cliparts_3791327_r2qsou.png" />
        <Link to="/MyTeam">My Team</Link>

    </div>
}

export default Header