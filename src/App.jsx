import { useState } from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
  return <h1 id="Header">Bienvenue sur le site de Brawl d'Elite</h1>;
}

function LateralMenu(props) {
  const [ouvert, modifOuvert] = useState();
  return <div></div>;
}

function Description(props) {
  return (
    <div id="Description">
      <h2>🌟REJOINS BRAWL D'ELITE🌟</h2>
      <p>
        BRAWL D'ELITE est un serveur Brawl Stars qui n'attend que vous pour
        venir jouer🔥
      </p>
      <p>Que faisons nous ?</p>
      <ul>
        <li>On joue🏆</li>
        <li>On organise des tournois🥇</li>
        <li>On crée des giveaway🎁</li>
        <li>Nous jouons aussi à d'autres jeux Supercell🔮</li>
      </ul>
      <p>
        On à hâte de vous voir parmis nous, notre équipe staff se fait un
        plaisir de vous accueillir🛡️
        <br />
        Vous êtes le bienvenue en tout genre, nous acceptons également tout type
        de partenariat📝. On espère vous voir très bientôt ❤
        <br />
        <br />
        <Link to="https://discord.gg/ydkvqF6Gbc">Rejoindre Brawl d'Elite</Link>
      </p>
    </div>
  );
}

function Modos(props) {
  return (
    <div id="Modos">
      <h3>
        Brawl d'Elite possède un staff accueillant, expérimenté et toujours prêt
        à vous aider !
      </h3>
      <ul>
        <strong>ADMIN :</strong>
        <li>Prince elite</li>
        <strong>BRAS DROIT :</strong>
        <li>Cupckake</li>
        <strong>CO-ADMIN :</strong>
        <li>Gryf</li>
        <li>L4fty</li>
        <strong>CHEF STAFF :</strong>
        <li>Yuki 2.0</li>
        <li>NoeLPZ</li>
        <strong>PERMISSIONS BANNISSEMENTS :</strong>
        <li>Juan Canard 2.0</li>
        <li>Xemiosthegoat</li>
        <li>Lulelo57</li>
        <strong>MODO :</strong>
        <li>Tristan</li>
        <strong>MODO.JR :</strong>
        <li>Nox</li>
      </ul>
    </div>
  );
}

function Widget(props) {
  return (
    <iframe
      src="https://discord.com/widget?id=1297945538679017472&theme=dark"
      width="600"
      height="440"
      allowtransparency="true"
      sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
    ></iframe>
  );
}

function App(props) {
  return (
    <div id="app">
      <Header />
      <div className="inline">
        <Description />
        <Widget />
      </div>
      <br />
      <div className="inline">
        <Modos />
      </div>
    </div>
  );
}

export default App;
