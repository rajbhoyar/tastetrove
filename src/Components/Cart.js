import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, addItem, removeItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

function Cart() {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleIncreaseQuantity = (item) => {
    dispatch(addItem(item));
  };

  const handleDecreaseQuantity = (item) => {
    if (item.quantity > 1) {
      dispatch(removeItem(item));
    }
  };

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => {
    return total + (item.price / 100) * item.quantity;
  }, 0);

  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <header className="bg-blue-600 text-white p-4">
          <h1 className="text-3xl font-bold">Your Cart</h1>
        </header>
        <div className="p-6">
          <button
            className="bg-red-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-700 transition duration-300 mb-4"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
          {cartItems.length === 0 ? (
            <div className="text-center text-gray-600 text-lg">
              <h2>Your cart is empty!</h2>
              <p className="mt-2">
                Add some items to the cart to see them here.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center p-4 border-b border-gray-200"
                >
                  <img
                    src={CDN_URL + item.imageId}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-md mr-4"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-600">
                      ₹ {(item.price / 100).toFixed(2)}
                    </p>
                    <div className="flex items-center mt-2">
                      <button
                        className="bg-gray-200 text-gray-700 px-2 py-1 rounded-lg mr-2"
                        onClick={() => handleDecreaseQuantity(item)}
                      >
                        -
                      </button>
                      <p className="text-gray-700">{item.quantity}</p>
                      <button
                        className="bg-gray-200 text-gray-700 px-2 py-1 rounded-lg ml-2"
                        onClick={() => handleIncreaseQuantity(item)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="text-right ml-4">
                    <p className="text-lg font-semibold">
                      ₹ {((item.price * item.quantity) / 100).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
              <div className="flex justify-between items-center p-4 border-t border-gray-200 font-bold">
                <span>Total Price:</span>
                <span>₹ {totalPrice.toFixed(2)}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
