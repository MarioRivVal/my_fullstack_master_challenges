import { ElementsDataProps } from "../../types/ElementsType";

export const footerData: ElementsDataProps = [
  {
    name: "footerEl",
    element: "footer",
    children: [
      {
        name: "footerParagraph1",
        element: "p",
        children: [
          { name: "yearSpan", element: "span", id: "footer__year" },
          {
            name: "netneoLink",
            element: "a",
            href: "https://www.netneo.es/",
            attributes: {
              target: "_blank",
              rel: "noopener noreferrer",
            },
            textContent: "netneo.es",
          },
        ],
      },
      {
        name: "footerParagraph2",
        element: "p",
        id: "footer__text",
      },
    ],
  },
];
