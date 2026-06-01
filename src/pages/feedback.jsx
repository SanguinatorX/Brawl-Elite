import React, { useState } from "react";
import { GoHome } from "/src/globalCompos.jsx";
import { useSelector } from "react-redux";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment } from '@fortawesome/free-solid-svg-icons'

export default function Feedback(props) {
    const theme = useSelector(state => state.theme);

    return (
      <div id="feedback" className={theme}>
        <GoHome />
        <h1><FontAwesomeIcon icon={faComment} /> Feedback sur le site</h1>
        <p>
          Nous aimerions connaître votre avis sur notre site ! Merci de répondre au formulaire ci-dessous.
          Ainsi, vous nous aideriez beaucoup à améliorer notre site et à mieux répondre à vos besoins.
          Nous apprécions votre temps et votre contribution !<br />
          Les réponses sont anonymes et ne seront utilisées que pour améliorer le site.
        </p>
        <div id="feedback-form">
          <iframe src="" title="Formulaire de feedback"></iframe>
        </div>
        <p className="feedback-thanks">Merci pour votre aide ❤️</p>
      </div>
    );
}