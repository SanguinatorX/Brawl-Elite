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
        <p>This is the settings page</p>
      </div>
    </div>
  );
};

export default Settings;