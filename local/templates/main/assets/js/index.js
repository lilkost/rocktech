import { header } from "./module/header.js";
import { starsView } from "../js/module/stars.js";
import { accordion } from "../js/module/accordion.js";
import { downloadAccordion } from "../js/module/download-slider.js";
import { topSlider } from "./module/top-slider.js";
import { detailPage } from "./module/detailCardPage.js";
import { selectLoadLibs } from "./module/selectLib.js";
import { useDynamicAdapt } from './module/dynamicAdapt.js'
import { catalogAsideOpen } from "./module/catalogAiside.js";
import { removeCheckedFilterInput } from "./module/catalogAiside.js";

header();
starsView();
accordion();
downloadAccordion();
topSlider();
detailPage();
selectLoadLibs();
useDynamicAdapt();
catalogAsideOpen();
removeCheckedFilterInput();