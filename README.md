# Services UI

A UI component library for use with Thunderbird Services

Note this is heavily work-in-progress.

## Usage

Install the library:

```bash
npm i @thunderbirdops/services-ui
```

Include the stylesheet into your top-level component:

```ts
import '@thunderbirdops/services-ui/style.css';
```

Now you can use UI components by importing them in your components:

```ts
import { PrimaryButton } from '@thunderbirdops/services-ui';
```

## Library Development

We have the following structure for Vue components:

1. `src/foundation/`: Foundational items (typography, icons, spacing, etc.)
2. `src/components/`: Design system components (buttons, badges, etc.)
3. `src/patterns/`: Custom usage or bundling of two or more design system components (copy button, standard footer, etc.)

### Storybook

You can access storybook by running:

```bash
npm run storybook
```

### Building

You can build the library by running:

```bash
npm run build
```

### Testing

You can run the vue.js components tests by running:

```bash
npm install
npm run test:components
```

### Publishing a new version

Once a release is deemed either a major update, minor update or patch update go ahead and update the version in package.json. Don't forget to run `npm i` to update the package version number in the lockfile too.

Once that's done commit it with the version number (i.e. if the new version is 0.6.1, commit just package.json and package-lock.json with the message "0.6.1".)

After that create a tag for that commit as v$versionNumber (i.e. v0.6.1 from our previous example.) and draft and publish a new release based off that tag. The npm automation should kick in, and it should publish that new version soon.

## Exporting as Web Components

Using Vite, you can create Web Components (also known as "Custom Elements") from Vue components.

Running `npm run build:ce` ("ce" for "Custom Elements") produces two files that can be included in a static website:

* `dist/boltweb.iife.js`
* `dist/boltweb.css`

Example usage:

```html
<bolt-primary-button variant="outline" href="{{ url('roadmaps.desktop') }}">
  Visit Desktop Roadmap
</bolt-primary-button>
```

### Specifying which components to export

In `/src/index.ce.ts`, there are 4 steps for specifying the Vue components that will be exported as Web Components:

1. Import the components.
2. Call `defineCustomElement`.
3. Register a tag name.
4. Add the converted element to the `export` object.

For reference, here's the code that performs those steps for `PrimaryButton`:
```
// Import the Components to convert.
import { PrimaryButton } from './main';

// Convert each to a Web Component.
const BoltPrimaryButton = defineCustomElement(PrimaryButton);

// Register globally.
customElements.define('bolt-primary-button', BoltPrimaryButton);

// Provide components for use.
export { BoltPrimaryButton };
```

### Displaying the text content of a Web Component


When you use one of the Web Components in your markup, you will likely want to specify the text content:

```html
<bolt-primary-button variant="outline" href="{{ url('roadmaps.desktop') }}">
  Visit Desktop Roadmap
</bolt-primary-button>
```

In this example, "Visit Desktop Roadmap" is rendered via the default `slot` of the Vue component.

If the component you want to use does not have a default slot, add it:
```diff
 <template>
   <base-button type="primary">
     <template v-for="(_, name) in $slots" v-slot:[name]="slotData">
       <slot :name="name" v-bind="slotData" />
     </template>
+    <slot />
   </base-button>
 </template>
```

If you do not want to modify the component, you can also use named slots (which requires wrapping your text in an additional HTML element). See [[https://vuejs.org/guide/extras/web-components.html#slots][the Vue docs]] for more information.
