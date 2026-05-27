import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'

function Settings () {
  return (
    <div className="modalOverlay">
      <div className="modalBox">
        <Link to="/" className="closeBtn"><FontAwesomeIcon icon={faRightFromBracket} /></Link>

        <h1>Settings</h1>
        <p>
          <label htmlFor="textSize">Grandeur du texte :</label>
          <br />
          <input type="range" min="10" max="20" id="textSize" className="slider" />
        </p>
        <p>
          <label htmlFor="textColor">Couleur du texte :</label>
          <br />
          <input type="color" id="textColor" className="colorator" />
        </p>
      </div>
    </div>
  );
};

export default Settings;