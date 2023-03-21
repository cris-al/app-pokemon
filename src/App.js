import LandingPage from 'Components/LandingPage/LandingPage';
import Main from 'Components/Main/Main';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div className="App">
      { loading ? <LandingPage />
                : <Main /> }
    </div>
  );
}

export default App;
