This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Folder Structure

Below is an overview of the folder structure along with brief descriptions of each repository

##### `.husky/`

This directory contains configuration files for Husky, a tool used to manage Git hooks. Git hooks are scripts that run automatically before or after certain Git events, such as committing or pushing code. Husky helps enforce code quality standards and streamline development workflows.

##### `.github/`

This directory houses configurations and workflows related to GitHub Actions, a continuous integration and delivery (CI/CD) service provided by GitHub. Inside, you'll find YAML files defining workflows for automating various tasks such as testing, building, and deploying the project.

- **`workflows/`**: Contains YAML files defining specific workflows.
- **`actions/`**: Contains custom actions used within workflows.

##### `app/`

The main application directory contains the core logic and structure of the application.

##### `components/`

This directory houses reusable UI components that can be used across different parts of the application.

##### `hooks/`

Contains custom React hooks, providing reusable pieces of logic for components.

##### `routes/`

Manages routing configurations and components for navigation within the application.

##### `schemas/`

Houses data validation schemas, utilizing Zod, a TypeScript-first schema declaration and validation library.

##### `scss/`

Stores SCSS (Sass) files for styling the application. SCSS provides a way to write more maintainable and organized CSS code by adding features like variables, nesting, and mixins.



## Contributing guide

### Read these instructions first !!!
Most folders has structure of 

```bash
parent/
│
├── child1.ts                 # component
│
├── child2.ts                 # component
│
└── index.ts                  # exporter
```

###### How to add new component :

  - Make a folder with a corresponding name (ex: Button).
  - if you have more than one file inside the folder, make `index.ts` to export the buttons
    <br>
  
```bash
# example
export { default as Child1 } from "./Child1" 
```

When you need to <ins>rename</ins>, <ins>move</ins>, or <ins>delete</ins> files within the folder, having a single `index.ts` file to update makes the process much easier. You only need to make changes in one place rather than updating import statements across multiple files.

### Commit convention

```bash
<type>(<scope>): <short summary>
  │       │             │
  │       │             └─⫸ Summary in present tense. Not capitalized. No period at the end.
  │       │
  │       └─⫸ Commit Scope: animations|bazel|benchpress|common|compiler|compiler-cli|core|
  │                          elements|forms|http|language-service|localize|platform-browser|
  │                          platform-browser-dynamic|platform-server|router|service-worker|
  │                          upgrade|zone.js|packaging|changelog|docs-infra|migrations|ngcc|ve|
  │                          devtools
  │
  └─⫸ Commit Type: build|ci|docs|feat|fix|perf|refactor|test
  ```
The `<type>` and `<summary>` fields are <b>mandatory</b>, the `<scope>` field is <b>optional</b>.

#### Type
Must be one of the following:

- <b>build</b>: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- <b>ci</b>: Changes to our CI configuration files and scripts (examples: CircleCi, SauceLabs)
- <b>docs</b>: Documentation only changes
- <b>feat</b>: A new feature
- <b>fix</b>: A bug fix
- <b>perf</b>: A code change that improves performance
- <b>refactor</b>: A code change that neither fixes a bug nor adds a feature
- <b>test</b>: Adding missing tests or correcting existing tests

### Commit convention

#### Step 1 : Create Issue
make sure the `title` as relevant as possible and meets the following scopes.

###### scope

- <b>UI Dev</b> : something related to UI development (page, component)
- <b>Integration</b> : something related to FE and BE integration (api fetching)
- <b>Test</b> : something related to testing (unit testing, etc)
- <b>Refactor</b> : related to updating existing code

ex : 
```bash
#example 
[UI DEV]  : create about and detail page ✅
[BUG] : resolve bug when no route match  ✅

// describe your issue briefly
[ERROR] : fix something                  ❌
```

#### Step 2 : Create branch from the issue
<br>

![create branch](https://gcdnb.pbrd.co/images/fc3WG3GlQAYt.png?o=1)

#### Step 3 : Change branch source to development
<br>

![create branch](https://gcdnb.pbrd.co/images/UvfpdTod5gh0.png?o=1)
<br>
![create branch](https://gcdnb.pbrd.co/images/9OUgz2AYKTbx.png?o=1)

#### Step 4 : Checkout locally

#### Step 5 : Create pull request to branch `development`
