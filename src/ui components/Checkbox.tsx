import { h, JSX } from "preact";
import { useEffect, useState } from "preact/hooks";
import { Checkbox, Text } from "@create-figma-plugin/ui";
import { useAtom } from "jotai";
import {
  selectedComponentPropertiesAtom,
  propertyStatesAtom,
} from "../state/atoms";

interface CheckboxComponentProps {
  propertyKey: string;
}

export function CheckboxComponent({ propertyKey }: CheckboxComponentProps) {
  const [componentProps] = useAtom(selectedComponentPropertiesAtom);
  const [propertyStates, setPropertyStates] = useAtom(propertyStatesAtom);
  const property = componentProps[propertyKey];
  
  const [value, setValue] = useState<boolean>(() => 
    propertyStates[propertyKey] ?? property?.isProperty ?? true
  );

  useEffect(() => {
    if (property && !(propertyKey in propertyStates)) {
      const initialState = property.isProperty;
      setValue(initialState);
      setPropertyStates((prev) => ({
        ...prev,
        [propertyKey]: initialState,
      }));
    }
  }, [property, propertyKey, setPropertyStates]);

  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    setValue(newValue);
    setPropertyStates((prev) => ({
      ...prev,
      [propertyKey]: newValue,
    }));
  }

  if (!property) {
    return null;
  }

  return (
    <Checkbox onChange={handleChange} value={value}>
      <Text>{property.name}</Text>
    </Checkbox>
  );
}
