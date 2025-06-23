import React from 'react';
import './SimpleHomePage.css';
import { DecryptedText, TypewriterText, FadeUpText, SlideInText } from './components/AnimatedText';
import './components/AnimatedText.css';
import { WireframeGlobe } from './components/ThreeWireframeGlobe';
import { TiltedCards } from './components/TiltedCards';

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
            <button className="cta-button">Get Started</button>
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
            <button className="primary-button">Explore Our Platform</button>
            <a href="#learn" className="secondary-button">
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
            <a href="#docs" className="secondary-button">
              Read Documentation
            </a>
          </div>
        </FadeUpText>
      </section>

      {/* Footer */}
      <footer className="footer">
        <FadeUpText>
          <div className="footer-content">
            <div className="footer-logo">
              <img src="/mainlogo.png" alt="Voxa Communications Logo" style={{width: '1.5rem', height: '1.5rem'}} />
              <span>© 2025 Voxa Communications. All rights reserved.</span>
            </div>
            <div className="social-links">
              <button className="social-link" aria-label="Twitter">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </button>
              <button className="social-link" aria-label="GitHub">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </button>
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
