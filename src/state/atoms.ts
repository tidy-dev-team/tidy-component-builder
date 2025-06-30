import { atom } from "jotai";

export const initializedSelectedComponentAtom = atom<string | null>(null);
export const availableComponentsAtom = atom<string[]>([]);
export const selectedComponentAtom = atom<string | null>((get) => {
  return get(initializedSelectedComponentAtom);
});

export const selectedComponentPropertiesAtom = atom<any>({});
export const propertyStatesAtom = atom<Record<string, boolean>>({});
