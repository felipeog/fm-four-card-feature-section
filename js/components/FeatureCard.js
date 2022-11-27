import { Icon } from "./Icon.js";

class FeatureCard extends HTMLElement {
  static elementName = "feature-card";
  static elementAttributes = {
    title: "title",
    text: "text",
    accentColor: "accentColor",
    iconName: "iconName",
  };

  constructor() {
    super();

    this.shadow = this.attachShadow({ mode: "open" });
    this.setStyles();
    this.render();
  }

  setStyles() {
    const style = document.createElement("style");

    style.textContent = `
      article {
        border-top-style: solid;
        border-top-width: 4px;
      }
    `;
    this.shadow.appendChild(style);
  }

  render() {
    const article = document.createElement("article");

    if (this.hasAttribute(FeatureCard.elementAttributes.title)) {
      const title = this.getAttribute(FeatureCard.elementAttributes.title);
      const titleTextNode = document.createTextNode(title);
      const h1 = document.createElement("h1");

      h1.appendChild(titleTextNode);
      article.appendChild(h1);
    }

    if (this.hasAttribute(FeatureCard.elementAttributes.text)) {
      const text = this.getAttribute(FeatureCard.elementAttributes.text);
      const textTextNode = document.createTextNode(text);
      const p = document.createElement("p");

      p.appendChild(textTextNode);
      article.appendChild(p);
    }

    if (this.hasAttribute(FeatureCard.elementAttributes.accentColor)) {
      const accentColor = this.getAttribute(
        FeatureCard.elementAttributes.accentColor
      );

      article.style.borderTopColor = accentColor;
    }

    if (this.hasAttribute(FeatureCard.elementAttributes.iconName)) {
      const iconName = this.getAttribute(
        FeatureCard.elementAttributes.iconName
      );
      const icon = document.createElement(Icon.elementName);

      icon.setAttribute(Icon.elementAttributes.name, iconName);
      article.appendChild(icon);
    }

    this.shadow.appendChild(article);
  }
}

export { FeatureCard };
