import React, { useState } from "react";

export default function Profile() {
  const [tag, setTag] = useState("");
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);

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
    <div className="profile">
      <div className="profileCard">
        <h1>Profil Brawl Stars</h1>
        <p className="soustitre">Entre ton tag et vois tes stats</p>
        <input
          type="text"
          placeholder="Exemple : #ABC123"
          onChange={(e) => setTag(e.target.value)}
        />
        <button onClick={getPlayer}>Rechercher le joueur</button>

        {error ? <p className="error">{error}</p> : null}
      </div>
      {profile ? (
        <div className="profileResult">
            <h2 style={{ color: profile.nameColor }}>
                <img
                    src={`https://cdn.brawlify.com/brawlers/borders/${profile.icon.id}.png`}
                    alt="icon"
                    className="profileIcon"
                />
                {profile.name}
            </h2>

          <div className="stats">
            <div className="statBox">
              <span>🏷️ Tag</span>
              <p>{profile.tag}</p>
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