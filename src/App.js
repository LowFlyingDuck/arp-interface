import React, { useState } from 'react';
import './App.css';

function App() {
  var victims = [];
  var [status, setStatus] = useState({
    value: 'connecting...',
    src: '/icons/negative.svg'
  });
  var [arping, setArping] = useState({
    value: 'not arping',
    src: '/icons/negative.svg'
  });
  function update() {
    if (navigator.onLine) {
      setStatus({
        value: 'online',
        src: '/icons/positive.svg'
      })
    } else {
      setStatus({
        value: 'offline',
        src: '/icons/negative.svg'
      })
    }
    let active = false;
    for (let victim of victims) {
      if (victim.active) {
        setArping({
          value: 'arping',
          src: '/icons/positive.svg'
        })
        active = true;
        break;
      }
    }
    if (active === false) setArping({
      value: 'not arping',
      src: '/icons/negative.svg'
    })
  }
  setInterval(update, 2000);
  return (
    <React.StrictMode>
      <nav>
        <h1><span>Arp </span>Interface</h1>
        <section>
          <div>
            <img src={status.src} alt="status" />
            <h2>{status.value}</h2>
          </div>
          <div>
            <img src={arping.src} alt="arping" />
            <h2>{arping.value}</h2>
          </div>
        </section>
      </nav>
      <main>
        <h1>Saved Victims</h1>
        <div className="loading">
          <div></div>
          <div></div>
          <div></div>
        </div>
        {}
      </main>
    </React.StrictMode>
  );
}

export default App;