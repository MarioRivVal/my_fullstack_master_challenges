import "./Results.css";
import { ResultsSlider } from "../resultSlider/ResultSlider";

import { loadDonwloadFunctionality } from "../../utils/loadDownloadFunctionality";
import { cleanPage } from "../../utils/cleanPage";
import {
  initObserver,
  getElementsToObserve,
} from "../../utils/observerElement";

export const Results = (images = []) => {
  const group1 = ResultsSlider(1, images.slice(0, 5));
  const group2 = ResultsSlider(2, images.slice(5, 8));
  const group3 = ResultsSlider(3, images.slice(8, 12));
  const group4 = ResultsSlider(4, images.slice(12, 17));
  const group5 = ResultsSlider(5, images.slice(17, 20));
  const group6 = ResultsSlider(6, images.slice(20, 24));
  const group7 = ResultsSlider(7, images.slice(24, 29));

  const resultsEl = document.querySelector(".result__container");
  if (resultsEl) cleanPage(resultsEl);

  resultsEl.innerHTML = `
      ${group1}
      ${group2}
      ${group3}
      ${group4}
      ${group5}
      ${group6}
      ${group7}     
`;

  setTimeout(() => {
    initObserver(getElementsToObserve());
    loadDonwloadFunctionality();
  }, 500);
};
