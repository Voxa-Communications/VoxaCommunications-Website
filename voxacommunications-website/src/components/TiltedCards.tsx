import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './TiltedCards.css';

interface Card {
  id: string;
  title: string;
  type: 'crypto' | 'app';
  image?: string;
  icon?: string;
  color: string;
  url: string;
}

const cards: Card[] = [
  {
    id: 'bitcoin',
    title: 'Bitcoin',
    type: 'crypto',
    icon: '₿',
    color: '#F7931A',
    url: 'https://bitcoin.org/en/documentation/'
  },
  {
    id: 'ethereum',
    title: 'Ethereum',
    type: 'crypto',
    icon: 'Ξ',
    color: '#627EEA',
    url: 'https://ethereum.org/en/developers/docs/'
  },
  {
    id: 'docker',
    title: 'Docker',
    type: 'app',
    icon: '🐳',
    color: '#2496ED',
    url: 'https://docs.docker.com/'
  },
  {
    id: 'kubernetes',
    title: 'Kubernetes',
    type: 'app',
    icon: '☸',
    color: '#326CE5',
    url: 'https://kubernetes.io/docs/'
  },
  {
    id: 'chainlink',
    title: 'Chainlink',
    type: 'crypto',
    icon: '⛓',
    color: '#375BD2',
    url: 'https://docs.chain.link/'
  },
  {
    id: 'ipfs',
    title: 'IPFS',
    type: 'app',
    icon: '📦',
    color: '#65C2CB',
    url: 'https://docs.ipfs.tech/'
  },
  {
    id: 'polkadot',
    title: 'Polkadot',
    type: 'crypto',
    icon: '●',
    color: '#E6007A',
    url: 'https://wiki.polkadot.network/'
  },
  {
    id: 'terraform',
    title: 'Terraform',
    type: 'app',
    icon: '🏗',
    color: '#7B42BC',
    url: 'https://developer.hashicorp.com/terraform/docs'
  }
];

interface TiltedCardProps {
  card: Card;
  index: number;
}

const TiltedCard: React.FC<TiltedCardProps> = ({ card, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const isCircular = card.type === 'crypto';

  const handleClick = () => {
    window.open(card.url, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.div
      className={`tilted-card ${isCircular ? 'circular' : 'square'}`}
      initial={{ 
        opacity: 0, 
        y: 50,
        rotateX: 15,
        rotateY: isCircular ? -15 : 15
      }}
      animate={{ 
        opacity: 1, 
        y: 0,
        rotateX: isHovered ? 5 : 15,
        rotateY: isHovered ? 0 : (isCircular ? -15 : 15)
      }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 300,
        damping: 30
      }}
      whileHover={{
        scale: 1.05,
        rotateX: 5,
        rotateY: 0,
        z: 50
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={handleClick}
      style={{
        background: `linear-gradient(135deg, ${card.color}20, ${card.color}40)`,
        borderColor: card.color,
        cursor: 'pointer'
      }}
    >
      <div className="card-content">
        <div 
          className="card-icon"
          style={{ color: card.color }}
        >
          {card.icon}
        </div>
        <h4 className="card-title">{card.title}</h4>
        <div className="card-type-badge">
          {card.type === 'crypto' ? 'Crypto' : 'App'}
        </div>
      </div>
      
      {/* Glow effect */}
      <div 
        className="card-glow"
        style={{
          background: `radial-gradient(circle, ${card.color}30 0%, transparent 70%)`
        }}
      />
    </motion.div>
  );
};

export const TiltedCards: React.FC = () => {
  return (
    <div className="tilted-cards-container">
      <div className="cards-grid">
        {cards.map((card, index) => (
          <TiltedCard key={card.id} card={card} index={index} />
        ))}
      </div>
    </div>
  );
};
