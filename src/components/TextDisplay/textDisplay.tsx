import { ChangeEvent, FormEventHandler, useState } from 'react';
import './textDisplay.scss';

const TextDisplay = () => {
  const [text, setText] = useState('');
  const [showText, setShowText] = useState(false);

  return (
    <div
      className="textDisplay"
    >
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

      {showText
        ? (
          <p
            className="textDisplay__text"
          >
            {text}
          </p>
        ) : null}

    </div>
  );
};

export default TextDisplay;
