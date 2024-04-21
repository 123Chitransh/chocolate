document.addEventListener("DOMContentLoaded", function() {
    const chocolates = document.querySelectorAll(".chocolate");
    const selectedChocolates = document.getElementById("selected-chocolates");
    const totalPriceDisplay = document.getElementById("total-price");
    let totalPrice = 0;
  
    chocolates.forEach(chocolate => {
      chocolate.addEventListener("click", () => {
        if (selectedChocolates.children.length < 8) {
          const name = chocolate.getAttribute("data-name");
          const price = parseFloat(chocolate.getAttribute("data-price"));
          const listItem = document.createElement("li");
          listItem.innerText = `${name} - $${price.toFixed(2)}`;
          selectedChocolates.appendChild(listItem);
          totalPrice += price;
          totalPriceDisplay.textContent = totalPrice.toFixed(2);
        } else {
          alert("You can only select up to 8 chocolates.");
        }
      });
    });
  });
  