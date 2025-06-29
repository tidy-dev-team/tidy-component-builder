import { checkboxData } from "./componentData/checkboxData";

export type ComponentDataMap = {
  Checkbox: typeof checkboxData;
  RadioButtons: {};
};

export const components: ComponentDataMap = {
  Checkbox: checkboxData,
  RadioButtons: {},
};
