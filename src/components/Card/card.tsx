import { ChangeEvent, FormEventHandler, useState } from 'react';
import './card.scss';

type CardProps = {
  id: number,
  title: string,
  arr: {id: number, title: string}[],
  action: (param:{id: number, title: string}[]) => {}
}

const Card = ({
  id, title, arr, action,
}: CardProps) => (
  <div
    className="card"
  >
    <button
      className="card__close"
      onClick={() => action}
    >
      x
    </button>

    <p className="card__text">
      ID:
      {id}
    </p>
    <p className="card__text">
      Title:
      {title}
    </p>
  </div>
);

export default Card;
