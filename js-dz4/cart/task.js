document.addEventListener("DOMContentLoaded", function () {
    const products = document.querySelectorAll(".product");
    const cartHeader = document.querySelector(".cart__title");
    cartHeader.style.display = "none";

    products.forEach((product) => {
        const quantityControls = product.querySelector(
            ".product__quantity-controls"
        );
        const quantityValue = product.querySelector(".product__quantity-value");
        const addButton = product.querySelector(".product__add");
        const productId = product.dataset.id;

        quantityControls.querySelector(".product__quantity-control_inc")
            .addEventListener("click", () => {
                quantityValue.textContent = parseInt(quantityValue.textContent) + 1;
            });

        quantityControls.querySelector(".product__quantity-control_dec")
            .addEventListener("click", () => {
                if (parseInt(quantityValue.textContent) > 1) {
                    quantityValue.textContent = parseInt(quantityValue.textContent) - 1;
                }
            });

        addButton.addEventListener("click", () => {
            const quantity = parseInt(quantityValue.textContent);
            const cartProductsContainer = document.querySelector(".cart__products");
            const existingCartProduct = cartProductsContainer.querySelector(`.cart__product[data-id="${productId}"]`);

            if (existingCartProduct) {
                const currentCount = parseInt(
                    existingCartProduct.querySelector(".cart__product-count").textContent
                );
                existingCartProduct.querySelector(".cart__product-count").textContent = currentCount + quantity;
            } else {
                const productImageSrc = product.querySelector(".product__image").src;

                const cartProduct = document.createElement("div");
                cartProduct.classList.add("cart__product");
                cartProduct.setAttribute("data-id", productId);
                cartProduct.innerHTML = `<img class="cart__product-image" src="${productImageSrc}">
                        <div class="cart__product-count">${quantity}</div>
                        <a href="#" class="cart__product-remove">&times;</a>`;

                cartProductsContainer.appendChild(cartProduct);
                updateCartVisibility();

                // Обработчик для кнопки удаления
                cartProduct.querySelector(".cart__product-remove")
                    .addEventListener("click", () => {
                        // Сбрасываем количество товара в списке продуктов
                        const productToReset = Array.from(products).find(
                            (item) => item.dataset.id === productId
                        );
                        if (productToReset) {
                            const itemQuantityValue = productToReset.querySelector( ".product__quantity-value");
                            itemQuantityValue.textContent = "1";
                        }

                        cartProductsContainer.removeChild(cartProduct);
                        updateCartVisibility();
                    });
            }
        });
    });

    function updateCartVisibility() {
        const cartProductsContainer = document.querySelector(".cart__products");

        if (cartProductsContainer.children.length > 0) {
            cartHeader.style.display = "block";
        } else {
            cartHeader.style.display = "none";
        }
    }
});
