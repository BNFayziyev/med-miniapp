import React, { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      const tgUser = window.Telegram.WebApp.initDataUnsafe?.user;
      setUser(tgUser);
    }
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>📚 Med Mini ilovasi</h1>
      {user ? (
        <p>Assalomu alaykum, <strong>{user.first_name}</strong>!</p>
      ) : (
        <p>Telegram orqali mini ilovani oching.</p>
      )}
    </div>
  );
}

export default App;
