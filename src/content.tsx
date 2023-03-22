import "./index.css";
import createNewDiv from "./utilityFunctions/createNewDiv";
import parseUsername from "./utilityFunctions/parseUsername";
import checkUser from "./utilityFunctions/checkUser";

const username = document.getElementsByClassName("vcard-username")[0];
if (username) {
  // clean text to get proper username
  const parsedUsername: string = parseUsername(username.textContent);

  // check whether username exists on opensauced or not
  checkUser(parsedUsername).then((response) => {
    if(response.res == "ok") {
      console.log("user is on open sauced");

      // create and insert open-sauced root division on github profile page
      createNewDiv(parsedUsername);
    }
    else
      console.log("user is not on open sauced");
  });
} else {
  console.log("Please open profile page");
}
