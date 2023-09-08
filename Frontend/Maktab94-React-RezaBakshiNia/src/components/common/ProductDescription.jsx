const ProductDescription = ({ description }) => {
  return (
    <>
      <div className="product-description">
        <h3>توضیحات:</h3>
        <div dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </>
  );
};

export default ProductDescription;
