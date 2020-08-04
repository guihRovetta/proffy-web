import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars2.githubusercontent.com/u/9082472?s=460&u=766fef82d4a85fb1555aad72ebfb827a4f1f3b22&v=4"
          alt="Guilherme Rovetta"
        />
        <div>
          <strong>Guilherme Rovetta</strong>
          <span>História</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores teorias de história incompreendida.
        <br />
        <br />
        Apaixonado por teorizar teorias da conspiração envolvendo princalmente
        os deuses astronautas e robôs.
      </p>

      <footer>
        <p>
          Preço/hora <strong>R$ 13,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
