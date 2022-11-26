const SHADOW_CONFIG = { mode: "open" };
const TEMPLATE_ID = "feature-card-template";

class FeatureCard extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow(SHADOW_CONFIG);
    const template = document.getElementById(TEMPLATE_ID);

    shadow.appendChild(template.content.cloneNode(true));

    const article = shadow.querySelector("article");

    if (this.hasAttribute("accentColor")) {
      const accentColor = this.getAttribute("accentColor");

      article.style.borderTopColor = accentColor;
    }

    if (this.hasAttribute("iconHref")) {
      const iconHref = this.getAttribute("iconHref");
      const icon = new Image();

      icon.src = iconHref;
      article.appendChild(icon);
    }
  }
}

customElements.define("feature-card", FeatureCard);
