import { useState } from 'react';
import './cubeChanger.scss';

const CubeChanger = () => {
  const [color, setColor] = useState('orange');

  const getRandomColor = () => (`#${Math.floor(Math.random() * 16777215).toString(16)}`);

  return (
    <div
      className="cubeChanger"
    >

      <button
        className="button"
        onClick={() => setColor(() => getRandomColor())}
      >
        Mainīt kuba krāsu
      </button>

      <div
        className="cubeChanger__cube"
        style={{ backgroundColor: color }}
      />

    </div>
  );
};

export default CubeChanger;
