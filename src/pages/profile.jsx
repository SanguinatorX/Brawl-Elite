 /*  const tag = "ABC123"; // sans #
  fetch(`https://api.brawlify.com/v1/players/${tag}`)
  .then(res => res.json())
  .then(data => console.log(data)); */

import React, { useState } from "react";

export default function Profile(props) {
    return (
      <div id="profile">
        <h1>Votre profil Brawl Stars</h1>
        <p>Cette page est en construction, mais elle sera bientôt disponible !</p>
        <p>Vous pourrez y voir vos statistiques de jeu, vos trophées, vos brawlers préférés et bien plus encore !</p>
        <p>Restez à l'affût pour découvrir votre profil Brawl Stars personnalisé !</p>
      </div>
    );
}