import { setUpWrapper } from "./about-wrapper.js";
import { SetUpSendMail } from "./emailJS.js";
import { setUpHeader } from "./header.js";
import { setUpMap } from "./map-leaflet.js";
import { setUpSlider } from "./slider.js";
import { setUpViewAllCataloguePage } from "./view-all-btn.js";

setUpHeader();

if (window.location.pathname === "/") {
  setUpSlider();
}
if (window.location.pathname === "/catalogue") {
    setUpViewAllCataloguePage();
}
if (window.location.pathname === "/about") {
  setUpWrapper();
  setUpMap();
}
if (window.location.pathname === "/contact") {
  SetUpSendMail();
}

