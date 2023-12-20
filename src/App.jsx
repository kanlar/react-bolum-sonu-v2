import { useState } from "react";
import ImgContainer from "./components/ImgContainer";
import ImgNotSelected from "./components/ImgNotSelected";
import { products as productsObject } from "./data/products";

function App() {
  const [products, setProducts] = useState(productsObject);
  const [activeProduct, setActiveProduct] = useState(
    products.find((item) => item.isActive)
  );

  function handleProductSelect(productId) {
    const selectedProduct = productsObject.find(
      (item) => item.id === productId
    );
    selectedProduct.isActive = true;
    setActiveProduct(selectedProduct);
    const notSelectedProducts = productsObject
      .filter((item) => item.id !== productId)
      .map((item) => {
        return {
          ...item,
          isActive: false,
        };
      });

    const newProducts = [...notSelectedProducts, selectedProduct].sort(
      (a, b) => a.id - b.id
    );
    setProducts(newProducts);
  }

  return (
    <>
      <main className="container">
        {activeProduct ? (
          <img src={activeProduct.imgName} style={{ width: "100%" }} />
        ) : (
          <ImgNotSelected />
        )}
        <ImgContainer
          products={products}
          handleProductSelect={handleProductSelect}
        />
      </main>
    </>
  );
}

export default App;
