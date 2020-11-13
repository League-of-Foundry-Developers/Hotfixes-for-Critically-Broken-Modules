/**
 * Settings Extender Fix
 */
Hooks.on(
  "renderApplication",
  /**
   * @param {SettingsConfig} settingsConfig
   * @param {JQuery} html
   * */
  (settingsConfig, html) => {
    if (!(settingsConfig instanceof SettingsConfig)) return;
    html.find("input[data-dtype=Image]").attr("data-dtype", "Img");
  }
);



/**
 * Forien Unidentified Items Fix
 */
Hooks.once("forien-unidentified-items:afterReady", async () => {
  const registerDerivedItemSheetClass = (await import("./libs/forien-unidentified-items.js")).default
  registerDerivedItemSheetClass();
})
