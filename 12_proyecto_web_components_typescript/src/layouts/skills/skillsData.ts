import { ElementsDataProps } from "../../types/ElementsType";

export const skillsData: ElementsDataProps = [
  {
    name: "skillsSection",
    element: "div",
    classes: "section",
    children: [
      {
        name: "skillsTitle",
        element: "h2",
        classes: "secondary-title",
        id: "skills__title",
      },
      {
        name: "skillsList",
        element: "ul",
        children: [
          { name: "skill1", element: "li", id: "skill_1" },
          {
            name: "skill2",
            element: "li",
            id: "skill_2",
            textContent: "Scrum",
          },
          {
            name: "skill3",
            element: "li",
            id: "skill_3",
          },
          { name: "skill4", element: "li", id: "skill_4" },
          { name: "skill5", element: "li", id: "skill_5" },
          { name: "skill6", element: "li", id: "skill_6" },
          {
            name: "skill7",
            element: "li",
            id: "skill_7",
          },
          { name: "skill8", element: "li", id: "skill_8" },
          { name: "skill9", element: "li", id: "skill_9" },
          { name: "skill10", element: "li", id: "skill_10" },
          {
            name: "skill11",
            element: "li",
            id: "skill_11",
          },
        ],
      },
    ],
  },
];
