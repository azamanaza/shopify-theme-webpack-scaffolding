# Description
A shopify theme building scaffolding draft/poc

# Prerequisites
- You have Theme kit installed
- You have node
- That's it.

# Setup
## Step 1: grabbing your theme from the store
Setup your `config.yml`, based from `config.yml.example` and provide the necessary values.
Run `theme get`
Your theme files will be placed inside `./src/theme`

## Step 2
Setup npm project dependencies
Run `npm i`

## Step 3
Start hacking
Run `npm run dev`
This command will build your typescript, scss, transpile and bundle them for you. Bundles are added to `./src/theme/assets`.
Lastly, a watch is performed on both your script and theme files and will automatically update live changes.

