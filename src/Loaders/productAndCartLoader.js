import { getStoredCart } from "../utilities/fakedb";

export const productsAndCartLoader = async () => {
  const response = await fetch("http://localhost:5000/products");
  const { products } = await response.json();
  const savedCart = getStoredCart();
  const storedCart = [];
  for (const id in savedCart) {
    const addedProduct = products.find(product => product._id === id);
    if (addedProduct) {
      const quantity = savedCart[id];
      addedProduct.quantity = quantity;
      storedCart.push(addedProduct);
    }
  }
  return { products, storedCart };
};