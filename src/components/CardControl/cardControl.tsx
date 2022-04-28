import { ChangeEvent, FormEventHandler, useState } from 'react';
import './cardControl.scss';

const CardControl = () => {
  const initialCards = [
    {
      id: 1,
      title: 'First card',
    },
    {
      id: 2,
      title: 'Second card',
    },
    {
      id: 3,
      title: 'Third card',
    },
    {
      id: 4,
      title: 'Fourth card',
    },
    {
      id: 5,
      title: 'Fifth card',
    },
    {
      id: 6,
      title: 'Sixth card',
    },
  ];

  const [cards, setCards] = useState(initialCards);
  const [isUppercase, setIsUppercase] = useState(false);

  const buttons = [
    {
      id: 1,
      title: 'Reset',
      action: () => {
        setCards(initialCards);
      },
    },
    {
      id: 2,
      title: 'Remove all',
      action: () => {
        setCards([]);
      },
    },
    {
      id: 3,
      title: 'Make all titles UPPERCASE',
      action: () => {
        setIsUppercase(!isUppercase);
      },
    },
  ];

  return (
    <div
      className="cardControl"
    >
      <div className="flex flex--column">
        <div className="flex">
          {buttons
            .map(({ title, action, id }) => (
              <button
                key={id}
                className="button"
                onClick={action}
              >
                {title}
              </button>
            ))}
        </div>
        <div className="flex">
          {cards
            .map((card) => (
              <div
                key={card.id}
                className="card"
              >
                <button
                  className="card__close"
                  onClick={() => {
                    setCards([...cards]
                      .slice(0, cards.indexOf(card))
                      .concat([...cards].slice(cards.indexOf(card) + 1)));
                  }}
                >
                  x
                </button>
                <p className="card__text">
                  ID:&nbsp;
                  {card.id}
                </p>
                <p className="card__text">
                  TITLE:&nbsp;
                  {isUppercase ? card.title.toUpperCase() : card.title}
                </p>
              </div>
            ))}
        </div>
      </div>

    </div>
  );
};

export default CardControl;
