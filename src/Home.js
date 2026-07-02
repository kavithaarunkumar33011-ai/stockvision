import { useState } from 'react';

function Home({ onSearch, darkMode }) {
  const [input, setInput] = useState('');
  
  const trendingStocks = ['AAPL', 'MSFT', 'GOOGL', 'TSLA', 'AMZN', 'NVDA'];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSearch(input.toUpperCase());
    }
  };

  const stats = [
    { label: 'Live Stocks', value: '5000+' },
    { label: 'Data Points', value: '1M+' },
    { label: 'Update Speed', value: 'Real-time' },
    { label: 'Accuracy', value: '99.9%' }
  ];

  const features = [
    { 
      icon: '⚡', 
      title: 'Real-Time Market Data', 
      desc: 'Get live stock prices powered by Alpha Vantage API. Track your favorite stocks instantly.' 
    },
    { 
      icon: '📊', 
      title: 'Interactive Charts', 
      desc: 'Visualize trends with smooth Chart.js graphs. Zoom, hover and analyze patterns.' 
    },
    { 
      icon: '🎯', 
      title: 'Smart Time Filters', 
      desc: 'Switch between 1D, 1W, 1M, 1Y views. Understand short-term and long-term trends.' 
    },
    { 
      icon: '🌙', 
      title: 'Dark Mode Support', 
      desc: 'Reduce eye strain during long research sessions. Toggle between light and dark themes.' 
    },
    { 
      icon: '🌍', 
      title: 'Global Market Clock', 
      desc: 'Track NYSE, LSE, TSE & NSE timings in real-time. Know when markets open worldwide.' 
    },
    { 
      icon: '📰', 
      title: 'Latest Market News', 
      desc: 'Stay updated with real-time financial news. Get insights before making investment decisions.' 
    }
  ];

  return (
    <div style={{ 
      background: darkMode? '#0f172a' : '#ffffff',
      minHeight: '100vh'
    }}>
      
      {/* Hero Section - Sensibull Style */}
      <div style={{ 
        padding: '80px 20px 60px',
        textAlign: 'center',
        background: darkMode 
          ? 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)' 
          : 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)'
      }}>
        <h1 style={{ 
          fontSize: '56px', 
          fontWeight: '800',
          marginBottom: '20px',
          color: darkMode? '#f1f5f9' : '#0f172a',
          lineHeight: '1.1'
        }}>
          Stock Market <span style={{ color: 'yellow' }}>Made Simple</span>
        </h1>
        <p style={{ 
          fontSize: '20px', 
          color: darkMode? '#94a3b8' : '#64748b',
          marginBottom: '40px',
          maxWidth: '600px',
          margin: '0 auto 40px'
        }}>
          Track real-time prices, analyze trends, and make informed decisions with our powerful dashboard
        </p>

        {/* Search Bar - Big CTA */}
        <form onSubmit={handleSubmit} style={{ marginBottom: '30px' }}>
          <div style={{ 
            display: 'flex', 
            gap: '12px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Search any stock - ex: AAPL, TSLA"
              style={{
                padding: '18px 28px',
                fontSize: '16px',
                width: '400px',
                maxWidth: '90vw',
                borderRadius: '12px',
                border: `2px solid ${darkMode? '#334155' : '#e2e8f0'}`,
                background: darkMode? '#1e293b' : '#fff',
                color: darkMode? '#f1f5f9' : '#0f172a',
                outline: 'none'
              }}
            />
            <button
              type="submit"
              style={{
                padding: '18px 36px',
                fontSize: '16px',
                borderRadius: '12px',
                border: 'none',
                background: '#10B981',
                color: 'white',
                cursor: 'pointer',
                fontWeight: '700',
                boxShadow: '0 4px 14px rgba(16, 185, 129, 0.4)'
              }}
            >
              Explore Stocks →
            </button>
          </div>
        </form>

        {/* Trending Stocks Pills */}
        <div style={{ marginTop: '20px' }}>
          <p style={{ 
            fontSize: '14px', 
            color: darkMode? '#64748b' : '#94a3b8',
            marginBottom: '12px'
          }}>
            Popular:
          </p>
          <div style={{ 
            display: 'flex', 
            gap: '8px', 
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            {trendingStocks.map((stock) => (
              <button
                key={stock}
                onClick={() => onSearch(stock)}
                style={{
                  padding: '8px 16px',
                  borderRadius: '20px',
                  border: `1px solid ${darkMode? '#334155' : '#e2e8f0'}`,
                  background: darkMode? '#1e293b' : '#f8fafc',
                  color: darkMode? '#cbd5e1' : '#475569',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: '600'
                }}
              >
                {stock}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Bar - Sensibull Style */}
      <div style={{ 
        padding: '40px 20px',
        borderTop: `1px solid ${darkMode? '#1e293b' : '#e2e8f0'}`,
        borderBottom: `1px solid ${darkMode? '#1e293b' : '#e2e8f0'}`,
        background: darkMode? '#1e293b' : '#f8fafc'
      }}>
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '40px',
          maxWidth: '1000px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          {stats.map((stat) => (
            <div key={stat.label}>
              <div style={{ 
                fontSize: '36px', 
                fontWeight: '800',
                color: '#10B981',
                marginBottom: '8px'
              }}>
                {stat.value}
              </div>
              <div style={{ 
                fontSize: '14px',
                color: darkMode? '#94a3b8' : '#64748b',
                fontWeight: '500'
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Grid - Sensibull Style */}
      <div style={{ padding: '80px 20px' }}>
        <h2 style={{ 
          textAlign: 'center',
          fontSize: '40px',
          fontWeight: '800',
          marginBottom: '60px',
          color: darkMode? '#f1f5f9' : '#0f172a'
        }}>
          Everything you need to track stocks
        </h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '30px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {features.map((feature) => (
            <div
              key={feature.title}
              style={{
                padding: '40px 30px',
                borderRadius: '16px',
                border: `1px solid ${darkMode? '#334155' : '#e2e8f0'}`,
                background: darkMode? '#1e293b' : '#ffffff',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{ fontSize: '48px', marginBottom: '20px' }}>{feature.icon}</div>
              <h3 style={{ 
                fontSize: '20px',
                fontWeight: '700',
                marginBottom: '12px',
                color: darkMode? '#f1f5f9' : '#0f172a'
              }}>
                {feature.title}
              </h3>
              <p style={{ 
                color: darkMode? '#94a3b8' : '#64748b', 
                fontSize: '15px',
                lineHeight: '1.6'
              }}>
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div style={{ 
        padding: '60px 20px 80px',
        textAlign: 'center',
        background: darkMode? '#1e293b' : '#f8fafc'
      }}>
        <h2 style={{ 
          fontSize: '32px',
          fontWeight: '700',
          marginBottom: '20px',
          color: darkMode? '#f1f5f9' : '#0f172a'
        }}>
          Ready to start tracking?
        </h2>
        <button
          onClick={() => onSearch('AAPL')}
          style={{
            padding: '16px 40px',
            fontSize: '16px',
            borderRadius: '12px',
            border: 'none',
            background: '#10B981',
            color: 'white',
            cursor: 'pointer',
            fontWeight: '700',
            boxShadow: '0 4px 14px rgba(16, 185, 129, 0.4)'
          }}
        >
          View Demo Stock →
        </button>
      </div>

    </div>
  );
}

export default Home;