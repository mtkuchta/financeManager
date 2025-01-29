import { themeColors } from "../constants/themeColors";

export function findThemeColorName(themeHex) {
  return themeColors.filter((theme) => theme.colorHex === themeHex)[0].value;
}
