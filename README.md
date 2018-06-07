# Neo

A simple opinionated VS Code theme for JavaScript inspired by ColorSublime BlueLover theme. I worked on this theme since I like blueish dark background and needed a small colour palette to avoid visual overload and focus on my coding :relaxed:

![Preview](https://raw.githubusercontent.com/palashmon/neo-vscode-theme/master/images/screenshot.png)

# Installation

1.  Open **Extensions** sidebar panel in VS Code. `View → Extensions`
2.  Search for `Neo Theme`.
3.  Click **Install** to install it.
4.  Click **Reload** to reload the your editor
5.  Code > Preferences > Color Theme > **Neo**
6.  Optional: Use the recommended settings below for best experience

## Recommended Settings

```js
{
  "workbench.colorTheme": "Neo",
  "editor.fontFamily": "Operator Mono, Menlo, Monaco, 'Courier New', monospace",
  "editor.cursorBlinking": "smooth",
  "editor.cursorStyle": "line",
  "editor.cursorWidth": 3,
  "editor.detectIndentation": false,
  "editor.fontLigatures": true,
  "editor.fontSize": 17,
  "editor.hideCursorInOverviewRuler": true,
  "editor.letterSpacing": 0.5,
  "editor.lineHeight": 25,
  "editor.minimap.enabled": false,
  "editor.occurrencesHighlight": false,
  "editor.renderIndentGuides": false,
  "editor.renderLineHighlight": "none",
  "explorer.decorations.colors": false,
  "explorer.openEditors.visible": 0
}
```

## Contribute

First, this theme is new so if something is funky, please open an issue.

These are the things we have control over. If you would like to change something, you can either open a PR and see if I'd like it added, or override the colours in your own settings.json file. Please notice that this theme is intentionally focused on a small subset of VS Code features that I use (basic editing, file tree, and debugger) for JavaScript and may not work well in other scenarios. However, I'll happily take changes that respect the design intention but fix rough edges in parts I didn't polish (e.g. viewing diffs, terminal, or search).

- Use Microsoft's [theme color reference](https://code.visualstudio.com/docs/getstarted/theme-color-reference) for UI theme help and to get started.
- [Testing your modified](https://code.visualstudio.com/docs/extensions/themes-snippets-colorizers#_test-a-new-color-theme) color theme.
- You can clone this repository to your [`.vscode/extensions/`](https://code.visualstudio.com/docs/extensions/yocode#_your-extensions-folder) folder and then follow the steps above for testing your modified version.

## Credits

This theme is inspired by ColorSublime [BlueLover](https://colorsublime.github.io/themes/BlueLover/) theme. I ended up changing some colors and their mappings quite significantly.

Pull requests to fix any issues that adhere to the theme's JS look and feel are welcome.

## License

MIT
