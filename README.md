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

### Publishing a new version

Once a release is deemed either a major update, minor update or patch update go ahead and update the version in package.json. Don't forget to run `npm i` to update the package version number in the lockfile too.

Once that's done commit it with the version number (i.e. if the new version is 0.6.1, commit just package.json and package-lock.json with the message "0.6.1".)

After that create a tag for that commit as v$versionNumber (i.e. v0.6.1 from our previous example.) and draft and publish a new release based off that tag. The npm automation should kick in, and it should publish that new version soon.
