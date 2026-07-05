import { useEffect, useState } from 'react'

function App() {
    const [status, setStatus] = useState('checking...');

  useEffect(() => {
    fetch('http://localhost:8000/health')
      .then((res) => res.json())
      .then((data) => setStatus(data.status))
      .catch(() => setStatus('backend unreachable'));
  }, []);

  return <div>Backend status: {status}</div>;
}

export default App
