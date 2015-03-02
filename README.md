# ember-cli-placeholdit

Simple addon for inserting [placehold.it](http://placehold.it) images. Making this as I learn how to create ember addons and it seems like there are enough ember-cli-fill-murray clones!

Has some parameters that can be specified:
* width
* height
* textColor
* backgroundColor
* text
* format

## Examples
* `{{placehold-it}}`  (creates a 150x150)
* `{{placehold-it width=350 height=350 textColor='111111' backgroundColor='5A5A5A'}}`
* `{{placehold-it text="this is a png file!" format="png"}}`  (available options: gif, jpg, jpeg, png)

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
