import { atom } from "jotai";

export const initializedSelectedComponentAtom = atom<string | null>(null);
export const availableComponentsAtom = atom<string[]>([]);
export const selectedComponentAtom = atom<string | null>((get) => {
  return get(initializedSelectedComponentAtom);
});

export const selectedComponentPropertiesAtom = atom<any>({});
// Writable atom for tracking current checkbox states
export const currentPropertyStatesAtom = atom<Record<string, boolean>>({});

// Atom that contains the full component data with updated isProperty values
export const updatedComponentPropertiesAtom = atom<any>((get) => {
  const originalProps = get(selectedComponentPropertiesAtom);
  const checkboxStates = get(currentPropertyStatesAtom);

  // Create a deep copy of original properties
  const updatedProps = JSON.parse(JSON.stringify(originalProps));

  // Update isProperty values based on checkbox states
  Object.keys(updatedProps).forEach((key) => {
    if (checkboxStates[key] !== undefined) {
      updatedProps[key].isProperty = checkboxStates[key];
    }
  });

  return updatedProps;
});
