document.addEventListener("DOMContentLoaded", function () {
    const loader = document.getElementById("loader");
    const itemsContainer = document.getElementById("items");

    async function loadCurrencyRates() {
        try {
            loader.classList.add("loader_active");

            const response = await fetch(
                "https://students.netoservices.ru/nestjs-backend/slow-get-courses"
            );
            const data = await response.json();
            const currencies = data.response.Valute;

            for (const code in currencies) {
                const currency = currencies[code];

                const itemDiv = document.createElement("div");
                itemDiv.classList.add("item");

                itemDiv.innerHTML =
                `<div class="item__code">${currency.CharCode}</div>
                <div class="item__value">${currency.Value}</div>
                <div class="item__currency">руб.</div>`;

                itemsContainer.appendChild(itemDiv);
            }
        } catch (error) {
            console.error("Ошибка при загрузке данных:", error);
        } finally {
            loader.classList.remove("loader_active");
        }
    }

    loadCurrencyRates();
});
