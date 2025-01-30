import { themeColors } from "../constants/themeColors";

export function findThemeHex(themeName) {
  return themeColors.filter((theme) => theme.value === themeName)[0].colorHex;
}
