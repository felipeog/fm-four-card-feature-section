class Text extends HTMLElement {
  static elementName = "custom-text";
  static elementAttributes = {
    size: "size",
    text: "text",
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
      p {
        color: var(--gray_2);
        padding: 0;
        margin: 0;
      }
      
      .sm {
        font-size: 0.8rem;
        letter-spacing: 0.02rem;
      }

      .md {
        font-size: 1rem;
      }

      .lg {
        font-size: 1.2rem;
      }
    `;
    this.shadow.appendChild(style);
  }

  render() {
    const paragraph = document.createElement("p");

    if (this.hasAttribute(Text.elementAttributes.text)) {
      const text = this.getAttribute(Text.elementAttributes.text);
      const textTextNode = document.createTextNode(text);

      paragraph.appendChild(textTextNode);
    }

    if (this.hasAttribute(Text.elementAttributes.size)) {
      const size = this.getAttribute(Text.elementAttributes.size);

      paragraph.classList.add(size);
    }

    this.shadow.appendChild(paragraph);
  }
}

export { Text };
