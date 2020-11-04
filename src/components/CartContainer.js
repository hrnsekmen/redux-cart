import React from "react";
import { connect } from "react-redux";
import CartItem from "./CartItem";
import { getTotals, clearCart } from "../actions";

const CartContainer = ({ cart = [], total, clearCart, getTotals }) => {
  React.useEffect(() => {
    getTotals();
  }, [cart, getTotals]);

  if (cart.length === 0) {
    return (
      <section className="cart">
        <header>
          <h2>cart</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      <header>
        <h2>cart</h2>
      </header>
      <article>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </article>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total}</span>
          </h4>
        </div>
        <button onClick={clearCart} className="btn clear-btn">
          clear cart
        </button>
      </footer>
    </section>
  );
};

const mapStateToProps = (store) => {
  return { cart: store.cart, total: store.total };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearCart: () => dispatch(clearCart()),
    getTotals: () => dispatch(getTotals()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
