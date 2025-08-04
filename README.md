# Services UI

A UI component library for use with Thunderbird Services

Note this is heavily work-in-progress.

## Usage

You can install the library by adding the following line as a dependency to your package.json:

```bash
npm i @thunderbirdops/services-ui
```

Then, include the stylesheet into your top-level component:

```ts
import '@thunderbirdops/services-ui/style.css';
```

We recommend you pull in the `Inter` font separately.

## Library Development

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

Once a release is deemed either a major update, minor update or patch update go ahead and update the version in package.json.

Once that's done commit it with the version number (i.e. if the new version is 0.6.1, commit just package.json with the message "0.6.1".)

After that create a tag for that commit as v$versionNumber (i.e. v0.6.1 from our previous example.) and draft and publish a new release based off that tag. The npm automation should kick in, and it should publish that new version soon.
