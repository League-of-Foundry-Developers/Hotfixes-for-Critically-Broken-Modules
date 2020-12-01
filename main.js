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
  // we should not patch if the foriens version is 0.2.4 or greater
  const shouldPatch = isNewerVersion("0.2.4", game.modules.get("forien-unidentified-items").data.version);

  if (shouldPatch) {
    const registerDerivedItemSheetClass = (await import("./libs/forien-unidentified-items.js")).default
    registerDerivedItemSheetClass();
  }
})
