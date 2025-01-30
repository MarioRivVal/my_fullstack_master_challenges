import "./Button.css";

export const Button = (icon, text,url) => `
<a class="my-btn" href=${url} target="_blank" rel"noopener noreferrer">
  <img src=${icon} alt='${text} icon'/>
  <h4>${text}</h4>
</a>
`;