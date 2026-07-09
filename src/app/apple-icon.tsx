import { ImageResponse } from "next/og";
import { BRAND_ICON_COLORS, BRAND_ICON_FONT } from "@/lib/brand-icon";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: BRAND_ICON_COLORS.black,
          gap: 10,
        }}
      >
        <div
          style={{
            color: BRAND_ICON_COLORS.warmWhite,
            fontFamily: BRAND_ICON_FONT,
            fontSize: 52,
            fontWeight: 300,
            letterSpacing: "0.28em",
            paddingLeft: "0.28em",
          }}
        >
          SALT
        </div>
        <div
          style={{
            color: BRAND_ICON_COLORS.muted,
            fontFamily: BRAND_ICON_FONT,
            fontSize: 11,
            fontWeight: 300,
            letterSpacing: "0.08em",
          }}
        >
          Concreting & Carpentry
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
