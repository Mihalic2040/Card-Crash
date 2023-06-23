import { useDrop } from "react-dnd";
import Card from "./Card";
import { ItemTypes, PlayAreaProps } from "./ItemTypes";
import "./PlatArea.css";

const PlayArea: React.FC<PlayAreaProps> = ({ cards, onCardMove }) => {
    const [{ isOver }, drop] = useDrop(() => ({
      accept: ItemTypes.CARD,
      drop: (item: any) => onCardMove(item.id),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }));
  
    return (
      <div ref={drop} className={`play-area-droppable ${isOver ? 'play-area-droppable-active' : ''}`}>
        <div className="play-area-divider"></div>
        {/* Render the playing cards in the play area */}
        {cards.map((card) => (
          <Card id={card.id} content={card.name} isMatched={true} onCardMove={onCardMove} onCardClick={() => {}}/>
        ))}
      </div>
    );
  };


export default PlayArea;