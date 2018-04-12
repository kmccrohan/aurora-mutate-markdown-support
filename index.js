import React from "react";
import { getDefaultKeyBinding, KeyBindingUtil } from "draft-js";
import createMarkdownShortcutsPlugin from "draft-js-markdown-shortcuts-plugin";

const markdownPlugin = createMarkdownShortcutsPlugin();

function Markdown(Editor) {
  return class extends React.Component {
    render() {
      let plugs = [];
      if (this.props.plugins) {
        plugs = this.props.plugins;
      }
      plugs.push(markdownPlugin);

      const { plugins, ...props } = this.props;
      return <Editor plugins={plugs} {...props} />;
    }
  };
}

module.exports.mutations = {
  BaseEditor: Markdown
};
