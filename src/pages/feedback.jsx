import React, { useState } from "react";
import { GoHome } from "/src/globalCompos.jsx";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment } from '@fortawesome/free-solid-svg-icons'

export default function Feedback(props) {
    return (
      <div id="feedback">
        <GoHome />
        <h1><FontAwesomeIcon icon={faComment} /> Feedback sur le site</h1>
        <p>
          Nous aimerions connaître votre avis sur notre site ! Merci de répondre au formulaire ci-dessous.
          Ainsi, vous nous aideriez beaucoup à améliorer notre site et à mieux répondre à vos besoins.
          Nous apprécions votre temps et votre contribution !
        </p>
        <div id="feedback-form">
          <iframe src=""></iframe>
        </div>
      </div>
    );
}