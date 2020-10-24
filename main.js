Hooks.on(
  "renderApplication",
  /**
   * @param {SettingsConfig} settingsConfig
   * @param {JQuery} html
   * @param {Object} data
   */
  (settingsConfig, html, data) => {
    if (!(settingsConfig instanceof SettingsConfig)) return;
    html.find("input[data-dtype=Image]").attr("data-dtype", "Img")
  }
);
