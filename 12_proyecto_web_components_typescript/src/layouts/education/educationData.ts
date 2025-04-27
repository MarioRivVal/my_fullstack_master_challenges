import { ElementsDataProps } from "../../types/ElementsType";

export const educationData: ElementsDataProps = [
  {
    name: "educationSection",
    element: "div",
    classes: "section",

    children: [
      {
        name: "educationTitle",
        element: "h2",
        id: "education__title",
        classes: "secondary-title",
      },
      {
        name: "educationBox1",
        element: "div",

        children: [
          {
            name: "certificate1",
            element: "p",
            id: "education__certificate--1",
            classes: "bold",
          },
          {
            name: "details1",
            element: "p",
            children: [
              {
                name: "school1",
                element: "span",
                id: "education__school--1",
                textContent: "The Power Business School",
              },

              {
                name: "country1",
                element: "span",
                id: "education__country--1",
              },

              {
                name: "year1",
                element: "span",
                id: "education__year--1",
                textContent: "2024 - 2026",
              },
            ],
          },
          {
            name: "description1",
            element: "p",
            id: "education__description--1",
            classes: "m-top-1",
          },
        ],
      },
      {
        name: "educationBox2",
        element: "div",

        children: [
          {
            name: "certificate2",
            element: "p",
            id: "education__certificate--2",
            classes: "bold",
          },
          {
            name: "details2",
            element: "p",
            children: [
              {
                name: "school2",
                element: "span",
                id: "education__school--2",
                textContent: "The Power Business School",
              },

              {
                name: "country2",
                element: "span",
                id: "education__country--2",
              },

              {
                name: "year2",
                element: "span",
                id: "education__year--2",
                textContent: "2024 - 2026",
              },
            ],
          },
          {
            name: "description2",
            element: "p",
            id: "education__description--2",
            classes: "m-top-1",
          },
        ],
      },
      {
        name: "educationBox3",
        element: "div",

        children: [
          {
            name: "certificate3",
            element: "p",
            id: "education__certificate--3",
            classes: "bold",
          },
          {
            name: "details3",
            element: "p",
            children: [
              {
                name: "school3",
                element: "span",
                id: "education__school--3",
                textContent: "Grupo Aspasia",
              },

              {
                name: "country3",
                element: "span",
                id: "education__country--3",
              },

              {
                name: "year3",
                element: "span",
                id: "education__year--3",
                textContent: "Ene - May, 2024",
              },
            ],
          },
          {
            name: "description3",
            element: "p",
            id: "education__description--3",
            classes: "m-top-1",
          },
        ],
      },
    ],
  },
];
