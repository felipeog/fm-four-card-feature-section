import { Heading } from "./Heading.js";
import { Icon } from "./Icon.js";
import { Text } from "./Text.js";

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
      const heading = document.createElement(Heading.elementName);

      heading.setAttribute(Heading.elementAttributes.text, title);
      heading.setAttribute(Heading.elementAttributes.tag, "h1");
      heading.setAttribute(Heading.elementAttributes.size, "md");
      heading.setAttribute(Heading.elementAttributes.weight, "600");
      article.appendChild(heading);
    }

    if (this.hasAttribute(FeatureCard.elementAttributes.text)) {
      const text = this.getAttribute(FeatureCard.elementAttributes.text);
      const textElement = document.createElement(Text.elementName);

      textElement.setAttribute(Text.elementAttributes.text, text);
      textElement.setAttribute(Text.elementAttributes.size, "sm");
      article.appendChild(textElement);
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
