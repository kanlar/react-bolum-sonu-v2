function ProductCardBtn({ productId, handleProductSelect }) {
  return (
    <>
      <button
        className="outline"
        onClick={() => handleProductSelect(productId)}
      >
        Seç..
      </button>
    </>
  );
}

export default ProductCardBtn;
