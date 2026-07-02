import { useState, useEffect } from 'react';

const WorldClock = ({ darkMode }) => {
  const [times, setTimes] = useState({});

  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();
      setTimes({
        newyork: now.toLocaleTimeString('en-US', { timeZone: 'America/New_York', hour: '2-digit', minute: '2-digit' }),
        london: now.toLocaleTimeString('en-US', { timeZone: 'Europe/London', hour: '2-digit', minute: '2-digit' }),
        tokyo: now.toLocaleTimeString('en-US', { timeZone: 'Asia/Tokyo', hour: '2-digit', minute: '2-digit' }),
        mumbai: now.toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit' })
      });
    };

    updateTimes();
    const interval = setInterval(updateTimes, 60000);
    return () => clearInterval(interval);
  }, []);

  const markets = [
    { name: 'NYSE', time: times.newyork, flag: '🇺🇸' },
    { name: 'LSE', time: times.london, flag: '🇬🇧' },
    { name: 'TSE', time: times.tokyo, flag: '🇯🇵' },
    { name: 'NSE', time: times.mumbai, flag: '🇮🇳' }
    
  ];

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
      gap: '15px',
      margin: '20px 0'
    }}>
      {markets.map(market => (
        <div key={market.name} style={{
          background: darkMode? '#2d2d2d' : '#f8f9fa',
          padding: '15px',
          borderRadius: '12px',
          textAlign: 'center',
          border: `1px solid ${darkMode? '#444' : '#ddd'}`
        }}>
          <div style={{ fontSize: '28px' }}>{market.flag}</div>
          <div style={{ fontWeight: '600', fontSize: '14px', color: darkMode? '#fff' : '#000' }}>
            {market.name}
          </div>
          <div style={{ fontSize: '22px', fontWeight: 'bold', color: darkMode? '#4ade80' : '#2563eb', marginTop: '5px' }}>
            {market.time || '--:--'}
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorldClock;