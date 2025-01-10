import './App.css';

function App() {
  const airdrops = [
    { name: 'Airdrop 1', link: 'https://t.me/airdrop1' },
    { name: 'Airdrop 2', link: 'https://t.me/airdrop2' },
    { name: 'Airdrop 3', link: 'https://t.me/airdrop3' },
  ];

  return (
    <div className="container">
      <header className="header">
        <h1 className="title">🌟 Airdrop Potensial 2025 🌟</h1>
        <p className="subtitle">
          Temukan airdrop terbaru dan paling menjanjikan! Klik untuk bergabung dengan komunitas Telegram.
        </p>
      </header>

      <main className="main">
        <ul className="airdrop-list">
          {airdrops.map((airdrop, index) => (
            <li key={index} className="airdrop-item">
              <a href={airdrop.link} target="_blank" rel="noopener noreferrer">
                {airdrop.name}
              </a>
            </li>
          ))}
        </ul>
      </main>

      <footer className="footer">
        <p>✨ Dibuat dengan ❤️ oleh Tim Airdrop Hunter ✨</p>
      </footer>
    </div>
  );
}

export default App;
