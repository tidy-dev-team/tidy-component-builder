import { h, JSX } from "preact";
import { useAtom } from "jotai";
import { useEffect } from "preact/hooks";
import { Dropdown, DropdownOption } from "@create-figma-plugin/ui";
import {
  initializedSelectedComponentAtom,
  availableComponentsAtom,
} from "../state/atoms";

interface DropdownComponentProps {
  components: string[];
}

export function DropdownComponent({ components }: DropdownComponentProps) {
  const dropdownOptions = createDropdownOptions(components);
  const [value, setValue] = useAtom(initializedSelectedComponentAtom);
  const [, setAvailableComponents] = useAtom(availableComponentsAtom);

  useEffect(() => {
    setAvailableComponents(components);
  }, [components]);

  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
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
