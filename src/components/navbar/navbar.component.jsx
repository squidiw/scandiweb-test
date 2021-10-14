import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import CurrencyDropdown from '../currency-dropdown/currency-dropdown'


import { graphql } from "@apollo/client/react/hoc";
import { getCategories } from "../../graphql/queries";

import "./navbar.styles.scss";

class Navbar extends Component {
   render() {

      const { hidden } = this.props

      return (
         <React.Fragment>
            <nav>
               <div className="menu-links">
                  {this.props.data?.categories?.map((category, index) => (
                     <NavLink
                        key={index}
                        to={`/${category.name}`}
                        activeClassName="active">
                        {category.name}
                     </NavLink>
                  ))}
               </div>
               <span>LOGO</span>
               <div className="misc">
                  <CartIcon />
                  <CurrencyDropdown />
               </div>
            </nav>
            {hidden ? null : <CartDropdown />}
         </React.Fragment>
      );
   }
}
//DESTRUCTURED THE CART OF THE STATE
const mapStateToProps = ({ cart: { hidden } }) => ({
   hidden,
});

const graph = graphql(getCategories)(Navbar);

export default connect(mapStateToProps)(graph);
