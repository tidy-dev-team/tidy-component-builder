import { ComponentProperties } from "../types";

export const checkboxData: ComponentProperties = {
  size: {
    name: "size",
    displayName: "Size",
    value: "m",
    used: true,
    dependentProperty: "✏️ size",
    variants: ["s", "m"],
  },
  label: {
    name: "label",
    displayName: "Label",
    value: "label",
    used: true,
    dependentProperty: "✏️ label",
  },
  count: {
    name: "count",
    displayName: "Count",
    value: "5",
    used: true,
    dependentProperty: "✏️ count",
  },
  description: {
    name: "description",
    displayName: "Description",
    value: "description",
    used: true,
    dependentProperty: "✏️ description",
  },
  icon: {
    name: "icon",
    displayName: "Icon",
    value: '<svg width="12" height="12" viewBox="0 0 12 12">…</svg>',
    used: true,
    dependentProperty: "🔁 icon",
  },
  isIndeterminate: {
    name: "isIndeterminate",
    displayName: "Is Indeterminate",
    value: true,
    used: false,
  },
};
