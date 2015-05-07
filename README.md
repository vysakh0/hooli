# Hooli
This app uses ember component to make autocompletion widget without the need for jquery ui autocompletion or other.

[Demo app](http://vysakh0.github.io/hooli)

## Installation

##### Dependencies
- node
- bower
- ember-cli (version: 0.2.3)

Clone the repo, install dependencies, start ember server and visit `localhost:4200`

```bash
git clone https://github.com/vysakh0/hooli.git
cd hooli
npm install
bower install
ember server
```

Note: This project uses ember canary build(ember 1.11.3), so there might be few deprecations and also this has **glimmer**, yay!.

## Components

##### search-box
An extension of `Ember.TextField` checks the user key press. If user presses `up` or `down` key, it invokes `autocomplete-list` component

##### autocomplete-list
- Lists all the autocompletion results (see its template).
- Invoked by `search-box` component
- When focussed, it highlights one of the results and gives the focus back to the `search-box` field.

## Ember addons

- Used `ember-cli-filter-query` to filter the autocomplete results, though the function is fairly simple, the plugin is bit more neat. I saw this plugin from the `ember-addons` github repo :)

- Also used `ember-cli-materialize`, it was fairly easy to use. Do checkout the [materializecss](materializecss.com) project on which this addon is built.

NOTE: Any Similarity to serialis living or dead Is purely coincidental.
