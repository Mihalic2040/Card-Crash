// ItemTypes.ts

export const ItemTypes = {
    CARD: 'card',
    TOKEN: 'token',
    PIECE: 'piece',
  };
  
export interface CardProps {
    id: number;
    content: string;
    isMatched: boolean;
    onCardClick: (id: number) => void;
    onCardMove: (cardId: number) => void;
  }

export interface PlayAreaProps {
  cards: { id: number; name: string }[];
  onCardMove: (cardId: number) => void;
}