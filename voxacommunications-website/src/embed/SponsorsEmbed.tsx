import React, { useState, useEffect } from 'react';
import './SponsorsEmbed.css';

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

const SponsorsEmbed: React.FC = () => {
  const [sponsorsData, setSponsorsData] = useState<SponsorsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSponsors = async () => {
      try {
        // Try to fetch from the GitHub URL first, then fallback to local
        let response;
        try {
          response = await fetch('https://raw.githubusercontent.com/Voxa-Communications/.github/refs/heads/main/static/sponsors.json');
        } catch {
          // Fallback to local sponsors.json
          response = await fetch('/sponsors.json');
        }
        
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
      <div className="sponsors-embed">
        <div className="sponsors-embed-container">
          <div className="loading">Loading sponsors...</div>
        </div>
      </div>
    );
  }

  if (error || !sponsorsData) {
    return (
      <div className="sponsors-embed">
        <div className="sponsors-embed-container">
          <div className="error">Failed to load sponsors</div>
        </div>
      </div>
    );
  }

  const renderSponsorTier = (tierName: string, sponsors: Sponsor[]) => {
    if (sponsors.length === 0) return null;

    const tier = sponsorsData.tiers[tierName as keyof typeof sponsorsData.tiers];
    
    return (
      <div className={`sponsor-tier-embed ${tierName}`} key={tierName}>
        <h3 className="tier-title-embed" style={{ color: tier.color }}>
          {tier.name}
        </h3>
        <div className={`sponsors-grid-embed ${tierName}-grid-embed`}>
          {sponsors.map((sponsor, index) => (
            <a
              key={index}
              href={sponsor.website}
              className="sponsor-card-embed"
              target="_blank"
              rel="noopener noreferrer"
              title={sponsor.description}
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="sponsor-logo-embed"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `https://via.placeholder.com/150x60/666666/FFFFFF?text=${encodeURIComponent(sponsor.name)}`;
                }}
              />
              <div className="sponsor-name-embed">{sponsor.name}</div>
            </a>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="sponsors-embed">
      <div className="sponsors-embed-container">
        <div className="sponsors-embed-header">
        </div>
        
        <div className="sponsors-embed-content">
          {renderSponsorTier('platinum', sponsorsData.sponsors.platinum)}
          {renderSponsorTier('gold', sponsorsData.sponsors.gold)}
          {renderSponsorTier('silver', sponsorsData.sponsors.silver)}
          {renderSponsorTier('bronze', sponsorsData.sponsors.bronze)}
        </div>
      </div>
    </div>
  );
};

export default SponsorsEmbed;
