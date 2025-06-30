# Component Builder Test (CBT)

A Figma plugin for building custom components with configurable properties. This plugin allows designers to select component types, configure their properties through an intuitive UI, and generate them directly on the Figma canvas.

## Status: In Development 🚧

**Current Implementation:** UI Configuration Phase
- ✅ Component selection dropdown
- ✅ Property configuration with checkboxes
- ✅ State management with Jotai
- ⏳ Canvas rendering (planned)

**Next Phase:** Canvas Generation
- Build selected components on Figma canvas based on UI configurations
- Apply property values and variants
- Position and style components automatically

## Features

### Currently Available
- **Component Selection**: Choose from available component templates via dropdown
- **Property Configuration**: Toggle component properties using intuitive checkboxes
- **State Management**: Persistent property states across component selections
- **Type Safety**: Full TypeScript support with proper interfaces

### Planned Features
- **Canvas Rendering**: Generate actual Figma components based on selections
- **Property Application**: Apply configured values to generated components
- **Variant Support**: Handle component variants and states
- **Batch Generation**: Create multiple component instances

## Architecture

Built with modern web technologies:
- **Framework**: [Preact](https://preactjs.com/) for lightweight UI components
- **State Management**: [Jotai](https://jotai.org/) for atomic state management
- **Build System**: [Create Figma Plugin](https://yuanqing.github.io/create-figma-plugin/)
- **Language**: TypeScript for type safety
- **UI Components**: Figma's official UI library

### Project Structure
```
src/
├── main.ts              # Plugin main thread (Figma API)
├── ui.tsx              # UI thread entry point
├── types.ts            # TypeScript interfaces
├── componentData.ts    # Component registry
├── state/
│   └── atoms.ts        # Jotai state atoms
├── componentData/
│   └── checkboxData.ts # Checkbox component definition
└── ui components/
    ├── Button.tsx      # Build button component
    ├── Checkbox.tsx    # Property checkbox component
    └── Dropdown.tsx    # Component selector dropdown
```

## Development Guide

*This plugin is built with [Create Figma Plugin](https://yuanqing.github.io/create-figma-plugin/).*

### Prerequisites

- [Node.js](https://nodejs.org) – v18 or higher
- [Figma desktop app](https://figma.com/downloads/)

### Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development Workflow

**Build the plugin:**
```bash
npm run build
```

**Watch for changes during development:**
```bash
npm run watch
```

This generates:
- `manifest.json` - Plugin manifest file
- `build/` - Compiled JavaScript bundles

### Install in Figma

1. Open Figma desktop app
2. Open any Figma document
3. Search for "Import plugin from manifest…" in Quick Actions
4. Select the generated `manifest.json` file

### Debugging

- Use `console.log` statements in your code
- Open developer console: Search "Open Console" in Quick Actions
- Check both main thread and UI thread consoles

## Usage

1. **Select Component**: Choose a component type from the dropdown
2. **Configure Properties**: Toggle checkboxes to enable/disable component properties
3. **Build Component**: Click "Build on canvas" (currently logs to console)

### Currently Supported Components

- **Checkbox**: Configurable size, label, count, description, icon, and indeterminate state

## Contributing

### Adding New Components

1. Create component data in `src/componentData/` following the pattern in `checkboxData.ts`
2. Register component in `src/componentData.ts`
3. Component will automatically appear in the dropdown

### Component Data Structure
```typescript
interface ComponentProperty {
  name: string           // Display name
  value: string | boolean // Default value
  visible: boolean       // Show in UI
  isProperty: boolean    // Default property state
  variants?: string[]    // Available variants
}
```

## Roadmap

### Phase 1: UI Foundation ✅
- [x] Component selection interface
- [x] Property configuration system
- [x] State management
- [x] Type safety improvements

### Phase 2: Canvas Integration (Next)
- [ ] Implement canvas component generation
- [ ] Apply property values to generated components
- [ ] Handle component variants and states
- [ ] Add positioning and layout logic

### Phase 3: Enhanced Features (Future)
- [ ] Custom component templates
- [ ] Batch component generation
- [ ] Export/import configurations
- [ ] Advanced styling options

## Technical Details

### State Management
Uses Jotai atoms for efficient state management:
- `selectedComponentAtom`: Currently selected component
- `selectedComponentPropertiesAtom`: Properties of selected component
- `propertyStatesAtom`: Current checkbox states
- `updatedComponentPropertiesAtom`: Computed final component data

### Performance Optimizations
- Atomic state updates prevent unnecessary re-renders
- Efficient object spread operations instead of deep cloning
- Optimized dependency arrays in React hooks

## Resources

- [Create Figma Plugin Documentation](https://yuanqing.github.io/create-figma-plugin/)
- [Figma Plugin API Documentation](https://figma.com/plugin-docs/)
- [Figma Plugin Samples](https://github.com/figma/plugin-samples)
- [Jotai Documentation](https://jotai.org/)
- [Preact Documentation](https://preactjs.com/)