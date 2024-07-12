import logo from './logo.svg';
import './App.css';

import { useState } from 'react';

function App() {

  const [userId, setUserId] = useState(' ');
  const [username, setUsername] = useState(' ');

  const getTelegramData = () => {
    const tg = window.Telegram.WebApp;

    const userId_ = tg.initDataUnsafe.user.id;
    setUserId(userId_);
    const username_ = tg.initDataUnsafe.user.username;
    setUsername(username_);

  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div style={{
          display: 'flex',
          justifyContent: "space-between",
          gap: '10px',
        }}>

          <div>
            <button type="button" onClick={getTelegramData}>用户ID</button>
            <div style={{
              fontSize: '12px',
            }}>{userId}</div>
          </div>


          <div>
            <button type="button" onClick={getTelegramData}>用户名</button>
            <div style={{
              fontSize: '12px',
            }}>{username}</div>
          </div>

          <div>
            <button type="button" onClick={() => {
              window.open('https://twitter.com');
            }}>打开推特</button>
          </div>

        </div>
      </header>
    </div>
  );
}

export default App;
