# Create new blocks

## Standard wordpress create new plugin (or block)

`npx @wordpress/create-block@latest todo-list`

You can add:

- `--variant dynamic` option or
- `--namespace spotwhiskey` option
- `--template my-template-package`
    This argument specifies an external npm package as a template.

This creates new node_folder, new src folder.

https://developer.wordpress.org/block-editor/reference-guides/packages/packages-create-block/

## Use script for create a new block from template

`npm run create-new-block "Block C"`

This create a new block within the ./src folder.

While runnning this scripts, patterns in the files of the template folder will replaced:

- pattern "block-name-dashed" replaced with block-c   (block-c is automatically generated)
- pattern "block-name-standard" replaced with Block C  (input parameter with double quotes)

Don't forget to add the new block in `spotwhiskey-blocks.php`
