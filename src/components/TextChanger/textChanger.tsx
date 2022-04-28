import { useState } from 'react';
import './textChanger.scss';

const TextChanger = () => {
  const [text, setText] = useState('Nav Nospiests');

  return (
    <div
      className="textChanger"
    >

      <button
        className="button"
        onClick={() => setText('Nospiests')}
      >
        Mainīt tekstu uz &quot;nospiests&quot;
      </button>

      <p
        className="textChanger__text"
      >
        {text}
      </p>

    </div>
  );
};

export default TextChanger;
