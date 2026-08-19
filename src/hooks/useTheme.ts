import { colors, devices, fonts } from "@/theme/variables";

const theme = { colors, devices, fonts };

const useTheme = (): typeof theme => theme;

export { useTheme };
