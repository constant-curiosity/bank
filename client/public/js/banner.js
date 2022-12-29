

const $ = (id) => {
  "Use Strict";
  return document.getElementById(id);
};

const bannerRotate = () => {
  let imageNum = 0;
  return (innerRotate = () => {
    "Use Strict";
    imageNum++;
    const imageContainer = [
      "../public/images/blue_CC.jpg",
      "../public/images//bank_Lobby.jpg",
      "../public/images/blue_Pig_Bank.jpg",
    ];
    if (imageNum === imageContainer.length) {
      imageNum = 0;
    }
    $("banner").innerHTML = `<img src="${imageContainer[imageNum]}">`;
    setTimeout(innerRotate, 2000);
  });
};

window.onload = bannerRotate();
