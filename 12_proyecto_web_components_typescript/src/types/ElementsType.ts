type OptionProps = {
  id: string;
  text: string;
};

export type ElementDataProps = {
  name: string;
  element: string;
  id?: string;
  classes?: string;
  src?: string;
  href?: string;
  textContent?: string;
  innerHTML?: string;
  attributes?: { [key: string]: string };
  options?: OptionProps[];
  children?: ElementDataProps[];
};

export type ElementsDataProps = ElementDataProps[];
