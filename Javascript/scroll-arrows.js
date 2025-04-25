document.addEventListener("DOMContentLoaded", () => {
    const leftArrows = document.querySelectorAll(".scroll-arrow.left");
    const rightArrows = document.querySelectorAll(".scroll-arrow.right");

    leftArrows.forEach(arrow => {
        arrow.addEventListener("click", () => {
            const scrollmenu = arrow.parentElement.querySelector(".scrollmenu");
            scrollmenu.scrollBy({ left: -300, behavior: "smooth" });
        });
    });

    rightArrows.forEach(arrow => {
        arrow.addEventListener("click", () => {
            const scrollmenu = arrow.parentElement.querySelector(".scrollmenu");
            scrollmenu.scrollBy({ left: 300, behavior: "smooth" });
        });
    });
});
