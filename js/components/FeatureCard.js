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
        background-color: #fff;
        border-radius: 8px;
        padding: 2rem;
        box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.08);
        position: relative;
        overflow: hidden;
      }

      article div {
        position: absolute;
        height: 4px;
        top: 0;
        right: 0;
        left: 0;
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

    if (this.hasAttribute(FeatureCard.elementAttributes.iconName)) {
      const iconName = this.getAttribute(
        FeatureCard.elementAttributes.iconName
      );
      const icon = document.createElement(Icon.elementName);

      icon.setAttribute(Icon.elementAttributes.name, iconName);
      icon.setAttribute(
        Icon.elementAttributes.elementStyle,
        `
          margin-top: 2.4rem;
          float: right;
        `
      );
      article.appendChild(icon);
    }

    if (this.hasAttribute(FeatureCard.elementAttributes.accentColor)) {
      const accentColor = this.getAttribute(
        FeatureCard.elementAttributes.accentColor
      );
      const topBorder = document.createElement("div");

      topBorder.style.backgroundColor = accentColor;
      article.appendChild(topBorder);
    }

    this.shadow.appendChild(article);
  }
}

export { FeatureCard };
