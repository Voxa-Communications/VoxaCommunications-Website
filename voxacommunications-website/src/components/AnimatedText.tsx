import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface DecryptedTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export const DecryptedText: React.FC<DecryptedTextProps> = ({ 
  text, 
  className = '', 
  delay = 0 
}) => {
  const [displayText, setDisplayText] = useState('');
  const [isDecrypting, setIsDecrypting] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';

  useEffect(() => {
    if (inView && !isDecrypting) {
      setIsDecrypting(true);
      
      const timeout = setTimeout(() => {
        let iteration = 0;
        const interval = setInterval(() => {
          setDisplayText(
            text
              .split('')
              .map((char, index) => {
                if (char === ' ') return ' ';
                if (index < iteration) return char;
                return characters[Math.floor(Math.random() * characters.length)];
              })
              .join('')
          );

          iteration += 1 / 3;

          if (iteration >= text.length) {
            clearInterval(interval);
            setDisplayText(text);
          }
        }, 45);

        return () => clearInterval(interval);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [inView, text, characters, delay, isDecrypting]);

  return (
    <span ref={ref} className={className}>
      {displayText || text}
    </span>
  );
};

interface GlitchTextProps {
  text: string;
  className?: string;
}

export const GlitchText: React.FC<GlitchTextProps> = ({ text, className = '' }) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      className={`glitch-text ${className}`}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <span className="glitch-text-main">{text}</span>
      <span className="glitch-text-before" aria-hidden="true">{text}</span>
      <span className="glitch-text-after" aria-hidden="true">{text}</span>
    </motion.div>
  );
};

interface TypewriterTextProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({ 
  text, 
  className = '', 
  speed = 50,
  delay = 0 
}) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView && !isTyping) {
      setIsTyping(true);
      
      const timeout = setTimeout(() => {
        let i = 0;
        const interval = setInterval(() => {
          setDisplayText(text.slice(0, i + 1));
          i++;
          if (i >= text.length) {
            clearInterval(interval);
          }
        }, speed);

        return () => clearInterval(interval);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [inView, text, speed, delay, isTyping]);

  return (
    <span ref={ref} className={`typewriter-text ${className}`}>
      {displayText}
      <span className="typewriter-cursor">|</span>
    </span>
  );
};

interface FadeUpTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const FadeUpText: React.FC<FadeUpTextProps> = ({ 
  children, 
  className = '', 
  delay = 0 
}) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
};

interface SlideInTextProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'left' | 'right' | 'up' | 'down';
  delay?: number;
}

export const SlideInText: React.FC<SlideInTextProps> = ({ 
  children, 
  className = '', 
  direction = 'left',
  delay = 0 
}) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const getInitialPosition = () => {
    switch (direction) {
      case 'left': return { x: -100, y: 0 };
      case 'right': return { x: 100, y: 0 };
      case 'up': return { x: 0, y: -100 };
      case 'down': return { x: 0, y: 100 };
      default: return { x: -100, y: 0 };
    }
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, ...getInitialPosition() }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...getInitialPosition() }}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
};
