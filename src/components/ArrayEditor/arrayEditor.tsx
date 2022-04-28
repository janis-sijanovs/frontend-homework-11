import { ChangeEvent, FormEventHandler, useState } from 'react';
import './arrayEditor.scss';

const ArrayEditor = () => {
  const initialArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const [numberArray, setNumberArray] = useState(initialArray);
  const [filter, setFilter] = useState(-Infinity);

  const buttons = [
    {
      id: 1,
      title: 'Remove from end',
      action: () => {
        setNumberArray([...numberArray].splice(0, numberArray.length - 1));
      },
    },
    {
      id: 2,
      title: 'Remove from start',
      action: () => {
        setNumberArray([...numberArray].splice(1, numberArray.length - 1));
      },
    },
    {
      id: 3,
      title: 'Reset',
      action: () => {
        setNumberArray(initialArray);
      },
    },
    {
      id: 4,
      title: 'Remove all',
      action: () => {
        setNumberArray([]);
      },
    },
    {
      id: 5,
      title: 'Show > 5',
      action: () => {
        setFilter(5);
      },
    },
    {
      id: 6,
      title: 'Show all',
      action: () => {
        setFilter(-Infinity);
      },
    },
    {
      id: 7,
      title: 'All numbers x2',
      action: () => {
        setNumberArray(numberArray.map((val) => val * 2));
      },
    },
    {
      id: 8,
      title: 'All numbers / 10',
      action: () => {
        setNumberArray(numberArray.map((val) => val / 10));
      },
    },
  ];

  return (
    <div
      className="arrayEditor"
    >
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
        {numberArray
          .filter((val) => val > filter)
          .map((num) => (

            <button
              key={num}
              className="arrayEditor__item"
              onClick={() => {
                setNumberArray([...numberArray]
                  .slice(0, numberArray.indexOf(num))
                  .concat([...numberArray].slice(numberArray.indexOf(num) + 1)));
              }}
            >
              {num}
            </button>

          ))}
      </div>
    </div>
  );
};

export default ArrayEditor;
