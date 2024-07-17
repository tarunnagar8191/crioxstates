import bowmans from "../img/bowmanslogo.png";
import renderHome from "./renderHome.js";

export default function initLogoAndTitle(contentDiv, isH1 = false) {
  const logoImg = document.createElement("img");
  logoImg.classList.add("logo");
  logoImg.src = bowmans;
  logoImg.alt = "The logo of  the restaurant.";

  const name = document.createElement(isH1 ? "h1" : "p");
  name.classList.add("name");
  name.textContent = "The Bowman's Kitchen";

  const logoAndNameDiv = document.createElement("div");
  logoAndNameDiv.classList.add("logo-and-name");
  logoAndNameDiv.appendChild(logoImg);
  logoAndNameDiv.appendChild(name);

  // Add event listener (it renders the home page)
  logoAndNameDiv.contentDiv = contentDiv;
  logoAndNameDiv.addEventListener("click", (e) => {
    renderHome(e.currentTarget.contentDiv);
  });

  return logoAndNameDiv;
}
