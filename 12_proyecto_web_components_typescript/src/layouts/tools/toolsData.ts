import { ElementsDataProps } from "../../types/ElementsType";

export const toolsData: ElementsDataProps = [
  {
    name: "toolsSection",
    element: "div",
    classes: "section",
    children: [
      {
        name: "toolsTitle",
        element: "h2",
        classes: "secondary-title",
        id: "tools__title",
      },
      {
        name: "toolsList",
        element: "ul",
        children: [
          { name: "tool1", element: "li", textContent: "JavaScript ES6" },
          { name: "tool2", element: "li", textContent: "TypeScript" },
          { name: "tool3", element: "li", textContent: "MySQL" },
          { name: "tool4", element: "li", textContent: "Java" },
          { name: "tool5", element: "li", textContent: "React JS" },
          { name: "tool6", element: "li", textContent: "Express" },
          { name: "tool7", element: "li", textContent: "Figma" },
          { name: "tool8", element: "li", textContent: "Tailwind CSS" },
          { name: "tool9", element: "li", textContent: "Git / GitHub" },
          { name: "tool10", element: "li", textContent: "NodeJS" },
          { name: "tool11", element: "li", textContent: "Sass - SCSS" },
          { name: "tool12", element: "li", textContent: "HTML / CSS" },
        ],
      },
    ],
  },
];
