import React from 'react';
import { Target, Zap, TrendingUp, Users, Bot, Video } from 'lucide-react';

interface FloatingElementProps {
  delay?: number;
  duration?: number;
  className?: string;
}

const FloatingShape: React.FC<FloatingElementProps> = ({ 
  delay = 0, 
  duration = 6,
  className = "" 
}) => {
  const style = {
    animationDelay: `${delay}s`,
    animationDuration: `${duration}s`
  };

  return (
    <div 
      className={`absolute opacity-20 float-element ${className}`}
      style={style}
    >
      <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full blur-sm"></div>
    </div>
  );
};

const FloatingIcon: React.FC<{ 
  icon: React.ReactNode; 
  delay?: number; 
  className?: string;
}> = ({ 
  icon, 
  delay = 0, 
  className = "" 
}) => {
  const style = {
    animationDelay: `${delay}s`,
  };

  return (
    <div 
      className={`absolute float-element opacity-30 ${className}`}
      style={style}
    >
      <div className="w-12 h-12 bg-glass-bg backdrop-blur border border-glass-border rounded-xl flex items-center justify-center text-primary">
        {icon}
      </div>
    </div>
  );
};

export const HeroFloatingElements: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating Shapes */}
      <FloatingShape delay={0} className="top-20 left-10" />
      <FloatingShape delay={2} className="top-40 right-20" />
      <FloatingShape delay={4} className="bottom-40 left-20" />
      <FloatingShape delay={1} className="bottom-20 right-10" />
      <FloatingShape delay={3} className="top-60 left-1/2" />
      
      {/* Floating Icons */}
      <FloatingIcon 
        icon={<Target size={20} />} 
        delay={0.5} 
        className="top-32 left-1/4" 
      />
      <FloatingIcon 
        icon={<Zap size={20} />} 
        delay={1.5} 
        className="top-48 right-1/4" 
      />
      <FloatingIcon 
        icon={<TrendingUp size={20} />} 
        delay={2.5} 
        className="bottom-48 left-1/3" 
      />
      <FloatingIcon 
        icon={<Users size={20} />} 
        delay={3.5} 
        className="bottom-32 right-1/3" 
      />
      <FloatingIcon 
        icon={<Bot size={20} />} 
        delay={4.5} 
        className="top-1/2 left-16" 
      />
      <FloatingIcon 
        icon={<Video size={20} />} 
        delay={5.5} 
        className="top-1/2 right-16" 
      />
    </div>
  );
};

export const SectionFloatingElements: React.FC<{ variant?: 'primary' | 'secondary' }> = ({ 
  variant = 'primary' 
}) => {
  const shapeColor = variant === 'primary' 
    ? 'from-primary to-secondary' 
    : 'from-secondary to-accent';

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
      <div className={`absolute top-10 right-10 w-32 h-32 bg-gradient-to-br ${shapeColor} rounded-full blur-3xl float-element`}></div>
      <div className={`absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-br ${shapeColor} rounded-full blur-2xl float-element`} style={{animationDelay: '2s'}}></div>
      <div className={`absolute top-1/2 left-1/2 w-16 h-16 bg-gradient-to-br ${shapeColor} rounded-full blur-xl float-element`} style={{animationDelay: '4s'}}></div>
    </div>
  );
};

export default { FloatingShape, FloatingIcon, HeroFloatingElements, SectionFloatingElements };