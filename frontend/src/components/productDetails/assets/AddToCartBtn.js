import { DialogActions, Button } from "@material-ui/core";
import React from "react";
import { FaHeart, FaOpencart } from "react-icons/fa6";

const AddToCartBtn = ({ product, addToCartHandler, buyHandler }) => {
  return (
    <>
      <Button
        className="button-success"
        disabled={product && product.stock < 1 ? true : false}
        onClick={addToCartHandler}
      >
        <FaOpencart className="cart-svg" />
        Add to Cart
      </Button>
    </>
  );
};

export default AddToCartBtn;
