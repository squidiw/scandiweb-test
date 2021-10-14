import React, {Component} from "react";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-cart-svgrepo-com.svg";

import "./cart-icon.styles.scss";

class CartIcon extends Component{
    render(){
        const {toggleCartHidden, itemCount } = this.props
        return (
           <React.Fragment>
           <span className="cart-icon" onClick={toggleCartHidden}>
              <ShoppingIcon className="shopping-icon" />
              <span className="item-count">{itemCount}</span>
           </span>
           </React.Fragment>
        );

    }
 };

const mapDispatchToProps = (dispatch) => ({
   toggleCartHidden: () => dispatch(toggleCartHidden()),
});

//SELECTOR
const mapStateToProps = (state) => ({
   itemCount: selectCartItemsCount(state),
});
// ARROW FUNCTION ACCUMULATES ALL THE NUMBER VALUES OF THE QUANTITY ON ALL CARTITEMS.
// 0 IS INITIAL ACCUMULATED VALUE

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
