import React from "react";
import project1 from "../assets/project1.png"

const User = ({ artist }) => {
    if (!artist) return null
    const { name, username, email } = artist

    return (
        <div>
            <h3>{name}</h3>
            <p>{username}</p>
            <p>{email}</p>
            <img
                src={project1}
                alt="artis-profil"
                style={{
                    width: 200,
                    height: 200,
                    borderRadius: 100,
                    objectFit: 'cover'
                }} />
        </div>
    )
}

export default User