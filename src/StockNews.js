import { useState, useEffect } from 'react';

const StockNews = ({ symbol, darkMode }) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!symbol) return;

    setLoading(true);
    console.log('NEWS: Using mock data for', symbol);

    // Simulate API delay
    setTimeout(() => {
      const mockNews = [
        {
          title: `${symbol} Reports Strong Q4 Earnings, Beats Estimates`,
          url: '#',
          summary: `${symbol} announced quarterly results that exceeded analyst expectations, with revenue growth of 12% year-over-year driven by strong product demand and market expansion.`,
          source: 'Market Watch',
          time_published: '20260630T100000'
        },
        {
          title: `Analysts Upgrade ${symbol} to 'Buy' Rating`,
          url: '#',
          summary: `Major investment firms have upgraded ${symbol} citing improved fundamentals, innovative product pipeline, and positive market sentiment for the upcoming fiscal year.`,
          source: 'Reuters',
          time_published: '20260629T143000'
        },
        {
          title: `${symbol} Announces New Product Launch Next Quarter`,
          url: '#',
          summary: `The company revealed plans for a groundbreaking product release that industry experts believe could significantly impact market share and revenue streams.`,
          source: 'Bloomberg',
          time_published: '20260628T090000'
        },
        {
          title: `${symbol} Stock Volatility Increases Amid Market Uncertainty`,
          url: '#',
          summary: `Trading volumes for ${symbol} have surged as investors react to broader market conditions and sector-specific developments affecting tech stocks.`,
          source: 'CNBC',
          time_published: '20260627T160000'
        },
        {
          title: `CEO of ${symbol} Discusses Future Growth Strategy`,
          url: '#',
          summary: `In a recent interview, the CEO outlined ambitious expansion plans focusing on emerging markets, AI integration, and sustainable business practices.`,
          source: 'Financial Times',
          time_published: '20260626T110000'
        }
      ];

      setNews(mockNews);
      setLoading(false);
      console.log('NEWS: Mock data loaded');
    }, 800);
  }, [symbol]);

  if (loading) return (
    <div style={{ marginTop: '30px', textAlign: 'center', color: darkMode? '#ccc' : '#666' }}>
      <p>📰 Loading news...</p>
    </div>
  );

  return (
    <div style={{ marginTop: '30px' }}>
      <h3 style={{ color: darkMode? '#fff' : '#000', marginBottom: '15px' }}>
        📰 Latest News - {symbol} <span style={{ fontSize: '12px', opacity: 0.6 }}>(Demo Data)</span>
      </h3>
      {news.map((item, idx) => (
        <div key={idx} style={{
          background: darkMode? '#2d2d2d' : '#fff',
          padding: '16px',
          margin: '12px 0',
          borderRadius: '10px',
          border: `1px solid ${darkMode? '#444' : '#e5e7eb'}`
        }}>
          <h4 style={{
            margin: '0 0 8px 0',
            color: darkMode? '#4ade80' : '#2563eb',
            fontSize: '16px'
          }}>
            {item.title}
          </h4>
          <p style={{
            color: darkMode? '#ccc' : '#666',
            fontSize: '14px',
            margin: '8px 0',
            lineHeight: '1.5'
          }}>
            {item.summary}
          </p>
          <div style={{ fontSize: '12px', color: darkMode? '#999' : '#888' }}>
            {item.source} | {new Date(
              item.time_published.slice(0,4),
              item.time_published.slice(4,6) - 1,
              item.time_published.slice(6,8)
            ).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StockNews;