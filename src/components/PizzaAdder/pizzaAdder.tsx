import { useState } from 'react';
import './pizzaAdder.scss';

const PizzaAdder = () => {
  const [pizzaList, setPizzaList] = useState('Man garšo:');

  return (
    <div
      className="pizzaAdder"
    >

      <div className="flex flex--column">
        <button
          className="button"
          onClick={() => setPizzaList(`${pizzaList} pica`)}
        >
          Pievienot &quot;pica&quot;
        </button>
        <p>{pizzaList}</p>
      </div>

    </div>
  );
};

export default PizzaAdder;
