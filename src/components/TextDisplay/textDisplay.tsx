import { ChangeEvent, FormEventHandler, useState } from 'react';
import './textDisplay.scss';

const TextDisplay = () => {
  const [text, setText] = useState('');
  const [showText, setShowText] = useState(false);

  return (
    <div
      className="textDisplay"
    >
      <div className="flex">
        <div className="flex flex--column">
          <button
            className="button"
            onClick={() => setShowText(!showText)}
          >
            Parādīt tekstu
          </button>
          <input
            className="textDisplay__input"
            value={text}
            onChange={(e:ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
            placeholder="Ievadi Tekstu!"
          />
        </div>
        {showText
          ? (
            <p
              className="textDisplay__text"
            >
              {text}
            </p>
          ) : null}
      </div>

    </div>
  );
};

export default TextDisplay;
