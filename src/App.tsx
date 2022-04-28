import React from 'react';
import './App.scss';
import ArrayEditor from './components/ArrayEditor/arrayEditor';
import CardControl from './components/CardControl/cardControl';
import CubeChanger from './components/CubeChanger/cubeChanger';
import MathBox from './components/MathBox/mathBox';
import PizzaAdder from './components/PizzaAdder/pizzaAdder';
import TextChanger from './components/TextChanger/textChanger';
import TextDisplay from './components/TextDisplay/textDisplay';

const App = () => (
  <div className="App">
    <MathBox mathNumber={1} multiplication={false} />
    <MathBox mathNumber={10} multiplication />
    <PizzaAdder />

    <div className="flex">
      <CubeChanger />
      <TextChanger />
    </div>

    <TextDisplay />
    <ArrayEditor />
    <CardControl />
  </div>
);

export default App;
