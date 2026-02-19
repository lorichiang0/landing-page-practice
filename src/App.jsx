import { useState, useEffect } from 'react'
import heroVideo from "./assets/axonvideo35.mp4"
import video from './assets/axonadvideo.mp4'
import './App.css'
import logo1 from './assets/prose.jpg'
import logo2 from './assets/hexclad.png'
import logo3 from './assets/maelys.png'
import logo4 from './assets/comfrt.png'
import logo5 from './assets/homechef.png'
import logo6 from './assets/portlandleather.jpeg'
import logo7 from './assets/plateful.jpeg'
import axonLogo from './assets/logoaxon.svg'
import posthog from 'posthog-js'


function CaseStudyCard({ company, logo, achievement }) {
  return (
    <div style={{
      background: '#2e31605b',
      border: '2px solid #3240a9',
      borderRadius: '12px',
      padding: '24px',
      display: 'flex',
      flexDirection: 'column',
      width: '280px',
      height: '180px',
      gap: '12px',
      minWidth: '280px',
      flexShrink: 0
    }}>
      <img src={logo} alt={company} style={{
        width: '40px', height: '40px', objectFit: 'contain',
        background: 'white', borderRadius: '8px', padding: '4px'
      }} />
      <h3 style={{ color: 'white', margin: 0, fontSize: '18px' }}>{company}</h3>
      <p style={{ color: '#ffffff', margin: 0, fontWeight: 'bold', fontSize: '16px' }}>{achievement}</p>
    </div>
  )
}

function App() {
  const path = window.location.pathname;

  let pageTitle = "True Classic scaled to 6-figure profitable daily spend";
  let kicker = "Our ad platform can deliver results like these";
  let refTag = "control";
  let showCountdown = false;
  let showResults = false;
  let ctaText = "Get started";

  if (path === '/variant-1') {
    pageTitle = "Stop the scroll. Start the sale.";
    kicker = "Axon ads are full-screen, unskippable, and watched for an average of 35 seconds — longer than most TV commercials.";
    refTag = "v1";
    showCountdown = true;
    ctaText = "Claim your credit";
  }

  if (path === '/variant-2') {
    pageTitle = "Your ads. 1B+ players. Every day.";
    kicker = "";
    refTag = "v2";
    showResults = true;
    ctaText = "Claim your spot";
  }

  const targetDate = new Date('2026-02-28T23:59:59');
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = targetDate - now;
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000)
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCTA = () => {
  posthog.capture('signed_up', { variant: refTag })
  window.location.href = `https://ads.axon.ai/auth/signup?ref=${refTag}&_gl=1*utwu0a*_gcl_aw*R0NMLjE3NzE0NDg4NjIuQ2p3S0NBaUFuY3ZNQmhCRUVpd0E5R1VfZmptbEF3V29zWG5KX24ydXpRMThPRnN5QUdZWGVVOUNwVU1YdFlJTmpUbG9MZ1J3ZERBbVNCb0NDSEFRQXZEX0J3RQ..*_gcl_au*NjQzMDE4NDc5LjE3NzA3Njg4ODMuMjA1NDQ0MTc3OC4xNzcxMzA5MDE3LjE3NzEzMDkwMjc.*_ga*Njk5NjI2MjIxLjE3NzA3Njg4ODI.*_ga_DNHMW0EH4R*czE3NzE0NDY2MjIkbzIxJGcxJHQxNzcxNDQ5NjA0JGo1NyRsMCRoMA..&utm_medium=ads&utm_campaign=%7Bcampaign.id%7D&gclid=CjwKCAiAncvMBhBEEiwA9GU_fuLImbDcKU61e3iOz_6uh8zvOfVyeCdR5HFKWq5KeLDuq1QEG6OTGhoCcCYQAvD_BwE`
}

  const cardData = [
    { company: 'Prose', logo: logo1, achievement: 'Prose achieved a 65% lower CPIA with Axon' },
    { company: 'HexClad', logo: logo2, achievement: 'HexClad drove $1M+ incremental revenue in 3 weeks' },
    { company: 'MAËLYS', logo: logo3, achievement: 'MAËLYS scaled to $200k/day spend within one week of launch' },
    { company: 'Comfrt', logo: logo4, achievement: 'Comfrt sold 400k+ hoodies with Axon' },
    { company: 'Plateful', logo: logo7, achievement: 'Plateful scaled to $40k+/day spend at a consistent ROAS' },
    { company: 'Home Chef', logo: logo5, achievement: 'Home Chef makes Axon one of their 3 biggest channels' },
    { company: 'Portland Leather', logo: logo6, achievement: 'Portland Leather boosted purchases by 130k+' },
  ];

  const ctaButtonStyle = {
    background: '#1B4FFF',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '18px',
    fontWeight: '600',
    cursor: 'pointer'
  };

  const ctaHover = {
    enter: (e) => { e.target.style.background = '#ffffff'; e.target.style.color = '#1B4FFF'; },
    leave: (e) => { e.target.style.background = '#1B4FFF'; e.target.style.color = 'white'; }
  };

  return (
    <div className="landing-page">

      {/* ===== NAVBAR ===== */}
      <nav className="navbar">
        <img src={axonLogo} alt="Axon" style={{ height: '32px' }} />
        <div className="nav-menu">
          <span>Contact us</span>
          <span>Log in</span>
          <button className="signup-btn" onClick={handleCTA}>Sign up</button>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <main className={path === '/variant-2' ? "hero-section hero-section--vertical" : "hero-section"}>
        <div className="hero-left">
          <h1 className="main-title">{pageTitle}</h1>
          <p className="kicker">{kicker}</p>

          {/* variant-2 only */}
          {path === '/variant-2' && (
            <>
              <p className="variant2-subtitle">
                One ad. Three formats. Better results. — Average view time: <strong style={{ color: 'white' }}>35s</strong>
              </p>
              <video autoPlay loop muted playsInline style={{ width: '100%', borderRadius: '20px', marginTop: '10px', marginBottom: '30px' }}>
                <source src={video} type="video/mp4" />
              </video>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', margin: '20px 0' }}>
                <div style={{ display: 'flex' }}>
                  {[logo1, logo2, logo3, logo4].map((src, i) => (
                    <img key={i} src={src} style={{
                      width: '36px', height: '36px', borderRadius: '50%',
                      border: '2px solid #000', marginLeft: i === 0 ? '0' : '-10px', objectFit: 'cover'
                    }} />
                  ))}
                </div>
                <p style={{ margin: 0, color: '#aaa', fontSize: '16px' }}>
                  Supporting over <strong style={{ color: 'white' }}>+1,500 brands</strong> worldwide
                </p>
              </div>
            </>
          )}

          {/* CTA banner (all variants) */}
          <div className="purple-banner">
            <p>$5K in free ad credit. Spend $5K in your first 60 days.</p>
            <button className="cta-btn" onClick={handleCTA}>{ctaText}</button>
          </div>

          {/* variant-1 only: countdown */}
          {showCountdown && (
            <div className="countdown">
              <span className="countdown-label">Offer expires in</span>
              <div className="countdown-timer">
                <div className="countdown-item">
                  <span className="countdown-number">{timeLeft.days}</span>
                  <span className="countdown-unit">days</span>
                </div>
                <span className="countdown-colon">:</span>
                <div className="countdown-item">
                  <span className="countdown-number">{timeLeft.hours}</span>
                  <span className="countdown-unit">hrs</span>
                </div>
                <span className="countdown-colon">:</span>
                <div className="countdown-item">
                  <span className="countdown-number">{timeLeft.minutes}</span>
                  <span className="countdown-unit">min</span>
                </div>
                <span className="countdown-colon">:</span>
                <div className="countdown-item">
                  <span className="countdown-number">{timeLeft.seconds}</span>
                  <span className="countdown-unit">sec</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* control / variant-1: right side video */}
        {path !== '/variant-2' && (
          <div className="hero-right">
            <div className="glow-effect"></div>
            <div className="phone-mockup">
              <video autoPlay loop muted playsInline width="400">
                <source src={heroVideo} type="video/mp4" />
              </video>
            </div>
          </div>
        )}
      </main>

      {/* ===== VARIANT-1 SECTIONS ===== */}
      {path === '/variant-1' && (
        <>
          <div className="stats-bar">
            <div className="stat-item"><span className="stat-number">1,500+</span><span className="stat-label">active advertisers</span></div>
            <div className="stat-divider"></div>
            <div className="stat-item"><span className="stat-number">$2B+</span><span className="stat-label">revenue driven</span></div>
            <div className="stat-divider"></div>
            <div className="stat-item"><span className="stat-number">1B+</span><span className="stat-label">daily users</span></div>
          </div>

          <div className="logo-marquee-wrapper">
            <div className="logo-marquee">
              {['Halara','Quince','HelloFresh','Ashley','Wayfair','prose','MAËLYS','Home Chef',
                'Halara','Quince','HelloFresh','Ashley','Wayfair','prose','MAËLYS','Home Chef'].map((name, i) => (
                <span key={i}>{name}</span>
              ))}
            </div>
          </div>

          <div style={{ padding: '60px', textAlign: 'center' }}>
            <h2 style={{ fontSize: '48px', fontWeight: '700', color: 'white', marginBottom: '20px' }}>
              Reach people in their most relaxed, receptive moments.
            </h2>
            <p style={{ color: '#aaa', fontSize: '18px', marginBottom: '40px' }}>
              Axon's AI delivers your ads to the right person, at the right moment, every time. Portrait video, Interactive Page, and Dynamic Catalog all in one ad.
            </p>
            <video autoPlay loop muted playsInline style={{ width: '100%', maxWidth: '900px', borderRadius: '20px' }}>
              <source src={video} type="video/mp4" />
            </video>
          </div>
        </>
      )}

      {/* ===== VARIANT-2 SECTIONS ===== */}
      {showResults && (
        <>
          <h3 style={{ fontSize: '48px', fontWeight: '700', color: 'white', textAlign: 'center', margin: '40px auto 20px auto' }}>
            See how far your budget can go.
          </h3>

          {/* Calculator */}
          <div style={{
            background: 'linear-gradient(135deg, #1a1a3e 0%, #2d2b69 100%)',
            border: '1px solid #ffffff', borderRadius: '16px', padding: '25px',
            margin: '40px auto 20px auto', maxWidth: '760px', width: 'calc(100% - 120px)'
          }}>
            <div style={{ display: 'flex', gap: '40px', marginBottom: '32px', flexWrap: 'wrap' }}>
              <div style={{ flex: 1, minWidth: '200px' }}>
                <p style={{ color: '#e5e5e5', fontSize: '14px', marginBottom: '8px' }}>Monthly ad budget (USD)</p>
                <input type="number" placeholder="e.g. 5000"
                  onChange={(e) => {
                    const reach = Math.round((Number(e.target.value) / 10) * 1000);
                    document.getElementById('reach-result').innerText = reach.toLocaleString();
                  }}
                  style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #444', background: '#1a1a2e', color: 'white', fontSize: '18px', boxSizing: 'border-box' }}
                />
              </div>
              <div style={{ flex: 1, minWidth: '200px' }}>
                <p style={{ color: '#e5e5e5', fontSize: '14px', marginBottom: '8px' }}>Estimated reach</p>
                <p style={{ color: 'white', fontSize: '36px', fontWeight: '700', margin: 0 }}>
                  <span id="reach-result">0</span>
                  <span style={{ fontSize: '14px', color: '#e5e5e5', marginLeft: '8px' }}>potential customers</span>
                </p>
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <button onClick={handleCTA} onMouseEnter={ctaHover.enter} onMouseLeave={ctaHover.leave}
                style={{ ...ctaButtonStyle, width: '250px', padding: '12px 30px' }}>
                Unlock your reach
              </button>
            </div>
          </div>

          {/* Cards */}
          <h2 style={{ fontSize: '48px', fontWeight: '700', color: 'white', textAlign: 'center', margin: '40px 0 20px 0' }}>
            Brands scaled with Axon
          </h2>
          <div style={{ overflow: 'hidden', position: 'relative' }}>
            <div style={{ display: 'flex', gap: '20px', padding: '24px', width: 'max-content', animation: 'cardScroll 25s linear infinite' }}>
              {[...cardData, ...cardData].map((item, i) => (
                <CaseStudyCard key={i} company={item.company} logo={item.logo} achievement={item.achievement} />
              ))}
            </div>
          </div>
        </>
      )}

      {/* ===== FINAL CTA (all variants) ===== */}
      <div style={{
        textAlign: 'center', padding: '80px 60px',
        background: 'radial-gradient(ellipse at 30% 50%, rgba(99, 102, 241, 0.3) 0%, transparent 60%), radial-gradient(ellipse at 70% 50%, rgba(139, 92, 246, 0.2) 0%, transparent 60%)',
        borderTop: '1px solid #222'
      }}>
        <p style={{ color: '#a78bfa', fontSize: '16px', fontWeight: '600', marginBottom: '16px', letterSpacing: '2px', textTransform: 'uppercase' }}>
          Exclusive access
        </p>
        <h2 style={{ fontSize: '52px', fontWeight: '700', color: 'white', marginBottom: '20px', lineHeight: '1.1' }}>
          You're one of the few.
        </h2>
        <p style={{ color: '#aaa', fontSize: '18px', maxWidth: '600px', margin: '0 auto 40px auto', lineHeight: '1.6' }}>
          Less than 1% of advertisers have access to Axon. You've been invited. Don't let your spot go to someone else.
        </p>
        <button onClick={handleCTA} onMouseEnter={ctaHover.enter} onMouseLeave={ctaHover.leave}
          style={{ ...ctaButtonStyle, padding: '16px 40px' }}>
          Claim your spot
        </button>
      </div>

    </div>
  )
}

export default App