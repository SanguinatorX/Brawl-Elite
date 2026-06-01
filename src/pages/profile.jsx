import React, { useState } from "react";
import { GoHome } from "/src/globalCompos.jsx";
import { useSelector } from "react-redux";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard } from '@fortawesome/free-solid-svg-icons'

function Profile() {
  const [tag, setTag] = useState("");
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);
  const theme = useSelector(state => state.theme);

  const getPlayer = () => {
    if (!tag) return;

    const cleanedTag = tag.replace("#", "").toUpperCase();

    fetch(`http://localhost:3000/player/${cleanedTag}`)
      .then(res => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then(data => {
        setProfile(data);
        setError(null);
      })
      .catch(() => {
        setProfile(null);
        setError("Impossible de trouver ce joueur 💀, vérifiez que vous avez tapé le bon tag");
      });
  };

  return (
    <div id="profile" className={theme}>
      <aside>
        <h1><FontAwesomeIcon icon={faAddressCard} /> Profil Brawl Stars</h1>
        <p className="sous-titre">Entre ton tag et vois tes stats</p>
        <p className="sous-titre">Qu'est-ce qu'un tag ? <a href="https://discord.gg/3aBCbsgc5Z" target="_blank">Rejoins le serveur</a> pour poser la question aux membres !</p>
        <input
          type="text"
          placeholder="Exemple : #ABC123"
          onChange={(e) => setTag(e.target.value)}
        />
        <button onClick={getPlayer}>Rechercher le joueur</button>

        {error ? <p className="error">{error}</p> : null}
      </aside>
      {profile ? (
        <div className="profileResult">
            <h2 style={{ color: profile.nameColor }}>
                {/* <img
                    src={`https://cdn.brawlify.com/brawlers/borders/${profile.icon.id}.png`}
                    alt="icon"
                    className="profileIcon"
                /> */}
                {profile.name}
            </h2>

          <div className="stats">
            <div className="statBox">
              <span>🏷️ Tag</span>
              <p>{profile.tag}</p>
            </div>

            <div className="statBox">
              <span>✌️ Victoires solo</span>
              <p>{profile.soloVictories}</p>
            </div>

            <div className="statBox">
              <span>🧑‍🤝‍🧑 Club</span>
              <p>{profile.club ? profile.club.name : "Pas dans un club"}</p>
            </div>

            <div className="statBox">
              <span>🏆 Trophées</span>
              <p>{profile.trophies}</p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default function ProfilePage() {
  return (
    <div className="profilePage">
      <GoHome />
      <Profile />
    </div>
  );
}