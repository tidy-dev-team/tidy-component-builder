import { atom } from "jotai";
import { ComponentProperties } from "../types";

export const selectedComponentAtom = atom<string | null>(null);

export const selectedComponentPropertiesAtom = atom<ComponentProperties>({});

export const propertyStatesAtom = atom<Record<string, boolean>>({});

export const updatedComponentPropertiesAtom = atom<ComponentProperties>((get) => {
  const originalProps = get(selectedComponentPropertiesAtom);
  const checkboxStates = get(propertyStatesAtom);

  const updatedProps: ComponentProperties = {};
  
  Object.entries(originalProps).forEach(([key, property]) => {
    updatedProps[key] = {
      ...property,
      isProperty: checkboxStates[key] ?? property.isProperty,
    };
  });

  return updatedProps;
});
