// Adding an image changer
const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/jw-logo.png") {
    myImage.setAttribute("src", "images/jw-logo2.png");
  } else {
    myImage.setAttribute("src", "images/jw-logo.png");
  }
};

// Adding a personalized welcome message
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
  const myName = prompt("Please enter username");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Do you know who Jehovah's Witnesses are, ${myName}?`;
  }  
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Do you know who Jehovah's Witnesses are, ${storedName}?`;
}
myButton.onclick = () => {
  setUserName();
};
