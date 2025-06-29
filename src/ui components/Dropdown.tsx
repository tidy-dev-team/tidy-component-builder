import { h, JSX } from "preact";
import { useAtom } from "jotai";
import { useEffect } from "preact/hooks";
import { Dropdown, DropdownOption } from "@create-figma-plugin/ui";
import {
  initializedSelectedComponentAtom,
  availableComponentsAtom,
  selectedComponentPropertiesAtom,
} from "../state/atoms";
import { ComponentDataMap } from "../componentData";

export function DropdownComponent(componentsObject: ComponentDataMap) {
  const components = Object.keys(componentsObject);
  const dropdownOptions = createDropdownOptions(components);
  const [value, setValue] = useAtom(initializedSelectedComponentAtom);
  const [, setAvailableComponents] = useAtom(availableComponentsAtom);
  const [, setComponentProps] = useAtom(selectedComponentPropertiesAtom);

  useEffect(() => {
    setAvailableComponents(components);
  }, [components]);

  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    const componentPropsObject =
      componentsObject[newValue as keyof typeof componentsObject];
    if (componentPropsObject) {
      setComponentProps(componentPropsObject);
    }
    setValue(newValue);
  }
  return (
    <Dropdown
      onChange={handleChange}
      options={dropdownOptions}
      value={value}
      placeholder="Select component..."
    />
  );
}
function createDropdownOptions(strings: string[]): Array<DropdownOption> {
  return strings.map((str) => ({ value: str }));
}
