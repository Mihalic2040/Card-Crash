import React from 'react';
import { useDrag, DragSourceMonitor } from 'react-dnd';
import { ItemTypes, CardProps } from './ItemTypes';
import './Card.css';



const Card: React.FC<CardProps> = ({ id, content, isMatched, onCardClick, onCardMove }) => {
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: ItemTypes.CARD,
      item: { id },
      collect: (monitor: DragSourceMonitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    []
  );

  const handleClick = () => {
    if (!isMatched) {
      onCardClick(id);
    }
  };

  return (
    <div className='card'>
          <div
      ref={drag}
      className={`card-item ${isDragging ? 'card-item-dragging' : ''}`}
      onClick={() => onCardMove(id)}
    >
      <div className="card-content">{content}</div>
    </div>
    </div>

  );
};

export default Card;
