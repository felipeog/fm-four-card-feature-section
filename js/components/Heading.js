class Heading extends HTMLElement {
  static elementName = "custom-heading";
  static elementAttributes = {
    size: "size",
    tag: "tag",
    text: "text",
    weight: "weight",
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
        color: var(--gray_1);
        padding: 0;
        margin: 0;
      }

      .sm {
        font-size: 1rem;
      }

      .md {
        font-size: 1.2rem;
      }

      .lg {
        font-size: 2.2rem;
      }
    `;
    this.shadow.appendChild(style);
  }

  render() {
    const tag = this.getAttribute(Heading.elementAttributes.tag) ?? "h1";
    const weight = this.getAttribute(Heading.elementAttributes.weight) ?? "600";
    const heading = document.createElement(tag);

    if (this.hasAttribute(Heading.elementAttributes.text)) {
      const text = this.getAttribute(Heading.elementAttributes.text);
      const textTextNode = document.createTextNode(text);

      heading.appendChild(textTextNode);
    }

    if (this.hasAttribute(Heading.elementAttributes.size)) {
      const size = this.getAttribute(Heading.elementAttributes.size);

      heading.classList.add(size);
    }

    heading.style.fontWeight = weight;
    this.shadow.appendChild(heading);
  }
}

export { Heading };
