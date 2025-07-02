import { getPlaceholderIcon } from "./getPlaceholderIcon";
import { addNewBooleanProperty } from "../../figma_functions/utils";
import { ComponentProperties } from "../../types";

const CHECKBOX_CONFIG = {
  SIZES: { s: 16, default: 20 },
  SPACING: { item: 8, text: 2 },
  CORNER_RADIUS: 4,
  STROKE_WEIGHT: 1,
  ICON_SCALE: 0.8,
  COLORS: {
    background: { r: 0.988, g: 0.992, b: 1 },
    border: { r: 0.792, g: 0.816, b: 0.871 },
    shadow: { r: 0.082, g: 0.114, b: 0.2, a: 0.06 },
    text: {
      primary: { r: 0.133, g: 0.153, b: 0.2 },
      secondary: { r: 0.384, g: 0.416, b: 0.502 },
    },
  },
  TYPOGRAPHY: {
    family: "Inter",
    styles: { medium: "Medium", regular: "Regular" },
  },
} as const;

interface TextConfig {
  name: string;
  value: string;
  font: { family: string; style: string };
  fontSize: number;
  color: { r: number; g: number; b: number };
  opacity?: number;
  lineHeight: number;
  letterSpacing?: number;
}

type TextType = "label" | "count" | "description";

interface CheckboxSize {
  size: number;
  isSmall: boolean;
}

function createFrame(
  name: string,
  layoutMode: "HORIZONTAL" | "VERTICAL",
  spacing: number
): FrameNode {
  const frame = figma.createFrame();
  frame.name = name;
  frame.layoutMode = layoutMode;
  frame.itemSpacing = spacing;
  frame.primaryAxisSizingMode = "AUTO";
  frame.counterAxisSizingMode = "AUTO";
  frame.fills = [];
  return frame;
}

async function createStyledText(config: TextConfig): Promise<TextNode> {
  await figma.loadFontAsync(config.font);
  const text = figma.createText();
  text.name = config.name;
  text.fontName = config.font;
  text.characters = config.value;
  text.fontSize = config.fontSize;
  text.fills = [{ type: "SOLID", color: config.color }];
  text.opacity = config.opacity || 1;
  text.lineHeight = { unit: "PIXELS", value: config.lineHeight };
  text.letterSpacing = { unit: "PERCENT", value: config.letterSpacing || 0 };
  return text;
}

function getTextConfig(
  type: TextType,
  value: string,
  { size, isSmall }: CheckboxSize
): TextConfig {
  const configs = {
    label: {
      name: "Label",
      font: {
        family: CHECKBOX_CONFIG.TYPOGRAPHY.family,
        style: CHECKBOX_CONFIG.TYPOGRAPHY.styles.medium,
      },
      fontSize: isSmall ? 14 : 16,
      color: CHECKBOX_CONFIG.COLORS.text.primary,
      opacity: 0.96,
      lineHeight: isSmall ? 18 : 20,
    },
    count: {
      name: "Count",
      font: {
        family: CHECKBOX_CONFIG.TYPOGRAPHY.family,
        style: CHECKBOX_CONFIG.TYPOGRAPHY.styles.medium,
      },
      fontSize: isSmall ? 12 : 14,
      color: CHECKBOX_CONFIG.COLORS.text.secondary,
      opacity: 0.72,
      lineHeight: isSmall ? 14 : 16,
    },
    description: {
      name: "Description",
      font: {
        family: CHECKBOX_CONFIG.TYPOGRAPHY.family,
        style: CHECKBOX_CONFIG.TYPOGRAPHY.styles.regular,
      },
      fontSize: isSmall ? 12 : 14,
      color: CHECKBOX_CONFIG.COLORS.text.secondary,
      opacity: 0.72,
      lineHeight: isSmall ? 14 : 16,
    },
  } as const;
  return { ...configs[type], value };
}

function createCheckboxSquare(size: number): RectangleNode {
  const checkboxSquare = figma.createRectangle();
  checkboxSquare.name = "Checkbox Square";
  checkboxSquare.resize(size, size);
  checkboxSquare.cornerRadius = CHECKBOX_CONFIG.CORNER_RADIUS;
  checkboxSquare.fills = [
    { type: "SOLID", color: CHECKBOX_CONFIG.COLORS.background },
  ];
  checkboxSquare.strokes = [
    { type: "SOLID", color: CHECKBOX_CONFIG.COLORS.border },
  ];
  checkboxSquare.strokeWeight = CHECKBOX_CONFIG.STROKE_WEIGHT;
  checkboxSquare.effects = [
    {
      type: "DROP_SHADOW",
      color: CHECKBOX_CONFIG.COLORS.shadow,
      offset: { x: 0, y: 1 },
      radius: 2,
      visible: true,
      blendMode: "NORMAL",
    },
  ];
  return checkboxSquare;
}

function createCheckboxFrame(): ComponentNode {
  const checkboxFrame = figma.createComponent();
  checkboxFrame.name = "Checkbox";
  checkboxFrame.layoutMode = "HORIZONTAL";
  checkboxFrame.itemSpacing = CHECKBOX_CONFIG.SPACING.item;
  checkboxFrame.primaryAxisSizingMode = "AUTO";
  checkboxFrame.counterAxisSizingMode = "AUTO";
  checkboxFrame.paddingLeft = 0;
  checkboxFrame.paddingRight = 0;
  checkboxFrame.paddingTop = 0;
  checkboxFrame.paddingBottom = 0;
  checkboxFrame.fills = [];
  return checkboxFrame;
}

function addIconToCheckbox(size: number, textRow: FrameNode): void {
  const icon = getPlaceholderIcon();
  const iconNode = figma.createNodeFromSvg(icon);
  iconNode.name = "Placeholder Icon";
  const iconSize = size * CHECKBOX_CONFIG.ICON_SCALE;
  iconNode.resize(iconSize, iconSize);
  iconNode.x = (size - iconSize) / 2;
  iconNode.y = (size - iconSize) / 2;
  textRow.appendChild(iconNode);
}

function getCheckboxSize(properties: ComponentProperties): CheckboxSize {
  const size = properties.size?.value === "s" 
    ? CHECKBOX_CONFIG.SIZES.s 
    : CHECKBOX_CONFIG.SIZES.default;
  return {
    size,
    isSmall: size === CHECKBOX_CONFIG.SIZES.s
  };
}

function isPropertyUsed(properties: ComponentProperties, propertyName: string): boolean {
  return properties[propertyName]?.used === true;
}

function getPropertyValue(properties: ComponentProperties, propertyName: string, defaultValue: string = ""): string {
  return properties[propertyName]?.value?.toString() || defaultValue;
}

export async function buildCheckboxOnCanvas(properties: ComponentProperties): Promise<void> {
  const checkboxFrame = createCheckboxFrame();
  const checkboxSize = getCheckboxSize(properties);
  const checkboxSquare = createCheckboxSquare(checkboxSize.size);
  
  const textRow = createFrame(
    "Text Row",
    "HORIZONTAL",
    CHECKBOX_CONFIG.SPACING.item
  );
  textRow.layoutSizingVertical = "HUG";

  const textColumn = createFrame(
    "Text Column",
    "VERTICAL",
    CHECKBOX_CONFIG.SPACING.text
  );

  checkboxFrame.appendChild(checkboxSquare);

  if (isPropertyUsed(properties, "icon")) {
    addIconToCheckbox(checkboxSize.size, textRow);
  }

  const hasRowText = isPropertyUsed(properties, "label") || isPropertyUsed(properties, "count");
  const hasColumnText = isPropertyUsed(properties, "description");

  if (isPropertyUsed(properties, "label")) {
    const labelText = await createStyledText(
      getTextConfig(
        "label",
        getPropertyValue(properties, "label", "Checkbox"),
        checkboxSize
      )
    );
    textRow.appendChild(labelText);
  }

  if (isPropertyUsed(properties, "count")) {
    const countText = await createStyledText(
      getTextConfig(
        "count",
        getPropertyValue(properties, "count", "(0)"),
        checkboxSize
      )
    );
    textRow.appendChild(countText);
  }

  if (hasRowText) {
    textColumn.appendChild(textRow);
  }

  if (isPropertyUsed(properties, "description")) {
    const descText = await createStyledText(
      getTextConfig(
        "description",
        getPropertyValue(properties, "description", "(No description)"),
        checkboxSize
      )
    );
    textColumn.appendChild(descText);
  }

  if (hasRowText || hasColumnText) {
    checkboxFrame.appendChild(textColumn);
    if (isPropertyUsed(properties, "label")) {
      addNewBooleanProperty(checkboxFrame, textColumn, "label", true);
    }
  }

  figma.currentPage.appendChild(checkboxFrame);
  figma.viewport.scrollAndZoomIntoView([checkboxFrame]);
  
  console.log("Checkbox built on canvas with properties:", properties);
}
