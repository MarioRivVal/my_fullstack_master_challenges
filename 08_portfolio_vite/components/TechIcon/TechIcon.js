import "./TechIcon.css"

export const TechIcon = (techs)=>{
  return techs
  .map(
    (tech) => `
      <img 
        src="/img/logos/${tech}.png" 
        alt="${tech}" 
        title="${tech}"
      />
    `
  )
  .join("");
}