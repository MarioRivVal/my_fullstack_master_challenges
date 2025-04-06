import "./Button.css";

export const Button = (id, text, url) => `
        <a ${url ? `href="${url}"` : ""} id="${id}" class="btn">${text}</a>
`;
