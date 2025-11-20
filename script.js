// Changement de couleur des liens du menu
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("mouseenter", () => {
        link.style.color = "#ff4081";
    });
    link.addEventListener("mouseleave", () => {
        link.style.color = "#81d4fa";
    });
});
