document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".accordion-button").forEach((button) => {
        button.addEventListener("click", function () {
            const accordionItem = this.closest(".accordion-item");
            const isActive = accordionItem.classList.contains("active");
            const buttonText = this.querySelector(".accordion-icon");

            // Закрываем все открытые аккордеоны и сбрасываем все кнопки
            document.querySelectorAll(".accordion-item").forEach((item) => {
                item.classList.remove("active");
                // Находим кнопку внутри каждого элемента и устанавливаем "+"
                const itemButton = item.querySelector(".accordion-icon");
                if (itemButton) {
                    itemButton.textContent = "+";
                }
            });

            // Открываем текущий, если он был закрыт
            if (!isActive) {
                accordionItem.classList.add("active");
                buttonText.textContent = "-";
            }
        });
    });


});

document.addEventListener("DOMContentLoaded", () => {

    const slider = document.querySelector(".slider");
    const slidesContainer = document.querySelector(".slides");
    let slides = Array.from(document.querySelectorAll(".slide"));

    const dots = document.querySelectorAll(".dots .dot");

    const btnPrev = document.querySelector(".arrow.left");
    const btnNext = document.querySelector(".arrow.right");

    const slideWidth = 606;
    const totalWidth = slideWidth; // расстояние автоматическое
    let index = 1;


    // === ФУНКЦИЯ ОБНОВЛЕНИЯ ===
    function updateSlider(animated = true) {
        const containerWidth = slider.clientWidth;

        const offset =
            -(index * totalWidth) + (containerWidth - slideWidth) / 2;

        slidesContainer.style.transition = animated ? "transform 0.5s ease-in-out" : "none";
        slidesContainer.style.transform = `translateX(${offset}px)`;

        slides.forEach((slide, i) =>
            slide.classList.toggle("active", i === index)
        );

        dots.forEach((dot, i) => {
            dot.classList.toggle("active", i === index);
        });
    }


    // === ПЕРЕХОДЫ ===
    btnNext.addEventListener("click", () => {
        if (index === 4) {
            index = 0;
        } else {
            index++;
        }
        updateSlider();
    });

    btnPrev.addEventListener("click", () => {
        if (index === 0) {
            index = 4;
        } else {
            index--;
        }
        updateSlider();
    });

    updateSlider(false); // первый рендер без анимации
});

