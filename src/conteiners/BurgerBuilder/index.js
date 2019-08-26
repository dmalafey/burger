import React, { Component } from 'react';


import Burger from "../../components/Burger";
import BuildControls from '../../components/Burger/BuildControls'
import OrderSummary from '../../components/Burger/OrderSummary';
import axios from '../../axios-orders';
import Spinner from "../../components/UI/Spinner";
import Modal from "../../components/UI/Modal";
import WithErrorHandler from "../../hoc/WithErrorHandler";

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

const calculate = ( type, oldPrice, oldCount, binaryOperation) => {
    const priceAddition = INGREDIENT_PRICES[type];
    const newPrice =  binaryOperation (oldPrice, priceAddition);
    const updatedCount = binaryOperation(oldCount, 1);
    return {newPrice,updatedCount};
};

class BurgerBuilder extends Component {
    state = {
        ingredients: null,
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
        loading: false,
        error: false
    };

    componentDidMount () {
        axios.get( '/ingredients.json' )
            .then( response => {
                this.setState( { ingredients: response.data } );
            } )
            .catch( error => {
                console.log(error);
                this.setState( { error: true } );
            } );

    }

    updatePurchaseState ( ingredients ) {
        const isGreaterZero = Object.values(ingredients).some((item) => item > 0);
        this.setState( { purchasable: isGreaterZero} );
    }

    _updateIngredient = (type,binaryOperation) => {
        const oldCount = this.state.ingredients[type];
        const oldPrice = this.state.totalPrice;
        if ( oldCount < 0 ) {
            return;
        }
        const {newPrice,updatedCount} = calculate( type, oldPrice, oldCount,binaryOperation);
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        this.setState( { totalPrice: newPrice, ingredients: updatedIngredients } );
        this.updatePurchaseState( updatedIngredients );
    };

    _createBurger = () => {
        const disabledInfo = this._getDisabledInfo()
        return (
            <>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    purchasable={this.state.purchasable}
                    ordered={this.purchaseHandler}
                    price={this.state.totalPrice}/>
            </>
        );

    };

    _createOrderSummary = () => {
        return (
            <OrderSummary
                ingredients={this.state.ingredients}
                price={this.state.totalPrice}
                purchaseCancelled={this.purchaseCancelHandler}
                purchaseContinued={this.purchaseContinueHandler} />
        )
    };

    _getDisabledInfo = ()=> {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for ( let key in disabledInfo ) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        console.log(disabledInfo);
        return disabledInfo;
    };



    addIngredientHandler = ( type ) => {
        this._updateIngredient(type,(a,b) => a+b )
    };

    removeIngredientHandler = ( type ) => {
        this._updateIngredient(type,(a,b) => a-b)
    };

    purchaseHandler = () => {
        this.setState( { purchasing: true } );
    };

    purchaseCancelHandler = () => {
        this.setState( { purchasing: false } );
    };

    purchaseContinueHandler = () => {
        const queryParams = [];
        for (let i in this.state.ingredients) {
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
        }
        queryParams.push('price=' + this.state.totalPrice);
        const queryString = queryParams.join('&');
        this.props.history.push({
            pathname: '/checkout',
            search: '?' + queryString
        });
    };

    render () {

        let orderSummary = null;
        let burger = this.state.error ? <p>Ingredients can't be loaded!</p> : <Spinner/>;

        if ( this.state.ingredients ) {
            burger = this._createBurger();
            orderSummary = this._createOrderSummary()
        }
        if ( this.state.loading ) {
            orderSummary = <Spinner/>;
        }
        return (
            <>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>

                    {burger}
            </>
        );
    }
}

export default WithErrorHandler(BurgerBuilder,axios);
