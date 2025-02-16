export function setupButtonListeners() {
    document.querySelectorAll(".nav-button").forEach(button => {
        button.addEventListener("click", () => {
            window.location.href = button.dataset.page;
        });
    });
}