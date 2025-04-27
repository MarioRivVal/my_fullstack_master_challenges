import { ElementsDataProps } from "../../types/ElementsType";

export const experienceData: ElementsDataProps = [
  {
    name: "experienceSection",
    element: "div",
    classes: "section",
    children: [
      {
        name: "experienceTitle",
        element: "h2",
        id: "experience__title",
        classes: "secondary-title",
      },
      {
        name: "experienceBox1",
        element: "div",
        classes: "experience__box--1",
        children: [
          {
            name: "company1",
            element: "p",
            id: "experience__company--1",
            classes: "bold",
            textContent: "Netneo.es",
          },
          {
            name: "details1",
            element: "p",
            children: [
              {
                name: "position1",
                element: "span",
                id: "experience__position--1",
              },

              {
                name: "year1",
                element: "span",
                id: "experience__year--1",
              },
            ],
          },
          {
            name: "description1",
            element: "p",
            id: "experience__description--1",
            classes: "m-top-1",
          },
        ],
      },
      {
        name: "experienceBox2",
        element: "div",
        classes: "experience__box--2",
        children: [
          {
            name: "company2",
            element: "p",
            id: "experience__company--2",
            classes: "bold",
            textContent: "MSC Cruises",
          },
          {
            name: "details2",
            element: "p",
            children: [
              {
                name: "position2",
                element: "span",
                id: "experience__position--2",
              },

              {
                name: "year2",
                element: "span",
                id: "experience__year--2",
                textContent: " / 2010 - 2015",
              },
            ],
          },
          {
            name: "description2",
            element: "p",
            id: "experience__description--2",
            classes: "m-top-1",
          },
        ],
      },
    ],
  },
];
