const TEMPLATE_ID = "feature-card-template";
const SHADOW_CONFIG = { mode: "open" };

class FeatureCard extends HTMLElement {
  constructor() {
    super();

    const template = document.getElementById(TEMPLATE_ID);

    this.attachShadow(SHADOW_CONFIG).appendChild(
      template.content.cloneNode(true)
    );
  }
}

customElements.define("feature-card", FeatureCard);
