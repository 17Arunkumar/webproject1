const accordionButtons = document.querySelectorAll(".abc-button");

function toggleContent(button) {
    const content = button.nextElementSibling;
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}

accordionButtons.forEach((button) => {
    button.addEventListener("click", () => {
        toggleContent(button);
    });
});
