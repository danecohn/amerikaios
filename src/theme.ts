import { DynamicColorIOS, Platform, Appearance, StyleSheet } from "react-native";
import type { ColorValue } from "react-native";
import { dark, light } from "./palette";
import type { Palette } from "./palette";

// VigilTech colours. On iOS each value is a dynamic colour, so the whole UI
// follows the system light/dark setting live, including while the app runs.
const dyn = (key: keyof Palette): ColorValue =>
  Platform.OS === "ios"
    ? DynamicColorIOS({ light: light[key], dark: dark[key] })
    : (Appearance.getColorScheme() === "dark" ? dark : light)[key];

export const colors = {
  // Legacy names kept so existing screens keep working.
  red: dyn("fill"), // filled controls and switch track; white text on top
  black: dyn("bg"), // screen background
  card: dyn("card"),
  border: dyn("border"),
  white: dyn("text"), // primary text
  muted: dyn("muted"),
  // Added by the VigilTech theme.
  tint: dyn("tint"), // pink text, links, active icons
  onFill: dyn("onFill"),
  tintSoft: dyn("tintSoft"),
  sent: dyn("sent"),
  danger: dyn("danger"),
  outline: dyn("track"),
  disabled: dyn("disabled"),
  card2: dyn("card2"),
};
export const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.black },
  content: { padding: 20, gap: 16 },
  row: { flexDirection: "row", alignItems: "center", gap: 12 },
  spread: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: { color: colors.white, fontSize: 28, fontWeight: "800" },
  text: { color: colors.white, fontSize: 16, lineHeight: 24 },
  muted: { color: colors.muted, fontSize: 14, lineHeight: 21 },
  label: { color: colors.white, fontSize: 15, fontWeight: "700" },
  input: {
    backgroundColor: colors.card,
    color: colors.white,
    borderColor: colors.outline,
    borderWidth: 1,
    borderRadius: 10,
    padding: 14,
    fontSize: 16,
  },
  button: {
    borderRadius: 10,
    backgroundColor: colors.red,
    paddingHorizontal: 16,
    paddingVertical: 12,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 44,
  },
  secondary: {
    backgroundColor: colors.card,
    borderColor: colors.outline,
    borderWidth: 1,
  },
  disabled: { backgroundColor: colors.disabled, borderColor: colors.disabled },
  buttonText: { color: colors.onFill, fontWeight: "700", fontSize: 15 },
  card: {
    padding: 18,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    gap: 12,
  },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: colors.card,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    backgroundColor: colors.card,
  },
  badge: { color: colors.tint, fontWeight: "700" },
  error: { color: colors.danger, fontSize: 14, lineHeight: 21 },
  empty: { padding: 32, alignItems: "center", gap: 12 },
  hero: { backgroundColor: colors.tintSoft, padding: 24, gap: 12 },
  logo: {
    width: 44,
    height: 44,
    borderRadius: 10,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  tabs: {
    flexDirection: "row",
    paddingHorizontal: 12,
    gap: 8,
    paddingVertical: 10,
  },
  bar: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: colors.border,
    backgroundColor: colors.card,
    paddingTop: 8,
  },
  tab: {
    flex: 1,
    minHeight: 52,
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
  },
  fab: {
    position: "absolute",
    right: 20,
    bottom: 88,
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: colors.red,
    alignItems: "center",
    justifyContent: "center",
  },
});
