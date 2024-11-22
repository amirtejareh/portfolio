import en from "../src/i18n/messages/en.json";
import fa from "../src/i18n/messages/fa.json";

const messagesByLocale: Record<string, any> = { fa, en };

const nextIntl = {
  defaultLocale: "fa",
  messagesByLocale,
};

export default nextIntl;
