type Property = {
  name: string;
  property: DataWithVisible<{ value: string | boolean }>;
  isProperty: boolean;
  variants?: string[];
};

type CheckboxData = {
  size: Property;
  label: Property;
  count: Property;
  description: Property;
  icon: Property;
  isIndeterminate: Property;
};

type DataWithVisible<T> = T & { visible: boolean };

function makeField<K extends string, T>(
  key: K,
  flag: boolean,
  data: T
): { [P in `is${Capitalize<K>}`]: boolean } & {
  [P in K]: DataWithVisible<T>;
} & { name: K } {
  const capitalized = key[0].toUpperCase() + key.slice(1);
  return {
    [`is${capitalized}`]: flag,
    [key]: { ...data, visible: flag },
    name: capitalized as K,
  } as any;
}

function createProperty<K extends string>(
  key: K,
  flag: boolean,
  value: string | boolean,
  variants?: string[]
): Property {
  const field = makeField(key, flag, { value });
  const name = field.name;
  const property = (field as any)[key];
  const isProperty = (field as any)[`is${key[0].toUpperCase() + key.slice(1)}`];
  return { name, property, isProperty, variants };
}

export const checkboxData: CheckboxData = {
  size: createProperty("size", true, "m", ["s", "m"]),
  label: createProperty("label", true, "label"),
  count: createProperty("count", true, "5"),
  description: createProperty("description", true, "description"),
  icon: createProperty(
    "icon",
    true,
    '<svg width="12" height="12" viewBox="0 0 12 12">…</svg>'
  ),
  isIndeterminate: createProperty("indeterminate", false, true),
};
