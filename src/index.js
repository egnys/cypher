import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'

import {
    state,
    ceasarEncryptMessage, ceasarDecryptMessage,
    apfineEncryptMessage, apfineDecryptMessage,
    atbashEncryptMessage, atbashDecryptMessage,
    sloganEncryptMessage, sloganDecryptMessage,
    vigenereEncryptMessage, vigenereDecryptMessage,
    gronsfeldEncryptMessage, gronsfeldDecryptMessage,

    RSA_EncryptMessage, RSA_DecryptMessage, isPrime,
    Elgamal_EncryptMessage, Elgamal_DecryptMessage,
} from './Redux/State';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App langs={state.languages} asymNames={state.asymCypherNames} symNames={state.symCypherNames}
           ceasarEncMess={ceasarEncryptMessage} ceasarDecMess={ceasarDecryptMessage}
           apfineEncMess={apfineEncryptMessage} apfineDecMess={apfineDecryptMessage}
           atbashEncMess={atbashEncryptMessage} atbashDecMess={atbashDecryptMessage}
           sloganEncMess={sloganEncryptMessage} sloganDecMess={sloganDecryptMessage}
           vigenereEncMess={vigenereEncryptMessage} vigenereDecMess={vigenereDecryptMessage}
           gronsfeldEncMess={gronsfeldEncryptMessage} gronsfeldDecMess={gronsfeldDecryptMessage}

           RSA_EncMess={RSA_EncryptMessage}  RSA_DecMess={RSA_DecryptMessage} isPrime={isPrime}
           Elgamal_EncMess={Elgamal_EncryptMessage}  Elgamal_DecMess={Elgamal_DecryptMessage} isPrime={isPrime}
      />
    </BrowserRouter>
  </React.StrictMode>
);


