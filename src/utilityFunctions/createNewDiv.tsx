import React from "react";
import ReactDOM from "react-dom/client";
import Button from "../Button/Button";

const createNewDiv = (parsedUsername: string) => {
  const myuser = "vaishnavghenge";

  if (parsedUsername.toLowerCase() == myuser) {
    const btnParent = document.getElementsByClassName(
      "js-profile-editable-area"
    )[0];
    const btn = document.getElementsByClassName("mb-3")[3];

    const openSaucedBtn = document.createElement("div");
    openSaucedBtn.id = "opensauced-root";
    openSaucedBtn.className = "mb-3";
    btnParent.insertBefore(openSaucedBtn, btn);

    ReactDOM.createRoot(document.getElementById("opensauced-root")!).render(
      <React.StrictMode>
        <Button username={parsedUsername} />
      </React.StrictMode>
    );
  }
  else {
    const btnParent = document.getElementsByClassName("d-flex flex-column")[3];
    const btn = document.getElementsByClassName("flex-order-1 flex-md-order-none")[1];

    const openSaucedBtn = document.createElement("div");
    openSaucedBtn.id = "opensauced-root";
    openSaucedBtn.className = "flex-order-1 flex-md-order-none mb-3";
    btnParent.insertBefore(openSaucedBtn, btn);

    ReactDOM.createRoot(document.getElementById("opensauced-root")!).render(
      <React.StrictMode>
        <Button username={parsedUsername} />
      </React.StrictMode>
    );
  }
};

export default createNewDiv;
