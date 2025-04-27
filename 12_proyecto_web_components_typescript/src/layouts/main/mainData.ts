import { ElementsDataProps } from "../../types/ElementsType";

export const mainData: ElementsDataProps = [
  {
    name: "mainEl",
    element: "main",
    classes: "main",
    children: [
      {
        name: "mainTitle",
        element: "h1",
        id: "main__title",
      },
      {
        name: "mainIntro",
        element: "p",
        id: "main__intro",
      },
      {
        name: "mainLangBox",
        element: "div",
        classes: "main__lang-box",
        children: [
          {
            name: "imgEnContainer",
            element: "div",
            classes: "main__img",
            children: [
              {
                name: "imgEn",
                element: "img",
                src: "/img/en.png",
                attributes: { alt: "English" },
              },
            ],
          },
          {
            name: "imgEsContainer",
            element: "div",
            classes: "main__img",
            children: [
              {
                name: "imgEs",
                element: "img",
                src: "/img/es.png",
                attributes: { alt: "Español" },
              },
            ],
          },
          {
            name: "imgPoContainer",
            element: "div",
            classes: "main__img",
            children: [
              {
                name: "imgPo",
                element: "img",
                src: "/img/po.png",
                attributes: { alt: "Português" },
              },
            ],
          },
          {
            name: "imgItContainer",
            element: "div",
            classes: "main__img",
            children: [
              {
                name: "imgIt",
                element: "img",
                src: "/img/it.png",
                attributes: { alt: "Italiano" },
              },
            ],
          },
        ],
      },
      {
        name: "navEl",
        element: "nav",
        classes: "nav",
        children: [
          {
            name: "websiteLink",
            element: "a",
            classes: "btn orange-btn",
            href: "https://www.netneo.es/",
            textContent: "Website",
            attributes: {
              target: "_blank",
              rel: "noopener noreferrer",
            },
          },
          {
            name: "linkedinLink",
            element: "a",
            classes: "btn blue-btn",
            href: "https://www.linkedin.com/in/mario-valverde-web-developer/",
            textContent: "LinkedIn",
            attributes: {
              target: "_blank",
              rel: "noopener noreferrer",
            },
          },
          {
            name: "githubLink",
            element: "a",
            classes: "btn green-btn",
            href: "https://github.com/MarioRivVal",
            textContent: "GitHub",
            attributes: {
              target: "_blank",
              rel: "noopener noreferrer",
            },
          },
        ],
      },
    ],
  },
];
