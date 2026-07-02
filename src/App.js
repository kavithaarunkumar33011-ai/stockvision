import { useState,useEffect } from 'react'; // ← Dark mode ku
import Home from './Home'; // ← Idhu
import StockChart from './StockChart';
import WorldClock from './WorldClock';
import StockNews from './StockNews'; // ← Idhu

function App() {
  const [symbol, setSymbol] = useState('');
  const [darkMode, setDarkMode] = useState(false);


  useEffect(() => {
    document.body.className = darkMode? 'dark' : 'light';
  }, [darkMode]);

  const handleSearch = (newSymbol) => {
    setSymbol(newSymbol);
  };

  return (
    <div className="App">
      {/* Header - Sensibull Style Sticky */}
      <div style={{ 
        position: 'sticky',
        top: 0,
        zIndex: 100,
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        padding: '16px 40px',
        borderBottom: `1px solid ${darkMode? '#1e293b' : '#e2e8f0'}`,
        background: darkMode? '#0f172a' : '#ffffff',
        backdropFilter: 'blur(10px)'
      }}>
        <h2 
          onClick={() => setSymbol('')}
          style={{ 
            cursor: 'pointer', 
            margin: 0,
            fontSize: '24px',
            fontWeight: '800',
            color: darkMode? '#f1f5f9' : '#0f172a'
          }}
        >
          📈 StockVision
        </h2>
        <button
          onClick={() => setDarkMode(!darkMode)}
          style={{
            padding: '10px 20px',
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer',
            background: darkMode? '#fbbf24' : '#1e293b',
            color: darkMode? '#000' : '#fff',
            fontWeight: '600'
          }}
        >
          {darkMode? '☀️ Light' : '🌙 Dark'}
        </button>
      </div>

      {/* Conditional Render */}
      {symbol === ''? (
        <Home onSearch={handleSearch} darkMode={darkMode} />
      ) : (
        <div style={{ padding: '40px 20px' }}>
          <button 
            onClick={() => setSymbol('')}
            style={{
              marginBottom: '30px',
              padding: '10px 20px',
              borderRadius: '8px',
              border: 'none',
              background: darkMode? '#334155' : '#e2e8f0',
              color: darkMode? '#f1f5f9' : '#0f172a',
              cursor: 'pointer',
              fontWeight: '600'
            }}
          >
            ← Back to Home
          </button>
          <WorldClock darkMode={darkMode} /> 
          <StockChart symbol={symbol} darkMode={darkMode} />
          <StockNews symbol={symbol} darkMode={darkMode} />
        </div>
      )}
    </div>
  );
}

export default App;