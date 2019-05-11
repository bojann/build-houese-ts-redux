import React from "react";
import {EvenHandlersTypes} from '../BuildControls';
import "./BuildControl.scss";

export interface BuildBurgerTypes {
  label: string;
  price:  number;
}

const BuildControl = (props: BuildBurgerTypes & EvenHandlersTypes) => {
  const {
    label,
    price,
    removeIngredients,
    addIngredients
  } = props;

  return (
    <div className="build-control">
      <span className="ingredient-label">
        {label} ( ${price} )
      </span>
      <button className="btn btn-less" onClick={() => removeIngredients(label)}>
        Less
      </button>
      <button className="btn btn-more" onClick={() => addIngredients(label)}>
        More
      </button>
    </div>
  );
};

export default BuildControl;