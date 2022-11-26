import { components } from "./components/index.js";

components.forEach((component) => {
  customElements.define(component.elementName, component);
});
