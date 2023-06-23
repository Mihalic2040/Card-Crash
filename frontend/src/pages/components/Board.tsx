import React, { useState, useEffect } from 'react';
import Card from './Card';
import './Board.css';
import { ItemTypes, PlayAreaProps } from './ItemTypes';
import { useDrop, DropTargetMonitor } from 'react-dnd';
import PlayArea from './PlayArea';







const Board: React.FC = () => {
  // Dummy data for example

  const [OpositeDeck, setOposite] = useState([
    { id: 122, name: 'Card 1' },
  ]);

  const [UserDeck, setDeck] = useState([
    { id: 1434, name: 'Card 1' },
  ]);

  const [opositeCards, setOpositeCards] = useState([
    { id: 14343, name: 'Card 1' },
    { id: 223, name: 'Card 2' },
    { id: 344, name: 'Card 3' },
  ]);

  const [userCards, setUserCards] = useState([
    { id: 1778, name: 'Card 1' },
    { id: 2542, name: 'Card 2' },
    { id: 39898, name: 'Card 3' },
  ]);

  const UserhandleCardMove = (cardId: number) => {
    const cardIndex = userCards.findIndex((card) => card.id === cardId);
    if (cardIndex !== -1) {
      const movedCard = userCards.splice(cardIndex, 1)[0];
      setDeck((prevCards) => [...prevCards, movedCard]);
      setUserCards([...userCards]);
    }
  };

  const OpositehandleCardMove = (cardId: number) => {
    const cardIndex = userCards.findIndex((card) => card.id === cardId);
    if (cardIndex !== -1) {
      const movedCard = userCards.splice(cardIndex, 1)[0];
      setDeck((prevCards) => [...prevCards, movedCard]);
      setUserCards([...userCards]);
    }
  };

  return (
    <div className="board">
      <div className="opponent-cards">
        {opositeCards.map((card) => (
            <Card id={card.id} content={card.name} isMatched={true} onCardMove={() => {}} onCardClick={() => {}}/>
          ))}
      </div>
      <div className="play-area">
        <PlayArea cards={OpositeDeck} onCardMove={() => {}} />
      </div>
      <div className='status'>
        15:00
      </div>
      <div className="play-area">
        <PlayArea cards={UserDeck} onCardMove={UserhandleCardMove} />
      </div>
      <div className="player-cards">
        {userCards.map((card) => (
            <Card id={card.id} content={card.name} isMatched={true} onCardMove={UserhandleCardMove} onCardClick={() => {}}/>
          ))}
      </div>
    </div>
  );
};

export default Board;
