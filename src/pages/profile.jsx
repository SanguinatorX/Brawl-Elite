import React, { useState } from "react";

export default function Profile() {
  const [tag, setTag] = useState("");
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);

  const fetchPlayer = () => {
    if (!tag) return;

    const cleanTag = tag.replace("#", "").toUpperCase();

    fetch(`http://localhost:3000/player/${cleanTag}`)
      .then(res => {
        if (!res.ok) throw new Error("Joueur introuvable");
        return res.json();
      })
      .then(data => {
        setProfile(data);
        setError(null);
      })
      .catch(() => {
        setProfile(null);
        setError("Tag invalide ou joueur introuvable");
      });
  };

  return (
    <div id="profile">
      <h1>Votre profil Brawl Stars</h1>

      <input
        type="text"
        placeholder="Votre tag Brawl Stars"
        onChange={(e) => setTag(e.target.value)}
      />

      <button onClick={fetchPlayer}>Trouver le joueur</button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {profile && (
        <div>
          <h2>{profile.name}</h2>
          <p>Tag: {profile.tag}</p>
          <p>Trophées: {profile.trophies}</p>
        </div>
      )}
    </div>
  );
}