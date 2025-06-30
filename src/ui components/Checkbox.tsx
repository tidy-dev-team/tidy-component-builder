import { h, JSX } from "preact";
import { useEffect, useState } from "preact/hooks";
import { Checkbox, Text, useInitialFocus } from "@create-figma-plugin/ui";
import { useAtom } from "jotai";
import {
  selectedComponentPropertiesAtom,
  currentPropertyStatesAtom,
} from "../state/atoms";

interface CheckboxComponentProps {
  label: string;
}
export function CheckboxComponent({ label }: CheckboxComponentProps) {
  const [value, setValue] = useState<boolean>(true);
  const [componentProps] = useAtom(selectedComponentPropertiesAtom);
  const [currentStates, setCurrentStates] = useAtom(currentPropertyStatesAtom);

  useEffect(() => {
    const propKey = label.toLowerCase();
    // Initialize from component properties when they change
    if (componentProps[propKey]) {
      const initialState = componentProps[propKey]?.isProperty ?? true;
      setValue(initialState);
      setCurrentStates((prev) => ({
        ...prev,
        [propKey]: initialState,
      }));
    }
  }, [componentProps, label]);

  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    const propKey = label.toLowerCase();
    setValue(newValue);
    setCurrentStates((prev) => ({
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
