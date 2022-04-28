import { type } from 'os';
import { useState } from 'react';
import './mathBox.scss';

type MathBoxProps = {
    mathNumber: number,
    multiplication: boolean,
}

const MathBox = ({ mathNumber, multiplication }: MathBoxProps) => {
  const [result, setResult] = useState(0);

  const buttons = [
    {
      id: 0,
      title: 'Reset',
      mathType: 'Reset',
      action: () => {
        setResult(0);
      },
    },
    {
      id: 1,
      title: '+',
      mathType: 'Sum',
      action: () => {
        setResult(result + mathNumber);
      },
    },
    {
      id: 2,
      title: '-',
      mathType: 'Sum',
      action: () => {
        setResult(result - mathNumber);
      },
    },
    {
      id: 3,
      title: '/',
      mathType: 'Multiply',
      action: () => {
        setResult(result / mathNumber);
      },
    },
    {
      id: 4,
      title: '*',
      mathType: 'Multiply',
      action: () => {
        setResult(result * mathNumber);
      },
    },
  ];

  return (
    <div
      className="mathBox"
    >

      {buttons
        .filter(({ mathType }) => !(mathType === 'Multiply' && !multiplication))
        .map(({ title, action, id }) => (

          <button
            key={id}
            className="mathBox__button"
            onClick={action}
          >
            {title}
          </button>

        ))}

      <p>{result}</p>

    </div>
  );
};

export default MathBox;
