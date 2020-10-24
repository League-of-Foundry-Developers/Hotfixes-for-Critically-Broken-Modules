Hooks.on(
  "renderApplication",
  /**
   * @param {SettingsConfig} settingsConfig
   * @param {JQuery} html
   * */
  (settingsConfig, html) => {
    if (!(settingsConfig instanceof SettingsConfig)) return;
    html.find("input[data-dtype=Image]").attr("data-dtype", "Img")
  }
);
