import React from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { textSizer } from "/src/store.js";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket, faGear } from '@fortawesome/free-solid-svg-icons'

function Settings () {
  const textSize = useSelector((state) => state.textSize);
  const dispatch = useDispatch();
  const rangeRef = useRef(null);

  return (
    <div id="settingsPage">
      <form className="modalBox" onSubmit={(e) => e.preventDefault()}>
        <Link to="/" className="closeBtn"><FontAwesomeIcon icon={faRightFromBracket} /></Link>
        <h1><FontAwesomeIcon icon={faGear} /> Settings</h1>
        <fieldset>
          <legend>Taille</legend>
          <label htmlFor="textSize">Taille du texte :</label>
          <br />
          <input type="range" min="8" max="25" id="textSize" className="slider" ref={rangeRef}
          />
        </fieldset>
        <hr width="100%" />
        <fieldset>
          <legend>Couleur</legend>
          <label htmlFor="textColor">Couleur du texte :</label>
          <br />
          <div className="colorator-wrap">
            <input type="color" id="textColor" className="colorator" />
          </div>
        </fieldset>
        <hr width="100%" />
        <fieldset>
          <legend>Thème</legend>
          <label htmlFor="theme">Thème du site :</label>
          <br />
          <select id="theme" className="selector">
            <option value="light">Clair</option>
            <option value="dark">Sombre</option>
            <option value="blue">Bleu</option>
            <option value="green">Vert</option>
          </select>
        </fieldset>
        <hr width="100%" />
        <fieldset>
          <input type="submit" value="Enregistrer les modifications" className="submitBtn" onClick={() => dispatch(textSizer(rangeRef.current.value))} />
        </fieldset>
      </form>
    </div>
  );
};

export default Settings;