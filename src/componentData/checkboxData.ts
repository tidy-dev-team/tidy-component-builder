type CheckboxData = {
  size: "s" | "m";
  isLabel: boolean;
  label: StringPropData;
};

type StringPropData = {
  text: string;
  visible: boolean;
};

export const checkboxData: CheckboxData = {
  size: "m",
  isLabel: true,
  label: { text: "Checkbox", visible: this.isLabel },
};
