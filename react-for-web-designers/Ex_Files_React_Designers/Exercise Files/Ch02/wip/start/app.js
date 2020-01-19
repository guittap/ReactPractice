(function() {
  "use strict";

  function ProductImage(props) {
    return React.createElement("img", {
      src: "../../../assets/red.jpg",
      alt: "Product image"
    });
  }

  function ProductCostomizer(props) {
    return React.createElement(
      "div",
      { className: "cumstomizer" },
      React.createElement(
        "div",
        { className: "product-image" },
        React.createElement(ProductImage)
      )
    );
  }

  ReactDOM.render(
    React.createElement(ProductCostomizer),
    document.getElementById("react-root")
  );
})();
