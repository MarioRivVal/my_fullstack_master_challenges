type FeatureType = {
  id: string;
  icon: () => string;
  text: string;
};

export const Feature = ({ id, icon,text }: FeatureType) => `
    <div id="${id}" class="home__features-item">
        <div class="medium-icon-box">
            ${icon()}
        </div>
        <p class="u-paragraph-small u-gray-font">${text}</p>
    </div>
`;
