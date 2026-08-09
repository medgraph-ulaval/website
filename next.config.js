import "./src/env.js";
import createNextIntlPlugin from "next-intl/plugin";

/** @type {import("next").NextConfig} */
const config = {};

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

export default withNextIntl(config);