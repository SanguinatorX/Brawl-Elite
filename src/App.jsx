import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import { bug, anbug, cass, ancass, rotate, unrotate, splatsh, unsplatsh } from "./store.js";

import Tubes from './animations/tubes.jsx';
import Bulles from "./animations/bulles.jsx";
import Sparkler from "./animations/sparkler.jsx";
import Spheres from "./animations/spheres.jsx";

function Header(props) {
  return (
    <header>
      <h1>Bienvenue sur le site de Brawl d'Elite</h1>
    </header>
  );
}

function LateralMenu (props) {
  const [menuAffichage, modifMenuAffichage] = useState(false);

  return (
    <>
      {/* Bouton d'ouverture */}
      <button id="burgerButton" onClick={() => modifMenuAffichage(!menuAffichage)}>
      <FontAwesomeIcon icon={faBars} /> {/* Icône du menu burger 🍔 */}
      </button>
      <aside className={menuAffichage ? "affiche" : "cache"}>
        <h2>Menu</h2>
        <ul>
        <li onClick={() => { modifMenuAffichage(false) }}><i className="fa-solid fa-gear"></i> Settings</li>
          <li><a href="mailto:eragonlorvin@outlook.com?subject=Bug%20Report&body=Bonjour,%0A%0AJ'ai%20trouvé%20un%20bug%20sur%20le%20site%20%22Portfolio%20Dragen%202025%22.">Report a bug</a></li>
          <li><Link to=""><i class="fa-solid fa-comment"></i> Give FeedBack</Link></li>
          <li>Contacts</li>
          <li>Actu hebdo</li>
        </ul>
      </aside>
    </>
  );
}

function Description(props) {
  return (
    <section>
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
    </section>
  );
}

function Widget(props) {
  return (
    <article>
      <iframe
        src="https://discord.com/widget?id=1297945538679017472&theme=dark"
        width="600"
        height="440"
        allowtransparency="true"
        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
      ></iframe>
    </article>
  );
}

function Modos(props) {
  return (
    <section>
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
    </section>
  );
}

function ListeBots (props) {
  return (
    <section>
      <h3>
        Et voici les esclaves du serveur Brawl d'Elite les bots !
      </h3>
      <ul>
        <li>Brawl Bot</li>
        <li>DraftBot</li>
        <li>CoinsBot®</li>
        <li>InviteLogger</li>
        <li>Carl Bot</li>
        <li>Ticket Tool</li>
      </ul>
    </section>
  );
}

function Activity (props) {
  const timeCasse = 2500;
  const dispatch = useDispatch();

  return (
    <section>
      <h3>Quelques activités pour ne pas s'ennuyer sur ce site !</h3>
      <button onClick={() => {
        // fait disparaître le site
        dispatch(cass()); // casse = false
        // après 2 secondes, on réaffiche
        setTimeout(() => {
          dispatch(ancass()); // casse = true
        }, timeCasse);
      }}>Casser le site</button>
      <br />

      <button onClick={() => {
        // fait disparaître le site
        dispatch(bug()); // bugge = false
        // après 2 secondes, on réaffiche
        setTimeout(() => {
          dispatch(anbug()); // bugge = true
        }, timeCasse);
      }}>Bugger le site</button>
      <br />

      <button onClick={() => {
        // fait disparaître le site
        dispatch(rotate()); // rotate = true
        // après 2 secondes, on réaffiche
        setTimeout(() => {
          dispatch(unrotate()); // rotate = false
        }, 3000);
      }}>Flipper le site</button>
      <br />

      <button onClick={() => {
        // fait disparaître le site
        dispatch(splatsh()); // splatsh = true
        // après 2 secondes, on réaffiche
        setTimeout(() => {
          dispatch(unsplatsh()); // splatsh = false
        }, 2500);
      }}>Color splatsh</button>
    </section>
  );
}

function Rotateprovider (props) {
  const rotate = useSelector((state) => state.rotate);

  return(
    <div className={rotate ? "rotation" : "inactive"}>{props.children}</div>
  );
}

function ColorSplatshProvider (props) {
  const splatshing = useSelector((state) => state.splatshing);

  return(
    <div className={splatshing ? "colorSplatsh" : "inactive"}>{props.children}</div>
  );
}

function App(props) {
  const [presAnimation, modifPresAnimation] = useState(false);
  const bugge = useSelector((state) => state.bugge);
  const casse = useSelector((state) => state.casse);

  if (!bugge) {
    return <div id="appBugge"></div>;
  }
  if (!casse) {
    return <div id="appCasse"><h1>Wesh sale mec t'as cassé le site !!!!</h1></div>;
  }

  return (
    <div id="app">
      <Rotateprovider>
        <ColorSplatshProvider>
          <Header />
          <LateralMenu />
          <main>
            <div className="inline">
              <Description />
              <Widget />
            </div>
            <br /><hr /><br />
            <div className="inline">
              <Modos />
              <ListeBots />
              <Activity />
            </div>
            <br /><hr /><br />
            <h3>
              Voir nos animations 3D : 
              <button className="deroulator" onClick={() => modifPresAnimation(state => !state)}>
                Voir
              </button>
            </h3>
            { presAnimation &&
              <div id="animations">
                <Tubes />
                <Bulles />
                <Spheres />
                <Sparkler />
              </div>
            }
          </main>
        </ColorSplatshProvider>
      </Rotateprovider>
    </div>
  );
}

export default App;
