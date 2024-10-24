# Syncing recipes with Moderne DX

To sync recipes from Moderne DX to your local CLI, you will need to execute the following commands.

### Step 1: Configure Moderne DX

```bash
mod config moderne edit \
  --token=<token provided by central team> \
  --api=<moderne-dx host> \
  <moderne-dx host>
```

Replace `<token provided by central team>` with a token provided to you by the central team that manages the Moderne DX installation, and `<moderne-dx host>` with the location your company has Moderne DX hosted.

:::info
`<moderne-dx host>` is currently required twice as listed in the example, first under `--api`, and second as the last part of the command.
:::

### Step 2: Sync recipes with Moderne DX

Run the following command:

```bash
mod config recipes moderne sync
```

This will sync recipes from Moderne DX to your local CLI for you to then be able to run commands such as `mod run` and `mod study`.
