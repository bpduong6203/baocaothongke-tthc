import packageJson from "../../package.json";

const currentYear = new Date().getFullYear();

export const APP_CONFIG = {
  name: "Quản lý",
  version: packageJson.version,
  copyright: `© ${currentYear}, Quản lý.`,
  meta: {
    title: "Quản lý - Báo cáo TTHC",
    description: "Quản lý.",
  },
};
