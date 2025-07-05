import "./input.css";

type textInputType = {
  type: string;
  id: string;
  name: string;
  placeholder: string;
  value?: string;
};

export const TextInput = ({
  type,
  id,
  name,
  placeholder,
  value = "",
}: textInputType): string => {
  return `
            <div class="input-group u-flex">
                <label for="${id}"></label>
                <input type="${type}" id="${id}" name="${name}" placeholder="${placeholder}" value="${value}" required />
            </div>
    
    `;
};
