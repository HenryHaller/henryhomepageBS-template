This is an attempt to make a basic template for starting a bootstrap based project. My goal is to make it easy to use overrides and extensions to customize bootstrap's functionality.

Overrides go into styles/\_overrides.scss. These are processed before the main part of bootstrap, so they can affect the usual bootstrap classes like text-primary.

Extensions go into styles/\_extensions.scss. These are processed after the main part of bootstrap so they can use bootstrap mixins or extend bootstrap classes to add or create new properties and classes.
