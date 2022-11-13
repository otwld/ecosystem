const theme = {
  colors: {
    "primary": {
      "50": "#427eec",
        "100": "#3874e2",
        "200": "#2e6ad8",
        "300": "#2460ce",
        "400": "#1a56c4",
        "500": "#104cba",
        "600": "#0642b0",
        "700": "#0038a6",
        "800": "#002e9c",
        "900": "#002492",
    },
    "secondary": {
      "50": "#54618c",
        "100": "#4a5782",
        "200": "#404d78",
        "300": "#36436e",
        "400": "#2c3964",
        "500": "#222f5a",
        "600": "#182550",
        "700": "#0e1b46",
        "800": "#04113c",
        "900": "#000732"
    },
    "white": {
      "50": "#ffffff",
        "100": "#ffffff",
        "200": "#ffffff",
        "300": "#ffffff",
        "400": "#ffffff",
        "500": "#f5f5f5",
        "600": "#ebebeb",
        "700": "#e1e1e1",
        "800": "#d7d7d7",
        "900": "#cdcdcd"
    },
    "black": {
      "50": "#40505c",
        "100": "#364652",
        "200": "#2c3c48",
        "300": "#22323e",
        "400": "#182834",
        "500": "#0e1e2a",
        "600": "#041420",
        "700": "#000a16",
        "800": "#00000c",
        "900": "#000002"
    },
  }
};

module.exports = {
  theme: {
    ...theme,
    colors: {
      ...theme.colors,
      primary: {
        ...theme.colors.primary,
        hover: theme.colors.black['50'],
        'hover-border': theme.colors.primary['400'],
        default: theme.colors.primary['500'],
        'default-border': theme.colors.primary['500'],
        active: theme.colors.primary['600'],
        'active-border': theme.colors.primary['600'],
        focus: theme.colors.primary['600'],
        'focus-border': theme.colors.primary['600'],
      }
    }
  },
  plugins: [],
};
