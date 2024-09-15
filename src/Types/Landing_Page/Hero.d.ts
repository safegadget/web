// types.ts
export interface HeroProps {
    header: string;
    description: string;
    ctaText: string;
    imageUrl: string;
    onCtaClick: () => void;
  }