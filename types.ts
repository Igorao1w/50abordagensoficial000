export interface CarouselSlide {
  id: number;
  imageUrl: string;
  caption?: string;
}

export interface Benefit {
  icon: 'check' | 'lock' | 'diamond' | 'minus' | 'thumbsUp' | 'thumbsDown' | 'sparkle' | 'pin';
  text: string;
  highlight?: boolean;
}