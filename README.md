# THIS IS A PUBLIC REPO

---

To run this project, run `yarn` to install dependencies and then run `yarn storybook` to see all of the components and their associated stories.

When creating a new component, create a directory for the component under `src/components/`. You can create a `{component_name}.stories.tsx` file to make developnent easier.

When a new component is created, export it through `/index.ts` as the other components are.

---

In order to use the new component in another service, make sure to reinstall the `sp0n-7/citizen-components` package to get the latest changes. You may have to remove the pacakge and re-add it. Eventually,
we'll use real semantic versioning and publish this package to a proper registry so this process will be easier.
