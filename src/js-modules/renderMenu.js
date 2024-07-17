import { resetTab } from "../js-utilities/domUtils.js";
import initGenericTab from "./initGenericTab.js";
import initGenericSection from "./initGenericSection.js";

// Import JSON data for menu sections and dishes
import menuTabSectionsInfo from "../data/menu-sections.json";
import menuTabDishesInfo from "../data/menu-dishes.json";

// Import images for menu sections
import menuImg_0 from "../img/burger.jpg";
import menuImg_1 from "../img/pasta.jpg";
import menuImg_2 from "../img/french-fries.jpg";
import menuImg_3 from "../img/sandwich.jpg";
import menuImg_4 from "../img/momos.jpg";
import menuImg_5 from "../img/menu-4.jpg";
import menuImg_6 from "../img/pizza.jpg";
import menuImg_7 from "../img/mocktail.png";
import menuImg_8 from "../img/shakes.jpg";

// Array of menu images
const menuImg = [
  menuImg_0,
  menuImg_1,
  menuImg_2,
  menuImg_3,
  menuImg_4,
  menuImg_5,
  menuImg_6,
  menuImg_7,
  menuImg_8,
];

// Function to render the menu
export default function renderMenu(contentDiv) {
  resetTab(contentDiv);
  createMenu(contentDiv);
}

// Function to create the menu sections
function createMenu(contentDiv) {
  initGenericTab(contentDiv, "menu");

  // Create the menu sections
  menuTabSectionsInfo.forEach((sectionInfo) => {
    const sectionIndex = sectionInfo["id"];
    const sectionTitle = sectionInfo["title"];

    const [section, txtSide] = initGenericSection(
      sectionTitle,
      menuImg[sectionIndex],
      { withSideImage: true, imgAlternate: true, hasSubsections: true }
    );

    const dishesDiv = document.createElement("div");
    dishesDiv.classList.add("dishes");
    txtSide.appendChild(dishesDiv);

    contentDiv.appendChild(section);
  });

  // Add the dishes to their respective sections
  menuTabDishesInfo.forEach((dishInfo) => createDish(dishInfo));
}

// Function to create a dish and append it to the correct section
function createDish(dishInfo) {
  const dishName = dishInfo["name"];
  const categoryId = dishInfo["category"];
  const price = dishInfo["price"];

  const h4 = document.createElement("h4");
  h4.textContent = dishName;

  const pPrice = document.createElement("span");
  pPrice.textContent = price;
  pPrice.classList.add("price");

  const dish = document.createElement("div");
  dish.classList.add("dish");
  dish.appendChild(h4);
  dish.appendChild(pPrice);

  const sectionIndex = menuTabSectionsInfo.findIndex(
    (category) => category.id === categoryId
  );
  const sectionDiv = document.querySelectorAll(".dishes")[sectionIndex];
  if (sectionDiv) {
    sectionDiv.appendChild(dish);
  }
}
