import React from "react";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { textSizer, textColorer, themeChanger } from "/src/store.js";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket, faGear } from '@fortawesome/free-solid-svg-icons'

function Settings () {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const textSize = useSelector((state) => state.textSize);
  const textColor = useSelector((state) => state.textColor);
  const theme = useSelector((state) => state.theme);

  const rangeRef = useRef(null);
  const coloratorRef = useRef(null);
  const themeRef = useRef(null);

  return (
    <div id="settingsPage">
      <form className="modalBox" onSubmit={(e) => e.preventDefault()}>
        <Link to="/" className="closeBtn"><FontAwesomeIcon icon={faRightFromBracket} /></Link>
        <h1><FontAwesomeIcon icon={faGear} /> Settings</h1>
        <fieldset>
          <legend>Taille</legend>
          <label htmlFor="textSize">Taille du texte :</label>
          <br />
          <input type="range" min="8" max="25" id="textSize" defaultValue={textSize} className="slider" ref={rangeRef}
          />
        </fieldset>
        <hr width="100%" />
        <fieldset>
          <legend>Couleur</legend>
          <label htmlFor="textColor">Couleur du texte :</label>
          <br />
          <div className="colorator-wrap">
            <input type="color" id="textColor" defaultValue={textColor} className="colorator" ref={coloratorRef} />
          </div>
        </fieldset>
        <hr width="100%" />
        <fieldset>
          <legend>Thème</legend>
          <label htmlFor="theme">Thème du site :</label>
          <br />
          <select id="theme" defaultValue={theme} className="selector" ref={themeRef}>
            <option defaultChecked={true} value="standardTheme">Standard Elite 🔱</option>
            <option value="lightTheme">Clair</option>
            <option value="redTheme">Sanglant 🩸</option>
            <option value="greenTheme">Végétal 🌳</option>
          </select>
        </fieldset>
        <hr width="100%" />
        <fieldset>
          <input type="submit" value="Enregistrer les modifications" className="submitBtn" onClick={() => {
            dispatch(textSizer(Number(rangeRef.current.value)));
            dispatch(textColorer(coloratorRef.current.value));
            dispatch(themeChanger(themeRef.current.value));
            navigate("/");
          }} />
        </fieldset>
      </form>
    </div>
  );
};

export default Settings;