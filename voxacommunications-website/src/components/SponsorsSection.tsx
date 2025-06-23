import React, { useState, useEffect } from 'react';
import './SponsorsSection.css';

interface Sponsor {
  name: string;
  logo: string;
  website: string;
  description: string;
}

interface SponsorTier {
  name: string;
  color: string;
  benefits: string[];
}

interface SponsorsData {
  sponsors: {
    platinum: Sponsor[];
    gold: Sponsor[];
    silver: Sponsor[];
    bronze: Sponsor[];
  };
  tiers: {
    platinum: SponsorTier;
    gold: SponsorTier;
    silver: SponsorTier;
    bronze: SponsorTier;
  };
}

const SponsorsSection: React.FC = () => {
  const [sponsorsData, setSponsorsData] = useState<SponsorsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSponsors = async () => {
      try {
        const response = await fetch('https://raw.githubusercontent.com/Voxa-Communications/.github/refs/heads/main/static/sponsors.json');
        if (!response.ok) {
          throw new Error('Failed to fetch sponsors data');
        }
        const data = await response.json();
        setSponsorsData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchSponsors();
  }, []);

  if (loading) {
    return (
      <section className="sponsors-section">
        <div className="sponsors-container">
          <h2>Our Sponsors</h2>
          <div className="loading">Loading sponsors...</div>
        </div>
      </section>
    );
  }

  if (error || !sponsorsData) {
    return (
      <section className="sponsors-section">
        <div className="sponsors-container">
          <h2>Our Sponsors</h2>
          <div className="error">Failed to load sponsors</div>
        </div>
      </section>
    );
  }

  const renderSponsorTier = (tierName: string, sponsors: Sponsor[]) => {
    if (sponsors.length === 0) return null;

    const tier = sponsorsData.tiers[tierName as keyof typeof sponsorsData.tiers];
    
    return (
      <div className={`sponsor-tier ${tierName}`} key={tierName}>
        <h3 className="tier-title" style={{ color: tier.color }}>
          {tier.name} Sponsors
        </h3>
        <div className={`sponsors-grid ${tierName}-grid`}>
          {sponsors.map((sponsor, index) => (
            <a
              key={index}
              href={sponsor.website}
              className="sponsor-card"
              target="_blank"
              rel="noopener noreferrer"
              title={sponsor.description}
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="sponsor-logo"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `https://via.placeholder.com/150x60/666666/FFFFFF?text=${encodeURIComponent(sponsor.name)}`;
                }}
              />
              <div className="sponsor-name">{sponsor.name}</div>
            </a>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="sponsors-section">
      <div className="sponsors-container">
        {/*<div className="sponsors-header">
          <h2>Our Sponsors</h2>
          <p>
            We're grateful to our sponsors who support the development of decentralized container infrastructure.
          </p>
        </div>
        
        <div className="sponsors-content">
          {renderSponsorTier('platinum', sponsorsData.sponsors.platinum)}
          {renderSponsorTier('gold', sponsorsData.sponsors.gold)}
          {renderSponsorTier('silver', sponsorsData.sponsors.silver)}
          {renderSponsorTier('bronze', sponsorsData.sponsors.bronze)}
        </div>*/}

        <div className="become-sponsor">
          <h3>Become a Sponsor</h3>
          <p>
            Support the future of decentralized infrastructure and get your brand in front of our community.
          </p>
          <a href="https://patreon.com/VoxaCommunications" className="sponsor-cta-button" target="_blank" rel="noopener noreferrer">
            Sponsor Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
