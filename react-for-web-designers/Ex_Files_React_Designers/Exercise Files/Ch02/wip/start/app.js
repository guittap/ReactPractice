(function() {
  "use strict";

  function ProductImage(props) {
    return <img src="../../../assets/red.jpg" alt="Product image" />;
  }

  function ProductCostomizer(props) {
    return (
      <div className="customizer">
        <div className="product-image">
          <ProductImage />
        </div>
      </div>
    );
  }

  ReactDOM.render(
    React.createElement(ProductCostomizer),
    document.getElementById("react-root")
  );
})();
