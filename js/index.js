const ELEMENT_NAME = "feature-card";
const ELEMENT_ATTRIBUTES = {
  accentColor: "accentColor",
  iconHref: "iconHref",
};
const TEMPLATE_ID = "feature-card-template";
const SHADOW_CONFIG = { mode: "open" };

class FeatureCard extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow(SHADOW_CONFIG);
    const template = document.getElementById(TEMPLATE_ID);

    shadow.appendChild(template.content.cloneNode(true));

    const article = shadow.querySelector("article");

    if (this.hasAttribute(ELEMENT_ATTRIBUTES.accentColor)) {
      const accentColor = this.getAttribute(ELEMENT_ATTRIBUTES.accentColor);

      article.style.borderTopColor = accentColor;
    }

    if (this.hasAttribute(ELEMENT_ATTRIBUTES.iconHref)) {
      const iconHref = this.getAttribute(ELEMENT_ATTRIBUTES.iconHref);
      const icon = new Image();

      icon.src = iconHref;
      article.appendChild(icon);
    }
  }
}

customElements.define(ELEMENT_NAME, FeatureCard);
