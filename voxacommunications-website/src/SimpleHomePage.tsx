import React from 'react';
import './SimpleHomePage.css';
import { DecryptedText, TypewriterText, FadeUpText, SlideInText } from './components/AnimatedText';
import './components/AnimatedText.css';
import { WireframeGlobe } from './components/ThreeWireframeGlobe';
import { TiltedCards } from './components/TiltedCards';
import SponsorsSection from './components/SponsorsSection';

const SimpleHomePage: React.FC = () => {
  return (
    <div className="homepage">
      <WireframeGlobe />
      <TiltedCards />
      {/* Navigation */}
      <nav className="nav">
        <SlideInText direction="left">
          <div className="logo">
            <img src="/mainlogo.png" alt="VoxaCommunications Logo" style={{width: '2rem', height: '2rem'}} />
            <span>VoxaCommunications</span>
          </div>
        </SlideInText>
        <SlideInText direction="right">
          <div className="nav-links">
            <a href="#about" className="nav-link">About</a>
            <a href="#solutions" className="nav-link">Solutions</a>
            <a href="#contact" className="nav-link">Contact</a>
            <a href="https://voxacommunications-docs.pages.dev/learn/getting-started" className="cta-button">Get Started</a>
          </div>
        </SlideInText>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <FadeUpText>
          <h1>
            <TypewriterText text="Decentralizing the Future of" speed={70} />
            <span className="highlight">
              <DecryptedText text=" Container Infrastructure" delay={2000} />
            </span>
          </h1>
        </FadeUpText>
        <SlideInText direction="up" delay={0.5}>
          <p>
            Revolutionizing how containers and blockchain technology work together. 
            Voxa Communications builds the next generation of decentralized infrastructure 
            that's secure, scalable, and truly distributed.
          </p>
        </SlideInText>
        <FadeUpText delay={1}>
          <div className="hero-buttons">
            <a href="https://voxacommunications-docs.pages.dev/general/services/" className="primary-button">Explore Our Platform</a>
            <a href="https://voxacommunications-docs.pages.dev/learn/about/" className="secondary-button">
              Learn more →
            </a>
          </div>
        </FadeUpText>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="features-container">
          <SlideInText direction="up">
            <div className="features-header">
              <h2>Decentralized Container Solutions</h2>
              <p>
                Our cutting-edge platform combines container orchestration with blockchain technology 
                to create truly decentralized, secure, and scalable infrastructure.
              </p>
            </div>
          </SlideInText>
          <div className="features-grid">
            <FadeUpText delay={0.2}>
              <div className="feature-card">
                <div className="feature-icon">🔗</div>
                <h3>Decentralized Container Orchestration</h3>
                <p>
                  Deploy and manage containers across a distributed network without central points of failure. 
                  Our blockchain-based orchestration ensures high availability and censorship resistance.
                </p>
              </div>
            </FadeUpText>
            <FadeUpText delay={0.4}>
              <div className="feature-card">
                <div className="feature-icon">🔐</div>
                <h3>
                  <DecryptedText text="Blockchain-Secured Infrastructure" className="decrypted-text" delay={3} />
                </h3>
                <p>
                  Every container deployment is cryptographically signed and verified on the blockchain, 
                  ensuring integrity and creating an immutable audit trail.
                </p>
              </div>
            </FadeUpText>
            <FadeUpText delay={0.6}>
              <div className="feature-card">
                <div className="feature-icon">🌐</div>
                <h3>Peer-to-Peer Networking</h3>
                <p>
                  Containers communicate directly through encrypted P2P channels, eliminating traditional 
                  network bottlenecks and reducing latency.
                </p>
              </div>
            </FadeUpText>
            <FadeUpText delay={0.8}>
              <div className="feature-card">
                <div className="feature-icon">☁️</div>
                <h3>Distributed Storage</h3>
                <p>
                  Container images and persistent data are distributed across the network using 
                  content-addressed storage, ensuring data availability and redundancy.
                </p>
              </div>
            </FadeUpText>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="hero">
        <SlideInText direction="up">
          <h2 style={{fontSize: '2.5rem', marginBottom: '1rem'}}>
            Ready to Decentralize Your Infrastructure?
          </h2>
        </SlideInText>
        <FadeUpText delay={0.3}>
          <p>
            Join the revolution in container orchestration. Build applications that are truly 
            decentralized, secure, and resistant to censorship.
          </p>
        </FadeUpText>
        <FadeUpText delay={0.6}>
          <div className="hero-buttons">
            <button className="primary-button">Start Building</button>
            <a href="https://voxacommunications-docs.pages.dev/" className="secondary-button">
              Read Documentation
            </a>
          </div>
        </FadeUpText>
      </section>

      {/* Sponsors Section */}
      <SponsorsSection />

      {/* Footer */}
      <footer className="footer">
        <FadeUpText>
          <div className="footer-content">
            <div className="footer-logo">
              <img src="/mainlogo.png" alt="Voxa Communications Logo" style={{width: '1.5rem', height: '1.5rem'}} />
              <span>© 2025 Voxa Communications. All rights reserved.</span>
            </div>
            <div className="social-links">
              <a href="https://patreon.com/VoxaCommunications" className="social-link" aria-label="Patreon" target="_blank" rel="noopener noreferrer">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M0 .48v23.04h4.22V.48zm15.385 0c-4.764 0-8.641 3.88-8.641 8.65 0 4.755 3.877 8.623 8.641 8.623 4.75 0 8.615-3.868 8.615-8.623C24 4.36 20.136.48 15.385.48z" />
                </svg>
              </a>
              <a href="https://t.me/voxacommunications" className="social-link" aria-label="Telegram" target="_blank" rel="noopener noreferrer">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </a>
              <a href="https://discord.gg/EDtPX5E4D4" className="social-link" aria-label="Discord" target="_blank" rel="noopener noreferrer">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0002 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9554 2.4189-2.1568 2.4189Z"/>
                </svg>
              </a>
              <a href="https://dev.to/voxacommunications" className="social-link" aria-label="Dev.to Organization" target="_blank" rel="noopener noreferrer">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45c.56-.02.94-.06 1.13-.14.2-.09.33-.23.4-.43.07-.2.11-.49.11-.86 0-.42-.05-.74-.14-.96-.09-.2-.25-.35-.45-.51zm15.44-4.334c0-1.096-.623-2.065-1.606-2.493L5.31 2.28C4.037 1.785 2.641 2.36 2.145 3.634L.22 9.29c-.496 1.274.08 2.671 1.353 3.166l15.946 5.516c1.274.495 2.671-.08 3.166-1.353l1.925-5.656c.495-1.274-.08-2.671-1.354-3.166L5.31 2.28zm-3.567 5.156l-.055-.4c-.01-.08-.02-.16-.04-.24-.22-1.19-.73-1.79-1.53-1.79-.8 0-1.31.6-1.53 1.79-.02.08-.03.16-.04.24l-.055.4c-.02.12-.02.24-.02.36 0 .12 0 .24.02.36l.055.4c.01.08.02.16.04.24.22 1.19.73 1.79 1.53 1.79.8 0 1.31-.6 1.53-1.79.02-.08.03-.16.04-.24l.055-.4c.02-.12.02-.24.02-.36 0-.12 0-.24-.02-.36z"/>
                </svg>
              </a>
              <a href="https://dev.to/voxacommunications-account" className="social-link" aria-label="Dev.to Account" target="_blank" rel="noopener noreferrer">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45c.56-.02.94-.06 1.13-.14.2-.09.33-.23.4-.43.07-.2.11-.49.11-.86 0-.42-.05-.74-.14-.96-.09-.2-.25-.35-.45-.51zm15.44-4.334c0-1.096-.623-2.065-1.606-2.493L5.31 2.28C4.037 1.785 2.641 2.36 2.145 3.634L.22 9.29c-.496 1.274.08 2.671 1.353 3.166l15.946 5.516c1.274.495 2.671-.08 3.166-1.353l1.925-5.656c.495-1.274-.08-2.671-1.354-3.166L5.31 2.28zm-3.567 5.156l-.055-.4c-.01-.08-.02-.16-.04-.24-.22-1.19-.73-1.79-1.53-1.79-.8 0-1.31.6-1.53 1.79-.02.08-.03.16-.04.24l-.055.4c-.02.12-.02.24-.02.36 0 .12 0 .24.02.36l.055.4c.01.08.02.16.04.24.22 1.19.73 1.79 1.53 1.79.8 0 1.31-.6 1.53-1.79.02-.08.03-.16.04-.24l.055-.4c.02-.12.02-.24.02-.36 0-.12 0-.24-.02-.36z"/>
                  <circle cx="18" cy="6" r="3" fill="red"/>
                </svg>
              </a>
              <button className="social-link" aria-label="Twitter">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </button>
              <a href="https://github.com/Voxa-Communications" className="social-link" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <button className="social-link" aria-label="LinkedIn">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </FadeUpText>
      </footer>
    </div>
  );
};

export default SimpleHomePage;
