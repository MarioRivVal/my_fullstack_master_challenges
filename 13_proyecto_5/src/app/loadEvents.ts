export const loadEvents = (
  idElement: string,
  eventType: string,
  func: (e: Event) => void
) => {
  const element = document.querySelector(idElement);

  if (element) {
    element.addEventListener(eventType, (e) => {
      e.preventDefault();
      func(e);
    });
  }
};
