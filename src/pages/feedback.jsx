import React, { useState } from "react";
import { GoHome } from "./globalCompos.jsx";

export default function Feedback(props) {
    return (
      <div id="feedback">
        <GoHome />
        <h1>Feedback</h1>
        <p>Nous aimerions connaître votre avis sur notre site !</p>
      </div>
    );
}