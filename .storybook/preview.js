import { withRouter } from "storybook-addon-react-router-v6";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    default: "black",
    values: [
      {
        name: "black",
        value: "#1C1C27",
      },
    ],
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
