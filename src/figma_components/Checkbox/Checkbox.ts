import { getPlaceholderIcon } from "./getPlaceholderIcon";
import { addNewBooleanProperty } from "../../figma_functions/utils";
import { ComponentProperties } from "../../types";

const CHECKBOX_CONFIG = {
  SIZES: { s: 16, m: 20 },
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
type SizeVariant = "s" | "m";

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

function createCheckboxComponent(sizeVariant: SizeVariant): ComponentNode {
  const checkboxFrame = figma.createComponent();
  checkboxFrame.name = `Size=${sizeVariant}`;
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

function getCheckboxSize(sizeVariant: SizeVariant): CheckboxSize {
  const size = CHECKBOX_CONFIG.SIZES[sizeVariant];
  return {
    size,
    isSmall: sizeVariant === "s",
  };
}

async function createCheckboxVariant(
  sizeVariant: SizeVariant,
  properties: ComponentProperties
): Promise<ComponentNode> {
  const checkboxFrame = createCheckboxComponent(sizeVariant);
  const checkboxSize = getCheckboxSize(sizeVariant);
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

  // Add checkbox square
  checkboxFrame.appendChild(checkboxSquare);

  // Add icon if needed (for property setup)
  if (properties.icon?.used) {
    const icon = getPlaceholderIcon();
    const iconNode = figma.createNodeFromSvg(icon);
    iconNode.name = "Icon";
    const iconSize = checkboxSize.size * CHECKBOX_CONFIG.ICON_SCALE;
    iconNode.resize(iconSize, iconSize);
    iconNode.x = (checkboxSize.size - iconSize) / 2;
    iconNode.y = (checkboxSize.size - iconSize) / 2;
    iconNode.visible = false; // Hidden by default
    checkboxFrame.appendChild(iconNode);
    addNewBooleanProperty(checkboxFrame, iconNode, "icon", false);
  }

  // Create text elements based on properties
  const hasRowText = properties.label?.used || properties.count?.used;
  const hasColumnText = properties.description?.used;

  if (properties.label?.used) {
    const labelText = await createStyledText(
      getTextConfig(
        "label",
        properties.label?.value?.toString() || "Checkbox",
        checkboxSize
      )
    );
    textRow.appendChild(labelText);
  }

  if (properties.count?.used) {
    const countText = await createStyledText(
      getTextConfig(
        "count",
        properties.count?.value?.toString() || "(0)",
        checkboxSize
      )
    );
    textRow.appendChild(countText);
  }

  if (hasRowText) {
    textColumn.appendChild(textRow);
  }

  if (properties.description?.used) {
    const descText = await createStyledText(
      getTextConfig(
        "description",
        properties.description?.value?.toString() || "(No description)",
        checkboxSize
      )
    );
    textColumn.appendChild(descText);
  }

  if (hasRowText || hasColumnText) {
    checkboxFrame.appendChild(textColumn);
  }

  return checkboxFrame;
}

export async function buildCheckboxOnCanvas(
  properties: ComponentProperties
): Promise<void> {
  // Create component set

  // Create both size variants
  const smallCheckbox = await createCheckboxVariant("s", properties);
  const mediumCheckbox = await createCheckboxVariant("m", properties);

  // Add variants to component set
  const componentSet = figma.combineAsVariants(
    [smallCheckbox, mediumCheckbox],
    figma.currentPage
  );
  componentSet.name = "Checkbox";

  // Position variants side by side
  mediumCheckbox.x = smallCheckbox.width + 20;

  // Add to page and center
  figma.currentPage.appendChild(componentSet);
  figma.viewport.scrollAndZoomIntoView([componentSet]);

  console.log("Checkbox component set built with properties:", properties);
}
