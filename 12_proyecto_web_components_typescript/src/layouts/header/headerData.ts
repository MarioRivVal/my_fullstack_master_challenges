import { ElementsDataProps } from "../../types/ElementsType";

export const headerData: ElementsDataProps = [
  {
    name: "headerEl",
    element: "header",
    children: [
      {
        name: "contactEl",
        element: "div",
        classes: "contact",
        children: [
          {
            name: "lightmodeBox",
            element: "div",
            classes: "lightmode-box",
            children: [
              {
                name: "icon",
                element: "button",
                classes: "icon-btn",
                innerHTML: "",
              },
              {
                name: "emailEl",
                element: "a",
                id: "contact__email",
                classes: "btn violet-btn",
                href: "mailto:info@netneo.es",
              },
            ],
          },
          {
            name: "languageBox",
            element: "div",
            classes: "language-box",
            children: [
              {
                name: "telephoneEl",
                element: "a",
                id: "contact__telephone",
                href: "tel:+34642469683",
                textContent: "+34 642 469 683",
              },
              {
                name: "languageSelector",
                element: "select",
                classes: "language-selector",
                attributes: { name: "lang" },
                options: [
                  { id: "es", text: "Español" },
                  { id: "en", text: "English" },
                  { id: "it", text: "Italiano" },
                  { id: "po", text: "Português" },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "developerEl",
        element: "div",
        classes: "developer",
        children: [
          {
            name: "developerDetails",
            element: "div",
            classes: "developer__details",
            children: [
              {
                name: "devName",
                element: "p",
                id: "developer__name",
                textContent: "Mario Rivera",
              },
              {
                name: "devProfession",
                element: "p",
                id: "developer__profession",
              },
            ],
          },
          {
            name: "developerImg",
            element: "div",
            classes: "developer__img",
            children: [
              {
                name: "image",
                element: "img",
                src: "img/dev-img.png",
                attributes: { alt: "developer image" },
              },
            ],
          },
        ],
      },
    ],
  },
];
