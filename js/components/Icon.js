class Icon extends HTMLElement {
  static elementName = "custom-icon";
  static elementAttributes = {
    name: "name",
    elementStyle: "elementStyle",
  };
  static icons = {
    calculator: "assets/icons/icon-calculator.svg",
    karma: "assets/icons/icon-karma.svg",
    supervisor: "assets/icons/icon-supervisor.svg",
    teamBuilder: "assets/icons/icon-team-builder.svg",
  };

  constructor() {
    super();

    this.shadow = this.attachShadow({ mode: "open" });
    this.render();
  }

  render() {
    if (this.hasAttribute(Icon.elementAttributes.name)) {
      const elementStyle =
        this.getAttribute(Icon.elementAttributes.elementStyle) ?? "";
      const name = this.getAttribute(Icon.elementAttributes.name);
      const iconHref = Icon.icons[name] ?? "";
      const icon = new Image();

      icon.setAttribute("src", iconHref);
      icon.setAttribute("alt", "");
      icon.setAttribute("style", elementStyle);
      this.shadow.appendChild(icon);
    }
  }
}

export { Icon };
