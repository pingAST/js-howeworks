document.addEventListener("DOMContentLoaded", () => {
    const tooltips = document.querySelectorAll(".has-tooltip");
    const tooltipElement = document.querySelector(".tooltip");

    tooltips.forEach((tooltip) => {
        tooltip.addEventListener("click", (event) => {
            event.preventDefault();

            if (tooltipElement.classList.contains("tooltip_active")) {
                tooltipElement.classList.remove("tooltip_active");
                return;
            }

            const tooltipText = tooltip.getAttribute("title");
            tooltipElement.textContent = tooltipText;

            const rect = tooltip.getBoundingClientRect();

            tooltipElement.style.top = `${rect.bottom}px`;
            tooltipElement.style.left = `${rect.left}px`;

            tooltipElement.classList.add("tooltip_active");
        });
    });

    document.addEventListener("click", (event) => {
        if (
            !event.target.classList.contains("has-tooltip") &&
            tooltipElement.classList.contains("tooltip_active")
        ) {
            tooltipElement.classList.remove("tooltip_active");
        }
    });
});
