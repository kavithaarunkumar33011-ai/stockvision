import { useState, useEffect, useMemo } from 'react'; // ← Idhu MUKKIYAM!
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function StockChart({ symbol, darkMode }) {
      console.log('StockChart mounted! Symbol:', symbol);
  const [stockData, setStockData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [range, setRange] = useState('1M'); // ← IMPORTANT

  useEffect(() => {
  console.log('API Key:', process.env.REACT_APP_ALPHA_VANTAGE_KEY?.slice(0,5) + '...');
  console.log('2. useEffect START - Symbol:', symbol);

  if (!symbol) {
    console.log('3. No symbol');
    setLoading(false);
    return;
  }

  console.log('4. About to fetch');
  setLoading(true);

  axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${process.env.REACT_APP_ALPHA_VANTAGE_KEY}`)
   .then(res => {
      console.log('5. API Response:', res.data);
      // alert('API Response received!'); // ← ALERT PODU
      if (res.data['Time Series (Daily)']) {
        setStockData(res.data['Time Series (Daily)']);
      } else {
        setError('No data');
      }
    })
   .catch(err => {
      console.log('6. Error:', err);
      // alert('API Error: ' + err.message);
      setError('Failed');
    })
   .finally(() => {
      setLoading(false);
    });
}, [symbol]);
  const chartData = useMemo(() => {
    if (!stockData) return null;

    const rangeMap = { '1D': 1, '1W': 7, '1M': 30, '1Y': 365 };
    const days = rangeMap[range] || 30; // ← range use aagudhu

    const dates = Object.keys(stockData).slice(0, days).reverse();
    const prices = dates.map(date => parseFloat(stockData[date]['4. close']));

    return {
      labels: dates,
      datasets: [{
        label: `${symbol} Price`,
        data: prices,
        borderColor: darkMode? '#34d399' : '#10B981',
        backgroundColor: darkMode? 'rgba(52, 211, 153, 0.1)' : 'rgba(16, 185, 129, 0.1)',
        tension: 0.3
      }]
    };
  }, [stockData, symbol, range, darkMode]); // ← range dependency

  const options = { // ← options define pannirukom
    plugins: {
      legend: {
        labels: { color: darkMode? '#f9fafb' : '#1f2937' }
      }
    },
    scales: {
      x: { ticks: { color: darkMode? '#9ca3af' : '#6b7280' } },
      y: { ticks: { color: darkMode? '#9ca3af' : '#6b7280' } }
    }
  };

  if (loading) return (
    <div style={{ textAlign: 'center', padding: '60px' }}>
      <h3 style={{ color: darkMode? '#f9fafb' : '#1f2937' }}>
        Loading {symbol} data... 🔄
      </h3>
    </div>
  );

  if (error) return (
    <div style={{ textAlign: 'center', padding: '60px' }}>
      <h3 style={{ color: '#ef4444' }}>⚠️ {error}</h3>
      <p style={{ color: darkMode? '#9ca3af' : '#6b7280' }}>
        Try: AAPL, MSFT, GOOGL or wait 1 minute for API limit reset
      </p>
    </div>
  );

  if (!chartData) return (
    <div style={{ textAlign: 'center', padding: '60px' }}>
      <h3 style={{ color: darkMode? '#f9fafb' : '#1f2937' }}>
        No Data Found for {symbol}
      </h3>
    </div>
  );

  return (
    <div style={{ width: '80%', margin: 'auto' }}>
      <div style={{ marginBottom: '20px' }}>
        {['1D', '1W', '1M', '1Y'].map((r) => (
          <button key={r} onClick={() => setRange(r)} // ← setRange use aagudhu
            style={{
              margin: '5px', padding: '8px 16px',
              background: range === r? '#10B981' : (darkMode? '#374151' : '#e5e7eb'), // ← range use aagudhu
              color: range === r? 'white' : (darkMode? '#f9fafb' : 'black'), // ← range use aagudhu
              border: 'none', borderRadius: '6px', cursor: 'pointer'
            }}
          >
            {r}
          </button>
        ))}
      </div>

      <Line data={chartData} options={options} /> {/* ← options use aagudhu */}
    </div>
  );
}

export default StockChart;