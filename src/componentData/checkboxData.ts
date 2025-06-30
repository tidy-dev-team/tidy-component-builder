import { ComponentProperties } from "../types";

export const checkboxData: ComponentProperties = {
  size: {
    name: "Size",
    value: "m",
    visible: true,
    isProperty: true,
    variants: ["s", "m"],
  },
  label: {
    name: "Label",
    value: "label",
    visible: true,
    isProperty: true,
  },
  count: {
    name: "Count",
    value: "5",
    visible: true,
    isProperty: true,
  },
  description: {
    name: "Description",
    value: "description",
    visible: true,
    isProperty: true,
  },
  icon: {
    name: "Icon",
    value: '<svg width="12" height="12" viewBox="0 0 12 12">…</svg>',
    visible: true,
    isProperty: true,
  },
  isIndeterminate: {
    name: "Is Indeterminate",
    value: true,
    visible: true,
    isProperty: false,
  },
};
