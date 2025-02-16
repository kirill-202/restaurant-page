import "./styles.css";
import { Content } from "./main-page";


const restaurantDescriptions = [
    "Welcome to our cozy restaurant, where we serve freshly prepared meals with the finest ingredients to give you an unforgettable dining experience.",
    "Indulge in our chef’s special dishes, crafted with passion and inspired by flavors from around the world.",
    "We take pride in using organic, locally sourced ingredients to create mouthwatering meals that satisfy every palate.",
    "Step into a warm and inviting atmosphere where every dish tells a story, from classic comfort food to gourmet delicacies.",
    "Our restaurant is the perfect place for family gatherings, romantic dinners, or casual hangouts with friends, offering a menu that caters to all tastes.",
    "Experience exceptional service and a delightful selection of handcrafted dishes, paired with fine wines and refreshing beverages."
];


const content = new Content("#content");

document.addEventListener("DOMContentLoaded", () => {
    setupNavigationListeners();
    loadPageContent("home");
});


function setupNavigationListeners() {
    document.querySelectorAll(".nav-button").forEach(button => {
        button.addEventListener("click", (event) => {
            const page = event.target.dataset.page;
            loadPageContent(page);
        });
    });
}

e
function loadPageContent(page) {
    content.clearContent(); 
    let contentToDisplay = "";

    switch (page) {
        case "home":
            contentToDisplay = restaurantDescriptions; 
            break;
        case "menu":
            contentToDisplay = ["Our menu offers a variety of options including Pasta, Burgers, and Pizzas!"];
            break;
        case "about":
            contentToDisplay = ["We are a family-owned restaurant, passionate about serving the best meals made with organic ingredients."];
            break;
        default:
            contentToDisplay = ["Page not found!"];
            break;
    }

    contentToDisplay.forEach(text => {
        content.addChild("p", text);
        const paragraphs = content.getParagraphs();
        for (const para of paragraphs) {
            para.setClasses("regular");
        }
    });
}