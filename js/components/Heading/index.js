class Heading extends HTMLElement {
  static elementName = "custom-heading";
  static elementAttributes = {
    text: "text",
    weight: "weight",
    headingTag: "headingTag",
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
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        color: hsl(234, 12%, 34%);
      }
    `;
    this.shadow.appendChild(style);
  }

  render() {
    const headingTag =
      this.getAttribute(Heading.elementAttributes.headingTag) ?? "h1";
    const weight = this.getAttribute(Heading.elementAttributes.weight) ?? "600";
    const heading = document.createElement(headingTag);

    if (this.hasAttribute(Heading.elementAttributes.text)) {
      const text = this.getAttribute(Heading.elementAttributes.text);
      const textTextNode = document.createTextNode(text);

      heading.appendChild(textTextNode);
    }

    heading.style.fontWeight = weight;
    this.shadow.appendChild(heading);
  }
}

export { Heading };
