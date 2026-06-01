import React, { useState, useEffect } from "react";
import { GoHome } from "/src/globalCompos.jsx";
import { useSelector } from "react-redux";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard } from '@fortawesome/free-solid-svg-icons'

function Contacts () {
  const theme = useSelector(state => state.theme);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    async function fetchContacts() {
      try {
        const response = await fetch("/contacts.json");
        const data = await response.json();
        setContacts(data);
      } catch (error) {
        console.error("Erreur lors du chargement des contacts :", error);
      }  
    }
    fetchContacts();
  }, []);

  return (
    <div id="contactsPage" className={theme}>
      <GoHome />
      <h1><FontAwesomeIcon icon={faAddressCard} /> Contacts</h1>
      <p>Ici les contacts du staff de <cite>Brawl Elite</cite>, présentés sous leurs pseudos <abbr title="Discord app">Discord</abbr>.
      Vous pouvez les contacter pour toute question, suggestion ou partenariat !</p>
      <ol>
        {contacts.map((contact, index) => (
          <li key={index}>
            <details>
              <summary>Contacts pour : {contact.discord}</summary>
              <ul>
                <li>
                  E-mail :&nbsp;
                  {contact.email ? (
                    <span className="contact-info">{contact.email}</span>
                  ) : (
                    <span className="no-infos">Pas d'informations spécifiées</span>
                  )}
                </li>
                <li>
                  Instagram :&nbsp;
                  {contact.instagram ? (
                    <span className="contact-info">{contact.instagram}</span>
                  ) : (
                    <span className="no-infos">Pas d'informations spécifiées</span>
                  )}
                </li>
                <li>
                  Twitter :&nbsp;
                  {contact.twitter ? (
                    <span className="contact-info">{contact.twitter}</span>
                  ) : (
                    <span className="no-infos">Pas d'informations spécifiées</span>
                  )}
                </li>
                <li>
                  YouTube :&nbsp;
                  {contact.youtube ? (
                    <span className="contact-info">{contact.youtube}</span>
                  ) : (
                    <span className="no-infos">Pas d'informations spécifiées</span>
                  )}
                </li>
                <li>
                  TikTok :&nbsp;
                  {contact.tiktok ? (
                    <span className="contact-info">{contact.tiktok}</span>
                  ) : (
                    <span className="no-infos">Pas d'informations spécifiées</span>
                  )}
                </li>
              </ul>
            </details>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Contacts;