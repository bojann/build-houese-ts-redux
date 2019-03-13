import React from "react";
import Burger from "../../component/Burger/Burger";
import BuildControls from "../../component/Burger/BuildControls/BuildControls";
import Modal from '../../component/shared/Modal/Modal'
import OrderSummary from '../../component/Burger/OrderSummery/OrderSummery';

export default class BurgerBuilder extends React.Component {
  public state = {
    ingredients: {
      salat: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    ingredientPrices: {
      salat: 0.5,
      bacon: 0.65,
      cheese: 1,
      meat: 2.2
    },
    orderPrice: 5,
    orderModalShow: false
  };

  public handleAddIngredients = (label: string): void => {
    const newIngredients = {...this.state.ingredients};
    const initialPrice = this.state.orderPrice;
    newIngredients[label] = newIngredients[label] + 1;

    const updatePriceSum = Object.keys(newIngredients)
      .map( ingKey => this.state.ingredientPrices[ingKey] * newIngredients[ingKey])
      .reduce((acc, curr) => acc + curr, initialPrice)

    this.setState({ingredients: newIngredients, orderPrice: updatePriceSum})
  };

  public handleRemoveIngredients = (label: string): void => {
    const newIngredients = {...this.state.ingredients};
    const initialPrice = this.state.orderPrice;
    newIngredients[label] = this.state.ingredients[label] - 1;

    const updatePriceSum = Object.keys(newIngredients)
      .map( ingKey => this.state.ingredientPrices[ingKey] * newIngredients[ingKey])
      .reduce((acc, curr) => acc + curr, initialPrice)

    this.setState({ingredients: newIngredients, orderPrice: updatePriceSum})
  };

  public handleShowOrder = () => {
    this.setState((prevState: {orderModalShow: boolean}): any => {
      return {
        orderModalShow: !prevState.orderModalShow
      }
    });
  }

  public handleModalClose = () => {
    this.setState({orderModalShow: false});
  }

  public handlePurchase = () => {
    console.log('Purchase done')
    this.handleModalClose();
  }

  public render() {
    return (
      <>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredients={this.state.ingredients}
          ingredientPrices={this.state.ingredientPrices}
          orderPrice={this.state.orderPrice}
          addIngredients={this.handleAddIngredients}
          removeIngredients={this.handleRemoveIngredients}
          handleShowOrder={this.handleShowOrder}
        />
        <Modal orderModalShow={this.state.orderModalShow} handleModalClose={this.handleModalClose}>
          <OrderSummary 
            ingredients={this.state.ingredients} 
            orderPrice={this.state.orderPrice} 
            handleModalClose={this.handleModalClose}
            handlePurchase={this.handlePurchase}
          />
        </Modal>
      </>
    );
  }
}