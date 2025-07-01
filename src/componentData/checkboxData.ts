import { ComponentProperties } from "../types";

export const checkboxData: ComponentProperties = {
  size: {
    name: "size",
    displayName: "Size",
    value: "m",
    used: true,
    variants: ["s", "m"],
  },
  label: {
    name: "label",
    displayName: "Label",
    value: "label",
    used: true,
    dependentProperty: { name: "✏️ label", value: "Label" },
  },
  count: {
    name: "count",
    displayName: "Count",
    value: "5",
    used: true,
    dependentProperty: { name: "✏️ count", value: "0" },
  },
  description: {
    name: "description",
    displayName: "Description",
    value: "description",
    used: true,
    dependentProperty: { name: "✏️ description", value: "Description" },
  },
  icon: {
    name: "icon",
    displayName: "Icon",
    value: '<svg width="12" height="12" viewBox="0 0 12 12">…</svg>',
    used: true,
    dependentProperty: { name: "🔁 icon", value: "placeholder" },
  },
  isIndeterminate: {
    name: "isIndeterminate",
    displayName: "Has indeterminate state",
    value: true,
    used: false,
  },
};
