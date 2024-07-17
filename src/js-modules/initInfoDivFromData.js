// in the following csv file, each line refers to a section in the contact tab
import contactInfo from "../data/contact-info.json";
import contactOpeningHoursInfo from "../data/contact-opening-hours.json";
import contactOpeningHoursInfoShort from "../data/contact-opening-hours-short.json";
import contactIcons from "../data/contact-icons.json";
import {
  setFaIconAndLabel,
  setFaIcon,
} from "../js-utilities/fontAwesomeUtilities.js";

export function initContactInfoDiv() {
  const contactInfoDiv = document.createElement("div");
  contactInfoDiv.classList.add("contact-info");

  const contactInfoListDiv = document.createElement("div");
  contactInfoListDiv.classList.add("contact-list");
  contactInfoDiv.appendChild(contactInfoListDiv);

  Object.keys(contactInfo).forEach((key) => {
    if (key === "lon" || key === "lat" || key === "social") return;

    const fieldP = document.createElement("p");
    fieldP.classList.add(key);

    setFaIconAndLabel(
      fieldP,
      { prefix: contactIcons[key][0], icon: contactIcons[key][1] },
      contactInfo[key],
      true,
      "span"
    );

    contactInfoListDiv.appendChild(fieldP);
  });

  const contactSocialDiv = document.createElement("div");
  contactSocialDiv.classList.add("contact-social");
  contactInfoDiv.appendChild(contactSocialDiv);

  Object.keys(contactInfo.social).forEach((key) => {
    const socialA = document.createElement("a");
    socialA.href = contactInfo.social[key];
    socialA.classList.add("contact-social-a");
    contactSocialDiv.appendChild(socialA);
    setFaIcon(
      socialA,
      { prefix: contactIcons[key][0], icon: contactIcons[key][1] },
      true
    );
  });

  return contactInfoDiv;
}

export function initLocationMapDiv() {
  const mapsDiv = document.createElement("div");
  mapsDiv.classList.add("location-map");
  mapsDiv.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4239.790413665068!2d77.36949373935593!3d28.367034891819944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdca9507c12b5%3A0x3e96934225c5055!2sKLJ%20GREENS%2C%20Block%20A%2C%20Sector%2077%2C%20Faizupur%20Majra%20Neemka%2C%20Faridabad%2C%20Haryana%20121004!5e0!3m2!1sen!2sin!4v1721046082769!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;

  return mapsDiv;
}

export function initOpeningHoursDiv(shortNotation = false) {
  const openingHoursDiv = document.createElement("div");
  openingHoursDiv.classList.add("days-and-hours");

  const contactOpeningHoursInfoToUse = shortNotation
    ? contactOpeningHoursInfoShort
    : contactOpeningHoursInfo;

  contactOpeningHoursInfoToUse.forEach((openingHoursInfo) => {
    const pDays = document.createElement("p");
    pDays.classList.add("days");
    pDays.textContent = openingHoursInfo.day;

    const pHours = document.createElement("div");
    pHours.classList.add("hours");
    pHours.textContent = openingHoursInfo.hours;

    openingHoursDiv.appendChild(pDays);
    openingHoursDiv.appendChild(pHours);
  });

  return openingHoursDiv;
}
