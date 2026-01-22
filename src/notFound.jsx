import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Sparkler from "./animations/sparkler";

export default function NotFound(props) {
  const navigate = useNavigate();
  const [openRedirection, setOpenRedirection] = useState(false);

  return (
    <div id="notFound">
      <Sparkler bouton={false} />

      <h1>Erreur d'url...</h1>
      <p>
        La page que tu cherches n’existe pas. Comme certains neurones le lundi matin.<br />
        Pourquoi pas retourner à l’accueil et réessayer ? Eh oui, même les meilleurs se perdent parfois !<br />
        Allez, courage ! Nous y sommes tous passés. Je te promets que l’accueil est un endroit merveilleux.<br />
        Non, vraiment, tu vas adorer ! N'hésite pas à cliquer sur le bouton ci-dessous pour y retourner.<br />
        Vas-y, fonce ! L'aventure t'attend là-bas. Et n'oublie pas : chaque erreur est une opportunité d'apprendre et de grandir.<br />
        Alors, prêt à repartir à l'aventure ? Si oui, clique sur le bouton ci-dessous pour retourner à l’accueil.<br />
        Tu ne veux pas rester ici à te morfondre, hein ? Alors cesse ces bouderies et clique vite !<br />
        Foooooonce ! L’accueil t’attend avec impatience !<br />
      </p>
      <Link to="/"><button>Retour à l’accueil</button></Link>
      <br /><br />
      <button onClick={() => setOpenRedirection(true)}>Redirection forcée</button>
      {openRedirection && (
        <p className="footer-text" onMouseEnter={() => {navigate("/");}}>
          Bwawawawa 😭 ! Donc comme ça tu ne veut toujours pas y aller ? Bon puisque c'est comme ça, je t'y emmène tout seul !
        </p>
      )}
    </div>
  );
}