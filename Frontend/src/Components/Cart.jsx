import React from "react";
import { useCart } from "../context/CartProvider";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Cart() {
  const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart } =
    useCart();

  const handleQuantityChange = (bookId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(bookId);
      toast.success("Item removed from cart");
    } else {
      updateQuantity(bookId, newQuantity);
    }
  };

  const handleCheckout = () => {
    toast.success("Proceeding to checkout...");
    // Here you would typically redirect to a checkout page
  };

  if (cart.length === 0) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex flex-col">
          <div className="flex-1 max-w-screen-2xl container mx-auto md:px-20 px-4">
            <div className="mt-28 items-center justify-center text-center">
              <h1 className="text-2xl md:text-4xl mb-8">
                Your <span className="text-pink-500">Cart</span> is Empty
              </h1>
              <p className="mb-8 text-gray-600 dark:text-gray-400">
                Looks like you haven't added any books to your cart yet.
              </p>
              <Link to="/course">
                <button className="bg-pink-500 text-white px-6 py-3 rounded-md hover:bg-pink-700 duration-300">
                  Continue Shopping
                </button>
              </Link>
            </div>
          </div>
          <Footer />
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col">
        <div className="flex-1 max-w-screen-2xl container mx-auto md:px-20 px-4">
          <div className="mt-28">
            <h1 className="text-2xl md:text-4xl mb-8">
              Your <span className="text-pink-500">Cart</span>
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6">
                  <h2 className="text-xl font-semibold mb-4">
                    Cart Items ({cart.length})
                  </h2>
                  {cart.map((item) => (
                    <div
                      key={item._id}
                      className="flex items-center gap-4 p-4 border-b border-gray-200 dark:border-gray-700"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-24 object-cover rounded-md"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{item.name}</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          {item.title}
                        </p>
                        <p className="text-pink-500 font-semibold">
                          ${item.price}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() =>
                            handleQuantityChange(item._id, item.quantity - 1)
                          }
                          className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600"
                        >
                          -
                        </button>
                        <span className="w-12 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            handleQuantityChange(item._id, item.quantity + 1)
                          }
                          className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600"
                        >
                          +
                        </button>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                        <button
                          onClick={() => {
                            removeFromCart(item._id);
                            toast.success(`${item.name} removed from cart`);
                          }}
                          className="text-red-500 text-sm hover:text-red-700"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cart Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 h-fit">
                  <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span>
                        Subtotal (
                        {cart.reduce((total, item) => total + item.quantity, 0)}{" "}
                        items)
                      </span>
                      <span>${getCartTotal().toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span className="text-green-500">Free</span>
                    </div>
                    <div className="border-t pt-3">
                      <div className="flex justify-between font-semibold text-lg">
                        <span>Total</span>
                        <span>${getCartTotal().toFixed(2)}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <button
                      onClick={handleCheckout}
                      className="w-full bg-pink-500 text-white py-3 rounded-md hover:bg-pink-700 duration-300 font-semibold"
                    >
                      Proceed to Checkout
                    </button>
                    <button
                      onClick={() => {
                        clearCart();
                        toast.success("Cart cleared");
                      }}
                      className="w-full bg-gray-500 text-white py-2 rounded-md hover:bg-gray-700 duration-300"
                    >
                      Clear Cart
                    </button>
                    <Link to="/course">
                      <button className="w-full bg-transparent border border-pink-500 text-pink-500 py-2 rounded-md hover:bg-pink-500 hover:text-white duration-300">
                        Continue Shopping
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Cart;
