import React from "react";
import initLogoAndTitle from "./initLogoAndTitle";
import renderAbout from "./renderAbout";
import renderMenu from "./renderMenu";
import renderContact from "./renderContact";

const InitHeader = ({ setContent }) => {
  const initNavMenu = () => {
    const tabInfos = [
      ["About", "about", renderAbout],
      ["Menu", "menu", renderMenu],
      ["Contact", "contact", renderContact],
    ];

    return (
      <nav>
        {tabInfos.map(([label, className, renderFunc]) => (
          <button
            key={className}
            className={`${className}-btn`}
            onClick={() => setContent(renderFunc)}
          >
            {label}
          </button>
        ))}
      </nav>
    );
  };

  return (
    <header>
      {initLogoAndTitle(true)}
      {initNavMenu()}
    </header>
  );
};

export default InitHeader;
