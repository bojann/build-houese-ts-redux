import React from "react";
import {EvenHandlersTypes} from '../BuildControls';
import "./BuildControl.scss";

export interface BuildBurgerTypes {
  label: string;
  price:  number;
}

export default (props: BuildBurgerTypes & EvenHandlersTypes) => {
  const {label} = props;

  return (
    <div className="build-control">
      <span className="ingredient-label">
        {props.label} ( ${props.price} )
      </span>
      <button className="btn btn-less" onClick={() => props.removeIngredients(label)}>
        Less
      </button>
      <button className="btn btn-more" onClick={() => props.addIngredients(label)}>
        More
      </button>
    </div>
  );
};
