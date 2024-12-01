# Create new blocks

## Standard wordpress create new block

`npx @wordpress/create-block@latest todo-list`

This creates new node_folder, new src folder.

## Use script for create a new block from template

`npm run create-new-block "Block C"`

This create a new block within the ./src folder.

While runnning this scripts, patterns in the files of the template folder will replaced:

- pattern "block-name-dashed" replaced with block-c   (block-c is automatically generated)
- pattern "block-name-standard" replaced with Block C  (input parameter with double quotes)
