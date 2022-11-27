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
    gronsfeldEncryptMessage, gronsfeldDecryptMessage
} from './Redux/State';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App langs={state.languages} names={state.symCypherNames}
           ceasarEncMess={ceasarEncryptMessage} ceasarDecMess={ceasarDecryptMessage}
           apfineEncMess={apfineEncryptMessage} apfineDecMess={apfineDecryptMessage}
           atbashEncMess={atbashEncryptMessage} atbashDecMess={atbashDecryptMessage}
           sloganEncMess={sloganEncryptMessage} sloganDecMess={sloganDecryptMessage}
           vigenereEncMess={vigenereEncryptMessage} vigenereDecMess={vigenereDecryptMessage}
           gronsfeldEncMess={gronsfeldEncryptMessage} gronsfeldDecMess={gronsfeldDecryptMessage}
      />
    </BrowserRouter>
  </React.StrictMode>
);


