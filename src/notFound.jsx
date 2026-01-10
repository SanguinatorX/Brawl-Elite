import { Link } from "react-router-dom";

export default function NotFound(props) {
  return (
    <div id="notFound">
      <h1>Erreur d'url...</h1>
      <p>La page que tu cherches n’existe pas. Comme certains neurones le lundi matin.</p>
      <Link to="/">Retour à l’accueil</Link>
    </div>
  );
}