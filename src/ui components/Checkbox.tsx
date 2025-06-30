import { h, JSX } from "preact";
import { useEffect, useState } from "preact/hooks";
import { Checkbox, Text, useInitialFocus } from "@create-figma-plugin/ui";
import { useAtom } from "jotai";
import {
  selectedComponentPropertiesAtom,
  propertyStatesAtom,
} from "../state/atoms";

interface CheckboxComponentProps {
  label: string;
}
export function CheckboxComponent({ label }: CheckboxComponentProps) {
  const [value, setValue] = useState<boolean>(true);
  const [componentProps] = useAtom(selectedComponentPropertiesAtom);
  const [propertyStates, setPropertyStates] = useAtom(propertyStatesAtom);

  useEffect(() => {
    if (Object.keys(componentProps).length > 0) {
      const propKey = label.toLowerCase();
      const initialState = componentProps[propKey]?.isProperty ?? true;
      setValue(initialState);
      setPropertyStates((prev) => ({
        ...prev,
        [propKey]: initialState,
      }));
    }
  }, [componentProps, label]);

  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    const propKey = label.toLowerCase();
    setValue(newValue);
    setPropertyStates((prev) => ({
      ...prev,
      [propKey]: newValue,
    }));
  }

  return (
    <Checkbox {...useInitialFocus()} onChange={handleChange} value={value}>
      <Text>{label}</Text>
    </Checkbox>
  );
}
