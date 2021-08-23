export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'POS',
    values: [
      {
        name: 'POS',
        value: '#0E151D'
      }
    ],
  },
}
