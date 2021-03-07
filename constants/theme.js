import { Dimensions } from "react-native";
const {width, height} = Dimensions.get("window");

export const COLORS  = {
    black: "#1E1F20",
    white: "#FFFFFF",
    lightGray: "#ABAFB8",
    gray: "#BEC1D2",
}

export const SIZES = {
    //globalls
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,

    //fontSizes
    navTitle: 25,
    h1: 30,
    h2: 22,
    h3: 16,
    h4: 14,
    h5: 12,
    body1: 30,
    body2: 20,
    body3: 16,
    body4: 14,
    body5: 12,

    //dimension
    width,
    height
}

export const FONTS = {
    navTitle: { fontSize: SIZES.navTitle, fontWeight: "700" },
    largeTitleBold: { fontSize: SIZES.h2 },
    h1: {  fontSize: SIZES.h1, lineHeight: 36, fontWeight: "800" },
    h2: {  fontSize: SIZES.h2, lineHeight: 30, fontWeight: "700" },
    h3: { fontSize: SIZES.h3, lineHeight: 22, fontWeight: "600" },
    h4: {  fontSize: SIZES.h4, lineHeight: 22, fontWeight: "500"  },
    h5: {  fontSize: SIZES.h5, lineHeight: 22, fontWeight: "400"  },
    body1: { fontSize: SIZES.body1, lineHeight: 36 },
    body2: { fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontSize: SIZES.body4, lineHeight: 22 },
    body5: { fontSize: SIZES.body5, lineHeight: 22 },
};

const customTheme  = {COLORS, SIZES, FONTS};

export default customTheme;