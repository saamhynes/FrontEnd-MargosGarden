/**
 *      QAP1 - FRONT-END & JAVASCRIPT
 *
 *      Name:       <SAMANTHA_HYNES>
 *
 *      Date:       <MAY_31_2023>
 */

document.addEventListener("DOMContentLoaded", function () {
  var catMenu = document.getElementById("category-menu");
  var prodTableBody = document.getElementById("products");
  var catTitle = document.getElementById("header");
  var tableHeaders = ["Name", "Description", "Price"];

  for (var i = 0; i < categories.length; i++) {
    var button = document.createElement("button");

    button.id = categories[i].id;
    button.textContent = categories[i].description;
    catMenu.appendChild(button);

    button.addEventListener("click", function (evt) {
      var catID = evt.currentTarget.id;
      var category = categories.find(function (cat) {
        return cat.id === catID;
      });

      showProductList(category);
    });
  }

  function showProductList(category) {
    catTitle.textContent = category.description;

    var filterProd = window.products.filter(function (product) {
      return product.categories.includes(category.id) && !product.discontinued;
    });

    prodTableBody.innerHTML = "";

    var headerRow = document.createElement("tr");
    tableHeaders.forEach(function (header) {
      var th = document.createElement("th");
      th.textContent = header;
      headerRow.appendChild(th);
    });
    prodTableBody.appendChild(headerRow);

    filterProd.forEach(function (product) {
      var row = document.createElement("tr");

      var nameCell = document.createElement("td");
      nameCell.textContent = product.name;
      row.appendChild(nameCell);

      var descriptionCell = document.createElement("td");
      descriptionCell.textContent = product.description;
      row.appendChild(descriptionCell);

      var priceCell = document.createElement("td");
      var price = formatPrice(product.price);

      priceCell.textContent = price;
      row.appendChild(priceCell);

      row.addEventListener("click", function () {
        console.log(product);
      });

      prodTableBody.appendChild(row);
    });
  }

  function formatPrice(price) {
    var priceDollar = price / 100;
    var format = new Intl.NumberFormat("en-CA", {
      style: "currency",
      currency: "CAD",
    });
    var price = format.format(priceDollar);
    return price;
  }
});
