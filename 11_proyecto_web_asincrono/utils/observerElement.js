export const getElementsToObserve = () => {
  let allELements = [];

  for (let i = 1; i <= 7; i++) {
    allELements = [
      ...allELements,
      {
        container: document.querySelector(`.result__box--${i}`),
        items: document.querySelectorAll(`.result__box--${i} .result__img`),
        threshold: 0.3,
      },
    ];
  }

  return allELements;
};

export const initObserver = function (allELements) {
  allELements.forEach(({ container, items, threshold }) => {
    if (container) {
      observeElement(container, items, { root: null, threshold });
    }
  });
};

const observeElement = (container, items, options) => {
  const observer = new IntersectionObserver((entries) => {
    const [entry] = entries;

    if (entry.isIntersecting) {
      items.forEach((item) => {
        item.classList.add("show");
      });
      observer.disconnect();
    }
  }, options);

  observer.observe(container);
};
