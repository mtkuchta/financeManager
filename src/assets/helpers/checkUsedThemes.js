import { themeColors } from "../constants/themeColors";

export function checkUsedThemes(items) {
  const usedThemes = [];

  items.map((item) => {
    const theme = themeColors.filter((theme) => theme.colorHex === item.theme);
    usedThemes.push(theme[0].value);
  });

  return usedThemes;
}
