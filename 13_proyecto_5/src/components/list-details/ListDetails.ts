import "./listDetails.css"

type ListDetailsType ={
    names: string[],
    values:string[]
}

export const ListDetails =({names, values}:ListDetailsType): string=>{

    const nameItems = names.map(name => `<li class="u-mb-tiny">${name}</li>` ).join("")
    const valuesItems = values.map(values => `<li class="u-mb-tiny">${values}</li>` ).join("")

    return `
            <div class="list-details">
                <ul class="u-paragraph-large u-gray-font">
                    ${nameItems}    
                </ul>
                <ul class="u-paragraph-large u-text-bold u-text-right">
                    ${valuesItems}
                </ul>
            </div>
    `
} 