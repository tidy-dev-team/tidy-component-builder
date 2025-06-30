import { Button } from "@create-figma-plugin/ui";
import { h, JSX } from "preact";

interface ButtonComponentProps {
  callback: () => void;
}

export function ButtonComponent({
  callback,
}: ButtonComponentProps): JSX.Element {
  return (
    <Button fullWidth onClick={callback}>
      Build on canvas
    </Button>
  );
}
