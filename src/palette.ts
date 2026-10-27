// VigilTech colours for the app. Values come from the shared --vt-* tokens
// (brand/vigiltech/tokens.json). `npm run check:contrast` verifies every
// text/background pair below at 4.5:1 (3:1 for non-text and large text).
export type Palette = {
  bg: string; // --vt-bg
  card: string; // --vt-surface
  card2: string; // --vt-surface-2
  border: string; // --vt-separator, flattened onto bg
  text: string; // --vt-label
  muted: string; // --vt-label-2 (never label-3)
  tint: string; // pink for text, links, icons
  fill: string; // pink-600: filled controls, white text on top
  onFill: string;
  tintSoft: string; // soft pink panel, text sits on it in `text`
  sent: string; // outgoing message bubble, text in `text`
  danger: string; // error text
  track: string; // switch track off, input outlines (3:1 non-text)
  disabled: string; // disabled control background, text in `muted`
};
export const light: Palette = {
  bg: "#f6f1f4",
  card: "#fffbfd",
  card2: "#faf4f7",
  border: "#e1d7de",
  text: "#17101a",
  muted: "#6b5d68",
  tint: "#a8003a",
  fill: "#d6004a",
  onFill: "#ffffff",
  tintSoft: "#ffe3ed",
  sent: "#ffd6e4",
  danger: "#b3001b",
  track: "#8a7b86",
  disabled: "#e9e0e6",
};
export const dark: Palette = {
  bg: "#120a14",
  card: "#1e1422",
  card2: "#181019",
  border: "#3a2a3e",
  text: "#f7eef2",
  muted: "#b7a5b1",
  tint: "#ff7aa6",
  fill: "#d6004a",
  onFill: "#ffffff",
  tintSoft: "#34132a",
  sent: "#4a1634",
  danger: "#ff7a8e",
  track: "#7d6a78",
  disabled: "#2b1d2f",
};
