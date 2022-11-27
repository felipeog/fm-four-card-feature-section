class Icon extends HTMLElement {
  static elementName = "custom-icon";
  static elementAttributes = {
    name: "name",
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
      const name = this.getAttribute(Icon.elementAttributes.name);
      const iconHref = Icon.icons[name] ?? "";
      const icon = new Image();

      icon.src = iconHref;
      icon.alt = "";
      this.shadow.appendChild(icon);
    }
  }
}

export { Icon };
