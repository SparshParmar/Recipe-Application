import React from 'react';
import style from './recipe.module.css';

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <h2>{Math.floor(calories)}</h2>
      <img className={style.image} src={image} alt="" />
      <ol>
        {ingredients.map((e) => (
          <li>{e.text}</li>
        ))}
      </ol>
    </div>
  );
};

export default Recipe;
