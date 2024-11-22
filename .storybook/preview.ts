import type { Preview } from "@storybook/react";
import "../src/app/globals.css";
import nextIntl from "./next-intl";

const preview: Preview = {
  initialGlobals: {
    locale: "fa",
    locales: {
      en: "en",
      fa: "fa",
    },
  },
  parameters: {
    nextIntl,
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
