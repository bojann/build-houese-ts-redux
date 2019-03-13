import React from "react";
import BuildControl, { BuildBurgerTypes } from "./BuildControl/BuildControl";
import "./BuildControls.scss";

export interface IngredientTypes {
  ingredients: {
    cheese: number;
    bacon: number;
    salat: number;
    meat: number;
    [key: string]: number;
  },
  orderPrice: number
}

export interface EvenHandlersTypes {
  addIngredients: (label: string) => void;
  removeIngredients: (label: string) => void;
  handleShowOrder?: () => void
}

export interface IngredientPrices {
  ingredientPrices: {
    cheese: number;
    bacon: number;
    salat: number;
    meat: number;
    [key: string]: number;
  }
}

const buildControls = (props: IngredientTypes & EvenHandlersTypes & IngredientPrices) => {
    const ingredients = props.ingredients;
    const renderControls = () => {
        return Object.keys(ingredients).map((item: string | any) => {
            return item ? (
                <BuildControl
                    key={item}
                    label={item}
                    price={props.ingredientPrices[item]}
                    addIngredients={props.addIngredients}
                    removeIngredients={props.removeIngredients}
                />
                ) : null;
        });
    };

    return (
        <div className="build-burger-controls">
            <span><strong>Total Price: $ {props.orderPrice.toFixed(2)}</strong></span>
            {renderControls()}
            <button className="btn order-btn" onClick={props.handleShowOrder}>Order now</button>
        </div>
    );
};

export default  buildControls;