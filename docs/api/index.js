var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_server = require("react-dom/server"), import_react = require("@remix-run/react");

// app/styles/stitches.config.ts
var Stitches = __toESM(require("@stitches/react")), { styled, globalCss, getCssText, config, createTheme, keyframes, css } = Stitches.createStitches({
  theme: {
    colors: {
      red120: "#cc5757",
      red100: "#ff6d6d",
      red80: "#ff8a8a",
      red60: "#ffa7a7",
      red40: "#ffc5c5",
      red20: "#ffe2e2",
      steel120: "#2b2b37",
      steel100: "#363645",
      steel80: "#5e5e6a",
      steel60: "#86868f",
      steel40: "#afafb5",
      steel20: "#d7d7da",
      white: "rgba(250,250,250,1)",
      white80: "rgba(250,250,250,0.8)",
      white0: "rgba(250,250,250,0)",
      black: "#1B1A22",
      blue: "#569AFF",
      green: "#88DFAB",
      codeBackground: "#f0f2f4",
      "red-outline": "$red40",
      redYellowGradient100: "linear-gradient(330deg, #fff59a 20%, #ff6d6d 100%)",
      redYellowGradient40: "linear-gradient(330deg, #fff59a66 20%, #ff6d6d66 100%)",
      blueGreenGradient100: "linear-gradient(150deg, #569AFF 10.21%, #88DFAB 84.57%)",
      blueGreenGradient40: "linear-gradient(150deg, #569AFF66 10.21%, #88DFAB66 84.57%)"
    },
    shadows: {
      "red-outline": "var(--colors-red-outline)"
    },
    space: {
      5: "0.5rem",
      10: "1rem",
      15: "1.5rem",
      20: "2rem",
      25: "2.5rem",
      30: "3rem",
      35: "3.5rem",
      40: "4rem",
      45: "4.5rem",
      50: "5rem",
      60: "6rem",
      80: "8rem",
      100: "10rem",
      110: "11rem"
    },
    sizes: {
      splash: "40rem",
      type: "80rem",
      document: "120rem",
      largeDoc: "1600px"
    },
    radii: {
      r4: "0.4rem",
      r8: "0.8rem",
      r20: "2rem",
      round: "50%"
    },
    zIndices: {
      1: "100",
      ["1.5"]: "150",
      2: "200",
      3: "300",
      4: "400",
      max: "999"
    },
    fonts: {
      sans: "Inter, -apple-system, system-ui, sans-serif",
      "sans-var": '"Inter var", -apple-system, system-ui, sans-serif',
      mono: '"Space Mono", monospace',
      serif: ""
    },
    fontWeights: {
      default: 400,
      bold: 600,
      semiblack: 700
    },
    fontSizes: {
      XXL: "4.8rem",
      XL: "4rem",
      L: "3.2rem",
      M: "2.6rem",
      S: "2rem",
      XS: "1.6rem",
      XXS: "1.4rem",
      code: "1.4rem"
    },
    lineHeights: {
      XXL: "5.8rem",
      XL: "5rem",
      L: "4.2rem",
      M: "3.6rem",
      S: "3rem",
      XS: "2.6rem",
      XXS: "180%",
      code: "1.8rem"
    }
  },
  media: {
    tabletUp: "(min-width: 768px)",
    desktopUp: "(min-width: 1024px)",
    largeDesktopUp: "(min-width: 1680px)",
    dark: "(prefers-color-scheme: dark)",
    light: "(prefers-color-scheme: light)",
    motion: "(prefers-reduced-motion: no-preference)",
    documentUp: "(min-width: 1200px)"
  },
  utils: {
    p: (value) => ({
      padding: value
    }),
    pt: (value) => ({
      paddingTop: value
    }),
    pr: (value) => ({
      paddingRight: value
    }),
    pb: (value) => ({
      paddingBottom: value
    }),
    pl: (value) => ({
      paddingLeft: value
    }),
    px: (value) => ({
      paddingLeft: value,
      paddingRight: value
    }),
    py: (value) => ({
      paddingTop: value,
      paddingBottom: value
    }),
    m: (value) => ({
      margin: value
    }),
    mt: (value) => ({
      marginTop: value
    }),
    mr: (value) => ({
      marginRight: value
    }),
    mb: (value) => ({
      marginBottom: value
    }),
    ml: (value) => ({
      marginLeft: value
    }),
    mx: (value) => ({
      marginLeft: value,
      marginRight: value
    }),
    my: (value) => ({
      marginTop: value,
      marginBottom: value
    }),
    debug: (value) => ({
      border: `solid 1px ${value}`
    }),
    visuallyHidden: (_val) => ({
      position: "absolute",
      border: 0,
      width: 1,
      height: 1,
      padding: 0,
      margin: -1,
      overflow: "hidden",
      clip: "rect(0, 0, 0, 0)",
      whiteSpace: "nowrap",
      wordWrap: "normal"
    }),
    gradientBorder: ({ width = 1, gradient = "" }) => ({
      position: "relative",
      "&::before": {
        content: "''",
        display: "block",
        backgroundImage: gradient,
        position: "absolute",
        top: `-${width}px`,
        left: `-${width}px`,
        width: `calc(100% + ${width * 2}px)`,
        height: `calc(100% + ${width * 2}px)`,
        borderRadius: "inherit",
        zIndex: -1
      }
    }),
    hover: (val) => ({
      "@media (hover:hover)": {
        "&:hover": {
          ...val
        }
      }
    })
  }
}), dark = createTheme("dark", {
  colors: {
    black: "rgba(250,250,250,1)",
    white: "#1B1A22",
    white80: "#1B1A22CC",
    codeBackground: "#2b2b37",
    steel20: "#2b2b37",
    steel100: "#f0f2f4",
    "red-outline": "$red120"
  },
  fontWeights: {
    default: 300,
    bold: 500,
    semiblack: 600
  }
});

// app/entry.server.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, {
      context: remixContext,
      url: request.url
    }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 14,
      columnNumber: 5
    }, this)
  ).replace(/<\/head>/, `<style id="stitches">${getCssText()}</style></head>`);
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
var import_node = require("@remix-run/node"), import_react2 = require("@remix-run/react");

// ../node_modules/@docsearch/css/dist/style.css
var style_default = "/build/_assets/style-AAM3DOU7.css";

// app/styles/global.ts
var globalStyles = globalCss({
  "*, *:before, *:after": {
    boxSizing: "border-box"
  },
  "html, body": {
    color: "$black",
    backgroundColor: "$white",
    ["-webkit-text-size-adjust"]: "100%",
    "-webkit-font-smoothing": "antialiased",
    "-moz-osx-font-smoothing": "grayscale",
    fontFamily: "$sans",
    fontKerning: "normal",
    fontSize: "62.5%",
    letterSpacing: "-0.005em",
    margin: 0,
    minHeight: "100%",
    "@supports(font-variation-settings: normal)": {
      fontFamily: "$sans-var"
    },
    "@motion": {
      scrollBehavior: "smooth"
    }
  },
  html: {
    display: "flex"
  },
  body: {
    flex: "1 0 100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    maxWidth: "100%"
  },
  "h1, h2, h3, h4, h5, h6, p": {
    margin: 0
  },
  "button, a": {
    color: "inherit",
    textDecoration: "none"
  },
  "*:focus-visible": {
    boxShadow: "0 0 0 3px $red-outline",
    outline: "none",
    borderRadius: "$r4",
    ["-webkit-tap-highlight-color"]: "3px solid $red-outline"
  },
  ".DocSearch": {
    fontSize: "$XS",
    "&.DocSearch-Container, &.DocSearch-Container *": {
      pointerEvents: "auto"
    },
    "&.DocSearch-Container": {
      backgroundColor: "$white80",
      borderRadius: "$r8"
    },
    ".DocSearch-Modal": {
      boxShadow: "unset",
      backgroundColor: "$codeBackground"
    },
    ".DocSearch-MagnifierLabel": {
      display: "none"
    },
    ".DocSearch-Form": {
      p: 0,
      background: "transparent",
      boxShadow: "unset",
      border: "1px solid $steel40"
    },
    ".DocSearch-Input": {
      fontSize: "inherit",
      p: "$5 11px",
      background: "transparent",
      color: "$black",
      "&::placeholder": {
        color: "$black"
      }
    },
    ".DocSearch-Reset:hover": {
      color: "#ff6d6dcc"
    },
    ".DocSearch-Help": {
      fontSize: "inherit",
      color: "$steel40"
    },
    ".DocSearch-Dropdown": {
      minHeight: "20vh"
    },
    ".DocSearch-Footer": {
      background: "transparent",
      boxShadow: "unset"
    },
    ".DocSearch-Label": {
      color: "$steel40"
    },
    ".DocSearch-Commands-Key": {
      background: "transparent",
      border: "1px solid $steel40",
      borderRadius: 4,
      p: 4,
      height: "unset",
      width: "unset",
      boxShadow: "unset"
    },
    ".DocSearch-Hit-source": {
      background: "transparent",
      color: "$black"
    },
    ".DocSearch-Hit > a": {
      background: "transparent",
      boxShadow: "unset",
      borderRadius: "$r8",
      hover: {
        backgroundColor: "#ff6d6d33"
      }
    },
    ".DocSearch-Hit[aria-selected=true] > a": {
      backgroundColor: "#ff6d6d33"
    },
    ".DocSearch-Hit-Container, .DocSearch-Prefill": {
      color: "$black"
    },
    ".DocSearch-Hit-title": {
      fontSize: "inherit"
    },
    mark: {
      color: "$red100"
    }
  },
  "#carbonads": {
    "& *": {
      margin: "initial",
      padding: "initial"
    },
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', Helvetica, Arial, sans-serif",
    display: "flex",
    justifyContent: "stretch",
    mb: 40,
    mx: "auto",
    backgroundColor: "$codeBackground",
    borderRadius: "$r8",
    overflow: "hidden",
    boxShadow: "0 1px 4px 1px hsla(0, 0%, 0%, 0.1)",
    zIndex: 100,
    "@tabletUp": {
      maxWidth: "60%"
    },
    "& > span": {
      width: "100%"
    },
    "& a": {
      color: "inherit",
      textDecoration: "none",
      "&:hover": {
        color: "inerhit"
      }
    },
    "& span": {
      position: "relative",
      display: "block",
      overflow: "hidden"
    },
    "& .carbon-wrap": {
      display: "flex"
    },
    "& .carbon-img": {
      display: "block",
      margin: 0,
      lineHeight: 1,
      "& img": {
        display: "block"
      }
    },
    "& .carbon-text": {
      fontSize: "14px",
      p: 10,
      mb: 16,
      lineHeight: 1.5,
      textAlign: "left"
    },
    "& .carbon-poweredby": {
      display: "block",
      p: "6px 8px",
      background: "$white",
      textAlign: "center",
      textTransform: "uppercase",
      letterSpacing: "0.5px",
      fontWeight: 600,
      fontSize: 8,
      lineHeight: 1,
      borderTopLeftRadius: 3,
      position: "absolute",
      bottom: 0,
      right: 0
    }
  },
  [`${dark}`]: {}
});

// app/components/Widgets/WidgetTheme.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), WidgetTheme = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("script", {
  dangerouslySetInnerHTML: {
    __html: `
          !function(){
              try {
                  var d=document.documentElement.classList;
                  d.remove('light','dark');
                  var e=localStorage.getItem('theme');
                  if("system"===e||(!e&&true)){
                      var t="(prefers-color-scheme: dark)";
                      var m=window.matchMedia(t);
  
                      m.media!==t||m.matches ? d.add('dark') :d.add('light')
                  }
                  else if(e) {
                      var x={"light":"light","dark":"dark"};
                      d.add(x[e])
                  }
              }
              catch(e){}
            }()
          `
  }
}, void 0, !1, {
  fileName: "app/components/Widgets/WidgetTheme.tsx",
  lineNumber: 2,
  columnNumber: 3
}, this);

// app/components/Widgets/WidgetPlausible.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), WidgetPlausible = () => typeof window < "u" && !window.env.ENABLE_PLAUSIBLE ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("script", {
  defer: !0,
  "data-domain": "beta.react-spring.dev",
  src: "https://plausible.io/js/plausible.js"
}, void 0, !1, {
  fileName: "app/components/Widgets/WidgetPlausible.tsx",
  lineNumber: 7,
  columnNumber: 5
}, this);

// app/components/Site/SiteFooter.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), SiteFooter = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer, {
  children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FooterCopy, {
      children: [
        "Designed by ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
          href: "https://twitter.com/_josh_ellis_",
          rel: "noopener noreferrer",
          target: "_blank",
          children: "Josh"
        }, void 0, !1, {
          fileName: "app/components/Site/SiteFooter.tsx",
          lineNumber: 7,
          columnNumber: 21
        }, this),
        " & built by",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
          href: "https://twitter.com/VVYR3XPoJrjbagQ",
          rel: "noopener noreferrer",
          target: "_blank",
          children: "Steven.zhong"
        }, void 0, !1, {
          fileName: "app/components/Site/SiteFooter.tsx",
          lineNumber: 13,
          columnNumber: 9
        }, this),
        ". ",
        "Powered by \u2013",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
          href: "https://www.vercel.com/",
          rel: "noopener noreferrer",
          target: "_blank",
          children: "Vercel"
        }, void 0, !1, {
          fileName: "app/components/Site/SiteFooter.tsx",
          lineNumber: 21,
          columnNumber: 9
        }, this),
        ",",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
          href: "https://remix.run/",
          rel: "noopener noreferrer",
          target: "_blank",
          children: "Remix"
        }, void 0, !1, {
          fileName: "app/components/Site/SiteFooter.tsx",
          lineNumber: 28,
          columnNumber: 9
        }, this),
        ",",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
          href: "https://www.algolia.com/",
          rel: "noopener noreferrer",
          target: "_blank",
          children: "Algolia"
        }, void 0, !1, {
          fileName: "app/components/Site/SiteFooter.tsx",
          lineNumber: 32,
          columnNumber: 9
        }, this),
        ",",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
          href: "https://plausible.io",
          rel: "noopener noreferrer",
          target: "_blank",
          children: "Plausible"
        }, void 0, !1, {
          fileName: "app/components/Site/SiteFooter.tsx",
          lineNumber: 39,
          columnNumber: 9
        }, this),
        ",",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
          href: "https://stitches.dev/",
          rel: "noopener noreferrer",
          target: "_blank",
          children: "Stitches"
        }, void 0, !1, {
          fileName: "app/components/Site/SiteFooter.tsx",
          lineNumber: 46,
          columnNumber: 9
        }, this),
        " ",
        "& more..."
      ]
    }, void 0, !0, {
      fileName: "app/components/Site/SiteFooter.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FooterCopy, {
      children: `\xA9 ${new Date().getFullYear()} @aoviz/graphs`
    }, void 0, !1, {
      fileName: "app/components/Site/SiteFooter.tsx",
      lineNumber: 54,
      columnNumber: 7
    }, this)
  ]
}, void 0, !0, {
  fileName: "app/components/Site/SiteFooter.tsx",
  lineNumber: 5,
  columnNumber: 5
}, this), Footer = styled("footer", {
  px: "$25",
  py: "$20",
  mt: "$50",
  "@tabletUp": {
    mt: "$100",
    px: "$50",
    display: "flex",
    flexDirection: "column-reverse",
    alignItems: "flex-end",
    justifyContent: "flex-end"
  }
}), FooterCopy = styled("p", {
  color: "$steel40",
  fontSize: "1.2rem",
  lineHeight: "180%",
  fontWeight: "$default",
  "& > a": {
    hover: {
      textDecoration: "underline"
    }
  }
});

// app/root.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), meta = () => ({
  title: "@aoviz/graphs",
  description: ""
}), links = () => [
  { rel: "stylesheet", href: style_default },
  { rel: "stylesheet", href: "https://rsms.me/inter/inter.css" },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com" },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap"
  }
], loader = () => (0, import_node.json)({
  ENV: {
    ENABLE_PLAUSIBLE: process.env.ENABLE_PLAUSIBLE,
    ALGOLIA_APP_ID: process.env.ALGOLIA_APP_ID,
    ALGOLIA_API_KEY: process.env.ALGOLIA_API_KEY,
    ENABLE_CARBON: process.env.ENABLE_CARBON
  }
});
function Document({ children }) {
  globalStyles();
  let data = (0, import_react2.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
    lang: "en",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", {
            charSet: "utf-8"
          }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 61,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", {
            name: "viewport",
            content: "width=device-width,initial-scale=1"
          }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 62,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 63,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Links, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 64,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WidgetPlausible, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 65,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WidgetTheme, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 66,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 60,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", {
        children: [
          children,
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SiteFooter, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 70,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("script", {
            dangerouslySetInnerHTML: {
              __html: `window.env = ${JSON.stringify(data.ENV)}`
            }
          }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 71,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 76,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 77,
            columnNumber: 52
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 68,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 59,
    columnNumber: 5
  }, this);
}
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Document, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 86,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 87,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 85,
    columnNumber: 5
  }, this);
}

// app/routes/examples.tsx
var examples_exports = {};
__export(examples_exports, {
  default: () => DocsLayout
});

// app/components/Header/Header.tsx
var import_react12 = require("react"), Dialog2 = __toESM(require("@radix-ui/react-dialog")), import_phosphor_react5 = require("phosphor-react"), import_web4 = require("@react-spring/web");

// app/hooks/useAnimatedHeader.ts
var import_web = require("@react-spring/web");

// app/hooks/useIsomorphicEffect.ts
var import_react3 = require("react"), isSSR = typeof window > "u" || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent), useIsomorphicLayoutEffect = isSSR ? import_react3.useEffect : import_react3.useLayoutEffect;

// app/hooks/useStickyHeader.ts
var import_react5 = require("react");

// app/hooks/useWindowScrolling.ts
var import_rafz = require("@react-spring/rafz"), import_react4 = require("react");
var useWindowScrolling = ({
  active = !0,
  threshold = 0,
  yOffset = 0,
  onScroll
}) => {
  let [direction, setDirection] = (0, import_react4.useState)(void 0), [scrollTop, setScrollTop] = (0, import_react4.useState)(0), lastScrollY = (0, import_react4.useRef)(0), ticking = (0, import_react4.useRef)(!1);
  return useIsomorphicLayoutEffect(() => {
    let updateScrollDir = () => {
      let scrollY = window.pageYOffset, direction2 = scrollY > lastScrollY.current ? "down" : "up", thresholdValue = Array.isArray(threshold) ? threshold[direction2 === "down" ? 0 : 1] : threshold;
      if (!active) {
        setDirection(void 0);
        return;
      }
      if (scrollY < yOffset) {
        ticking.current = !1;
        return;
      }
      if (Math.abs(scrollY - lastScrollY.current) < thresholdValue) {
        ticking.current = !1;
        return;
      }
      lastScrollY.current = scrollY > 0 ? scrollY : 0, ticking.current = !1, setDirection(direction2), setScrollTop(scrollY);
    }, handleScroll = (e) => {
      ticking.current ? onScroll && e && onScroll(e) : ((0, import_rafz.raf)(updateScrollDir), ticking.current = !0);
    };
    return updateScrollDir(), window.addEventListener("scroll", handleScroll), () => window.removeEventListener("scroll", handleScroll);
  }, [active, threshold]), [direction, scrollTop];
};

// app/hooks/useStickyHeader.ts
var useStickyHeader = (heights) => {
  let [stickyHeader, setStickyHeader] = (0, import_react5.useState)(!1), [direction, scrollTop] = useWindowScrolling({
    active: !0
  });
  return useIsomorphicLayoutEffect(() => {
    let { innerWidth } = window, limit = innerWidth < 768 ? heights[1] : heights[0];
    scrollTop >= limit && direction === "down" ? setStickyHeader(!0) : direction === "up" && scrollTop === 0 && setStickyHeader(!1);
  }, [scrollTop, direction]), stickyHeader;
};

// app/hooks/useAnimatedHeader.ts
var useAnimatedHeader = ({
  isHeader = !0,
  alwaysAnimate = !1,
  heights
}) => {
  let [direction, scrollTop] = useWindowScrolling({
    active: !0,
    threshold: [0, 20]
  }), isStuck = useStickyHeader(heights), [styles, api] = (0, import_web.useSpring)(() => ({
    top: 0,
    y: 0
  }));
  return useIsomorphicLayoutEffect(() => {
    let { innerWidth } = window, limit = innerWidth < 768 ? heights[1] : heights[0];
    direction === "down" ? (isStuck || api.set({
      top: isHeader ? limit * -1 : 0
    }), alwaysAnimate && !isStuck && api.start({
      from: {
        y: limit
      },
      to: {
        y: 0
      }
    }), isStuck && api.start({
      y: 0
    })) : direction === "up" && (scrollTop <= limit && !isStuck ? api.set({
      top: 0,
      y: 0
    }) : api.start({
      y: limit
    }));
  }, [direction, isStuck]), [styles, isStuck, scrollTop, direction];
};

// app/components/Header/HeaderNavigation.tsx
var import_phosphor_react3 = require("phosphor-react"), Toolbar3 = __toESM(require("@radix-ui/react-toolbar")), Tooltip = __toESM(require("@radix-ui/react-tooltip"));

// app/components/Buttons/NavButton.tsx
var import_react7 = require("@remix-run/react"), Toolbar2 = __toESM(require("@radix-ui/react-toolbar"));

// app/styles/fontStyles.ts
var getFontStyles = (DeskStyle) => {
  switch (DeskStyle) {
    case "$XXL":
      return {
        fontSize: "$XL",
        lineHeight: "$XL",
        "@tabletUp": {
          fontSize: DeskStyle,
          lineHeight: DeskStyle
        }
      };
    case "$XL":
      return {
        fontSize: "$L",
        lineHeight: "$L",
        "@tabletUp": {
          fontSize: DeskStyle,
          lineHeight: DeskStyle
        }
      };
    case "$L":
      return {
        fontSize: "$M",
        lineHeight: "$M",
        "@tabletUp": {
          fontSize: DeskStyle,
          lineHeight: DeskStyle
        }
      };
    case "$M":
      return {
        fontSize: "$S",
        lineHeight: "$S",
        "@tabletUp": {
          fontSize: DeskStyle,
          lineHeight: DeskStyle
        }
      };
    case "$S":
      return {
        fontSize: "$XS",
        lineHeight: "$XS",
        "@tabletUp": {
          fontSize: DeskStyle,
          lineHeight: DeskStyle
        }
      };
    case "$XS":
      return {
        fontSize: "$XXS",
        lineHeight: "$XXS",
        "@tabletUp": {
          fontSize: DeskStyle,
          lineHeight: DeskStyle
        }
      };
    case "$XXS":
      return {
        fontSize: DeskStyle,
        lineHeight: DeskStyle
      };
    case "$code":
      return {
        fontSize: DeskStyle,
        lineHeight: DeskStyle
      };
    default:
      return {};
  }
};

// app/hooks/useIsDarkTheme.ts
var import_jotai2 = require("jotai");

// app/components/Site/SiteThemePicker.tsx
var import_jotai = require("jotai"), Toolbar = __toESM(require("@radix-ui/react-toolbar")), import_phosphor_react = require("phosphor-react"), import_web2 = require("@react-spring/web");

// app/components/AccessibleIcon.tsx
var import_react6 = require("react");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), VisuallyHiddenLabel = styled("span", {
  visuallyHidden: ""
}), AccessibleIcon = ({
  children,
  label,
  className
}) => {
  let child = import_react6.Children.only(children);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      (0, import_react6.cloneElement)(child, {
        "aria-hidden": "true",
        focusable: "false",
        className
      }),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VisuallyHiddenLabel, {
        children: label
      }, void 0, !1, {
        fileName: "app/components/AccessibleIcon.tsx",
        lineNumber: 27,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/AccessibleIcon.tsx",
    lineNumber: 21,
    columnNumber: 5
  }, this);
};

// app/components/Site/SiteThemePicker.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
var themeAtom = (0, import_jotai.atom)("light" /* Light */), SiteThemePicker = () => {
  let [theme, setTheme] = (0, import_jotai.useAtom)(themeAtom), [styles, api] = (0, import_web2.useSpring)(
    () => ({
      width: 0,
      left: theme === "light" ? "2px" : "unset",
      right: theme === "light" ? "unset" : "2px",
      config: {
        tension: 300,
        clamp: !0
      }
    }),
    []
  );
  useIsomorphicLayoutEffect(() => {
    let isDefaultDark = document.documentElement.classList.contains("dark");
    api.start({
      width: 42,
      left: isDefaultDark ? "unset" : "2px",
      right: isDefaultDark ? "2px" : "unset",
      immediate: !0
    }), setTheme(isDefaultDark ? "dark" /* Dark */ : "light" /* Light */);
  }, []), useIsomorphicLayoutEffect(() => {
    let dClass = document.documentElement.classList;
    dClass.remove("dark", "light"), dClass.add(theme), window.localStorage.setItem("theme", theme);
  }, [theme]);
  let isDarkMode = theme === "dark" /* Dark */, handleValueChange = async (value) => {
    value && value !== theme && (setTheme(value), api.start({
      to: async (animate) => {
        await animate({ width: 88 }), api.set({
          left: value === "light" ? "2px" : "unset",
          right: value === "light" ? "unset" : "2px"
        }), await animate({ width: 42 });
      }
    }));
  }, handlePointerEnter = (value) => () => {
    theme !== value && api.start({
      width: 52
    });
  }, handlePointerOut = (value) => () => {
    theme !== value && api.start({
      width: 42
    });
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ThemeGroup, {
    onValueChange: handleValueChange,
    value: theme,
    type: "single",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ThemePicker, {
        onPointerEnter: handlePointerEnter("light" /* Light */),
        onPointerOut: handlePointerOut("light" /* Light */),
        value: "light",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AccessibleIcon, {
          label: "Enable light mode",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_phosphor_react.Sun, {
            size: 20,
            weight: isDarkMode ? "light" : "regular"
          }, void 0, !1, {
            fileName: "app/components/Site/SiteThemePicker.tsx",
            lineNumber: 99,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/components/Site/SiteThemePicker.tsx",
          lineNumber: 98,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/Site/SiteThemePicker.tsx",
        lineNumber: 94,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ThemePicker, {
        onPointerEnter: handlePointerEnter("dark" /* Dark */),
        onPointerOut: handlePointerOut("dark" /* Dark */),
        value: "dark",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AccessibleIcon, {
          label: "Enable dark mode",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_phosphor_react.MoonStars, {
            size: 20,
            weight: isDarkMode ? "light" : "regular"
          }, void 0, !1, {
            fileName: "app/components/Site/SiteThemePicker.tsx",
            lineNumber: 107,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/components/Site/SiteThemePicker.tsx",
          lineNumber: 106,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/Site/SiteThemePicker.tsx",
        lineNumber: 102,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ThemeActiveBlob, {
        style: styles
      }, void 0, !1, {
        fileName: "app/components/Site/SiteThemePicker.tsx",
        lineNumber: 110,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/Site/SiteThemePicker.tsx",
    lineNumber: 93,
    columnNumber: 5
  }, this);
}, ThemeGroup = styled(Toolbar.ToggleGroup, {
  height: "4.6rem",
  width: "9.2rem",
  position: "relative",
  backgroundColor: "$codeBackground",
  borderRadius: "$r8",
  zIndex: 0
}), ThemePicker = styled(Toolbar.ToggleItem, {
  background: "transparent",
  border: "none",
  width: "50%",
  height: "100%",
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "$r8",
  p: 2,
  cursor: "pointer",
  position: "relative",
  zIndex: 1,
  svg: {
    pointerEvents: "none"
  }
}), ThemeActiveBlob = styled(import_web2.animated.div, {
  height: 42,
  backgroundColor: "$white",
  position: "absolute",
  zIndex: 0,
  top: 2,
  borderRadius: "$r8",
  transition: "left 400ms ease-out, right 400ms ease-out"
});

// app/hooks/useIsDarkTheme.ts
var useIsDarkTheme = () => {
  let [theme] = (0, import_jotai2.useAtom)(themeAtom);
  return theme === "dark" /* Dark */;
};

// app/components/Buttons/NavButton.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), NavigationButton = ({
  Icon,
  title,
  href,
  isExternal,
  showLabel = !1,
  onClick
}) => {
  let { pathname } = (0, import_react7.useLocation)(), isRoute = href !== "/" && pathname.includes(href) || pathname === href, handleClick = (e) => {
    onClick && onClick(e);
  }, externalLinkProps = isExternal ? {
    rel: "noopener noreferrer",
    target: "_blank"
  } : {}, isDarkMode = useIsDarkTheme();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavAnchor, {
    onClick: handleClick,
    href,
    variant: showLabel ? "withLabel" : void 0,
    active: isRoute,
    ...externalLinkProps,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavIconWrapper, {
      css: {
        color: isRoute ? "var(--colors-steel100)" : "unset",
        [`.${dark} &`]: {
          color: isRoute ? "#363645" : "unset"
        }
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, {
          size: 20,
          weight: isDarkMode ? "light" : "regular"
        }, void 0, !1, {
          fileName: "app/components/Buttons/NavButton.tsx",
          lineNumber: 76,
          columnNumber: 9
        }, this),
        showLabel ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
          children: title
        }, void 0, !1, {
          fileName: "app/components/Buttons/NavButton.tsx",
          lineNumber: 77,
          columnNumber: 22
        }, this) : null
      ]
    }, void 0, !0, {
      fileName: "app/components/Buttons/NavButton.tsx",
      lineNumber: 69,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/components/Buttons/NavButton.tsx",
    lineNumber: 63,
    columnNumber: 5
  }, this);
}, NavAnchor = styled(Toolbar2.Link, {
  height: "4.6rem",
  width: "4.6rem",
  color: "$steel100",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  borderRadius: "$r8",
  p: 2,
  backgroundClip: "content-box",
  "&:before": {
    content: "",
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: -1,
    borderRadius: "inherit",
    opacity: 0,
    background: "$redYellowGradient100",
    "@motion": {
      transition: "opacity 250ms ease-out"
    }
  },
  variants: {
    active: {
      true: {
        background: "$redYellowGradient100"
      },
      false: {
        backgroundColor: "$white",
        hover: {
          "&::before": {
            opacity: 1
          }
        }
      }
    },
    variant: {
      withLabel: {
        width: "100%",
        justifyContent: "flex-start"
      }
    }
  }
}), NavIconWrapper = styled("span", {
  position: "relative",
  zIndex: "$2",
  display: "flex",
  alignItems: "center",
  m: "$15",
  "& > span": {
    ...getFontStyles("$XXS"),
    fontWeight: "$bold",
    ml: "$15"
  }
});

// app/components/Header/HeaderSubNavigation.tsx
var import_phosphor_react2 = require("phosphor-react");

// app/helpers/analytics.ts
var firePlausibleEvent = (event) => {
  window.plausible && window.plausible(event.name, { props: event.additionalProps });
};

// app/components/Header/HeaderSubNavigation.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), SUB_NAV = [
  {
    title: "Github",
    href: "https://github.com/Aoviz-Team/graphs",
    isExternal: !0,
    Icon: import_phosphor_react2.GithubLogo
  }
], HeaderSubNavigation = ({
  showLabels = !1
}) => {
  let handleClick = (label) => () => {
    firePlausibleEvent({
      name: "Outbound Link" /* OutboundLink */,
      additionalProps: {
        linkTitle: label
      }
    });
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: SUB_NAV.map((props) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavigationButton, {
      showLabel: showLabels,
      onClick: handleClick(props.title),
      ...props
    }, props.title, !1, {
      fileName: "app/components/Header/HeaderSubNavigation.tsx",
      lineNumber: 46,
      columnNumber: 9
    }, this))
  }, void 0, !1, {
    fileName: "app/components/Header/HeaderSubNavigation.tsx",
    lineNumber: 44,
    columnNumber: 5
  }, this);
};

// app/components/Header/HeaderNavigation.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), MAIN_NAV = [
  {
    title: "Home",
    href: "/",
    Icon: import_phosphor_react3.House
  },
  {
    title: "Docs",
    href: "/docs",
    Icon: import_phosphor_react3.Files
  }
], HeaderNavigation = ({
  className,
  showSubNav = !0,
  showLabels = !1,
  showThemePicker = !0
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tooltip.TooltipProvider, {
  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavList, {
    className,
    children: [
      MAIN_NAV.map((props) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavigationButton, {
        showLabel: showLabels,
        ...props
      }, props.title, !1, {
        fileName: "app/components/Header/HeaderNavigation.tsx",
        lineNumber: 50,
        columnNumber: 11
      }, this)),
      showSubNav && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavSeperator, {}, void 0, !1, {
            fileName: "app/components/Header/HeaderNavigation.tsx",
            lineNumber: 58,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeaderSubNavigation, {
            showLabels
          }, void 0, !1, {
            fileName: "app/components/Header/HeaderNavigation.tsx",
            lineNumber: 59,
            columnNumber: 13
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/Header/HeaderNavigation.tsx",
        lineNumber: 57,
        columnNumber: 11
      }, this),
      showThemePicker && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavSeperator, {}, void 0, !1, {
            fileName: "app/components/Header/HeaderNavigation.tsx",
            lineNumber: 64,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SiteThemePicker, {}, void 0, !1, {
            fileName: "app/components/Header/HeaderNavigation.tsx",
            lineNumber: 65,
            columnNumber: 13
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/Header/HeaderNavigation.tsx",
        lineNumber: 63,
        columnNumber: 11
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/Header/HeaderNavigation.tsx",
    lineNumber: 48,
    columnNumber: 7
  }, this)
}, void 0, !1, {
  fileName: "app/components/Header/HeaderNavigation.tsx",
  lineNumber: 47,
  columnNumber: 5
}, this), NavList = styled(Toolbar3.Root, {
  listStyle: "none",
  margin: 0,
  padding: 0,
  display: "flex",
  alignItems: "center",
  gap: "$10"
}), NavSeperator = styled(Toolbar3.Separator, {
  width: "0.1rem",
  background: "$steel40",
  margin: "0 $15",
  height: "2rem"
});

// app/components/Header/HeaderSidePanel.tsx
var import_react11 = require("@remix-run/react"), Dialog = __toESM(require("@radix-ui/react-dialog")), import_phosphor_react4 = require("phosphor-react"), import_web3 = require("@react-spring/web"), Toolbar4 = __toESM(require("@radix-ui/react-toolbar"));

// app/components/Menu/MenuDocs.tsx
var import_react10 = require("@remix-run/react");

// app/components/Widgets/WidgetSearch.tsx
var import_react8 = require("@docsearch/react"), import_react9 = require("react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), WidgetSearch = (0, import_react9.memo)(() => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react8.DocSearch, {
  appId: typeof window > "u" ? "" : window.env.ALGOLIA_APP_ID,
  indexName: "react-spring_beta",
  apiKey: typeof window > "u" ? "" : window.env.ALGOLIA_API_KEY
}, void 0, !1, {
  fileName: "app/components/Widgets/WidgetSearch.tsx",
  lineNumber: 6,
  columnNumber: 5
}, this));

// app/components/Menu/MenuDocs.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), MenuDocs = ({ submenu, onNavClick }) => {
  let location = (0, import_react10.useLocation)(), handleNavClick = () => {
    onNavClick && onNavClick();
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DocsList, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WidgetContainer, {
        shouldBeHidden: location.pathname === "/",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WidgetSearch, {}, void 0, !1, {
          fileName: "app/components/Menu/MenuDocs.tsx",
          lineNumber: 30,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/Menu/MenuDocs.tsx",
        lineNumber: 29,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollArea, {
        children: [
          Array.isArray(submenu) && submenu.map(
            (item) => renderSubMenu({ ...item, location, onClick: handleNavClick }, 0)
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ExternalAnchor, {
            shouldBeHidden: location.pathname === "/",
            href: "https://github.com/Aoviz-Team/graphs/releases",
            rel: "noopener noreferrer",
            target: "_blank",
            title: !0,
            active: !1,
            onClick: handleNavClick,
            children: "Changelog"
          }, void 0, !1, {
            fileName: "app/components/Menu/MenuDocs.tsx",
            lineNumber: 37,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/Menu/MenuDocs.tsx",
        lineNumber: 32,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/Menu/MenuDocs.tsx",
    lineNumber: 28,
    columnNumber: 5
  }, this);
}, renderSubMenu = ({ children, id, title, href, location, onClick, noPage }, level) => {
  let handleClick = () => {
    onClick && onClick();
  }, hasRenderableChildren = children.length > 0, isTitle = level === 0, doesNotWantPage = Boolean(noPage);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ListItem, {
    children: [
      doesNotWantPage ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Anchor, {
        title: isTitle,
        as: "span",
        hasNoLink: !0,
        children: title
      }, void 0, !1, {
        fileName: "app/components/Menu/MenuDocs.tsx",
        lineNumber: 83,
        columnNumber: 9
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Anchor, {
        to: href,
        title: isTitle,
        active: location.pathname === href,
        onClick: handleClick,
        children: title
      }, void 0, !1, {
        fileName: "app/components/Menu/MenuDocs.tsx",
        lineNumber: 75,
        columnNumber: 9
      }, this),
      hasRenderableChildren ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
        children: children.map(
          (item) => renderSubMenu(
            { ...item, location, onClick: handleClick },
            level + 1
          )
        )
      }, void 0, !1, {
        fileName: "app/components/Menu/MenuDocs.tsx",
        lineNumber: 88,
        columnNumber: 9
      }, this) : null
    ]
  }, id, !0, {
    fileName: "app/components/Menu/MenuDocs.tsx",
    lineNumber: 73,
    columnNumber: 5
  }, this);
}, DocsList = styled("ul", {
  m: 0,
  p: "$15 $10",
  listStyle: "none",
  overflowY: "auto",
  flexShrink: 1,
  flexGrow: 1,
  "& ul": {
    m: 0,
    p: 0,
    listStyle: "none"
  },
  "@tabletUp": {
    overflowY: "unset",
    height: "100%",
    pl: "$50",
    pr: "$25",
    py: 4,
    mt: -4
  }
}), ScrollArea = styled("div", {
  "@tabletUp": {
    maxHeight: "100%",
    overflowY: "auto",
    pb: "$60"
  }
}), ListItem = styled("li"), AnchorStyles = css({
  ...getFontStyles("$XS"),
  hover: {
    backgroundColor: "#ff6d6d33"
  },
  display: "block",
  position: "relative",
  p: "0.5rem 1.2rem",
  borderRadius: "$r8",
  variants: {
    title: {
      true: {
        fontWeight: "$bold"
      },
      false: {
        fontWeight: "$default",
        pl: "$20"
      }
    },
    hasNoLink: {
      true: {
        hover: {
          background: "transparent"
        }
      }
    },
    active: {
      true: {
        backgroundColor: "#ff6d6d99",
        hover: {
          backgroundColor: "#ff6d6d99"
        }
      }
    },
    shouldBeHidden: {
      true: {
        display: "none"
      }
    }
  }
}), WidgetContainer = styled("li", {
  variants: {
    shouldBeHidden: {
      true: {
        display: "none"
      }
    }
  },
  ".DocSearch": {
    fontSize: "$XS",
    color: "$steel40"
  },
  ".DocSearch-Container, .DocSearch-Container *": {
    pointerEvents: "auto"
  },
  ".DocSearch-Button": {
    borderRadius: "$r8",
    margin: 0,
    padding: "$5 11px",
    width: "100%",
    marginBottom: "$10",
    backgroundColor: "transparent",
    border: "1px solid $steel40",
    alignItems: "center",
    hover: {
      background: "transparent",
      boxShadow: "unset",
      borderColor: "$red100"
    }
  },
  ".DocSearch-Button-Placeholder": {
    fontSize: "$XS",
    padding: 0,
    display: "unset"
  },
  ".DocSearch-Search-Icon": {
    display: "none"
  },
  ".DocSearch-Button-Keys": {
    justifyContent: "flex-end"
  },
  ".DocSearch-Button-Key": {
    border: "none",
    background: "transparent",
    boxShadow: "unset",
    width: "unset",
    height: "unset",
    padding: 0,
    margin: 0,
    color: "$steel60",
    fontFamily: "$sans-var"
  }
}), ExternalAnchor = styled("a", AnchorStyles), Anchor = styled(import_react10.Link, AnchorStyles);

// app/components/Header/HeaderSidePanel.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), HeaderSidePanel = ({
  isOpen,
  submenu,
  onNavigationClick
}) => {
  let isDocs = (0, import_react11.useLocation)().pathname.includes("/docs"), transitions = (0, import_web3.useTransition)(isOpen, {
    from: {
      x: "-100%",
      opacity: 0
    },
    enter: {
      x: "0",
      opacity: 1
    },
    leave: {
      x: "-100%",
      opacity: 0
    },
    config: {
      tension: 210,
      friction: 25,
      mass: 1
    }
  }), handleNavClick = () => {
    onNavigationClick && onNavigationClick();
  };
  return transitions(
    ({ opacity, x }, item) => item ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dialog.Overlay, {
          forceMount: !0,
          asChild: !0,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MobileMenuOverlay, {
            style: { opacity }
          }, void 0, !1, {
            fileName: "app/components/Header/HeaderSidePanel.tsx",
            lineNumber: 61,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/components/Header/HeaderSidePanel.tsx",
          lineNumber: 60,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dialog.Content, {
          trapFocus: !1,
          forceMount: !0,
          asChild: !0,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MobileMenu, {
            style: { x },
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MobileDialogHeader, {
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MobileMenuClose, {
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_phosphor_react4.X, {}, void 0, !1, {
                          fileName: "app/components/Header/HeaderSidePanel.tsx",
                          lineNumber: 69,
                          columnNumber: 19
                        }, this)
                      }, void 0, !1, {
                        fileName: "app/components/Header/HeaderSidePanel.tsx",
                        lineNumber: 68,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MobileThemePicker, {
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SiteThemePicker, {}, void 0, !1, {
                          fileName: "app/components/Header/HeaderSidePanel.tsx",
                          lineNumber: 72,
                          columnNumber: 19
                        }, this)
                      }, void 0, !1, {
                        fileName: "app/components/Header/HeaderSidePanel.tsx",
                        lineNumber: 71,
                        columnNumber: 17
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/components/Header/HeaderSidePanel.tsx",
                    lineNumber: 67,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HiddenTitle, {
                    children: "Main Menu"
                  }, void 0, !1, {
                    fileName: "app/components/Header/HeaderSidePanel.tsx",
                    lineNumber: 75,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MainNavigation, {
                    isDocsSection: isDocs,
                    showSubNav: !1,
                    showThemePicker: !1,
                    showLabels: !isDocs
                  }, void 0, !1, {
                    fileName: "app/components/Header/HeaderSidePanel.tsx",
                    lineNumber: 76,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/components/Header/HeaderSidePanel.tsx",
                lineNumber: 66,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MenuDocs, {
                submenu,
                onNavClick: handleNavClick
              }, void 0, !1, {
                fileName: "app/components/Header/HeaderSidePanel.tsx",
                lineNumber: 83,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SubNavContainer, {
                isDocsSection: isDocs,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeaderSubNavigation, {
                  showLabels: !isDocs
                }, void 0, !1, {
                  fileName: "app/components/Header/HeaderSidePanel.tsx",
                  lineNumber: 85,
                  columnNumber: 15
                }, this)
              }, void 0, !1, {
                fileName: "app/components/Header/HeaderSidePanel.tsx",
                lineNumber: 84,
                columnNumber: 13
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/components/Header/HeaderSidePanel.tsx",
            lineNumber: 65,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/components/Header/HeaderSidePanel.tsx",
          lineNumber: 64,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/components/Header/HeaderSidePanel.tsx",
      lineNumber: 59,
      columnNumber: 7
    }, this) : null
  );
}, MobileMenuOverlay = styled(import_web3.animated.div, {
  position: "fixed",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  width: "100vw",
  height: "100vh",
  zIndex: "$1",
  backgroundColor: "rgba(255, 255, 255, 0.02)",
  backdropFilter: "blur(5px)",
  "@supports not (backdrop-filter: blur(10px))": {
    backgroundColor: "rgba(0,0,0,0.1)"
  }
}), MobileMenu = styled(import_web3.animated.div, {
  position: "fixed",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  height: "100vh",
  width: "30rem",
  background: "$white",
  zIndex: "$1",
  boxShadow: "3px 0 12px -10px rgba(0,0,0,0.5)",
  padding: "$25 0 $10",
  display: "flex",
  flexDirection: "column"
}), MobileDialogHeader = styled("header", {
  display: "flex",
  justifyContent: "space-between"
}), MobileMenuClose = styled(Dialog.Close, {
  border: "none",
  color: "$steel100",
  background: "transparent",
  mb: "$20",
  ml: "$15",
  p: "1.1rem 1.2rem",
  cursor: "pointer"
}), MobileThemePicker = styled(Toolbar4.Root, {
  mr: "$15"
}), HiddenTitle = styled(Dialog.Title, {
  visuallyHidden: ""
}), MainNavigation = styled(HeaderNavigation, {
  mx: "$10",
  pb: "$20",
  variants: {
    isDocsSection: {
      true: {
        borderBottom: "solid 1px $steel20"
      },
      false: {
        flexDirection: "column",
        alignItems: "flex-start"
      }
    }
  }
}), SubNavContainer = styled(Toolbar4.Root, {
  listStyle: "none",
  margin: "0 $10",
  padding: 0,
  display: "flex",
  gap: "$10",
  pt: "$10",
  variants: {
    isDocsSection: {
      true: {
        alignItems: "center",
        borderTop: "solid 1px $steel20"
      },
      false: {
        alignItems: "flex-start",
        flexDirection: "column"
      }
    }
  }
});

// app/components/Header/Header.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), getHeaderHeights = () => [
  89,
  63
], Header = ({
  data,
  className,
  transparentBackground = !1,
  addMarginToMain = !0,
  position,
  alwaysAnimateHeader
}) => {
  let { sidebar, subnav = [] } = data ?? {}, [dialogOpen, setDialogOpen] = (0, import_react12.useState)(!1), headerHeights = getHeaderHeights(), [styles, isStuck, scrollTop, direction] = useAnimatedHeader({
    isHeader: !0,
    alwaysAnimate: alwaysAnimateHeader,
    heights: headerHeights
  }), handleDialogChange = (isOpen) => setDialogOpen(isOpen), handleNavigationClick = () => setDialogOpen(!1), [desktopHeight, mobileHeight] = headerHeights;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Head, {
    className,
    isStuck,
    style: { ...styles, position },
    hasScrolledDown: subnav.length > 0 || scrollTop > 20 && direction === "up",
    transparentBackground,
    addMarginToMain,
    css: isStuck ? {
      "& + aside + main": {
        pt: mobileHeight
      },
      "@tabletUp": {
        "& + aside + main": {
          pt: desktopHeight
        }
      }
    } : {},
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FlexContainer, {
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DesktopNavigation, {}, void 0, !1, {
          fileName: "app/components/Header/Header.tsx",
          lineNumber: 87,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dialog2.Root, {
          open: dialogOpen,
          onOpenChange: handleDialogChange,
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MobileMenuButton, {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HamburgerMenu, {
                size: 20
              }, void 0, !1, {
                fileName: "app/components/Header/Header.tsx",
                lineNumber: 90,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/components/Header/Header.tsx",
              lineNumber: 89,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dialog2.Portal, {
              forceMount: !0,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeaderSidePanel, {
                onNavigationClick: handleNavigationClick,
                isOpen: dialogOpen,
                submenu: sidebar
              }, void 0, !1, {
                fileName: "app/components/Header/Header.tsx",
                lineNumber: 93,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/components/Header/Header.tsx",
              lineNumber: 92,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/components/Header/Header.tsx",
          lineNumber: 88,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/components/Header/Header.tsx",
      lineNumber: 86,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/components/Header/Header.tsx",
    lineNumber: 63,
    columnNumber: 5
  }, this);
}, Head = styled(import_web4.animated.header, {
  width: "100%",
  pt: "$15",
  zIndex: "$1",
  "@motion": {
    transition: "background-color 400ms ease-out"
  },
  "@tabletUp": {
    pt: "$25"
  },
  "& + aside + main > article > h2": {
    pointerEvents: "none",
    "&::before": {
      display: "block",
      content: " ",
      marginTop: "-48px",
      height: "48px",
      visibility: "hidden",
      pointerEvents: "none",
      "@tabletUp": {
        marginTop: "-82px",
        height: "82px"
      }
    }
  },
  variants: {
    hasScrolledDown: {
      true: {
        backgroundColor: "rgba(250, 250, 250, 0.80)",
        backdropFilter: "blur(5px)",
        "@supports not (backdrop-filter: blur(10px))": {
          backgroundColor: "rgba(250, 250, 250, 0.95)"
        },
        [`.${dark} &`]: {
          backgroundColor: "rgba(27, 26, 34, 0.8)",
          "@supports not (backdrop-filter: blur(10px))": {
            backgroundColor: "rgba(27, 26, 34, 0.95)"
          }
        }
      },
      false: {}
    },
    transparentBackground: {
      true: {
        backgroundColor: "transparent",
        backdropFilter: "unset"
      }
    },
    addMarginToMain: {
      true: {
        "& + main": {
          pt: "$10"
        },
        "@tabletUp": {
          "& + main": {
            pt: "$20"
          }
        }
      }
    },
    isStuck: {
      true: {
        position: "fixed"
      }
    }
  }
}), FlexContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  px: "$25",
  "@tabletUp": {
    px: "$50",
    "& + header": {
      display: "none"
    }
  }
}), DesktopNavigation = styled(HeaderNavigation, {
  display: "none",
  "@tabletUp": {
    display: "flex"
  }
}), MobileMenuButton = styled(Dialog2.Trigger, {
  margin: 0,
  padding: "0.8rem 0.8rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  border: "none",
  background: "none",
  marginLeft: "-0.8rem",
  "@tabletUp": {
    display: "none"
  }
}), HamburgerMenu = styled(import_phosphor_react5.List, {
  color: "$black"
});

// app/routes/examples.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function DocsLayout() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, {}, void 0, !1, {
        fileName: "app/routes/examples.tsx",
        lineNumber: 8,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Main, {}, void 0, !1, {
        fileName: "app/routes/examples.tsx",
        lineNumber: 9,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/examples.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}
var Main = styled("main", {
  padding: "0 $25",
  width: "100%",
  maxWidth: "$document",
  margin: "0 auto",
  "@tabletUp": {
    padding: "0 $15"
  }
});

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  meta: () => meta2
});

// app/components/Grids/NavigationGrid.tsx
var import_react17 = require("@remix-run/react");

// app/helpers/guards.ts
var isStringGuard = (value) => typeof value == "string";

// app/components/Buttons/Button.tsx
var import_react13 = require("@stitches/react"), import_react14 = require("@remix-run/react");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), Button = ({
  children,
  className,
  type = "button",
  onClick,
  disabled = !1,
  href,
  variant = "regular"
}) => {
  let handleClick = (e) => {
    onClick && onClick(e);
  };
  return href ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StyledLink, {
    className,
    to: href,
    variant,
    children
  }, void 0, !1, {
    fileName: "app/components/Buttons/Button.tsx",
    lineNumber: 33,
    columnNumber: 7
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StyledButton, {
    className,
    type,
    onClick: handleClick,
    disabled,
    variant,
    children
  }, void 0, !1, {
    fileName: "app/components/Buttons/Button.tsx",
    lineNumber: 40,
    columnNumber: 5
  }, this);
}, sharedStyles = (0, import_react13.css)({
  border: "solid 1px $black",
  backgroundColor: "transparent",
  borderRadius: "$r4",
  fontFamily: "$sans",
  fontSize: "$XXS",
  lineHeight: "$code",
  padding: "5px $10",
  cursor: "pointer",
  display: "inline-flex",
  alignItems: "center",
  "@motion": {
    transition: "border-color 200ms ease-out"
  },
  hover: {
    borderColor: "$red100"
  },
  "&:disabled": {
    pointerEvents: "none",
    opacity: 0.5
  },
  variants: {
    variant: {
      regular: {},
      large: {
        p: "11px 9px 11px 12px",
        borderRadius: "$r8"
      }
    }
  }
}), StyledLink = styled(import_react14.Link, { ...sharedStyles }), StyledButton = styled("button", { ...sharedStyles });

// app/components/Text/Copy.tsx
var import_react15 = require("react");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), Copy = (0, import_react15.forwardRef)(
  ({ fontStyle = "$XS", className, children, css: css3, tag = "p" }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
    className,
    as: tag,
    ref,
    css: {
      ...getFontStyles(fontStyle),
      ...css3
    },
    children
  }, void 0, !1, {
    fileName: "app/components/Text/Copy.tsx",
    lineNumber: 17,
    columnNumber: 7
  }, this)
), Text = styled("p", {
  margin: 0,
  fontWeight: "$default"
});

// app/components/Text/Heading.tsx
var import_react16 = require("react");
var import_phosphor_react6 = require("phosphor-react");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), Heading = (0, import_react16.forwardRef)(
  ({
    tag = "h1",
    fontStyle = "$S",
    weight = "$default",
    className,
    children,
    css: css3,
    isLink = !1,
    ...restProps
  }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeadingElement, {
    className,
    ref,
    as: tag,
    css: {
      fontWeight: weight,
      ...getFontStyles(fontStyle),
      ...css3
    },
    ...restProps,
    children: [
      children,
      isLink ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LinkIcon, {
        size: 16
      }, void 0, !1, {
        fileName: "app/components/Text/Heading.tsx",
        lineNumber: 47,
        columnNumber: 19
      }, this) : null
    ]
  }, void 0, !0, {
    fileName: "app/components/Text/Heading.tsx",
    lineNumber: 36,
    columnNumber: 7
  }, this)
), LinkIcon = styled(import_phosphor_react6.Link, {
  position: "absolute",
  left: -24,
  bottom: 2,
  transform: "translateY(-50%)",
  opacity: 0,
  "@motion": {
    transition: "opacity 200ms ease-out"
  }
}), HeadingElement = styled("h1", {
  whiteSpace: "pre-line",
  position: "relative",
  "& > a": {
    pointerEvents: "auto",
    textDecoration: "none",
    fontWeight: "inherit",
    hover: {
      [`& + ${LinkIcon}`]: {
        opacity: 1
      }
    }
  }
});

// app/components/Text/GradientHeader.tsx
var GradiantHeader = styled(Heading, {
  display: "inline",
  background: "$blueGreenGradient100",
  "-webkit-background-clip": "text",
  "-webkit-text-fill-color": "transparent",
  backgroundClip: "text",
  textFillColor: "transparent",
  mb: 4,
  [`.${dark} &`]: {
    background: "$redYellowGradient100",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
    backgroundClip: "text",
    textFillColor: "transparent"
  }
});

// app/components/Grids/NavigationGrid.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), NavigationGrid = ({
  tiles,
  cols = 2,
  subheading,
  heading,
  smallTiles = !1,
  className
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavSection, {
  className,
  children: [
    subheading ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GradiantHeader, {
      fontStyle: "$XXS",
      tag: "h2",
      weight: "$semiblack",
      children: subheading
    }, void 0, !1, {
      fileName: "app/components/Grids/NavigationGrid.tsx",
      lineNumber: 43,
      columnNumber: 9
    }, this) : null,
    heading ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, {
      fontStyle: "$M",
      tag: "h3",
      children: heading
    }, void 0, !1, {
      fileName: "app/components/Grids/NavigationGrid.tsx",
      lineNumber: 48,
      columnNumber: 9
    }, this) : null,
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Grid, {
      css: {
        [smallTiles ? "@tabletUp" : "@desktopUp"]: {
          gridTemplateColumns: `repeat(${cols}, ${smallTiles ? "minmax(100px, 238px)" : "1fr"})`,
          gridColumnGap: "$40",
          gridRowGap: "$40"
        }
      },
      children: tiles.map((tile) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavigationItem, {
        variant: smallTiles ? "small" : "large",
        ...tile
      }, tile.label, !1, {
        fileName: "app/components/Grids/NavigationGrid.tsx",
        lineNumber: 63,
        columnNumber: 11
      }, this))
    }, void 0, !1, {
      fileName: "app/components/Grids/NavigationGrid.tsx",
      lineNumber: 52,
      columnNumber: 7
    }, this)
  ]
}, void 0, !0, {
  fileName: "app/components/Grids/NavigationGrid.tsx",
  lineNumber: 41,
  columnNumber: 5
}, this), NavSection = styled("section", {
  my: "$20",
  "& + &": {
    mt: "$40"
  },
  "@desktopUp": {
    my: "$40",
    "& + &": {
      mt: "$80"
    }
  }
}), Grid = styled("div", {
  display: "grid",
  gridRowGap: "$20",
  mt: "$20"
}), NavigationItem = ({
  label,
  href,
  description,
  comingSoon = !1,
  isExternal = !1,
  variant = "large",
  Icon
}) => {
  let canHover = Boolean(!comingSoon), isDarkMode = useIsDarkTheme(), renderTile = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile, {
    variant,
    canHover,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BackgroundTile, {}, void 0, !1, {
        fileName: "app/components/Grids/NavigationGrid.tsx",
        lineNumber: 115,
        columnNumber: 7
      }, this),
      Icon && isStringGuard(Icon) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconWrapper, {
        isString: !0,
        children: Icon
      }, void 0, !1, {
        fileName: "app/components/Grids/NavigationGrid.tsx",
        lineNumber: 117,
        columnNumber: 9
      }, this) : Icon && !isStringGuard(Icon) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconWrapper, {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, {
          size: 32,
          weight: isDarkMode ? "light" : "regular"
        }, void 0, !1, {
          fileName: "app/components/Grids/NavigationGrid.tsx",
          lineNumber: 120,
          columnNumber: 11
        }, this)
      }, void 0, !1, {
        fileName: "app/components/Grids/NavigationGrid.tsx",
        lineNumber: 119,
        columnNumber: 9
      }, this) : null,
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, {
        tag: "h2",
        fontStyle: "$S",
        weight: "$semiblack",
        children: label
      }, void 0, !1, {
        fileName: "app/components/Grids/NavigationGrid.tsx",
        lineNumber: 123,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TileCopy, {
        children: description
      }, void 0, !1, {
        fileName: "app/components/Grids/NavigationGrid.tsx",
        lineNumber: 126,
        columnNumber: 7
      }, this),
      variant === "large" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TileButton, {
        disabled: comingSoon,
        children: comingSoon ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
          children: "Coming soon!"
        }, void 0, !1, {
          fileName: "app/components/Grids/NavigationGrid.tsx",
          lineNumber: 129,
          columnNumber: 25
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
          children: "Read more"
        }, void 0, !1, {
          fileName: "app/components/Grids/NavigationGrid.tsx",
          lineNumber: 129,
          columnNumber: 53
        }, this)
      }, void 0, !1, {
        fileName: "app/components/Grids/NavigationGrid.tsx",
        lineNumber: 128,
        columnNumber: 9
      }, this) : null
    ]
  }, void 0, !0, {
    fileName: "app/components/Grids/NavigationGrid.tsx",
    lineNumber: 114,
    columnNumber: 5
  }, this);
  return comingSoon ? renderTile() : isExternal ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
    href,
    rel: "noopener noreferrer",
    target: "_blank",
    children: renderTile()
  }, void 0, !1, {
    fileName: "app/components/Grids/NavigationGrid.tsx",
    lineNumber: 141,
    columnNumber: 7
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react17.Link, {
    to: href,
    children: renderTile()
  }, void 0, !1, {
    fileName: "app/components/Grids/NavigationGrid.tsx",
    lineNumber: 147,
    columnNumber: 10
  }, this);
}, TileButton = styled(Button), BackgroundTile = styled("span", {
  display: "block",
  position: "absolute",
  inset: 0,
  opacity: 0,
  zIndex: "-1",
  background: "$redYellowGradient40",
  "@motion": {
    transition: "opacity 250ms ease-out"
  }
}), Tile = styled("span", {
  position: "relative",
  display: "block",
  margin: 0,
  borderRadius: "$r8",
  zIndex: 0,
  backgroundColor: "$codeBackground",
  p: "$15 $20",
  overflow: "hidden",
  "@motion": {
    transition: "background-color 250ms ease-out"
  },
  variants: {
    variant: {
      small: {
        maxWidth: 238
      },
      large: {}
    },
    canHover: {
      true: {
        hover: {
          backgroundColor: "transparent",
          [`& ${BackgroundTile}`]: {
            opacity: 1
          },
          [`& ${TileButton}`]: {
            borderColor: "$red100"
          }
        }
      }
    }
  }
}), IconWrapper = styled("span", {
  display: "block",
  mb: "$10",
  variants: {
    isString: {
      true: {
        fontSize: "$S"
      }
    }
  }
}), TileCopy = styled(Copy, {
  mt: "$10",
  mb: "$20"
});

// app/components/Heros/HeroHome.tsx
var import_phosphor_react8 = require("phosphor-react");

// app/components/Buttons/ButtonCopy.tsx
var import_web5 = require("@react-spring/web"), import_phosphor_react7 = require("phosphor-react"), import_react18 = require("react");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ButtonCopy = ({ children, className }) => {
  let [copied, setCopied] = (0, import_react18.useState)(!1), handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(children);
    } catch {
      let textArea = document.createElement("textarea");
      textArea.value = children, textArea.style.top = "0", textArea.style.left = "0", textArea.style.position = "fixed", document.body.appendChild(textArea), textArea.focus(), textArea.select();
      try {
        document.execCommand("copy");
      } catch {
        console.error("Unable to copy");
      }
      document.body.removeChild(textArea);
    } finally {
      setCopied(!0);
    }
  }, [springs] = (0, import_web5.useSprings)(
    2,
    (i) => ({
      scale: copied && i === 0 || !copied && i === 1 ? 0 : 1,
      onRest: () => {
        i === 0 && setTimeout(() => setCopied(!1), 800);
      }
    }),
    [copied]
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CopyButton, {
    className,
    type: "button",
    onClick: handleCopyClick,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AccessibleIcon, {
      label: `Copy ${children}`,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AbsoluteContainer, {
        children: springs.map(
          (style, i) => i === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AnimatedCopy, {
            size: 24,
            style
          }, i, !1, {
            fileName: "app/components/Buttons/ButtonCopy.tsx",
            lineNumber: 64,
            columnNumber: 15
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AnimatedCheck, {
            size: 24,
            style
          }, i, !1, {
            fileName: "app/components/Buttons/ButtonCopy.tsx",
            lineNumber: 66,
            columnNumber: 15
          }, this)
        )
      }, void 0, !1, {
        fileName: "app/components/Buttons/ButtonCopy.tsx",
        lineNumber: 61,
        columnNumber: 9
      }, this)
    }, void 0, !1, {
      fileName: "app/components/Buttons/ButtonCopy.tsx",
      lineNumber: 60,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/components/Buttons/ButtonCopy.tsx",
    lineNumber: 59,
    columnNumber: 5
  }, this);
}, CopyButton = styled("button", {
  backgroundColor: "$codeBackground",
  border: "none",
  padding: "4px 4px 1px 4px",
  height: 32,
  width: 32,
  overflow: "hidden",
  borderRadius: "$r4",
  ml: 14,
  cursor: "pointer",
  hover: {
    backgroundColor: "$red40"
  },
  [`.${dark} &`]: {
    hover: {
      backgroundColor: "#ff6d6d66"
    }
  },
  "@motion": {
    transition: "background-color 250ms ease-out"
  }
}), AbsoluteContainer = styled("span", {
  display: "block",
  position: "relative",
  height: "100%",
  width: "100%"
}), AnimatedCheck = styled((0, import_web5.animated)(import_phosphor_react7.CheckCircle), {
  position: "absolute",
  inset: 0
}), AnimatedCopy = styled((0, import_web5.animated)(import_phosphor_react7.CopySimple), {
  position: "absolute",
  inset: 0
});

// app/components/Fields/FieldCode.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), INSTALL_LINE = "npm i @aoviz/graphs", CodeField = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, {
  children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CopyText, {
      fontStyle: "$code",
      children: INSTALL_LINE
    }, void 0, !1, {
      fileName: "app/components/Fields/FieldCode.tsx",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ButtonCopy, {
      children: INSTALL_LINE
    }, void 0, !1, {
      fileName: "app/components/Fields/FieldCode.tsx",
      lineNumber: 12,
      columnNumber: 7
    }, this)
  ]
}, void 0, !0, {
  fileName: "app/components/Fields/FieldCode.tsx",
  lineNumber: 10,
  columnNumber: 5
}, this), Field = styled("div", {
  display: "inline-flex",
  alignItems: "center",
  border: "solid 1px $steel100",
  padding: 7,
  pl: 14,
  borderRadius: "$r8"
}), CopyText = styled(Copy, {
  fontFamily: "$mono"
});

// app/hooks/useWindowSize.ts
var import_react19 = require("react");
var useWindowSize = (cb) => {
  let [bounds, setBounds] = (0, import_react19.useState)({
    width: void 0,
    height: void 0
  }), prevDimesions = (0, import_react19.useRef)(bounds), handleResize = (0, import_react19.useCallback)(() => {
    let { innerHeight: height, innerWidth: width } = window, newDimensions = {
      height,
      width
    };
    Object.freeze(newDimensions), isObjectEqual(prevDimesions.current, newDimensions, ["width", "height"]) || (setBounds(newDimensions), cb && cb(newDimensions));
  }, [cb]);
  return useIsomorphicLayoutEffect(() => (handleResize(), window.addEventListener("resize", handleResize), () => {
    window.removeEventListener("resize", handleResize);
  }), [handleResize]), bounds;
}, isObjectEqual = (oldObj, newObj, keys) => keys.every((key) => oldObj[key] === newObj[key]);

// app/components/Heros/HeroHome.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), HeroHome = () => {
  let { width, height } = useWindowSize();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header2, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TitleTop, {
        style: { width, height },
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TitleContent, {
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, {
              tag: "h1",
              fontStyle: "$XXL",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  children: "aoviz\uFF08Art of Visualization\uFF09"
                }, void 0, !1, {
                  fileName: "app/components/Heros/HeroHome.tsx",
                  lineNumber: 20,
                  columnNumber: 11
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  children: "\u53EF\u89C6\u5316\u7684\u827A\u672F\u3002"
                }, void 0, !1, {
                  fileName: "app/components/Heros/HeroHome.tsx",
                  lineNumber: 21,
                  columnNumber: 11
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/components/Heros/HeroHome.tsx",
              lineNumber: 19,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TopFields, {
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeField, {}, void 0, !1, {
                  fileName: "app/components/Heros/HeroHome.tsx",
                  lineNumber: 24,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, {
                  variant: "large",
                  href: "/docs/getting-started",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                      children: "Get started"
                    }, void 0, !1, {
                      fileName: "app/components/Heros/HeroHome.tsx",
                      lineNumber: 26,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_phosphor_react8.ArrowCircleRight, {
                      size: 24,
                      color: "var(--colors-steel100)"
                    }, void 0, !1, {
                      fileName: "app/components/Heros/HeroHome.tsx",
                      lineNumber: 27,
                      columnNumber: 15
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/components/Heros/HeroHome.tsx",
                  lineNumber: 25,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/components/Heros/HeroHome.tsx",
              lineNumber: 23,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/components/Heros/HeroHome.tsx",
          lineNumber: 18,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/Heros/HeroHome.tsx",
        lineNumber: 17,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TitleBottom, {
        style: { width, height },
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Left, {
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, {
                tag: "h2",
                fontStyle: "$L",
                children: "Why @aoviz/graphs?"
              }, void 0, !1, {
                fileName: "app/components/Heros/HeroHome.tsx",
                lineNumber: 34,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Copy, {
                fontStyle: "$M",
                css: {
                  mt: "$25",
                  whiteSpace: "pre-line"
                },
                children: "\u6211\u4EEC\u63D0\u4F9B\u4E86\u7B80\u6D01\u7684 API \u8BBE\u8BA1\uFF0C\u826F\u597D\u7684\u6269\u5C55\u673A\u5236\uFF08\u5C4F\u853D\u4E86\u5E95\u5C42\u590D\u6742\u903B\u8F91\uFF09\uFF0C\u4EE5\u53CA\u4E30\u5BCC\u7684\u5185\u7F6E\u63D2\u4EF6\u3002"
              }, void 0, !1, {
                fileName: "app/components/Heros/HeroHome.tsx",
                lineNumber: 37,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/components/Heros/HeroHome.tsx",
            lineNumber: 33,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Right, {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Copy, {
              fontStyle: "$M",
              children: "\u672A\u6765\u5C06\u5185\u7F6E\u4E30\u5BCC\u7684\u4EA4\u4E92\u52A8\u753B\uFF0C\u5E76\u63D0\u4F9B React \u7EC4\u4EF6\u4EE5\u7B80\u5316\u4F7F\u7528\u65B9\u5F0F\u3002"
            }, void 0, !1, {
              fileName: "app/components/Heros/HeroHome.tsx",
              lineNumber: 47,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/components/Heros/HeroHome.tsx",
            lineNumber: 46,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/Heros/HeroHome.tsx",
        lineNumber: 32,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Background, {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BallContainer, {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RedBall, {}, void 0, !1, {
              fileName: "app/components/Heros/HeroHome.tsx",
              lineNumber: 54,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/components/Heros/HeroHome.tsx",
            lineNumber: 53,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BallContainer, {
            css: { mt: "-70vh" },
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OrangeBall, {}, void 0, !1, {
              fileName: "app/components/Heros/HeroHome.tsx",
              lineNumber: 57,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/components/Heros/HeroHome.tsx",
            lineNumber: 56,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BallContainer, {
            css: {
              mt: "-50vh",
              "@tabletUp": {
                mt: "-70vh"
              }
            },
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GreenBall, {}, void 0, !1, {
              fileName: "app/components/Heros/HeroHome.tsx",
              lineNumber: 66,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/components/Heros/HeroHome.tsx",
            lineNumber: 59,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BallContainer, {
            css: {
              mt: "-50vh",
              "@tabletUp": {
                mt: "-70vh"
              },
              mb: "10vh"
            },
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BlueBall, {}, void 0, !1, {
              fileName: "app/components/Heros/HeroHome.tsx",
              lineNumber: 76,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/components/Heros/HeroHome.tsx",
            lineNumber: 68,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/Heros/HeroHome.tsx",
        lineNumber: 52,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/Heros/HeroHome.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}, Header2 = styled("header", {
  position: "relative",
  zIndex: 0
}), TitleTop = styled("div", {
  position: "absolute",
  height: "100vh",
  width: "100vw",
  top: 0,
  left: 0,
  zIndex: "$1",
  "@tabletUp": {
    minHeight: "unset"
  }
}), TitleContent = styled("div", {
  maxWidth: "$type",
  px: "$25",
  pt: "$100",
  "@tabletUp": {
    px: "$50",
    pt: "calc((175 / 1440) * 100%)"
  }
}), TopFields = styled("div", {
  display: "flex",
  mt: "$40",
  flexDirection: "column",
  alignItems: "flex-start",
  "@tabletUp": {
    flexDirection: "row",
    gap: "$20"
  }
}), NavLink = styled(Button, {
  mt: "$20",
  "& > span": {
    mr: 12
  },
  "@tabletUp": {
    mt: 0
  }
}), TitleBottom = styled("div", {
  position: "absolute",
  height: "100vh",
  width: "100vw",
  bottom: 0,
  left: 0,
  px: "$25",
  zIndex: "$1",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  "@tabletUp": {
    minHeight: "unset",
    px: "$50",
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)"
  }
}), Left = styled("div", {
  maxWidth: 630
}), Right = styled("div", {
  display: "flex",
  alignItems: "flex-end",
  "@tabletUp": {
    maxWidth: 630,
    pb: 192
  }
}), Background = styled("div", {
  position: "relative",
  width: "100%",
  zIndex: 0
}), BallContainer = styled("div", {
  width: "100vw",
  height: "100vh",
  position: "relative"
}), RedBall = styled("div", {
  width: "min(1440px, 100%)",
  position: "absolute",
  aspectRatio: 1,
  top: "max(-720px, -50vw)",
  right: "max(-720px, -50vw)",
  borderRadius: "50%",
  backgroundColor: "#fafafa",
  filter: "blur(4px)",
  boxShadow: "inset 0 0 100px -30px #fafafa, inset 0px 0px 30vw 30vw rgb(255 109 109), 0 0 120px 80px rgb(255 109 109)",
  "@desktopUp": {
    boxShadow: "inset 0 0 100px -30px #fafafa, inset 0px 0px 40vw 40vw rgb(255 109 109), 0 0 120px 80px rgb(255 109 109)"
  },
  [`.${dark} &`]: {
    boxShadow: "inset 0 0 100px -40px #fafafa, inset 0px 0px 30vw 30vw rgb(255 109 109), 0 0 70px 40px rgb(255 109 109)",
    "@desktopUp": {
      boxShadow: "inset 0 0 100px -40px #fafafa, inset 0px 0px 40vw 40vw rgb(255 109 109), 0 0 70px 40px rgb(255 109 109)"
    }
  }
}), OrangeBall = styled("div", {
  aspectRatio: 1,
  width: "max(240px, 20vw)",
  position: "absolute",
  left: "min(-125px, -10vw)",
  top: "40vh",
  borderRadius: "50%",
  backgroundColor: "#fafafa",
  filter: "blur(4px)",
  "@tabletUp": {
    top: "28vh"
  },
  boxShadow: "inset 0 0 100px -30px #fafafa, inset 0px 0px max(60px, 6vw) max(60px, 6vw) #FFB74B, 0 0 120px 80px #FFB74B",
  [`.${dark} &`]: {
    boxShadow: "inset 0 0 100px -40px #fafafa, inset 0px 0px max(60px, 6vw) max(60px, 6vw) #FFB74B, 0 0 70px 40px #FFB74B"
  }
}), GreenBall = styled("div", {
  aspectRatio: 1,
  position: "absolute",
  width: "min(576px, 40vw)",
  borderRadius: "50%",
  backgroundColor: "#fafafa",
  filter: "blur(4px)",
  right: "20vw",
  bottom: 0,
  opacity: 0.6,
  "@tabletUp": {
    opacity: 1,
    bottom: "10vh",
    right: "10vw"
  },
  boxShadow: "inset 0 0 100px -30px #fafafa, inset 0px 0px max(70px, 12vw) max(70px, 12vw) #88DFAB, 0 0 120px 80px #88DFAB",
  [`.${dark} &`]: {
    boxShadow: "inset 0 0 100px -40px #fafafa, inset 0px 0px max(70px, 12vw) max(70px, 12vw) #88DFAB, 0 0 70px 40px #88DFAB"
  }
}), BlueBall = styled("div", {
  aspectRatio: 1,
  position: "absolute",
  borderRadius: "50%",
  backgroundColor: "#fafafa",
  filter: "blur(4px)",
  width: "min(430px, 30vw)",
  bottom: 40,
  left: 100,
  opacity: 0.6,
  "@tabletUp": {
    opacity: 1
  },
  boxShadow: "inset 0 0 100px -30px #fafafa, inset 0px 0px max(70px, 8vw) max(70px, 8vw) #569AFFB3, 0 0 120px 80px #569AFFB3",
  [`.${dark} &`]: {
    boxShadow: "inset 0 0 100px -40px #fafafa, inset 0px 0px max(70px, 8vw) max(70px, 8vw) #569AFF, 0 0 70px 40px #569AFF"
  }
});

// app/routes/index.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), meta2 = () => ({
  title: "Aoviz",
  description: "aoviz\uFF08Art of Visualization\uFF09\uFF0C\u53EF\u89C6\u5316\u7684\u827A\u672F\u3002"
});
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MainHeader, {
        addMarginToMain: !1,
        position: "fixed",
        alwaysAnimateHeader: !0
      }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 20,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Main2, {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MaxWrapper, {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeroHome, {}, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 28,
              columnNumber: 13
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 27,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 26,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 25,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/index.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}
var MainHeader = styled(Header, {
  pb: "$15",
  "@tabletUp": {
    pb: "$25"
  }
}), ExternalLinkGrid = styled(NavigationGrid, {
  mx: "$25",
  "@tabletUp": {
    mx: "$50"
  }
}), Main2 = styled("main", {
  width: "100%",
  overflowX: "hidden"
}), MaxWrapper = styled("div", {
  maxWidth: "$largeDoc",
  mx: "auto"
}), HomeBlocks = styled("div", {
  my: "$40",
  "@tabletUp": {
    mt: "$100",
    mb: "$80"
  }
});

// app/routes/docs.tsx
var docs_exports = {};
__export(docs_exports, {
  default: () => DocsLayout2
});
var import_react24 = require("react"), import_react25 = require("@remix-run/react"), import_react26 = require("@mdx-js/react"), import_phosphor_react10 = require("phosphor-react");

// app/components/Text/List.tsx
var import_react20 = require("react");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), List2 = (0, import_react20.forwardRef)(
  ({ tag = "ul", fontStyle = "$XS", className, children, css: css3 }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ListElement, {
    className,
    ref,
    as: tag,
    css: {
      ...getFontStyles(fontStyle),
      ...css3
    },
    children
  }, void 0, !1, {
    fileName: "app/components/Text/List.tsx",
    lineNumber: 17,
    columnNumber: 7
  }, this)
), ListElement = styled("ul", {
  pl: "$20",
  fontWeight: "$default",
  "& code": {
    backgroundColor: "$steel20",
    borderRadius: "$r4",
    py: 2,
    px: 5
  }
});
var Dl = styled("dl", {
  ...getFontStyles("$XS"),
  "& code": {
    backgroundColor: "$steel20",
    borderRadius: "$r4",
    py: 2,
    px: 5
  },
  "& > div": {
    display: "flex",
    gap: "$5"
  },
  "& dt": {
    mb: "$5",
    fontWeight: "$regular"
  },
  "& dd": {
    margin: 0,
    mb: "$15"
  }
});

// app/components/Text/Anchor.tsx
var import_react21 = require("@remix-run/react");

// app/helpers/strings.ts
var isValidHttpUrl = (string) => {
  let url;
  try {
    url = new URL(string);
  } catch {
    return !1;
  }
  return url.protocol === "http:" || url.protocol === "https:";
};

// app/components/Text/Anchor.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), Anchor2 = ({ href, children, className }) => isValidHttpUrl(href) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AnchorElement, {
  className,
  as: "a",
  href,
  rel: "noopener noreferrer",
  target: "_blank",
  children
}, void 0, !1, {
  fileName: "app/components/Text/Anchor.tsx",
  lineNumber: 18,
  columnNumber: 7
}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AnchorElement, {
  to: href,
  children
}, void 0, !1, {
  fileName: "app/components/Text/Anchor.tsx",
  lineNumber: 28,
  columnNumber: 12
}, this), AnchorElement = styled(import_react21.Link, {
  fontSize: "inherit",
  lineHeight: "inherit",
  fontWeight: "$bold",
  textDecoration: "underline"
});

// app/components/Code/H.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), H = ({ index, id, ...props }) => {
  let getHighlightedWords = () => {
    let codeBlock = document.getElementById(id);
    if (!codeBlock)
      return [[], []];
    let allHighlightWords = codeBlock.querySelectorAll(
      ".highlight-word"
    ), targetIndex = [index - 1];
    return Math.max(...targetIndex) >= allHighlightWords.length ? [[], []] : [targetIndex, allHighlightWords];
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", {
    onMouseLeave: () => {
      let [targetIndex, allHighlightWords] = getHighlightedWords();
      targetIndex.forEach((i) => allHighlightWords[i].classList.remove("on"));
    },
    onMouseEnter: () => {
      let [targetIndex, allHighlightWords] = getHighlightedWords();
      targetIndex.forEach((i) => allHighlightWords[i].classList.add("on"));
    },
    style: {
      cursor: "pointer"
    },
    ...props
  }, void 0, !1, {
    fileName: "app/components/Code/H.tsx",
    lineNumber: 35,
    columnNumber: 5
  }, this);
};

// app/components/Menu/MenuSticky.tsx
var import_web7 = require("@react-spring/web");

// app/components/Header/HeaderSubnav.tsx
var import_react22 = require("react"), import_web6 = require("@react-spring/web");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), HeaderSubnav = ({ className, subnav }) => {
  let subNavScrollRef = (0, import_react22.useRef)(null), [springs, ref] = (0, import_web6.useSprings)(2, (i) => ({
    opacity: 0
  })), handleScroll = (e) => {
    let el = e.target;
    console.log(el.scrollLeft), el.scrollLeft === el.scrollWidth - el.clientWidth ? ref.start((i) => ({
      opacity: Number(!i)
    })) : el.scrollLeft === 0 ? ref.start((i) => ({
      opacity: i
    })) : ref.start(() => ({
      opacity: 1
    }));
  };
  return (0, import_web6.useIsomorphicLayoutEffect)(() => {
    let handleResize = () => {
      let el = subNavScrollRef.current;
      el.scrollWidth > el.clientWidth && el.scrollLeft === 0 ? ref.start((i) => ({
        opacity: i,
        immediate: !0
      })) : el.scrollLeft > 0 ? handleScroll({ target: el }) : ref.start(() => ({
        opacity: 0
      }));
    };
    return handleResize(), window.addEventListener("resize", handleResize), () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SubNavContainer2, {
    className,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GradientLeft, {
        style: { ...springs[0] }
      }, void 0, !1, {
        fileName: "app/components/Header/HeaderSubnav.tsx",
        lineNumber: 72,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SubNavScroller, {
        ref: subNavScrollRef,
        onScroll: handleScroll,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SubNavList, {
          children: subnav.map(({ href, label, id }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SubNavListItem, {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SubNavAnchor, {
              href,
              children: label
            }, void 0, !1, {
              fileName: "app/components/Header/HeaderSubnav.tsx",
              lineNumber: 77,
              columnNumber: 15
            }, this)
          }, id, !1, {
            fileName: "app/components/Header/HeaderSubnav.tsx",
            lineNumber: 76,
            columnNumber: 13
          }, this))
        }, void 0, !1, {
          fileName: "app/components/Header/HeaderSubnav.tsx",
          lineNumber: 74,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/Header/HeaderSubnav.tsx",
        lineNumber: 73,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GradientRight, {
        style: { ...springs[1] }
      }, void 0, !1, {
        fileName: "app/components/Header/HeaderSubnav.tsx",
        lineNumber: 82,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/Header/HeaderSubnav.tsx",
    lineNumber: 71,
    columnNumber: 5
  }, this);
}, SubNavContainer2 = styled("nav", {
  m: "$30 0",
  position: "relative",
  width: "100%",
  display: "flex",
  justifyContent: "center"
}), SubNavScroller = styled("div", {
  overflow: "-moz-scrollbars-none",
  overflowX: "auto",
  mx: -28,
  px: 28,
  "&::-webkit-scrollbar": {
    display: "none"
  },
  "@tabletUp": {
    mx: 0,
    px: 0
  }
}), GradientShared = {
  position: "absolute",
  top: 0,
  height: "100%",
  width: "2rem"
}, GradientRight = styled(import_web6.animated.div, {
  ...GradientShared,
  right: -28,
  backgroundImage: "linear-gradient(90deg, $white0 0%, $white 100%)",
  "@tabletUp": {
    right: 0
  }
}), GradientLeft = styled(import_web6.animated.div, {
  ...GradientShared,
  left: -28,
  backgroundImage: "linear-gradient(90deg, $white 0%, $white0 100%)",
  "@tabletUp": {
    left: 0
  }
}), SubNavList = styled("ul", {
  listStyle: "none",
  display: "flex",
  margin: 0,
  padding: "0 0.4rem",
  gap: "$20",
  "@tabletUp": {
    gap: "$30"
  }
}), SubNavListItem = styled("li", {
  "&:last-child": {
    pr: 28
  },
  "@tabletUp": {
    "&:last-child": {
      pr: 0
    }
  }
}), SubNavAnchor = styled("a", {
  ...getFontStyles("$XXS"),
  whiteSpace: "nowrap"
});

// app/components/Menu/MenuSticky.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), MenuSticky = ({ className, subnav }) => {
  let [styles, isStuck] = useAnimatedHeader({
    isHeader: !1,
    heights: getHeaderHeights()
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StickyMenu, {
    className,
    isStuck,
    style: styles,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeaderSubnav, {
      subnav
    }, void 0, !1, {
      fileName: "app/components/Menu/MenuSticky.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/components/Menu/MenuSticky.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
}, StickyMenu = styled(import_web7.animated.header, {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  maxWidth: "inherit",
  backgroundColor: "rgba(250, 250, 250, 0.80)",
  backdropFilter: "blur(5px)",
  zIndex: "$1",
  px: 28,
  top: 0,
  "@tabletUp": {
    px: 62
  },
  [`.${dark} &`]: {
    backgroundColor: "rgba(27, 26, 34, 0.8)"
  },
  variants: {
    isStuck: {
      true: {
        position: "fixed",
        "& + article": {
          paddingTop: 82
        }
      }
    }
  }
});

// app/components/Asides/StickyAside.tsx
var import_web8 = require("@react-spring/web");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), StickyAside = ({ children }) => {
  let [styles, isStuck] = useAnimatedHeader({
    isHeader: !1,
    heights: getHeaderHeights()
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Aside, {
    style: styles,
    isStuck,
    children
  }, void 0, !1, {
    fileName: "app/components/Asides/StickyAside.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}, Aside = styled(import_web8.animated.aside, {
  display: "none",
  flexShrink: 1,
  width: "30rem",
  gridArea: "aside",
  "@tabletUp": {
    display: "block",
    pt: "$25",
    height: "100%"
  },
  variants: {
    isStuck: {
      true: {
        position: "fixed"
      }
    }
  }
});

// app/components/Code/LivePreview.tsx
var import_react23 = require("react"), import_sandpack_react = require("@codesandbox/sandpack-react"), Accordion = __toESM(require("@radix-ui/react-accordion")), import_web9 = require("@react-spring/web");

// app/components/Code/Pre.tsx
var Pre = styled("pre", {
  $$comment: "var(--colors-steel60)",
  $$punctuation: "var(--colors-steel80)",
  $$property: "var(--colors-steel100)",
  $$boolean: "#e52e8d",
  $$string: "#189076",
  $$operator: "#0074e0",
  $$function: "#189076",
  $$keyword: "#0074e0",
  $$literal: "#fffac2",
  $$falsy: "#e52e8d",
  position: "relative",
  backgroundColor: "$codeBackground",
  color: "$black",
  m: 0,
  overflow: "hidden",
  [`.${dark} &`]: {
    $$comment: "#a6accd",
    $$punctuation: "#e4f0fb",
    $$property: "#e4f0fb",
    $$boolean: "#f087bd",
    $$string: "#5de4c7",
    $$operator: "#add7ff",
    $$function: "#5de4c7",
    $$keyword: "#add7ff",
    $$literal: "#fffac2",
    $$falsy: "#f087bd"
  },
  boxSizing: "border-box",
  borderRadius: "$r8",
  fontFamily: "$mono",
  fontSize: "$code",
  lineHeight: "$code",
  whiteSpace: "pre",
  overflowX: "auto",
  overflowY: "hidden",
  p: "$30",
  "& > code": {
    fontFamily: "inherit",
    display: "inline-block",
    position: "relative"
  },
  "& > code::before": {
    content: "",
    display: "block",
    position: "absolute",
    right: -30,
    width: 30,
    height: 1
  },
  ".token.namespace": {
    opacity: 0.7
  },
  ".token.script": {
    color: "$$property"
  },
  ".token.comment, .token.prolog, .token.doctype, .token.cdata": {
    color: "$$comment"
  },
  ".token.punctuation": {
    color: "$$punctuation"
  },
  ".token.function, .token.property, .token.constant, .token.symbol, .token.deleted": {
    color: "$$property"
  },
  ".token.boolean, .token.number": {
    color: "$$boolean"
  },
  ".token.tag, .token.selector, .token.attr-value, .token.string, .token.char, .token.builtin, .token.inserted": {
    color: "$$string"
  },
  ".token.attr-name, .token.operator, .token.entity, .token.url, .language-css .token.string, .style .token.string, .token.variable": {
    color: "$$operator"
  },
  ".token.atrule, .token.class-name": {
    color: "$$function"
  },
  ".token.keyword": {
    color: "$$keyword"
  },
  ".token.regex, .token.important": {
    color: "$$literal"
  },
  ".token.deleted": {
    color: "$$falsy"
  },
  ".token.important, .token.bold": {
    fontWeight: "bold"
  },
  ".token.italic": {
    fontStyle: "italic"
  },
  '.highlight-line[data-highlighted="false"], .highlight-line[data-highlighted="false"] *': {
    color: "$$comment",
    opacity: 0.8
  },
  ".highlight-word": {
    display: "inline-block",
    borderRadius: "$r4",
    py: 2,
    px: 5,
    "@motion": {
      transition: "color 400ms, background-color 400ms, transform 400ms"
    }
  },
  ".highlight-word.on": {
    transform: "scale(1.1)"
  },
  variants: {
    showLineNumbers: {
      true: {
        ".highlight-line": {
          position: "relative",
          paddingLeft: "$30",
          "&::before": {
            content: "attr(data-line)",
            position: "absolute",
            left: -5,
            top: 0,
            color: "$$comment",
            opacity: 0.5
          }
        },
        '&[data-showing-lines="true"] .highlight-line[data-highlighted="true"]': {
          "&:before": {
            opacity: 1
          }
        }
      }
    }
  }
});

// app/components/Code/LivePreviewStyles.ts
var LIVE_PREVIEW_STYLES = {
  spring: `
    html, body {
        height: 100%;
    }
  
    body {
        display:flex;
        align-items: center;
        margin: 0 25px;
    }

    *, *:before, *:after {
      box-sizing: border-box;
    }
  
    .spring-box {
      width: 80px;
      height: 80px;
      background-color: #ff6d6d;
      border-radius: 8px;
      font-family: Helvetica;
      font-size: 14px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #1B1A22;
    }
  `,
  dialog: `
    html, body {
        height: 100%;
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #1B1A22;
    }

    *, *:before, *:after {
      box-sizing: border-box;
    }
  `,
  imperative: `
    html, body {
        height: 100%;
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #1B1A22;
    }

    *, *:before, *:after {
      box-sizing: border-box;
    }

    .spring-box {
      width: 80px;
      height: 80px;
      background-color: #ff6d6d;
      border-radius: 8px;
      font-family: Helvetica;
      font-size: 14px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #1B1A22;
    }

    .flex-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 120px;
    }

    .flex-container--column {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 20px;
    }
  `,
  configPlayground: `
    html,
    body {
      height: 100vh;
      width: 100vw;
    }

    *, *:before, *:after {
      box-sizing: border-box;
    }

    #root {
      position: relative;
      height: 100%;
      overflow: hidden;
    }

    .card-main {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }

    .card {
      width: 20ch;
      height: 20ch;
      background-color: #ff6d6d;
      border-radius: 8px;
      transition: box-shadow 0.5s;
      will-change: transform;
    }
  `,
  r3f: `
    html,
    body {
      height: 100%;
      margin: 0
    }

    *, *:before, *:after {
      box-sizing: border-box;
    }

    #root {
      height: 100%;
    }
  `
};

// app/components/Code/LivePreviewDeps.ts
var LIVE_PREVIEW_DEPS = {
  spring: {},
  imperative: {},
  dialog: {
    "@stitches/react": "^1.2.8",
    "@radix-ui/react-dialog": "^1.0.0"
  },
  configPlayground: {
    leva: "^0.9.31"
  },
  r3f: {
    "@react-spring/three": "*",
    "@react-three/drei": "^9.36.0",
    "@react-three/fiber": "^8.8.10",
    three: "0.145.0"
  }
};

// app/components/Code/LivePreview.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), LivePreview = ({
  code,
  showCode = !0,
  preProps,
  className,
  defaultOpen = !1,
  template = "spring"
}) => {
  let [value, setValue] = (0, import_react23.useState)(defaultOpen ? "code" : ""), preRef = (0, import_react23.useRef)(null), codeTemplate = `
    import '/index.css'
    ${code}
  `, handleValueChange = (value2) => setValue(value2), [styles, api] = (0, import_web9.useSpring)(
    () => ({
      height: 0
    }),
    []
  ), isMounted = (0, import_react23.useRef)(!1);
  return (0, import_react23.useEffect)(() => {
    api.start({
      height: value === "" ? 0 : preRef.current.getBoundingClientRect().height,
      immediate: !isMounted.current
    }), isMounted.current = !0;
  }, [value]), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PreviewContainer, {
    className,
    isDemo: template !== "spring",
    largeSize: template === "configPlayground" || template === "imperative" || template === "r3f",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_sandpack_react.SandpackProvider, {
        template: "react",
        files: {
          "/App.js": {
            code: codeTemplate
          },
          "/index.css": {
            code: LIVE_PREVIEW_STYLES[template]
          }
        },
        customSetup: {
          dependencies: {
            "@react-spring/web": "*",
            "@aoviz/graphs": "*",
            ...LIVE_PREVIEW_DEPS[template]
          }
        },
        options: {
          classes: {
            "sp-wrapper": "preview__wrapper",
            "sp-layout": "preview__layout",
            "sp-stack": "preview__stack",
            "sp-preview-container": "preview__container",
            "sp-preview-iframe": "preview__iframe",
            "sp-preview-actions": "preview__actions",
            "sp-overlay": "preview__overlay",
            "sp-button": "preview__button"
          }
        },
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_sandpack_react.SandpackPreview, {}, void 0, !1, {
          fileName: "app/components/Code/LivePreview.tsx",
          lineNumber: 100,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/Code/LivePreview.tsx",
        lineNumber: 71,
        columnNumber: 7
      }, this),
      showCode ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Accordion.Root, {
        type: "single",
        collapsible: !0,
        value,
        onValueChange: handleValueChange,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Accordion.Item, {
          value: "code",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AccordionHeader, {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Accordion.Trigger, {
                asChild: !0,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AccordionTrigger, {
                  children: value === "" ? "Show Code" : "Hide Code"
                }, void 0, !1, {
                  fileName: "app/components/Code/LivePreview.tsx",
                  lineNumber: 111,
                  columnNumber: 17
                }, this)
              }, void 0, !1, {
                fileName: "app/components/Code/LivePreview.tsx",
                lineNumber: 110,
                columnNumber: 15
              }, this)
            }, void 0, !1, {
              fileName: "app/components/Code/LivePreview.tsx",
              lineNumber: 109,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AccordionContent, {
              style: styles,
              forceMount: !0,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Pre, {
                ref: preRef,
                ...preProps
              }, void 0, !1, {
                fileName: "app/components/Code/LivePreview.tsx",
                lineNumber: 117,
                columnNumber: 15
              }, this)
            }, void 0, !1, {
              fileName: "app/components/Code/LivePreview.tsx",
              lineNumber: 116,
              columnNumber: 13
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/components/Code/LivePreview.tsx",
          lineNumber: 108,
          columnNumber: 11
        }, this)
      }, void 0, !1, {
        fileName: "app/components/Code/LivePreview.tsx",
        lineNumber: 103,
        columnNumber: 9
      }, this) : null
    ]
  }, void 0, !0, {
    fileName: "app/components/Code/LivePreview.tsx",
    lineNumber: 63,
    columnNumber: 5
  }, this);
}, PreviewContainer = styled("div", {
  width: "100%",
  my: "$40",
  "& .preview__wrapper": {
    mb: "$5"
  },
  "& .preview__stack": {
    backgroundColor: "transparent"
  },
  "& .preview__overlay": {
    display: "none"
  },
  "& .preview__layout, & .preview__stack, & .preview__container": {
    height: "100%",
    width: "100%"
  },
  "& .preview__container": {
    position: "relative",
    backgroundColor: "transparent"
  },
  "& .preview__actions": {
    position: "absolute",
    bottom: "$10",
    right: "$10",
    display: "flex",
    gap: "0.5rem"
  },
  "& .preview__button": {
    border: "none",
    color: "$black",
    backgroundColor: "$codeBackground",
    cursor: "pointer",
    margin: 0,
    padding: "0.5rem",
    height: "3rem",
    width: "3rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "$r8",
    "@motion": {
      transition: "background-color 400ms"
    },
    hover: {
      backgroundColor: "$steel20",
      color: "$black !important"
    }
  },
  [`.${dark} &`]: {
    ".preview__button.sp-csb-icon-light": {
      color: "$white"
    }
  },
  "& .preview__iframe": {
    width: "100%",
    border: "solid 1px $steel20",
    borderRadius: "$r8",
    height: "inherit !important"
  },
  variants: {
    largeSize: {
      true: {
        "& .preview__iframe": {
          minHeight: 400
        }
      }
    },
    isDemo: {
      true: {
        "& .preview__iframe": {
          background: "$blueGreenGradient100"
        }
      }
    }
  }
}), AccordionHeader = styled(Accordion.Header, {
  backgroundColor: "$codeBackground",
  padding: "$15 $30",
  display: "flex",
  justifyContent: "flex-end",
  borderRadius: "$r8",
  ["&[data-state=open]"]: {
    borderRadius: "$r8 $r8 0 0"
  }
}), AccordionTrigger = styled(Button, {
  fontFamily: "$mono"
}), AccordionContent = styled((0, import_web9.animated)(Accordion.Content), {
  overflow: "hidden",
  [`${Pre}`]: {
    pt: "0"
  },
  [`&[data-state=open] ${Pre}`]: {
    borderRadius: "0 0 $r8 $r8"
  }
});

// app/components/Code/Code.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), Code2 = ({
  isLive,
  code,
  showCode,
  className,
  copy,
  defaultOpen,
  template,
  ...restProps
}) => isLive ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LivePreview, {
  code,
  showCode,
  className,
  defaultOpen,
  preProps: { ...restProps },
  template
}, void 0, !1, {
  fileName: "app/components/Code/Code.tsx",
  lineNumber: 34,
  columnNumber: 7
}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodePre, {
  className,
  ...restProps,
  children: [
    copy ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PreCopy, {
      children: copy
    }, void 0, !1, {
      fileName: "app/components/Code/Code.tsx",
      lineNumber: 46,
      columnNumber: 17
    }, this) : null,
    restProps.children
  ]
}, void 0, !0, {
  fileName: "app/components/Code/Code.tsx",
  lineNumber: 45,
  columnNumber: 7
}, this), PreCopy = styled(ButtonCopy, {
  position: "absolute",
  top: 24,
  right: 24,
  display: "none",
  "@tabletUp": {
    display: "block"
  }
}), CodePre = styled(Pre, {
  [`${PreCopy}`]: {
    opacity: 0,
    "@motion": {
      transition: "opacity 200ms ease-out"
    }
  },
  hover: {
    [`${PreCopy}`]: {
      opacity: 1
    }
  }
});

// app/components/InlineLink.tsx
var InlineLinkStyles = {
  position: "relative",
  textDecoration: "none",
  "&:after": {
    position: "absolute",
    bottom: -1,
    left: 0,
    content: "",
    width: "100%",
    height: 2,
    backgroundColor: "$red100",
    "@motion": {
      transition: "width 200ms ease-out"
    }
  },
  "&:hover:after": {
    width: 0,
    left: "unset",
    right: 0
  }
};

// app/components/Callout.tsx
var import_phosphor_react9 = require("phosphor-react");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), icons = {
  warning: import_phosphor_react9.Warning,
  danger: import_phosphor_react9.Fire,
  success: import_phosphor_react9.CheckCircle,
  note: import_phosphor_react9.Note
}, capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1), Callout = ({ children, variant = "warning" }) => {
  let Icon = icons[variant];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CalloutWrapper, {
    variant,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
        variant,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, {
            size: 20,
            weight: "bold"
          }, void 0, !1, {
            fileName: "app/components/Callout.tsx",
            lineNumber: 27,
            columnNumber: 9
          }, this),
          capitalize(variant)
        ]
      }, void 0, !0, {
        fileName: "app/components/Callout.tsx",
        lineNumber: 26,
        columnNumber: 7
      }, this),
      children
    ]
  }, void 0, !0, {
    fileName: "app/components/Callout.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
}, CalloutWrapper = styled("div", {
  borderRadius: "$r8",
  px: "$30",
  py: "$30",
  my: "$20",
  "& + pre": {
    mt: "$40"
  },
  variants: {
    variant: {
      warning: {
        backgroundColor: "#FF701933"
      },
      danger: {
        backgroundColor: "red"
      },
      success: {
        backgroundColor: "green"
      },
      note: {
        background: "#569AFF33"
      }
    }
  }
}), Label = styled("div", {
  ...getFontStyles("$S"),
  fontWeight: "$semiblack",
  mb: "$15",
  display: "flex",
  gap: "$5",
  alignItems: "center",
  variants: {
    variant: {
      warning: {
        color: "#FF7019CC"
      },
      danger: {
        color: "#FF7019CC"
      },
      success: {
        color: "#FF7019CC"
      },
      note: {
        color: "#569AFF"
      }
    }
  }
});

// app/data/navigationSchema.generated.json
var navigationSchema_generated_default = [{ href: "/docs", id: "index", title: "\u7B80\u4ECB", sidebarPosition: 1, children: [] }, { href: "/docs/getting-started", id: "getting-started", title: "\u5FEB\u901F\u4E0A\u624B", sidebarPosition: 2, children: [] }, { href: "/docs/instance", id: "instance", title: "Graph \u65B9\u6CD5", sidebarPosition: 2, children: [] }, { href: "/docs/plugins", id: "plugins", noPage: !0, children: [{ id: "fisheys", title: "\u9C7C\u773C\u63D2\u4EF6", sidebarPosition: 1, children: [], href: "/docs/plugins/fisheys", noPage: !1 }, { id: "watermark", title: "\u6C34\u5370\u63D2\u4EF6", sidebarPosition: 1, children: [], href: "/docs/plugins/watermark", noPage: !1 }], sidebarPosition: 3, title: "Plugins" }];

// app/data/subnavSchema.generated.json
var subnavSchema_generated_default = { "/getting-started": [{ href: "#", label: "\u5B89\u88C5", id: "" }, { href: "#", label: "\u4F7F\u7528\u793A\u4F8B", id: "" }], "/instance": [{ href: "#", label: "\u65B9\u6CD5\u4ECB\u7ECD", id: "" }], "/plugins/fisheys": [], "/plugins/index": [], "/plugins/watermark": [] };

// app/helpers/navigation.ts
var getNavigations = (dir) => {
  let dirWithoutDocs = `/${dir.split("/").slice(2).join("/")}`, subnav = subnavSchema_generated_default[dirWithoutDocs];
  if (!subnav) {
    let dirWithIndex = dirWithoutDocs === "/" ? "/index" : `${dirWithoutDocs}/index`;
    subnav = subnavSchema_generated_default[dirWithIndex];
  }
  return {
    sidebar: navigationSchema_generated_default,
    subnav
  };
}, flattenNavigationWithChildren = (array) => array.reduce(
  (flattened, { children, href }) => flattened.concat([{ href, hasChildren: children.length > 0 }]).concat(children ? flattenNavigationWithChildren(children) : []),
  []
);

// app/helpers/links.ts
var BASE_URL = "https://github.com/Aoviz-Team/graphs/tree/beta-docs/docs/app/routes/docs/", getDocFilePathToGithub = (item) => {
  if (!item)
    return BASE_URL;
  let filePath = item.href.split("/docs/")[1];
  return filePath || (filePath = "index"), item.hasChildren && (filePath = `${filePath}/index`), `${BASE_URL}${filePath}.mdx`;
};

// app/routes/docs.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), comps = {
  h1: (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, {
    fontStyle: "$XL",
    css: {
      mb: 20,
      "@tabletUp": {
        mb: 30
      }
    },
    isLink: !0,
    ...props
  }, void 0, !1, {
    fileName: "app/routes/docs.tsx",
    lineNumber: 33,
    columnNumber: 5
  }, this),
  h2: (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, {
    tag: "h2",
    fontStyle: "$L",
    css: {
      mt: 30,
      mb: 15,
      "@tabletUp": {
        mt: 40,
        mb: 20
      }
    },
    isLink: !0,
    ...props
  }, void 0, !1, {
    fileName: "app/routes/docs.tsx",
    lineNumber: 47,
    columnNumber: 7
  }, this),
  h3: (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, {
    tag: "h3",
    fontStyle: "$M",
    css: {
      mt: 30,
      mb: 15,
      "@tabletUp": {
        mt: 40,
        mb: 20
      }
    },
    isLink: !0,
    ...props
  }, void 0, !1, {
    fileName: "app/routes/docs.tsx",
    lineNumber: 65,
    columnNumber: 5
  }, this),
  h4: (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, {
    tag: "h4",
    fontStyle: "$S",
    css: {
      mt: 30,
      mb: 15,
      "@tabletUp": {
        mt: 40,
        mb: 20
      }
    },
    ...props
  }, void 0, !1, {
    fileName: "app/routes/docs.tsx",
    lineNumber: 82,
    columnNumber: 5
  }, this),
  h5: (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, {
    tag: "h5",
    fontStyle: "$XS",
    css: {
      mt: 30,
      mb: 4,
      textTransform: "uppercase",
      "@tabletUp": {
        mt: 40,
        mb: 6
      }
    },
    ...props
  }, void 0, !1, {
    fileName: "app/routes/docs.tsx",
    lineNumber: 98,
    columnNumber: 5
  }, this),
  h6: () => null,
  p: (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Copy, {
    css: {
      "& + &": {
        mt: 15
      },
      "& + pre": {
        my: 40
      },
      "pre + &": {
        mt: 30
      },
      "& code": {
        backgroundColor: "$steel20",
        borderRadius: "$r4",
        py: 2,
        px: 5
      },
      "& > a": {
        ...InlineLinkStyles
      },
      maxWidth: 680
    },
    ...props
  }, void 0, !1, {
    fileName: "app/routes/docs.tsx",
    lineNumber: 116,
    columnNumber: 5
  }, this),
  ul: (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List2, {
    css: {
      mt: 15
    },
    ...props
  }, void 0, !1, {
    fileName: "app/routes/docs.tsx",
    lineNumber: 142,
    columnNumber: 5
  }, this),
  ol: (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List2, {
    tag: "ol",
    css: {
      mt: 15
    },
    ...props
  }, void 0, !1, {
    fileName: "app/routes/docs.tsx",
    lineNumber: 150,
    columnNumber: 5
  }, this),
  a: (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Anchor2, {
    ...props
  }, void 0, !1, {
    fileName: "app/routes/docs.tsx",
    lineNumber: 158,
    columnNumber: 30
  }, this),
  blockquote: (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BlockQuote, {
    as: "blockquote",
    ...props
  }, void 0, !1, {
    fileName: "app/routes/docs.tsx",
    lineNumber: 159,
    columnNumber: 31
  }, this),
  pre: (props) => {
    let {
      defaultOpen,
      children,
      code,
      showLineNumbers,
      id,
      line,
      live,
      copy,
      showCode,
      template
    } = props;
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Code2, {
      id,
      showLineNumbers: showLineNumbers === "",
      "data-showing-lines": Boolean(line),
      isLive: Boolean(live),
      code,
      copy,
      defaultOpen: defaultOpen === "true",
      showCode: showCode !== "false",
      template,
      children
    }, void 0, !1, {
      fileName: "app/routes/docs.tsx",
      lineNumber: 186,
      columnNumber: 7
    }, this);
  },
  H,
  warning: (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Callout, {
    variant: "warning",
    ...props
  }, void 0, !1, {
    fileName: "app/routes/docs.tsx",
    lineNumber: 202,
    columnNumber: 5
  }, this),
  note: (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Callout, {
    variant: "note",
    ...props
  }, void 0, !1, {
    fileName: "app/routes/docs.tsx",
    lineNumber: 205,
    columnNumber: 5
  }, this)
};
function DocsLayout2() {
  let location = (0, import_react25.useLocation)(), navigation = getNavigations(location.pathname), isDarkMode = useIsDarkTheme(), hasStickySubnav = navigation.subnav && navigation.subnav.length > 0, activeRoute = (0, import_react24.useMemo)(
    () => flattenNavigationWithChildren(navigation.sidebar),
    [navigation.sidebar]
  ).find((item) => item.href === location.pathname);
  return (0, import_react24.useEffect)(() => {
    let element = document.getElementById("carbonads");
    typeof window._carbonads < "u" && element && (window._carbonads.remove(element), window._carbonads.refresh());
  }, [location.pathname]), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Grid2, {
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, {
          data: navigation
        }, void 0, !1, {
          fileName: "app/routes/docs.tsx",
          lineNumber: 236,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StickyAside, {
          hasSubNav: hasStickySubnav,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MenuDocs, {
            submenu: navigation.sidebar
          }, void 0, !1, {
            fileName: "app/routes/docs.tsx",
            lineNumber: 238,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/docs.tsx",
          lineNumber: 237,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Main3, {
          children: [
            hasStickySubnav ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MainStickyMenu, {
              subnav: navigation.subnav
            }, void 0, !1, {
              fileName: "app/routes/docs.tsx",
              lineNumber: 242,
              columnNumber: 13
            }, this) : null,
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Article, {
              hasStickySubnav,
              children: [
                typeof window < "u" && window.env.ENABLE_CARBON ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("script", {
                  async: !0,
                  type: "text/javascript",
                  src: "//cdn.carbonads.com/carbon.js?serve=CEAIPK7I&placement=react-springdev",
                  id: "_carbonads_js"
                }, void 0, !1, {
                  fileName: "app/routes/docs.tsx",
                  lineNumber: 246,
                  columnNumber: 15
                }, this) : null,
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react26.MDXProvider, {
                  components: comps,
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react25.Outlet, {}, void 0, !1, {
                    fileName: "app/routes/docs.tsx",
                    lineNumber: 254,
                    columnNumber: 15
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/docs.tsx",
                  lineNumber: 253,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer2, {
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EditAnchor, {
                    href: getDocFilePathToGithub(activeRoute),
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_phosphor_react10.PencilSimple, {
                        size: 20,
                        weight: isDarkMode ? "light" : "regular"
                      }, void 0, !1, {
                        fileName: "app/routes/docs.tsx",
                        lineNumber: 258,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                        children: "Edit this page"
                      }, void 0, !1, {
                        fileName: "app/routes/docs.tsx",
                        lineNumber: 262,
                        columnNumber: 17
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/docs.tsx",
                    lineNumber: 257,
                    columnNumber: 15
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/docs.tsx",
                  lineNumber: 256,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/docs.tsx",
              lineNumber: 244,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/docs.tsx",
          lineNumber: 240,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/routes/docs.tsx",
      lineNumber: 235,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/docs.tsx",
    lineNumber: 234,
    columnNumber: 5
  }, this);
}
var Grid2 = styled("div", {
  "@tabletUp": {
    display: "grid",
    maxHeight: "100%",
    overflow: "hidden",
    gridTemplateColumns: "30rem 1fr 1fr",
    gridTemplateAreas: `
      "header header header"
      "aside main main"
    `
  },
  "& > header": {
    gridArea: "header"
  }
}), Main3 = styled("main", {
  position: "relative",
  flex: "1",
  gridArea: "main",
  width: "100%",
  margin: "0 auto",
  "@tabletUp": {
    maxWidth: "calc(100vw - 30rem)"
  }
}), MainStickyMenu = styled(MenuSticky, {
  width: "inherit",
  maxWidth: "inherit",
  "@tabletUp": {
    display: "flex"
  }
}), Article = styled("article", {
  padding: "0 $25 $30 $25",
  width: "100%",
  mt: "$15",
  "@tabletUp": {
    padding: "0 6.2rem $80 6.2rem",
    maxWidth: "$document",
    margin: "0 auto",
    mt: "$25"
  },
  variants: {
    hasStickySubnav: {
      false: {
        paddingTop: 27
      }
    }
  }
}), Footer2 = styled("footer", {
  mt: "$40"
}), EditAnchor = styled(Anchor2, {
  ...getFontStyles("$XXS"),
  textDecoration: "none",
  fontWeight: "$default",
  color: "$steel40",
  display: "inline-flex",
  alignItems: "center",
  "& > span": {
    ml: "$5"
  },
  "&:hover": {
    "& > span": {
      textDecoration: "underline"
    }
  }
}), BlockQuote = styled("blockquote", {
  my: "$30",
  position: "relative",
  ml: "$20",
  opacity: 0.7,
  "&:before": {
    content: '""',
    height: "100%",
    width: 1,
    backgroundColor: "$black",
    position: "absolute",
    top: 0,
    left: -20
  }
});

// mdx:routes/docs/plugins/watermark.mdx
var watermark_exports = {};
__export(watermark_exports, {
  attributes: () => attributes,
  default: () => watermark_default,
  filename: () => filename,
  headers: () => headers,
  meta: () => meta3
});
var import_react27 = require("@mdx-js/react"), import_react28 = __toESM(require("react")), attributes = {
  meta: {
    title: "\u6C34\u5370\u63D2\u4EF6 |  @aoviz/graphs",
    description: "\u6C34\u5370"
  },
  sidebar_position: 1
};
function MDXContent(props = {}) {
  let _components = Object.assign({
    h1: "h1",
    a: "a",
    p: "p",
    pre: "pre",
    code: "code",
    div: "div",
    span: "span"
  }, (0, import_react27.useMDXComponents)(), props.components), { wrapper: MDXLayout } = _components, _content = /* @__PURE__ */ import_react28.default.createElement(import_react28.default.Fragment, null, /* @__PURE__ */ import_react28.default.createElement(_components.h1, {
    id: "\u6C34\u5370\u63D2\u4EF6"
  }, /* @__PURE__ */ import_react28.default.createElement(_components.a, {
    href: "#\u6C34\u5370\u63D2\u4EF6"
  }, "\u6C34\u5370\u63D2\u4EF6")), `
`, /* @__PURE__ */ import_react28.default.createElement(_components.p, null, "\u901A\u8FC7\u4F20\u5165\u6587\u672C\u5185\u5BB9\u6E32\u67D3\u6C34\u5370"), `
`, /* @__PURE__ */ import_react28.default.createElement(_components.pre, {
    code: `import { Force, WatermarkPlugin } from '@aoviz/graphs'
import { useRef, useEffect } from 'react'
const data = {
  nodes: [
    { id: '1', name: '\u4EBA\u5DE5\u667A\u80FD', cfg: { backgroundColor: '#6EA3FD' } },
    { id: '2', name: '\u6DF1\u5EA6\u5B66\u4E60', cfg: { backgroundColor: '#8470A8' } },
    { id: '3', name: 'TensorFlow', cfg: { backgroundColor: '#64B3C0' } },
    { id: '4', name: '\u8C37\u6B4C', cfg: { backgroundColor: '#DF954E' } },
    { id: '5', name: '\u4EBA\u5DE5\u667A\u80FD\u516C\u53F8', cfg: { backgroundColor: '#70A88F' } },
    { id: '6', name: '\u8BED\u4E49\u7F51', cfg: { backgroundColor: '#ACBBDB' } },
    { id: '7', name: '\u77E5\u8BC6\u56FE\u8C31', cfg: { backgroundColor: '#425B8A' } },
    { id: '8', name: '\u56FE\u7075', cfg: { backgroundColor: '#ADCAF1' } },
    { id: '9', name: '\u6570\u5B66\u5BB6', cfg: { backgroundColor: '#505C59' } },
    { id: '10', name: '\u56FE\u7075\u6D4B\u8BD5', cfg: { backgroundColor: '#CBCCC0' } },
    { id: '11', name: '\u82F1\u56FD', cfg: { backgroundColor: '#939F96' } },
    { id: '12', name: '\u5927\u4E0D\u5217\u98A0\u{1F1EC}\u{1F1E7}', cfg: { backgroundColor: '#A47878' } }
  ],
  links: [
    { id: 'a', name: '\u5B9E\u73B0\u65B9\u5F0F', source: '2', target: '3' },
    { id: 'b', name: '\u63D0\u51FA', source: '4', target: '3' },
    { id: 'c', name: 'Isa', source: '4', target: '5' },
    { id: 'd', name: '\u63D0\u51FA', source: '4', target: '7' },
    { id: 'e', name: 'isFrom', source: '7', target: '6' },
    { id: 'f', name: 'subTopic', source: '1', target: '2' },
    { id: 'g', name: 'subTopic', source: '1', target: '7' },
    { id: 'h', name: '\u4E4B\u7236\u662F', source: '1', target: '8' },
    { id: 'i', name: 'Isa', source: '8', target: '9' },
    { id: 'j', name: '\u63D0\u51FA', source: '8', target: '10' },
    { id: 'k', name: '\u56FD\u7C4D', source: '8', target: '11' },
    { id: 'l', name: '\u522B\u540D', source: '11', target: '12' },
    { id: 'm', name: '\u88AB\u63D0\u51FA', source: '10', target: '8' }
  ]
}
const option = {
  link:{
    label: {
      backgroundColor: 'rgba(114, 193, 209, 0.8)' 
    }
  },
  layout: {
    velocityDecay: 0.15,
    forces: [
      { force: 'n-body', strength: -1600, distanceMin: 30 },
      { force: 'collide', strength: 0.5, radius: (d: any) => d.cfg?.radius || 20, iterations: 1 },
      { force: 'link', id: (d) => d.id, distance: 200 },
      { force: 'x', strength: 0.1 },
      { force: 'y', strength: 0.1 },
      { force: 'center' }
    ]
  }
}
export default function Viz() {
  const wrapper = useRef(null);
  useEffect(() => {
    const instance = new Force(wrapper.current,{ data, option });
    instance.setPlugins([ new WatermarkPlugin({value: '@aoviz/graphs', color: 'rgba(179, 179, 255, 0.5)'})])
  }, [wrapper]);
  return <div style={{ height: 380, width: 600}}>
		<div ref={wrapper} style={{ height: 380, width: 600}}></div>
	</div>;
}

`,
    live: "true",
    template: "imperative"
  }, /* @__PURE__ */ import_react28.default.createElement(_components.code, {
    className: "language-jsx",
    live: "true",
    template: "imperative"
  }, /* @__PURE__ */ import_react28.default.createElement(_components.div, {
    "data-line": "1",
    className: "highlight-line",
    "data-highlighted": "true"
  }, /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token keyword module"
  }, "import"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token imports"
  }, /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token maybe-class-name"
  }, "Force"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token maybe-class-name"
  }, "WatermarkPlugin"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}")), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token keyword module"
  }, "from"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token string"
  }, "'@aoviz/graphs'"), `
`), /* @__PURE__ */ import_react28.default.createElement(_components.div, {
    "data-line": "2",
    className: "highlight-line",
    "data-highlighted": "true"
  }, /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token keyword module"
  }, "import"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token imports"
  }, /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " useRef", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " useEffect ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}")), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token keyword module"
  }, "from"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token string"
  }, "'react'"), `
`), /* @__PURE__ */ import_react28.default.createElement(_components.div, {
    "data-line": "3",
    className: "highlight-line",
    "data-highlighted": "true"
  }, /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token keyword"
  }, "const"), " data ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, "="), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), `
`), /* @__PURE__ */ import_react28.default.createElement(_components.div, {
    "data-line": "4",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "  ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "nodes"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "["), `
`), /* @__PURE__ */ import_react28.default.createElement(_components.div, {
    "data-line": "5",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "    ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "id"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token string"
  }, "'1'"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "name"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token string"
  }, "'\u4EBA\u5DE5\u667A\u80FD'"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "cfg"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "backgroundColor"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token string"
  }, "'#6EA3FD'"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), `
`), /* @__PURE__ */ import_react28.default.createElement(_components.div, {
    "data-line": "6",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "    ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "id"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token string"
  }, "'2'"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "name"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token string"
  }, "'\u6DF1\u5EA6\u5B66\u4E60'"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "cfg"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "backgroundColor"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token string"
  }, "'#8470A8'"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), `
`), /* @__PURE__ */ import_react28.default.createElement(_components.div, {
    "data-line": "7",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "    ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "id"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token string"
  }, "'3'"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "name"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token string"
  }, "'TensorFlow'"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "cfg"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "backgroundColor"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token string"
  }, "'#64B3C0'"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), `
`), /* @__PURE__ */ import_react28.default.createElement(_components.div, {
    "data-line": "8",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "    ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "id"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token string"
  }, "'4'"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "name"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token string"
  }, "'\u8C37\u6B4C'"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "cfg"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "backgroundColor"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token string"
  }, "'#DF954E'"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), `
`), /* @__PURE__ */ import_react28.default.createElement(_components.div, {
    "data-line": "9",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "    ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "id"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token string"
  }, "'5'"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "name"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token string"
  }, "'\u4EBA\u5DE5\u667A\u80FD\u516C\u53F8'"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "cfg"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "backgroundColor"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token string"
  }, "'#70A88F'"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), `
`), /* @__PURE__ */ import_react28.default.createElement(_components.div, {
    "data-line": "10",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "    ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "id"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token string"
  }, "'6'"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "name"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token string"
  }, "'\u8BED\u4E49\u7F51'"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "cfg"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "backgroundColor"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token string"
  }, "'#ACBBDB'"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), `
`), /* @__PURE__ */ import_react28.default.createElement(_components.div, {
    "data-line": "11",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "    ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "id"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token string"
  }, "'7'"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "name"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token string"
  }, "'\u77E5\u8BC6\u56FE\u8C31'"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "cfg"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "backgroundColor"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token string"
  }, "'#425B8A'"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), `
`), /* @__PURE__ */ import_react28.default.createElement(_components.div, {
    "data-line": "12",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "    ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "id"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token string"
  }, "'8'"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "name"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token string"
  }, "'\u56FE\u7075'"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "cfg"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "backgroundColor"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token string"
  }, "'#ADCAF1'"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), `
`), /* @__PURE__ */ import_react28.default.createElement(_components.div, {
    "data-line": "13",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "    ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "id"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token string"
  }, "'9'"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "name"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token string"
  }, "'\u6570\u5B66\u5BB6'"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "cfg"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "backgroundColor"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token string"
  }, "'#505C59'"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), `
`), /* @__PURE__ */ import_react28.default.createElement(_components.div, {
    "data-line": "14",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "    ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "id"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token string"
  }, "'10'"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "name"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token string"
  }, "'\u56FE\u7075\u6D4B\u8BD5'"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "cfg"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "backgroundColor"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token string"
  }, "'#CBCCC0'"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), `
`), /* @__PURE__ */ import_react28.default.createElement(_components.div, {
    "data-line": "15",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "    ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "id"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token string"
  }, "'11'"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "name"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token string"
  }, "'\u82F1\u56FD'"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "cfg"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "backgroundColor"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token string"
  }, "'#939F96'"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), `
`), /* @__PURE__ */ import_react28.default.createElement(_components.div, {
    "data-line": "16",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "    ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "id"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token string"
  }, "'12'"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "name"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token string"
  }, "'\u5927\u4E0D\u5217\u98A0\u{1F1EC}\u{1F1E7}'"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "cfg"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "backgroundColor"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token string"
  }, "'#A47878'"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), `
`), /* @__PURE__ */ import_react28.default.createElement(_components.div, {
    "data-line": "17",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "  ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "]"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), `
`), /* @__PURE__ */ import_react28.default.createElement(_components.div, {
    "data-line": "18",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "  ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "links"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "["), `
`), /* @__PURE__ */ import_react28.default.createElement(_components.div, {
    "data-line": "19",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "    ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "id"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token string"
  }, "'a'"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "name"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token string"
  }, "'\u5B9E\u73B0\u65B9\u5F0F'"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "source"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token string"
  }, "'2'"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "target"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token string"
  }, "'3'"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), `
`), /* @__PURE__ */ import_react28.default.createElement(_components.div, {
    "data-line": "20",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "    ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "id"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token string"
  }, "'b'"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "name"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token string"
  }, "'\u63D0\u51FA'"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "source"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token string"
  }, "'4'"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "target"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token string"
  }, "'3'"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), `
`), /* @__PURE__ */ import_react28.default.createElement(_components.div, {
    "data-line": "21",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "    ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "id"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token string"
  }, "'c'"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "name"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token string"
  }, "'Isa'"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "source"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token string"
  }, "'4'"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "target"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token string"
  }, "'5'"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), `
`), /* @__PURE__ */ import_react28.default.createElement(_components.div, {
    "data-line": "22",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "    ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "id"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token string"
  }, "'d'"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "name"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token string"
  }, "'\u63D0\u51FA'"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "source"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token string"
  }, "'4'"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "target"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token string"
  }, "'7'"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), `
`), /* @__PURE__ */ import_react28.default.createElement(_components.div, {
    "data-line": "23",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "    ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "id"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token string"
  }, "'e'"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "name"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token string"
  }, "'isFrom'"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "source"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token string"
  }, "'7'"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "target"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token string"
  }, "'6'"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), `
`), /* @__PURE__ */ import_react28.default.createElement(_components.div, {
    "data-line": "24",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "    ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "id"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token string"
  }, "'f'"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "name"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token string"
  }, "'subTopic'"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "source"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token string"
  }, "'1'"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "target"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token string"
  }, "'2'"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), `
`), /* @__PURE__ */ import_react28.default.createElement(_components.div, {
    "data-line": "25",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "    ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "id"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token string"
  }, "'g'"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "name"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token string"
  }, "'subTopic'"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "source"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token string"
  }, "'1'"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "target"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token string"
  }, "'7'"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), `
`), /* @__PURE__ */ import_react28.default.createElement(_components.div, {
    "data-line": "26",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "    ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "id"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token string"
  }, "'h'"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "name"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token string"
  }, "'\u4E4B\u7236\u662F'"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "source"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token string"
  }, "'1'"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "target"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token string"
  }, "'8'"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), `
`), /* @__PURE__ */ import_react28.default.createElement(_components.div, {
    "data-line": "27",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "    ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "id"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token string"
  }, "'i'"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "name"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token string"
  }, "'Isa'"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "source"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token string"
  }, "'8'"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "target"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token string"
  }, "'9'"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), `
`), /* @__PURE__ */ import_react28.default.createElement(_components.div, {
    "data-line": "28",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "    ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "id"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token string"
  }, "'j'"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "name"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token string"
  }, "'\u63D0\u51FA'"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "source"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token string"
  }, "'8'"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "target"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token string"
  }, "'10'"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), `
`), /* @__PURE__ */ import_react28.default.createElement(_components.div, {
    "data-line": "29",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "    ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "id"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token string"
  }, "'k'"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "name"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token string"
  }, "'\u56FD\u7C4D'"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "source"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token string"
  }, "'8'"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "target"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token string"
  }, "'11'"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), `
`), /* @__PURE__ */ import_react28.default.createElement(_components.div, {
    "data-line": "30",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "    ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "id"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token string"
  }, "'l'"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "name"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token string"
  }, "'\u522B\u540D'"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "source"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token string"
  }, "'11'"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "target"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token string"
  }, "'12'"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), `
`), /* @__PURE__ */ import_react28.default.createElement(_components.div, {
    "data-line": "31",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "    ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "id"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token string"
  }, "'m'"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "name"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token string"
  }, "'\u88AB\u63D0\u51FA'"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "source"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token string"
  }, "'10'"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "target"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token string"
  }, "'8'"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), `
`), /* @__PURE__ */ import_react28.default.createElement(_components.div, {
    "data-line": "32",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "  ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "]"), `
`), /* @__PURE__ */ import_react28.default.createElement(_components.div, {
    "data-line": "33",
    className: "highlight-line",
    "data-highlighted": "true"
  }, /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), `
`), /* @__PURE__ */ import_react28.default.createElement(_components.div, {
    "data-line": "34",
    className: "highlight-line",
    "data-highlighted": "true"
  }, /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token keyword"
  }, "const"), " option ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, "="), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), `
`), /* @__PURE__ */ import_react28.default.createElement(_components.div, {
    "data-line": "35",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "  ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "link"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), `
`), /* @__PURE__ */ import_react28.default.createElement(_components.div, {
    "data-line": "36",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "    ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "label"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), `
`), /* @__PURE__ */ import_react28.default.createElement(_components.div, {
    "data-line": "37",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "      ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "backgroundColor"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token string"
  }, "'rgba(114, 193, 209, 0.8)'"), ` 
`), /* @__PURE__ */ import_react28.default.createElement(_components.div, {
    "data-line": "38",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "    ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), `
`), /* @__PURE__ */ import_react28.default.createElement(_components.div, {
    "data-line": "39",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "  ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), `
`), /* @__PURE__ */ import_react28.default.createElement(_components.div, {
    "data-line": "40",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "  ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "layout"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), `
`), /* @__PURE__ */ import_react28.default.createElement(_components.div, {
    "data-line": "41",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "    ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "velocityDecay"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token number"
  }, "0.15"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), `
`), /* @__PURE__ */ import_react28.default.createElement(_components.div, {
    "data-line": "42",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "    ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "forces"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "["), `
`), /* @__PURE__ */ import_react28.default.createElement(_components.div, {
    "data-line": "43",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "      ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "force"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token string"
  }, "'n-body'"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "strength"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, "-"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token number"
  }, "1600"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "distanceMin"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token number"
  }, "30"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), `
`), /* @__PURE__ */ import_react28.default.createElement(_components.div, {
    "data-line": "44",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "      ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "force"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token string"
  }, "'collide'"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "strength"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token number"
  }, "0.5"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token function-variable function"
  }, "radius"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "("), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token parameter"
  }, /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "d"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " any"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ")"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token arrow operator"
  }, "=>"), " d", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "."), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token property-access"
  }, "cfg"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, "?."), "radius ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, "||"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token number"
  }, "20"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "iterations"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token number"
  }, "1"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), `
`), /* @__PURE__ */ import_react28.default.createElement(_components.div, {
    "data-line": "45",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "      ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "force"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token string"
  }, "'link'"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token function-variable function"
  }, "id"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "("), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token parameter"
  }, "d"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ")"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token arrow operator"
  }, "=>"), " d", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "."), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token property-access"
  }, "id"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "distance"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token number"
  }, "200"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), `
`), /* @__PURE__ */ import_react28.default.createElement(_components.div, {
    "data-line": "46",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "      ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "force"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token string"
  }, "'x'"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "strength"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token number"
  }, "0.1"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), `
`), /* @__PURE__ */ import_react28.default.createElement(_components.div, {
    "data-line": "47",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "      ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "force"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token string"
  }, "'y'"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "strength"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token number"
  }, "0.1"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), `
`), /* @__PURE__ */ import_react28.default.createElement(_components.div, {
    "data-line": "48",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "      ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "force"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token string"
  }, "'center'"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), `
`), /* @__PURE__ */ import_react28.default.createElement(_components.div, {
    "data-line": "49",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "    ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "]"), `
`), /* @__PURE__ */ import_react28.default.createElement(_components.div, {
    "data-line": "50",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "  ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), `
`), /* @__PURE__ */ import_react28.default.createElement(_components.div, {
    "data-line": "51",
    className: "highlight-line",
    "data-highlighted": "true"
  }, /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), `
`), /* @__PURE__ */ import_react28.default.createElement(_components.div, {
    "data-line": "52",
    className: "highlight-line",
    "data-highlighted": "true"
  }, /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token keyword module"
  }, "export"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token keyword module"
  }, "default"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token keyword"
  }, "function"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token function"
  }, /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token maybe-class-name"
  }, "Viz")), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "("), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ")"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), `
`), /* @__PURE__ */ import_react28.default.createElement(_components.div, {
    "data-line": "53",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "  ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token keyword"
  }, "const"), " wrapper ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, "="), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token function"
  }, "useRef"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "("), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token keyword null nil"
  }, "null"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ")"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ";"), `
`), /* @__PURE__ */ import_react28.default.createElement(_components.div, {
    "data-line": "54",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "  ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token function"
  }, "useEffect"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "("), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "("), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ")"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token arrow operator"
  }, "=>"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), `
`), /* @__PURE__ */ import_react28.default.createElement(_components.div, {
    "data-line": "55",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "    ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token keyword"
  }, "const"), " instance ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, "="), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token keyword"
  }, "new"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token class-name"
  }, "Force"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "("), "wrapper", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "."), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token property-access"
  }, "current"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " data", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " option ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ")"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ";"), `
`), /* @__PURE__ */ import_react28.default.createElement(_components.div, {
    "data-line": "56",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "    instance", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "."), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token method function property-access"
  }, "setPlugins"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "("), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "["), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token keyword"
  }, "new"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token class-name"
  }, "WatermarkPlugin"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "("), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "value"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token string"
  }, "'@aoviz/graphs'"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "color"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token string"
  }, "'rgba(179, 179, 255, 0.5)'"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ")"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "]"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ")"), `
`), /* @__PURE__ */ import_react28.default.createElement(_components.div, {
    "data-line": "57",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "  ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "["), "wrapper", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "]"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ")"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ";"), `
`), /* @__PURE__ */ import_react28.default.createElement(_components.div, {
    "data-line": "58",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "  ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token keyword control-flow"
  }, "return"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token tag"
  }, /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token tag"
  }, /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "<"), "div"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token attr-name"
  }, "style"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token script language-javascript"
  }, /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token script-punctuation punctuation"
  }, "="), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "height"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token number"
  }, "380"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "width"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token number"
  }, "600"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}")), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ">")), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token plain-text"
  }), `
`), /* @__PURE__ */ import_react28.default.createElement(_components.div, {
    "data-line": "59",
    className: "highlight-line",
    "data-highlighted": "true"
  }, /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token plain-text"
  }, "		"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token tag"
  }, /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token tag"
  }, /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "<"), "div"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token attr-name"
  }, "ref"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token script language-javascript"
  }, /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token script-punctuation punctuation"
  }, "="), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), "wrapper", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}")), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token attr-name"
  }, "style"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token script language-javascript"
  }, /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token script-punctuation punctuation"
  }, "="), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "height"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token number"
  }, "380"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "width"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token number"
  }, "600"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}")), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ">")), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token tag"
  }, /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token tag"
  }, /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "</"), "div"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ">")), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token plain-text"
  }), `
`), /* @__PURE__ */ import_react28.default.createElement(_components.div, {
    "data-line": "60",
    className: "highlight-line",
    "data-highlighted": "true"
  }, /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token plain-text"
  }, "	"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token tag"
  }, /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token tag"
  }, /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "</"), "div"), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ">")), /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, ";"), `
`), /* @__PURE__ */ import_react28.default.createElement(_components.div, {
    "data-line": "61",
    className: "highlight-line",
    "data-highlighted": "true"
  }, /* @__PURE__ */ import_react28.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), `
`), /* @__PURE__ */ import_react28.default.createElement(_components.div, {
    "data-line": "62",
    className: "highlight-line",
    "data-highlighted": "true"
  }, `
`))));
  return MDXLayout ? /* @__PURE__ */ import_react28.default.createElement(MDXLayout, {
    ...props
  }, _content) : _content;
}
var watermark_default = MDXContent, filename = "watermark.mdx", headers = typeof attributes < "u" && attributes.headers, meta3 = typeof attributes < "u" && attributes.meta;

// mdx:routes/docs/getting-started.mdx
var getting_started_exports = {};
__export(getting_started_exports, {
  attributes: () => attributes2,
  default: () => getting_started_default,
  filename: () => filename2,
  headers: () => headers2,
  meta: () => meta4
});
var import_react29 = require("@mdx-js/react"), import_react30 = __toESM(require("react")), attributes2 = {
  meta: {
    title: "\u5FEB\u901F\u4E0A\u624B | @aoviz/graphs",
    description: "\u4F7F\u7528\u65B9\u5F0F"
  },
  sidebar_position: 2
};
function MDXContent2(props = {}) {
  let _components = Object.assign({
    h1: "h1",
    a: "a",
    p: "p",
    code: "code",
    h2: "h2",
    pre: "pre",
    div: "div",
    span: "span",
    h3: "h3"
  }, (0, import_react29.useMDXComponents)(), props.components), { wrapper: MDXLayout } = _components, _content = /* @__PURE__ */ import_react30.default.createElement(import_react30.default.Fragment, null, /* @__PURE__ */ import_react30.default.createElement(_components.h1, {
    id: "\u5FEB\u901F\u4E0A\u624B"
  }, /* @__PURE__ */ import_react30.default.createElement(_components.a, {
    href: "#\u5FEB\u901F\u4E0A\u624B"
  }, "\u5FEB\u901F\u4E0A\u624B")), `
`, /* @__PURE__ */ import_react30.default.createElement(_components.p, null, /* @__PURE__ */ import_react30.default.createElement(_components.code, null, "@aoviz/graphs"), " \u662F\u5B8C\u5168\u7531 Typescript \u7F16\u5199\u7684\u6846\u67B6\uFF0C\u7528\u4E8E\u6784\u5EFA\u6570\u636E\u9A71\u52A8\u7684\u53EF\u89C6\u5316\u56FE\u7EC4\u4EF6\u5E93\u3002"), `
`, /* @__PURE__ */ import_react30.default.createElement(_components.h2, {
    id: "\u5B89\u88C5"
  }, /* @__PURE__ */ import_react30.default.createElement(_components.a, {
    href: "#\u5B89\u88C5"
  }, "\u5B89\u88C5")), `
`, /* @__PURE__ */ import_react30.default.createElement(_components.p, null, "\u53EF\u4EE5\u4F7F\u7528\u4EFB\u610F\u4E00\u4E2A\u5305\u7BA1\u7406\u5668\u5DE5\u5177\u5B89\u88C5 ", /* @__PURE__ */ import_react30.default.createElement(_components.code, null, "@aoviz/graphs"), "\uFF0C\u4E0B\u9762\u662F\u4EE5 ", /* @__PURE__ */ import_react30.default.createElement(_components.a, {
    href: "https://yarnpkg.com/en/"
  }, "Yarn"), " \u4E3A\u4F8B:"), `
`, /* @__PURE__ */ import_react30.default.createElement(_components.pre, {
    copy: "yarn add @aoviz/graphs"
  }, /* @__PURE__ */ import_react30.default.createElement(_components.code, {
    className: "language-jsx",
    copy: "yarn add @aoviz/graphs"
  }, /* @__PURE__ */ import_react30.default.createElement(_components.div, {
    "data-line": "1",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "yarn add @aoviz", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token operator"
  }, "/"), `graphs
`))), `
`, /* @__PURE__ */ import_react30.default.createElement(_components.h2, {
    id: "\u4F7F\u7528\u793A\u4F8B"
  }, /* @__PURE__ */ import_react30.default.createElement(_components.a, {
    href: "#\u4F7F\u7528\u793A\u4F8B"
  }, "\u4F7F\u7528\u793A\u4F8B")), `
`, /* @__PURE__ */ import_react30.default.createElement(_components.h3, {
    id: "\u51C6\u5907\u6570\u636E"
  }, /* @__PURE__ */ import_react30.default.createElement(_components.a, {
    href: "#\u51C6\u5907\u6570\u636E"
  }, "\u51C6\u5907\u6570\u636E")), `
`, /* @__PURE__ */ import_react30.default.createElement(_components.pre, null, /* @__PURE__ */ import_react30.default.createElement(_components.code, {
    className: "language-ts"
  }, /* @__PURE__ */ import_react30.default.createElement(_components.div, {
    "data-line": "1",
    className: "highlight-line",
    "data-highlighted": "true"
  }, /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token keyword"
  }, "const"), " data ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token operator"
  }, "="), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), `
`), /* @__PURE__ */ import_react30.default.createElement(_components.div, {
    "data-line": "2",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "  nodes", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, "["), `
`), /* @__PURE__ */ import_react30.default.createElement(_components.div, {
    "data-line": "3",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "    ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), `
`), /* @__PURE__ */ import_react30.default.createElement(_components.div, {
    "data-line": "4",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "      id", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token string"
  }, "'1'"), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), `
`), /* @__PURE__ */ import_react30.default.createElement(_components.div, {
    "data-line": "5",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "      name", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token string"
  }, "'\u8282\u70B91'"), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), `
`), /* @__PURE__ */ import_react30.default.createElement(_components.div, {
    "data-line": "6",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "      cfg", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " backgroundColor", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token string"
  }, "'#6EA3FD'"), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), `
`), /* @__PURE__ */ import_react30.default.createElement(_components.div, {
    "data-line": "7",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "    ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), `
`), /* @__PURE__ */ import_react30.default.createElement(_components.div, {
    "data-line": "8",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "     ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), `
`), /* @__PURE__ */ import_react30.default.createElement(_components.div, {
    "data-line": "9",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "      id", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token string"
  }, "'2'"), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), `
`), /* @__PURE__ */ import_react30.default.createElement(_components.div, {
    "data-line": "10",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "      name", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token string"
  }, "'\u8282\u70B92'"), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), `
`), /* @__PURE__ */ import_react30.default.createElement(_components.div, {
    "data-line": "11",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "      cfg", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " backgroundColor", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token string"
  }, "'#8470A8'"), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), `
`), /* @__PURE__ */ import_react30.default.createElement(_components.div, {
    "data-line": "12",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "    ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), `
`), /* @__PURE__ */ import_react30.default.createElement(_components.div, {
    "data-line": "13",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "  ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, "]"), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), `
`), /* @__PURE__ */ import_react30.default.createElement(_components.div, {
    "data-line": "14",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "  links", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, "["), `
`), /* @__PURE__ */ import_react30.default.createElement(_components.div, {
    "data-line": "15",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "    ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), `
`), /* @__PURE__ */ import_react30.default.createElement(_components.div, {
    "data-line": "16",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "      id", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token string"
  }, "'A'"), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), `
`), /* @__PURE__ */ import_react30.default.createElement(_components.div, {
    "data-line": "17",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "      name", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token string"
  }, "'\u5173\u7CFB1'"), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), `
`), /* @__PURE__ */ import_react30.default.createElement(_components.div, {
    "data-line": "18",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "      source", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token string"
  }, "'1'"), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), `
`), /* @__PURE__ */ import_react30.default.createElement(_components.div, {
    "data-line": "19",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "      target", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token string"
  }, "'2'"), `
`), /* @__PURE__ */ import_react30.default.createElement(_components.div, {
    "data-line": "20",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "    ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), `
`), /* @__PURE__ */ import_react30.default.createElement(_components.div, {
    "data-line": "21",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "  ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, "]"), `
`), /* @__PURE__ */ import_react30.default.createElement(_components.div, {
    "data-line": "22",
    className: "highlight-line",
    "data-highlighted": "true"
  }, /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), `
`))), `
`, /* @__PURE__ */ import_react30.default.createElement(_components.h3, {
    id: "\u521B\u5EFA\u5173\u7CFB\u56FE"
  }, /* @__PURE__ */ import_react30.default.createElement(_components.a, {
    href: "#\u521B\u5EFA\u5173\u7CFB\u56FE"
  }, "\u521B\u5EFA\u5173\u7CFB\u56FE")), `
`, /* @__PURE__ */ import_react30.default.createElement(_components.pre, {
    code: `import { Force } from '@aoviz/graphs'
import { useRef, useEffect } from 'react'
const data = {
  nodes: [
    {
      id: '1',
      name: '\u8282\u70B91',
      cfg: { backgroundColor: '#6EA3FD' }
    },
     {
      id: '2',
      name: '\u8282\u70B92',
      cfg: { backgroundColor: '#8470A8' }
    }
  ],
  links: [
    {
      id: 'A',
      name: '\u5173\u7CFB1',
      source: '1',
      target: '2',
      cfg: {
        label: {
          backgroundColor: 'rgba(114, 193, 209, 0.8)' 
        }
      }
    }
  ]
}

const option = {
    layout: {
      velocityDecay: 0.15,
      forces: [
        { force: 'n-body', strength: -1600, distanceMin: 30 },
        { force: 'collide', strength: 0.5, radius: (d: any) => d.cfg?.radius || 20, iterations: 1 },
        { force: 'link', id: (d) => d.id, distance: 200 },
        { force: 'x', strength: 0.1 },
        { force: 'y', strength: 0.1 },
        { force: 'center' }
      ]
  }
}
export default function Viz() {
  const wrapper = useRef(null);
  useEffect(() => {
    const instance = new Force(wrapper.current,{ data, option });
  }, [wrapper]);
  return <div ref={wrapper} style={{ height: 380, width: 600}}></div>;
}

`,
    live: "true",
    template: "imperative"
  }, /* @__PURE__ */ import_react30.default.createElement(_components.code, {
    className: "language-jsx",
    live: "true",
    template: "imperative"
  }, /* @__PURE__ */ import_react30.default.createElement(_components.div, {
    "data-line": "1",
    className: "highlight-line",
    "data-highlighted": "true"
  }, /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token keyword module"
  }, "import"), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token imports"
  }, /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token maybe-class-name"
  }, "Force"), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}")), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token keyword module"
  }, "from"), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token string"
  }, "'@aoviz/graphs'"), `
`), /* @__PURE__ */ import_react30.default.createElement(_components.div, {
    "data-line": "2",
    className: "highlight-line",
    "data-highlighted": "true"
  }, /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token keyword module"
  }, "import"), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token imports"
  }, /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " useRef", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " useEffect ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}")), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token keyword module"
  }, "from"), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token string"
  }, "'react'"), `
`), /* @__PURE__ */ import_react30.default.createElement(_components.div, {
    "data-line": "3",
    className: "highlight-line",
    "data-highlighted": "true"
  }, /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token keyword"
  }, "const"), " data ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token operator"
  }, "="), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), `
`), /* @__PURE__ */ import_react30.default.createElement(_components.div, {
    "data-line": "4",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "  ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "nodes"), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, "["), `
`), /* @__PURE__ */ import_react30.default.createElement(_components.div, {
    "data-line": "5",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "    ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), `
`), /* @__PURE__ */ import_react30.default.createElement(_components.div, {
    "data-line": "6",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "      ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "id"), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token string"
  }, "'1'"), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), `
`), /* @__PURE__ */ import_react30.default.createElement(_components.div, {
    "data-line": "7",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "      ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "name"), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token string"
  }, "'\u8282\u70B91'"), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), `
`), /* @__PURE__ */ import_react30.default.createElement(_components.div, {
    "data-line": "8",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "      ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "cfg"), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "backgroundColor"), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token string"
  }, "'#6EA3FD'"), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), `
`), /* @__PURE__ */ import_react30.default.createElement(_components.div, {
    "data-line": "9",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "    ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), `
`), /* @__PURE__ */ import_react30.default.createElement(_components.div, {
    "data-line": "10",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "     ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), `
`), /* @__PURE__ */ import_react30.default.createElement(_components.div, {
    "data-line": "11",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "      ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "id"), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token string"
  }, "'2'"), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), `
`), /* @__PURE__ */ import_react30.default.createElement(_components.div, {
    "data-line": "12",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "      ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "name"), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token string"
  }, "'\u8282\u70B92'"), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), `
`), /* @__PURE__ */ import_react30.default.createElement(_components.div, {
    "data-line": "13",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "      ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "cfg"), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "backgroundColor"), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token string"
  }, "'#8470A8'"), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), `
`), /* @__PURE__ */ import_react30.default.createElement(_components.div, {
    "data-line": "14",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "    ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), `
`), /* @__PURE__ */ import_react30.default.createElement(_components.div, {
    "data-line": "15",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "  ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, "]"), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), `
`), /* @__PURE__ */ import_react30.default.createElement(_components.div, {
    "data-line": "16",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "  ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "links"), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, "["), `
`), /* @__PURE__ */ import_react30.default.createElement(_components.div, {
    "data-line": "17",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "    ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), `
`), /* @__PURE__ */ import_react30.default.createElement(_components.div, {
    "data-line": "18",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "      ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "id"), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token string"
  }, "'A'"), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), `
`), /* @__PURE__ */ import_react30.default.createElement(_components.div, {
    "data-line": "19",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "      ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "name"), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token string"
  }, "'\u5173\u7CFB1'"), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), `
`), /* @__PURE__ */ import_react30.default.createElement(_components.div, {
    "data-line": "20",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "      ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "source"), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token string"
  }, "'1'"), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), `
`), /* @__PURE__ */ import_react30.default.createElement(_components.div, {
    "data-line": "21",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "      ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "target"), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token string"
  }, "'2'"), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), `
`), /* @__PURE__ */ import_react30.default.createElement(_components.div, {
    "data-line": "22",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "      ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "cfg"), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), `
`), /* @__PURE__ */ import_react30.default.createElement(_components.div, {
    "data-line": "23",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "        ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "label"), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), `
`), /* @__PURE__ */ import_react30.default.createElement(_components.div, {
    "data-line": "24",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "          ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "backgroundColor"), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token string"
  }, "'rgba(114, 193, 209, 0.8)'"), ` 
`), /* @__PURE__ */ import_react30.default.createElement(_components.div, {
    "data-line": "25",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "        ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), `
`), /* @__PURE__ */ import_react30.default.createElement(_components.div, {
    "data-line": "26",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "      ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), `
`), /* @__PURE__ */ import_react30.default.createElement(_components.div, {
    "data-line": "27",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "    ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), `
`), /* @__PURE__ */ import_react30.default.createElement(_components.div, {
    "data-line": "28",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "  ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, "]"), `
`), /* @__PURE__ */ import_react30.default.createElement(_components.div, {
    "data-line": "29",
    className: "highlight-line",
    "data-highlighted": "true"
  }, /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), `
`), /* @__PURE__ */ import_react30.default.createElement(_components.div, {
    "data-line": "30",
    className: "highlight-line",
    "data-highlighted": "true"
  }, `
`), /* @__PURE__ */ import_react30.default.createElement(_components.div, {
    "data-line": "31",
    className: "highlight-line",
    "data-highlighted": "true"
  }, /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token keyword"
  }, "const"), " option ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token operator"
  }, "="), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), `
`), /* @__PURE__ */ import_react30.default.createElement(_components.div, {
    "data-line": "32",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "    ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "layout"), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), `
`), /* @__PURE__ */ import_react30.default.createElement(_components.div, {
    "data-line": "33",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "      ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "velocityDecay"), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token number"
  }, "0.15"), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), `
`), /* @__PURE__ */ import_react30.default.createElement(_components.div, {
    "data-line": "34",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "      ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "forces"), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, "["), `
`), /* @__PURE__ */ import_react30.default.createElement(_components.div, {
    "data-line": "35",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "        ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "force"), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token string"
  }, "'n-body'"), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "strength"), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token operator"
  }, "-"), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token number"
  }, "1600"), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "distanceMin"), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token number"
  }, "30"), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), `
`), /* @__PURE__ */ import_react30.default.createElement(_components.div, {
    "data-line": "36",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "        ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "force"), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token string"
  }, "'collide'"), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "strength"), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token number"
  }, "0.5"), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token function-variable function"
  }, "radius"), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, "("), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token parameter"
  }, /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "d"), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " any"), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, ")"), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token arrow operator"
  }, "=>"), " d", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, "."), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token property-access"
  }, "cfg"), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token operator"
  }, "?."), "radius ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token operator"
  }, "||"), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token number"
  }, "20"), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "iterations"), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token number"
  }, "1"), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), `
`), /* @__PURE__ */ import_react30.default.createElement(_components.div, {
    "data-line": "37",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "        ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "force"), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token string"
  }, "'link'"), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token function-variable function"
  }, "id"), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, "("), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token parameter"
  }, "d"), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, ")"), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token arrow operator"
  }, "=>"), " d", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, "."), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token property-access"
  }, "id"), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "distance"), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token number"
  }, "200"), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), `
`), /* @__PURE__ */ import_react30.default.createElement(_components.div, {
    "data-line": "38",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "        ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "force"), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token string"
  }, "'x'"), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "strength"), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token number"
  }, "0.1"), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), `
`), /* @__PURE__ */ import_react30.default.createElement(_components.div, {
    "data-line": "39",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "        ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "force"), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token string"
  }, "'y'"), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "strength"), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token number"
  }, "0.1"), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), `
`), /* @__PURE__ */ import_react30.default.createElement(_components.div, {
    "data-line": "40",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "        ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "force"), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token string"
  }, "'center'"), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), `
`), /* @__PURE__ */ import_react30.default.createElement(_components.div, {
    "data-line": "41",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "      ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, "]"), `
`), /* @__PURE__ */ import_react30.default.createElement(_components.div, {
    "data-line": "42",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "  ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), `
`), /* @__PURE__ */ import_react30.default.createElement(_components.div, {
    "data-line": "43",
    className: "highlight-line",
    "data-highlighted": "true"
  }, /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), `
`), /* @__PURE__ */ import_react30.default.createElement(_components.div, {
    "data-line": "44",
    className: "highlight-line",
    "data-highlighted": "true"
  }, /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token keyword module"
  }, "export"), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token keyword module"
  }, "default"), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token keyword"
  }, "function"), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token function"
  }, /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token maybe-class-name"
  }, "Viz")), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, "("), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, ")"), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), `
`), /* @__PURE__ */ import_react30.default.createElement(_components.div, {
    "data-line": "45",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "  ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token keyword"
  }, "const"), " wrapper ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token operator"
  }, "="), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token function"
  }, "useRef"), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, "("), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token keyword null nil"
  }, "null"), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, ")"), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, ";"), `
`), /* @__PURE__ */ import_react30.default.createElement(_components.div, {
    "data-line": "46",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "  ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token function"
  }, "useEffect"), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, "("), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, "("), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, ")"), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token arrow operator"
  }, "=>"), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), `
`), /* @__PURE__ */ import_react30.default.createElement(_components.div, {
    "data-line": "47",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "    ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token keyword"
  }, "const"), " instance ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token operator"
  }, "="), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token keyword"
  }, "new"), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token class-name"
  }, "Force"), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, "("), "wrapper", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, "."), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token property-access"
  }, "current"), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " data", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " option ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, ")"), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, ";"), `
`), /* @__PURE__ */ import_react30.default.createElement(_components.div, {
    "data-line": "48",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "  ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, "["), "wrapper", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, "]"), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, ")"), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, ";"), `
`), /* @__PURE__ */ import_react30.default.createElement(_components.div, {
    "data-line": "49",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "  ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token keyword control-flow"
  }, "return"), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token tag"
  }, /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token tag"
  }, /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, "<"), "div"), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token attr-name"
  }, "ref"), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token script language-javascript"
  }, /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token script-punctuation punctuation"
  }, "="), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), "wrapper", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}")), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token attr-name"
  }, "style"), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token script language-javascript"
  }, /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token script-punctuation punctuation"
  }, "="), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "height"), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token number"
  }, "380"), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "width"), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token number"
  }, "600"), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}")), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, ">")), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token tag"
  }, /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token tag"
  }, /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, "</"), "div"), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, ">")), /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, ";"), `
`), /* @__PURE__ */ import_react30.default.createElement(_components.div, {
    "data-line": "50",
    className: "highlight-line",
    "data-highlighted": "true"
  }, /* @__PURE__ */ import_react30.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), `
`), /* @__PURE__ */ import_react30.default.createElement(_components.div, {
    "data-line": "51",
    className: "highlight-line",
    "data-highlighted": "true"
  }, `
`))));
  return MDXLayout ? /* @__PURE__ */ import_react30.default.createElement(MDXLayout, {
    ...props
  }, _content) : _content;
}
var getting_started_default = MDXContent2, filename2 = "getting-started.mdx", headers2 = typeof attributes2 < "u" && attributes2.headers, meta4 = typeof attributes2 < "u" && attributes2.meta;

// mdx:routes/docs/plugins/fisheys.mdx
var fisheys_exports = {};
__export(fisheys_exports, {
  attributes: () => attributes3,
  default: () => fisheys_default,
  filename: () => filename3,
  headers: () => headers3,
  meta: () => meta5
});
var import_react31 = require("@mdx-js/react"), import_react32 = __toESM(require("react")), attributes3 = {
  meta: {
    title: "\u9C7C\u773C\u63D2\u4EF6 |  @aoviz/graphs",
    description: "\u9C7C\u773C\u63D2\u4EF6"
  },
  sidebar_position: 1
};
function MDXContent3(props = {}) {
  let _components = Object.assign({
    h1: "h1",
    a: "a",
    p: "p",
    code: "code",
    pre: "pre",
    div: "div",
    span: "span"
  }, (0, import_react31.useMDXComponents)(), props.components), { wrapper: MDXLayout } = _components, _content = /* @__PURE__ */ import_react32.default.createElement(import_react32.default.Fragment, null, /* @__PURE__ */ import_react32.default.createElement(_components.h1, {
    id: "\u9C7C\u773C\u63D2\u4EF6"
  }, /* @__PURE__ */ import_react32.default.createElement(_components.a, {
    href: "#\u9C7C\u773C\u63D2\u4EF6"
  }, "\u9C7C\u773C\u63D2\u4EF6")), `
`, /* @__PURE__ */ import_react32.default.createElement(_components.p, null, "\u6309\u4F4F ", /* @__PURE__ */ import_react32.default.createElement(_components.code, null, "ctrl"), " \u952E\uFF0C\u5728\u8282\u70B9\u5904\u6ED1\u52A8\u4F53\u9A8C\u9C7C\u773C\u63D2\u4EF6"), `
`, /* @__PURE__ */ import_react32.default.createElement(_components.pre, {
    code: `import { Force, GRAPH_DATA, FisheyePlugin } from '@aoviz/graphs'
import { useRef, useEffect } from 'react'
const data = {
  nodes: [
    { id: '1', name: '\u4EBA\u5DE5\u667A\u80FD', cfg: { backgroundColor: '#6EA3FD' } },
    { id: '2', name: '\u6DF1\u5EA6\u5B66\u4E60', cfg: { backgroundColor: '#8470A8' } },
    { id: '3', name: 'TensorFlow', cfg: { backgroundColor: '#64B3C0' } },
    { id: '4', name: '\u8C37\u6B4C', cfg: { backgroundColor: '#DF954E' } },
    { id: '5', name: '\u4EBA\u5DE5\u667A\u80FD\u516C\u53F8', cfg: { backgroundColor: '#70A88F' } },
    { id: '6', name: '\u8BED\u4E49\u7F51', cfg: { backgroundColor: '#ACBBDB' } },
    { id: '7', name: '\u77E5\u8BC6\u56FE\u8C31', cfg: { backgroundColor: '#425B8A' } },
    { id: '8', name: '\u56FE\u7075', cfg: { backgroundColor: '#ADCAF1' } },
    { id: '9', name: '\u6570\u5B66\u5BB6', cfg: { backgroundColor: '#505C59' } },
    { id: '10', name: '\u56FE\u7075\u6D4B\u8BD5', cfg: { backgroundColor: '#CBCCC0' } },
    { id: '11', name: '\u82F1\u56FD', cfg: { backgroundColor: '#939F96' } },
    { id: '12', name: '\u5927\u4E0D\u5217\u98A0\u{1F1EC}\u{1F1E7}', cfg: { backgroundColor: '#A47878' } }
  ],
  links: [
    { id: 'a', name: '\u5B9E\u73B0\u65B9\u5F0F', source: '2', target: '3' },
    { id: 'b', name: '\u63D0\u51FA', source: '4', target: '3' },
    { id: 'c', name: 'Isa', source: '4', target: '5' },
    { id: 'd', name: '\u63D0\u51FA', source: '4', target: '7' },
    { id: 'e', name: 'isFrom', source: '7', target: '6' },
    { id: 'f', name: 'subTopic', source: '1', target: '2' },
    { id: 'g', name: 'subTopic', source: '1', target: '7' },
    { id: 'h', name: '\u4E4B\u7236\u662F', source: '1', target: '8' },
    { id: 'i', name: 'Isa', source: '8', target: '9' },
    { id: 'j', name: '\u63D0\u51FA', source: '8', target: '10' },
    { id: 'k', name: '\u56FD\u7C4D', source: '8', target: '11' },
    { id: 'l', name: '\u522B\u540D', source: '11', target: '12' },
    { id: 'm', name: '\u88AB\u63D0\u51FA', source: '10', target: '8' }
  ]
}
const option = {
  link:{
    label: {
      backgroundColor: 'rgba(114, 193, 209, 0.8)' 
    }
  },
  layout: {
    velocityDecay: 0.15,
    forces: [
      { force: 'n-body', strength: -1600, distanceMin: 30 },
      { force: 'collide', strength: 0.5, radius: (d: any) => d.cfg?.radius || 20, iterations: 1 },
      { force: 'link', id: (d) => d.id, distance: 200 },
      { force: 'x', strength: 0.1 },
      { force: 'y', strength: 0.1 },
      { force: 'center' }
    ]
  }
}
export default function Viz() {
  const wrapper = useRef(null);
  useEffect(() => {
    const instance = new Force(wrapper.current,{ data, option });
    instance.setPlugins([new FisheyePlugin()])
		window._a = instance
  }, [wrapper]);
  return <div style={{ height: 380, width: 600}}>
		<div ref={wrapper} style={{ height: 380, width: 600}}></div>
	</div>;
}

`,
    live: "true",
    template: "imperative"
  }, /* @__PURE__ */ import_react32.default.createElement(_components.code, {
    className: "language-jsx",
    live: "true",
    template: "imperative"
  }, /* @__PURE__ */ import_react32.default.createElement(_components.div, {
    "data-line": "1",
    className: "highlight-line",
    "data-highlighted": "true"
  }, /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token keyword module"
  }, "import"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token maybe-class-name"
  }, "Force"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token constant"
  }, "GRAPH_DATA"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token maybe-class-name"
  }, "FisheyePlugin"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token keyword module"
  }, "from"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token string"
  }, "'@aoviz/graphs'"), `
`), /* @__PURE__ */ import_react32.default.createElement(_components.div, {
    "data-line": "2",
    className: "highlight-line",
    "data-highlighted": "true"
  }, /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token keyword module"
  }, "import"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token imports"
  }, /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " useRef", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " useEffect ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}")), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token keyword module"
  }, "from"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token string"
  }, "'react'"), `
`), /* @__PURE__ */ import_react32.default.createElement(_components.div, {
    "data-line": "3",
    className: "highlight-line",
    "data-highlighted": "true"
  }, /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token keyword"
  }, "const"), " data ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, "="), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), `
`), /* @__PURE__ */ import_react32.default.createElement(_components.div, {
    "data-line": "4",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "  ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "nodes"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "["), `
`), /* @__PURE__ */ import_react32.default.createElement(_components.div, {
    "data-line": "5",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "    ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "id"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token string"
  }, "'1'"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "name"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token string"
  }, "'\u4EBA\u5DE5\u667A\u80FD'"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "cfg"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "backgroundColor"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token string"
  }, "'#6EA3FD'"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), `
`), /* @__PURE__ */ import_react32.default.createElement(_components.div, {
    "data-line": "6",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "    ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "id"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token string"
  }, "'2'"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "name"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token string"
  }, "'\u6DF1\u5EA6\u5B66\u4E60'"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "cfg"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "backgroundColor"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token string"
  }, "'#8470A8'"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), `
`), /* @__PURE__ */ import_react32.default.createElement(_components.div, {
    "data-line": "7",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "    ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "id"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token string"
  }, "'3'"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "name"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token string"
  }, "'TensorFlow'"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "cfg"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "backgroundColor"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token string"
  }, "'#64B3C0'"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), `
`), /* @__PURE__ */ import_react32.default.createElement(_components.div, {
    "data-line": "8",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "    ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "id"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token string"
  }, "'4'"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "name"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token string"
  }, "'\u8C37\u6B4C'"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "cfg"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "backgroundColor"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token string"
  }, "'#DF954E'"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), `
`), /* @__PURE__ */ import_react32.default.createElement(_components.div, {
    "data-line": "9",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "    ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "id"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token string"
  }, "'5'"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "name"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token string"
  }, "'\u4EBA\u5DE5\u667A\u80FD\u516C\u53F8'"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "cfg"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "backgroundColor"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token string"
  }, "'#70A88F'"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), `
`), /* @__PURE__ */ import_react32.default.createElement(_components.div, {
    "data-line": "10",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "    ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "id"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token string"
  }, "'6'"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "name"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token string"
  }, "'\u8BED\u4E49\u7F51'"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "cfg"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "backgroundColor"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token string"
  }, "'#ACBBDB'"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), `
`), /* @__PURE__ */ import_react32.default.createElement(_components.div, {
    "data-line": "11",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "    ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "id"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token string"
  }, "'7'"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "name"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token string"
  }, "'\u77E5\u8BC6\u56FE\u8C31'"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "cfg"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "backgroundColor"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token string"
  }, "'#425B8A'"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), `
`), /* @__PURE__ */ import_react32.default.createElement(_components.div, {
    "data-line": "12",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "    ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "id"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token string"
  }, "'8'"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "name"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token string"
  }, "'\u56FE\u7075'"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "cfg"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "backgroundColor"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token string"
  }, "'#ADCAF1'"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), `
`), /* @__PURE__ */ import_react32.default.createElement(_components.div, {
    "data-line": "13",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "    ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "id"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token string"
  }, "'9'"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "name"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token string"
  }, "'\u6570\u5B66\u5BB6'"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "cfg"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "backgroundColor"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token string"
  }, "'#505C59'"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), `
`), /* @__PURE__ */ import_react32.default.createElement(_components.div, {
    "data-line": "14",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "    ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "id"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token string"
  }, "'10'"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "name"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token string"
  }, "'\u56FE\u7075\u6D4B\u8BD5'"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "cfg"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "backgroundColor"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token string"
  }, "'#CBCCC0'"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), `
`), /* @__PURE__ */ import_react32.default.createElement(_components.div, {
    "data-line": "15",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "    ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "id"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token string"
  }, "'11'"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "name"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token string"
  }, "'\u82F1\u56FD'"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "cfg"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "backgroundColor"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token string"
  }, "'#939F96'"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), `
`), /* @__PURE__ */ import_react32.default.createElement(_components.div, {
    "data-line": "16",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "    ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "id"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token string"
  }, "'12'"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "name"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token string"
  }, "'\u5927\u4E0D\u5217\u98A0\u{1F1EC}\u{1F1E7}'"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "cfg"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "backgroundColor"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token string"
  }, "'#A47878'"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), `
`), /* @__PURE__ */ import_react32.default.createElement(_components.div, {
    "data-line": "17",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "  ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "]"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), `
`), /* @__PURE__ */ import_react32.default.createElement(_components.div, {
    "data-line": "18",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "  ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "links"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "["), `
`), /* @__PURE__ */ import_react32.default.createElement(_components.div, {
    "data-line": "19",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "    ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "id"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token string"
  }, "'a'"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "name"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token string"
  }, "'\u5B9E\u73B0\u65B9\u5F0F'"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "source"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token string"
  }, "'2'"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "target"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token string"
  }, "'3'"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), `
`), /* @__PURE__ */ import_react32.default.createElement(_components.div, {
    "data-line": "20",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "    ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "id"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token string"
  }, "'b'"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "name"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token string"
  }, "'\u63D0\u51FA'"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "source"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token string"
  }, "'4'"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "target"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token string"
  }, "'3'"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), `
`), /* @__PURE__ */ import_react32.default.createElement(_components.div, {
    "data-line": "21",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "    ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "id"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token string"
  }, "'c'"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "name"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token string"
  }, "'Isa'"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "source"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token string"
  }, "'4'"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "target"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token string"
  }, "'5'"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), `
`), /* @__PURE__ */ import_react32.default.createElement(_components.div, {
    "data-line": "22",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "    ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "id"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token string"
  }, "'d'"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "name"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token string"
  }, "'\u63D0\u51FA'"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "source"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token string"
  }, "'4'"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "target"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token string"
  }, "'7'"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), `
`), /* @__PURE__ */ import_react32.default.createElement(_components.div, {
    "data-line": "23",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "    ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "id"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token string"
  }, "'e'"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "name"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token string"
  }, "'isFrom'"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "source"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token string"
  }, "'7'"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "target"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token string"
  }, "'6'"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), `
`), /* @__PURE__ */ import_react32.default.createElement(_components.div, {
    "data-line": "24",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "    ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "id"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token string"
  }, "'f'"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "name"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token string"
  }, "'subTopic'"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "source"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token string"
  }, "'1'"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "target"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token string"
  }, "'2'"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), `
`), /* @__PURE__ */ import_react32.default.createElement(_components.div, {
    "data-line": "25",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "    ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "id"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token string"
  }, "'g'"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "name"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token string"
  }, "'subTopic'"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "source"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token string"
  }, "'1'"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "target"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token string"
  }, "'7'"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), `
`), /* @__PURE__ */ import_react32.default.createElement(_components.div, {
    "data-line": "26",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "    ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "id"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token string"
  }, "'h'"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "name"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token string"
  }, "'\u4E4B\u7236\u662F'"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "source"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token string"
  }, "'1'"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "target"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token string"
  }, "'8'"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), `
`), /* @__PURE__ */ import_react32.default.createElement(_components.div, {
    "data-line": "27",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "    ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "id"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token string"
  }, "'i'"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "name"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token string"
  }, "'Isa'"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "source"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token string"
  }, "'8'"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "target"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token string"
  }, "'9'"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), `
`), /* @__PURE__ */ import_react32.default.createElement(_components.div, {
    "data-line": "28",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "    ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "id"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token string"
  }, "'j'"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "name"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token string"
  }, "'\u63D0\u51FA'"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "source"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token string"
  }, "'8'"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "target"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token string"
  }, "'10'"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), `
`), /* @__PURE__ */ import_react32.default.createElement(_components.div, {
    "data-line": "29",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "    ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "id"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token string"
  }, "'k'"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "name"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token string"
  }, "'\u56FD\u7C4D'"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "source"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token string"
  }, "'8'"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "target"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token string"
  }, "'11'"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), `
`), /* @__PURE__ */ import_react32.default.createElement(_components.div, {
    "data-line": "30",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "    ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "id"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token string"
  }, "'l'"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "name"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token string"
  }, "'\u522B\u540D'"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "source"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token string"
  }, "'11'"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "target"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token string"
  }, "'12'"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), `
`), /* @__PURE__ */ import_react32.default.createElement(_components.div, {
    "data-line": "31",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "    ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "id"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token string"
  }, "'m'"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "name"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token string"
  }, "'\u88AB\u63D0\u51FA'"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "source"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token string"
  }, "'10'"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "target"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token string"
  }, "'8'"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), `
`), /* @__PURE__ */ import_react32.default.createElement(_components.div, {
    "data-line": "32",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "  ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "]"), `
`), /* @__PURE__ */ import_react32.default.createElement(_components.div, {
    "data-line": "33",
    className: "highlight-line",
    "data-highlighted": "true"
  }, /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), `
`), /* @__PURE__ */ import_react32.default.createElement(_components.div, {
    "data-line": "34",
    className: "highlight-line",
    "data-highlighted": "true"
  }, /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token keyword"
  }, "const"), " option ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, "="), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), `
`), /* @__PURE__ */ import_react32.default.createElement(_components.div, {
    "data-line": "35",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "  ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "link"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), `
`), /* @__PURE__ */ import_react32.default.createElement(_components.div, {
    "data-line": "36",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "    ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "label"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), `
`), /* @__PURE__ */ import_react32.default.createElement(_components.div, {
    "data-line": "37",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "      ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "backgroundColor"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token string"
  }, "'rgba(114, 193, 209, 0.8)'"), ` 
`), /* @__PURE__ */ import_react32.default.createElement(_components.div, {
    "data-line": "38",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "    ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), `
`), /* @__PURE__ */ import_react32.default.createElement(_components.div, {
    "data-line": "39",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "  ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), `
`), /* @__PURE__ */ import_react32.default.createElement(_components.div, {
    "data-line": "40",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "  ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "layout"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), `
`), /* @__PURE__ */ import_react32.default.createElement(_components.div, {
    "data-line": "41",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "    ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "velocityDecay"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token number"
  }, "0.15"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), `
`), /* @__PURE__ */ import_react32.default.createElement(_components.div, {
    "data-line": "42",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "    ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "forces"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "["), `
`), /* @__PURE__ */ import_react32.default.createElement(_components.div, {
    "data-line": "43",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "      ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "force"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token string"
  }, "'n-body'"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "strength"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, "-"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token number"
  }, "1600"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "distanceMin"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token number"
  }, "30"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), `
`), /* @__PURE__ */ import_react32.default.createElement(_components.div, {
    "data-line": "44",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "      ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "force"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token string"
  }, "'collide'"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "strength"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token number"
  }, "0.5"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token function-variable function"
  }, "radius"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "("), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token parameter"
  }, /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "d"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " any"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ")"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token arrow operator"
  }, "=>"), " d", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "."), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token property-access"
  }, "cfg"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, "?."), "radius ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, "||"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token number"
  }, "20"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "iterations"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token number"
  }, "1"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), `
`), /* @__PURE__ */ import_react32.default.createElement(_components.div, {
    "data-line": "45",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "      ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "force"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token string"
  }, "'link'"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token function-variable function"
  }, "id"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "("), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token parameter"
  }, "d"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ")"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token arrow operator"
  }, "=>"), " d", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "."), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token property-access"
  }, "id"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "distance"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token number"
  }, "200"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), `
`), /* @__PURE__ */ import_react32.default.createElement(_components.div, {
    "data-line": "46",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "      ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "force"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token string"
  }, "'x'"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "strength"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token number"
  }, "0.1"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), `
`), /* @__PURE__ */ import_react32.default.createElement(_components.div, {
    "data-line": "47",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "      ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "force"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token string"
  }, "'y'"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "strength"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token number"
  }, "0.1"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), `
`), /* @__PURE__ */ import_react32.default.createElement(_components.div, {
    "data-line": "48",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "      ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "force"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token string"
  }, "'center'"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), `
`), /* @__PURE__ */ import_react32.default.createElement(_components.div, {
    "data-line": "49",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "    ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "]"), `
`), /* @__PURE__ */ import_react32.default.createElement(_components.div, {
    "data-line": "50",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "  ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), `
`), /* @__PURE__ */ import_react32.default.createElement(_components.div, {
    "data-line": "51",
    className: "highlight-line",
    "data-highlighted": "true"
  }, /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), `
`), /* @__PURE__ */ import_react32.default.createElement(_components.div, {
    "data-line": "52",
    className: "highlight-line",
    "data-highlighted": "true"
  }, /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token keyword module"
  }, "export"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token keyword module"
  }, "default"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token keyword"
  }, "function"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token function"
  }, /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token maybe-class-name"
  }, "Viz")), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "("), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ")"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), `
`), /* @__PURE__ */ import_react32.default.createElement(_components.div, {
    "data-line": "53",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "  ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token keyword"
  }, "const"), " wrapper ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, "="), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token function"
  }, "useRef"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "("), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token keyword null nil"
  }, "null"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ")"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ";"), `
`), /* @__PURE__ */ import_react32.default.createElement(_components.div, {
    "data-line": "54",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "  ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token function"
  }, "useEffect"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "("), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "("), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ")"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token arrow operator"
  }, "=>"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), `
`), /* @__PURE__ */ import_react32.default.createElement(_components.div, {
    "data-line": "55",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "    ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token keyword"
  }, "const"), " instance ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, "="), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token keyword"
  }, "new"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token class-name"
  }, "Force"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "("), "wrapper", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "."), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token property-access"
  }, "current"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " data", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " option ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ")"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ";"), `
`), /* @__PURE__ */ import_react32.default.createElement(_components.div, {
    "data-line": "56",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "    instance", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "."), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token method function property-access"
  }, "setPlugins"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "("), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "["), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token keyword"
  }, "new"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token class-name"
  }, "FisheyePlugin"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "("), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ")"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "]"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ")"), `
`), /* @__PURE__ */ import_react32.default.createElement(_components.div, {
    "data-line": "57",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "		", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token dom variable"
  }, "window"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "."), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token property-access"
  }, "_a"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, "="), ` instance
`), /* @__PURE__ */ import_react32.default.createElement(_components.div, {
    "data-line": "58",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "  ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "["), "wrapper", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "]"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ")"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ";"), `
`), /* @__PURE__ */ import_react32.default.createElement(_components.div, {
    "data-line": "59",
    className: "highlight-line",
    "data-highlighted": "true"
  }, "  ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token keyword control-flow"
  }, "return"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token tag"
  }, /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token tag"
  }, /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "<"), "div"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token attr-name"
  }, "style"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token script language-javascript"
  }, /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token script-punctuation punctuation"
  }, "="), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "height"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token number"
  }, "380"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "width"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token number"
  }, "600"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}")), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ">")), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token plain-text"
  }), `
`), /* @__PURE__ */ import_react32.default.createElement(_components.div, {
    "data-line": "60",
    className: "highlight-line",
    "data-highlighted": "true"
  }, /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token plain-text"
  }, "		"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token tag"
  }, /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token tag"
  }, /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "<"), "div"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token attr-name"
  }, "ref"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token script language-javascript"
  }, /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token script-punctuation punctuation"
  }, "="), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), "wrapper", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}")), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token attr-name"
  }, "style"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token script language-javascript"
  }, /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token script-punctuation punctuation"
  }, "="), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "{"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "height"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token number"
  }, "380"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ","), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token literal-property property"
  }, "width"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token operator"
  }, ":"), " ", /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token number"
  }, "600"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}")), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ">")), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token tag"
  }, /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token tag"
  }, /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "</"), "div"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ">")), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token plain-text"
  }), `
`), /* @__PURE__ */ import_react32.default.createElement(_components.div, {
    "data-line": "61",
    className: "highlight-line",
    "data-highlighted": "true"
  }, /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token plain-text"
  }, "	"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token tag"
  }, /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token tag"
  }, /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "</"), "div"), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ">")), /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, ";"), `
`), /* @__PURE__ */ import_react32.default.createElement(_components.div, {
    "data-line": "62",
    className: "highlight-line",
    "data-highlighted": "true"
  }, /* @__PURE__ */ import_react32.default.createElement(_components.span, {
    className: "token punctuation"
  }, "}"), `
`), /* @__PURE__ */ import_react32.default.createElement(_components.div, {
    "data-line": "63",
    className: "highlight-line",
    "data-highlighted": "true"
  }, `
`))));
  return MDXLayout ? /* @__PURE__ */ import_react32.default.createElement(MDXLayout, {
    ...props
  }, _content) : _content;
}
var fisheys_default = MDXContent3, filename3 = "fisheys.mdx", headers3 = typeof attributes3 < "u" && attributes3.headers, meta5 = typeof attributes3 < "u" && attributes3.meta;

// mdx:routes/docs/plugins/index.mdx
var plugins_exports = {};
__export(plugins_exports, {
  attributes: () => attributes4,
  default: () => plugins_default,
  filename: () => filename4,
  headers: () => headers4,
  meta: () => meta6
});
var import_react33 = require("@mdx-js/react"), import_react34 = __toESM(require("react")), attributes4 = {
  meta: {
    title: "Plugins | @aoviz/graphs"
  },
  sidebar_position: 3,
  noPage: !0
};
function MDXContent4(props = {}) {
  let _components = Object.assign({}, (0, import_react33.useMDXComponents)(), props.components), { wrapper: MDXLayout } = _components, _content = /* @__PURE__ */ import_react34.default.createElement(import_react34.default.Fragment, null);
  return MDXLayout ? /* @__PURE__ */ import_react34.default.createElement(MDXLayout, {
    ...props
  }, _content) : _content;
}
var plugins_default = MDXContent4, filename4 = "index.mdx", headers4 = typeof attributes4 < "u" && attributes4.headers, meta6 = typeof attributes4 < "u" && attributes4.meta;

// mdx:routes/docs/instance.mdx
var instance_exports = {};
__export(instance_exports, {
  attributes: () => attributes5,
  default: () => instance_default,
  filename: () => filename5,
  headers: () => headers5,
  meta: () => meta7
});
var import_react35 = require("@mdx-js/react"), import_react36 = __toESM(require("react"));

// app/data/fixtures.tsx
var import_phosphor_react11 = require("phosphor-react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
var EVENTS_CELL = [
  {
    label: "events",
    content: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
      children: [
        "This is not a prop but rather a collection, see",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
          href: "/docs/advanced/events",
          children: "Events"
        }, void 0, !1, {
          fileName: "app/data/fixtures.tsx",
          lineNumber: 332,
          columnNumber: 9
        }, this),
        " for more information."
      ]
    }, void 0, !0, {
      fileName: "app/data/fixtures.tsx",
      lineNumber: 330,
      columnNumber: 7
    }, this)
  },
  "function",
  null
], REF_CELL = [
  {
    label: "ref",
    content: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
      children: [
        "Used to access the imperative API. Animations never auto-start when",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", {
          children: "ref"
        }, void 0, !1, {
          fileName: "app/data/fixtures.tsx",
          lineNumber: 346,
          columnNumber: 9
        }, this),
        " is defined."
      ]
    }, void 0, !0, {
      fileName: "app/data/fixtures.tsx",
      lineNumber: 344,
      columnNumber: 7
    }, this)
  },
  "SpringRef",
  null
], ToContent = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
  children: [
    "The ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", {
      children: "to"
    }, void 0, !1, {
      fileName: "app/data/fixtures.tsx",
      lineNumber: 356,
      columnNumber: 9
    }, this),
    " prop, is very versatile, for more information checkout out ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
      href: "/docs/advanced/async-animations",
      children: "Async Animations"
    }, void 0, !1, {
      fileName: "app/data/fixtures.tsx",
      lineNumber: 357,
      columnNumber: 9
    }, this),
    "."
  ]
}, void 0, !0, {
  fileName: "app/data/fixtures.tsx",
  lineNumber: 355,
  columnNumber: 3
}, this), DEFAULT_CONFIG_DATA = [
  ["from", "object", null],
  [
    {
      label: "to",
      content: ToContent
    },
    {
      label: "object | object[] | function",
      content: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", {
        children: "(next: (props?: object) => Promise<void>, cancel: () => void) => Promise<void>"
      }, void 0, !1, {
        fileName: "app/data/fixtures.tsx",
        lineNumber: 371,
        columnNumber: 9
      }, this)
    },
    null
  ],
  [
    "loop",
    {
      label: "boolean | object | function",
      content: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", {
        children: "() => boolean"
      }, void 0, !1, {
        fileName: "app/data/fixtures.tsx",
        lineNumber: 380,
        columnNumber: 16
      }, this)
    },
    null
  ],
  [
    {
      label: "delay",
      content: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
        children: "Delay in ms before the animation starts."
      }, void 0, !1, {
        fileName: "app/data/fixtures.tsx",
        lineNumber: 387,
        columnNumber: 16
      }, this)
    },
    {
      label: "number | function",
      content: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", {
        children: "(key: string) => number"
      }, void 0, !1, {
        fileName: "app/data/fixtures.tsx",
        lineNumber: 391,
        columnNumber: 16
      }, this)
    },
    null
  ],
  [
    {
      label: "immediate",
      content: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
        children: "Prevents the animation if true."
      }, void 0, !1, {
        fileName: "app/data/fixtures.tsx",
        lineNumber: 398,
        columnNumber: 16
      }, this)
    },
    {
      label: "boolean | function",
      content: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", {
        children: "(key: string) => boolean"
      }, void 0, !1, {
        fileName: "app/data/fixtures.tsx",
        lineNumber: 402,
        columnNumber: 16
      }, this)
    },
    null
  ],
  [
    {
      label: "reset",
      content: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
        children: "Resets the spring so it plays from the start again when true."
      }, void 0, !1, {
        fileName: "app/data/fixtures.tsx",
        lineNumber: 410,
        columnNumber: 9
      }, this)
    },
    "boolean",
    null
  ],
  [
    {
      label: "reverse",
      content: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
        children: [
          "Reverse the ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", {
            children: "to"
          }, void 0, !1, {
            fileName: "app/data/fixtures.tsx",
            lineNumber: 421,
            columnNumber: 23
          }, this),
          " and ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", {
            children: "from"
          }, void 0, !1, {
            fileName: "app/data/fixtures.tsx",
            lineNumber: 421,
            columnNumber: 43
          }, this),
          " prop so that",
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", {
            children: "to"
          }, void 0, !1, {
            fileName: "app/data/fixtures.tsx",
            lineNumber: 422,
            columnNumber: 11
          }, this),
          " is the initial starting state."
        ]
      }, void 0, !0, {
        fileName: "app/data/fixtures.tsx",
        lineNumber: 420,
        columnNumber: 9
      }, this)
    },
    "boolean",
    null
  ],
  [
    {
      label: "pause",
      content: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
        children: "Pause an animation at it's current point."
      }, void 0, !1, {
        fileName: "app/data/fixtures.tsx",
        lineNumber: 432,
        columnNumber: 16
      }, this)
    },
    "boolean",
    null
  ],
  [
    "cancel",
    {
      label: "boolean | string | string[] | function",
      content: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", {
        children: "(key: string) => boolean"
      }, void 0, !1, {
        fileName: "app/data/fixtures.tsx",
        lineNumber: 441,
        columnNumber: 16
      }, this)
    },
    null
  ],
  REF_CELL,
  [
    {
      label: "config",
      content: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
        children: [
          "Spring config (mass / tension etc.), see",
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
            href: "/docs/advanced/config",
            children: "Config"
          }, void 0, !1, {
            fileName: "app/data/fixtures.tsx",
            lineNumber: 452,
            columnNumber: 11
          }, this),
          " for more information."
        ]
      }, void 0, !0, {
        fileName: "app/data/fixtures.tsx",
        lineNumber: 450,
        columnNumber: 9
      }, this)
    },
    {
      label: "object | function",
      content: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", {
        children: "(key: string) => SpringConfig"
      }, void 0, !1, {
        fileName: "app/data/fixtures.tsx",
        lineNumber: 458,
        columnNumber: 16
      }, this)
    },
    {
      label: "object",
      content: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", {
        children: "{ mass: 1, tension: 170, friction: 26 }"
      }, void 0, !1, {
        fileName: "app/data/fixtures.tsx",
        lineNumber: 462,
        columnNumber: 16
      }, this)
    }
  ],
  EVENTS_CELL
];

// app/components/Tables/TableCell.tsx
var Popover = __toESM(require("@radix-ui/react-popover")), import_phosphor_react12 = require("phosphor-react");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), renderCell = (template = "config") => (datum, index) => {
  let isDarkMode = useIsDarkTheme();
  return datum === null ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, {
    isThirdItem: template === "config" ? index === 2 : !1,
    children: "\u2013"
  }, `${datum}_${index}`, !1, {
    fileName: "app/components/Tables/TableCell.tsx",
    lineNumber: 19,
    columnNumber: 9
  }, this) : typeof datum == "object" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popover.Root, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, {
      isPropName: template === "config" ? index === 0 : !1,
      isThirdItem: template === "config" ? index === 2 : !1,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", {
          children: datum.label
        }, void 0, !1, {
          fileName: "app/components/Tables/TableCell.tsx",
          lineNumber: 33,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PopoverTrigger, {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_phosphor_react12.Info, {
            size: 16,
            weight: isDarkMode ? "light" : "regular"
          }, void 0, !1, {
            fileName: "app/components/Tables/TableCell.tsx",
            lineNumber: 35,
            columnNumber: 15
          }, this)
        }, void 0, !1, {
          fileName: "app/components/Tables/TableCell.tsx",
          lineNumber: 34,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PopoverContent, {
          onOpenAutoFocus: (e) => e.preventDefault(),
          side: "top",
          sideOffset: 10,
          isProp: index === 0,
          children: [
            datum.content,
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PopoverArrow, {}, void 0, !1, {
              fileName: "app/components/Tables/TableCell.tsx",
              lineNumber: 43,
              columnNumber: 15
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/components/Tables/TableCell.tsx",
          lineNumber: 37,
          columnNumber: 13
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/components/Tables/TableCell.tsx",
      lineNumber: 30,
      columnNumber: 11
    }, this)
  }, void 0, !1, {
    fileName: "app/components/Tables/TableCell.tsx",
    lineNumber: 29,
    columnNumber: 9
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, {
    isPropName: template === "config" ? index === 0 : !1,
    isThirdItem: template === "config" ? index === 2 : !1,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", {
      children: datum
    }, void 0, !1, {
      fileName: "app/components/Tables/TableCell.tsx",
      lineNumber: 55,
      columnNumber: 9
    }, this)
  }, datum, !1, {
    fileName: "app/components/Tables/TableCell.tsx",
    lineNumber: 51,
    columnNumber: 7
  }, this);
}, TableCell = styled("td", {
  fontFamily: "$mono",
  fontSize: "$XS",
  lineHeight: "$XS",
  py: "$15",
  pr: "$10",
  "& > code": {
    borderRadius: "$r4",
    py: 2,
    px: 5
  },
  variants: {
    isPropName: {
      true: {
        "& > code": {
          backgroundColor: "#ff6d6d33",
          color: "$red100"
        }
      },
      false: {
        "& > code": {
          backgroundColor: "$steel20",
          color: "$steel80",
          [`.${dark} &`]: {
            color: "$steel40"
          }
        }
      }
    },
    isThirdItem: {
      true: {
        display: "none",
        "@tabletUp": {
          display: "table-cell"
        }
      }
    }
  }
}), PopoverTrigger = styled(Popover.Trigger, {
  background: "transparent",
  border: "none",
  p: 0,
  m: 0,
  ml: "$5",
  cursor: "pointer",
  width: 24,
  height: 24,
  borderRadius: "$r4",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  top: 3,
  hover: {
    background: "#ff6d6d66"
  }
}), PopoverArrow = styled(Popover.Arrow, {
  fill: "$codeBackground"
}), PopoverContent = styled(Popover.Content, {
  fontFamily: "$sans-var",
  fontSize: "$XXS",
  lineHeight: "$XXS",
  p: "$10 $15",
  background: "$codeBackground",
  borderRadius: "$r8",
  "& > code": {
    borderRadius: "$r4",
    py: 2,
    px: 5,
    whiteSpace: "nowrap"
  },
  "& a": { ...InlineLinkStyles },
  "&::-webkit-scrollbar": {
    display: "none"
  },
  scrollbarWidth: "none",
  variants: {
    isProp: {
      true: {
        maxWidth: 265
      },
      false: {
        maxWidth: 400,
        overflow: "scroll"
      }
    }
  }
});

// app/components/Tables/TablesConfig.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), TablesConfiguration = ({
  data = DEFAULT_CONFIG_DATA
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Table, {
  children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", {
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHeadCell, {
            css: { width: "40%", "@tabletUp": { width: "30%" } },
            children: "Prop"
          }, void 0, !1, {
            fileName: "app/components/Tables/TablesConfig.tsx",
            lineNumber: 21,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHeadCell, {
            css: { width: "60%", "@tabletUp": { width: "50%" } },
            children: "Type"
          }, void 0, !1, {
            fileName: "app/components/Tables/TablesConfig.tsx",
            lineNumber: 24,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHeadCell, {
            css: { "@tabletUp": { width: "20%" } },
            isThirdItem: !0,
            children: "Default"
          }, void 0, !1, {
            fileName: "app/components/Tables/TablesConfig.tsx",
            lineNumber: 27,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/Tables/TablesConfig.tsx",
        lineNumber: 20,
        columnNumber: 7
      }, this)
    }, void 0, !1, {
      fileName: "app/components/Tables/TablesConfig.tsx",
      lineNumber: 19,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", {
      children: data.map((row, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", {
        children: row.map(renderCell())
      }, index, !1, {
        fileName: "app/components/Tables/TablesConfig.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this))
    }, void 0, !1, {
      fileName: "app/components/Tables/TablesConfig.tsx",
      lineNumber: 32,
      columnNumber: 5
    }, this)
  ]
}, void 0, !0, {
  fileName: "app/components/Tables/TablesConfig.tsx",
  lineNumber: 18,
  columnNumber: 3
}, this);
var TableScrollWrapper = styled("div", {
  width: "100%",
  overflow: "scroll"
}), Table = styled("table", {
  width: "100%",
  textAlign: "left",
  borderCollapse: "collapse",
  "& td, & th": {
    borderBottom: "2px solid $codeBackground"
  }
}), TableHeadCell = styled("th", {
  fontFamily: "$sans-var",
  fontSize: "$XXS",
  lineHeight: "$XXS",
  py: "$15",
  variants: {
    isThirdItem: {
      true: {
        display: "none",
        "@tabletUp": {
          display: "table-cell"
        }
      }
    }
  }
});

// app/data/force.tsx
var FORCE_INSTANCE_DATA = [
  [{ label: "data", content: "\u8BBE\u7F6E\u6E32\u67D3\u7684\u6570\u636E\uFF0C\u8C03\u7528\u8BE5\u65B9\u6CD5\u540E\u81EA\u52A8\u6267\u884C\u5E03\u5C40\u91CD\u7ED8\u64CD\u4F5C" }, "(d: IForceData) => void", null],
  [{ label: "setOption", content: "\u8BBE\u7F6E\u914D\u7F6E" }, "(o: IOption) => void", null],
  [{ label: "setPlugins", content: "\u6CE8\u5165\u542F\u7528\u7684\u63D2\u4EF6" }, "(p: Plugin[]) => void", null],
  [{ label: "getZoom", content: "\u83B7\u53D6\u5F53\u524D\u7F29\u653E\u6BD4\u4F8B" }, "number", null],
  [{ label: "setZoom", content: "\u8BBE\u7F6E\u7F29\u653E\u6BD4\u4F8B" }, "( z: number) => void", null],
  [{ label: "resize", content: "\u8C03\u6574\u89C6\u56FE\u5C3A\u5BF8" }, { label: "(s?: { width: number, height: number } => void)", content: "\u53C2\u6570\u4E3A\u7A7A\u65F6\u6839\u636E\u5F53\u524D\u5143\u7D20\u7684\u5927\u5C0F\u53D8\u5316" }, null],
  [{ label: "dispose", content: "\u9500\u6BC1\u6240\u6709\u76D1\u542C\u548C\u7ED8\u5236\u65B9\u6CD5" }, "() => void", null],
  [{ label: "onNodeClick$", content: "\u83B7\u53D6\u8282\u70B9\u7684 Click \u4E8B\u4EF6" }, "Observable<IRenderNode>", null],
  [{ label: "onNodeHover$", content: "\u83B7\u53D6\u8282\u70B9\u7684 Hover \u4E8B\u4EF6" }, "Observable<IRenderNode | null>", null],
  [{ label: "onLinkClick$", content: "\u83B7\u53D6\u5173\u7CFB\u7684 Click \u4E8B\u4EF6" }, "Observable<IRenderLink>", null],
  [{ label: "onLinkHover$", content: "\u83B7\u53D6\u5173\u7CFB\u7684 Hover \u4E8B\u4EF6" }, "Observable<IRenderLink | null>", null],
  [{ label: "onNodeDrag$", content: "\u83B7\u53D6\u8282\u70B9\u7684 drag \u4E8B\u4EF6" }, "Observable<INodeDragEvent>", null]
];

// mdx:routes/docs/instance.mdx
var attributes5 = {
  meta: {
    title: "Graph \u65B9\u6CD5 | @aoviz/graphs",
    description: "\u5185\u7F6E\u65B9\u6CD5"
  },
  sidebar_position: 2
};
function MDXContent5(props = {}) {
  let _components = Object.assign({
    h2: "h2",
    a: "a"
  }, (0, import_react35.useMDXComponents)(), props.components), { wrapper: MDXLayout } = _components, _content = /* @__PURE__ */ import_react36.default.createElement(import_react36.default.Fragment, null, /* @__PURE__ */ import_react36.default.createElement(_components.h2, {
    id: "\u65B9\u6CD5\u4ECB\u7ECD"
  }, /* @__PURE__ */ import_react36.default.createElement(_components.a, {
    href: "#\u65B9\u6CD5\u4ECB\u7ECD"
  }, "\u65B9\u6CD5\u4ECB\u7ECD")), `
`, `
`, /* @__PURE__ */ import_react36.default.createElement(TablesConfiguration, {
    data: FORCE_INSTANCE_DATA
  }));
  return MDXLayout ? /* @__PURE__ */ import_react36.default.createElement(MDXLayout, {
    ...props
  }, _content) : _content;
}
var instance_default = MDXContent5, filename5 = "instance.mdx", headers5 = typeof attributes5 < "u" && attributes5.headers, meta7 = typeof attributes5 < "u" && attributes5.meta;

// mdx:routes/docs/index.mdx
var docs_exports2 = {};
__export(docs_exports2, {
  attributes: () => attributes6,
  default: () => docs_default,
  filename: () => filename6,
  headers: () => headers6,
  meta: () => meta8
});
var import_react37 = require("@mdx-js/react"), import_react38 = __toESM(require("react")), attributes6 = {
  meta: {
    title: "\u7B80\u4ECB | @aoviz/graphs",
    description: "\u5173\u4E8E @aoviz/graphs \u4ECB\u7ECD"
  },
  sidebar_position: 1,
  noSubnav: !0
};
function MDXContent6(props = {}) {
  let _components = Object.assign({
    h1: "h1",
    a: "a",
    p: "p",
    code: "code",
    h3: "h3",
    h2: "h2"
  }, (0, import_react37.useMDXComponents)(), props.components), { wrapper: MDXLayout } = _components, _content = /* @__PURE__ */ import_react38.default.createElement(import_react38.default.Fragment, null, /* @__PURE__ */ import_react38.default.createElement(_components.h1, {
    id: "\u7B80\u4ECB"
  }, /* @__PURE__ */ import_react38.default.createElement(_components.a, {
    href: "#\u7B80\u4ECB"
  }, "\u7B80\u4ECB")), `
`, /* @__PURE__ */ import_react38.default.createElement(_components.p, null, "\u6B22\u8FCE\u4F7F\u7528 ", /* @__PURE__ */ import_react38.default.createElement(_components.code, null, "@aoviz/graphs"), " \u6587\u6863\u7AD9\u70B9\u3002"), `
`, /* @__PURE__ */ import_react38.default.createElement(_components.h3, {
    id: "aovizart-of-visualization\u53EF\u89C6\u5316\u7684\u827A\u672F"
  }, /* @__PURE__ */ import_react38.default.createElement(_components.a, {
    href: "#aovizart-of-visualization\u53EF\u89C6\u5316\u7684\u827A\u672F"
  }, "aoviz\uFF08Art of Visualization\uFF09\uFF0C\u53EF\u89C6\u5316\u7684\u827A\u672F\u3002")), `
`, /* @__PURE__ */ import_react38.default.createElement(_components.p, null, "\u6570\u636E\u53EF\u89C6\u5316\u8FD9\u95E8\u6280\u672F\u662F\u5173\u4E8E\u6570\u636E\u89C6\u89C9\u8868\u73B0\u5F62\u5F0F\u7684\u4E00\u95E8\u79D1\u5B66\u6280\u672F\u7814\u7A76\u3002\u6570\u636E\u53EF\u89C6\u5316\u6280\u672F\u662F\u5229\u7528\u8BA1\u7B97\u673A\u56FE\u5F62\u5B66\u4E0E\u56FE\u50CF\u5904\u7406\u6280\u672F\u76F8\u7ED3\u5408\uFF0C\u5C06\u6570\u636E\u901A\u8FC7\u5904\u7406\u8F6C\u6362\u4E3A\u56FE\u5F62\u6216\u56FE\u50CF\u5F62\u5F0F\u6700\u540E\u663E\u793A\u5230\u5C4F\u5E55\u4E0A\u9762\uFF0C\u5E76\u8FDB\u884C\u4EA4\u4E92\u5904\u7406\u7684\u7406\u8BBA\u3001\u65B9\u6CD5\u548C\u6280\u672F\u3002\u5B83\u6D89\u53CA\u8BA1\u7B97\u673A\u89C6\u89C9\u3001\u56FE\u50CF\u5904\u7406\u3001\u8BA1\u7B97\u673A\u8F85\u52A9\u8BBE\u8BA1\u3001\u8BA1\u7B97\u673A\u56FE\u5F62\u5B66\u7B49\u591A\u4E2A\u9886\u57DF\uFF0C\u6210\u4E3A\u4E00\u9879\u7814\u7A76\u6570\u636E\u8868\u793A\u3001\u6570\u636E\u5904\u7406\u3001\u51B3\u7B56\u5206\u6790\u7B49\u95EE\u9898\u7684\u7EFC\u5408\u6280\u672F\u3002"), `
`, /* @__PURE__ */ import_react38.default.createElement(_components.p, null, "\u6570\u636E\u53EF\u89C6\u5316\u662F\u4FE1\u606F\u548C\u6570\u636E\u7684\u56FE\u5F62\u5316\u8868\u793A\u65B9\u5F0F\u3002\u901A\u8FC7\u4F7F\u7528\u56FE\u8868\u3001\u56FE\u5F62\u548C\u5730\u56FE\u7B49\u53EF\u89C6\u5316\u5143\u7D20\uFF0C\u6570\u636E\u53EF\u89C6\u5316\u5DE5\u5177\u63D0\u4F9B\u4E86\u4E00\u79CD\u67E5\u770B\u548C\u7406\u89E3\u6570\u636E\u8D8B\u52BF\u3001\u5F02\u5E38\u503C\u548C\u6A21\u5F0F\u7684\u53EF\u8BBF\u95EE\u65B9\u5F0F\u3002"), `
`, /* @__PURE__ */ import_react38.default.createElement(_components.p, null, "\u5728\u5927\u6570\u636E\u4E16\u754C\u4E2D\uFF0C\u6570\u636E\u53EF\u89C6\u5316\u5DE5\u5177\u548C\u6280\u672F\u5BF9\u4E8E\u5206\u6790\u6D77\u91CF\u4FE1\u606F\u548C\u505A\u51FA\u6570\u636E\u9A71\u52A8\u7684\u51B3\u7B56\u81F3\u5173\u91CD\u8981\u3002"), `
`, /* @__PURE__ */ import_react38.default.createElement(_components.h2, {
    id: "\u529F\u80FD\u89C4\u5212"
  }, /* @__PURE__ */ import_react38.default.createElement(_components.a, {
    href: "#\u529F\u80FD\u89C4\u5212"
  }, "\u529F\u80FD\u89C4\u5212")), `
`, /* @__PURE__ */ import_react38.default.createElement("iframe", {
    style: {
      width: "100%",
      height: "calc(100vh - 300px)",
      minHeight: "500px"
    },
    src: "https://whimsical.com/embed/force-product-RNhXLMQ69mBVBL1f6Jkz6f",
    frameborder: "0",
    sandbox: "allow-scripts allow-popups allow-top-navigation-by-user-activation allow-forms allow-same-origin allow-storage-access-by-user-activation",
    allowfullscreen: ""
  }), `
`, /* @__PURE__ */ import_react38.default.createElement(_components.h2, {
    id: "\u53C2\u4E0E\u8D21\u732E"
  }, /* @__PURE__ */ import_react38.default.createElement(_components.a, {
    href: "#\u53C2\u4E0E\u8D21\u732E"
  }, "\u53C2\u4E0E\u8D21\u732E")), `
`, /* @__PURE__ */ import_react38.default.createElement(_components.p, null, "\u5982\u679C\u4F60\u4E5F\u5BF9\u53EF\u89C6\u5316\u65B9\u9762\u611F\u5174\u8DA3\uFF0C\u53EF\u4EE5\u901A\u8FC7\u63D0\u4EA4 ", /* @__PURE__ */ import_react38.default.createElement(_components.a, {
    href: "https://github.com/Aoviz-Team/graphs"
  }, "Pull Request"), " \u53C2\u4E0E\u8D21\u732E"));
  return MDXLayout ? /* @__PURE__ */ import_react38.default.createElement(MDXLayout, {
    ...props
  }, _content) : _content;
}
var docs_default = MDXContent6, filename6 = "index.mdx", headers6 = typeof attributes6 < "u" && attributes6.headers, meta8 = typeof attributes6 < "u" && attributes6.meta;

// app/routes/$.tsx
var __exports = {};
__export(__exports, {
  default: () => Index2,
  loader: () => loader2,
  meta: () => meta9
});
var import_node2 = require("@remix-run/node");

// app/components/Buttons/GradientButton.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), GradientButton = ({ href, children }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button2, {
  href,
  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
    children
  }, void 0, !1, {
    fileName: "app/components/Buttons/GradientButton.tsx",
    lineNumber: 12,
    columnNumber: 7
  }, this)
}, void 0, !1, {
  fileName: "app/components/Buttons/GradientButton.tsx",
  lineNumber: 11,
  columnNumber: 5
}, this), Button2 = styled("a", {
  color: "$steel100",
  borderRadius: "$r8",
  p: 2,
  backgroundClip: "content-box",
  position: "relative",
  fontSize: "$XXS",
  lineHeight: "$XXS",
  display: "inline-block",
  zIndex: 0,
  "&:before": {
    content: "",
    width: "100%",
    height: "100%",
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: -1,
    borderRadius: "inherit",
    background: "$redYellowGradient100",
    transition: "filter 250ms ease-out"
  },
  [`.${dark} &:before`]: {
    background: "$blueGreenGradient100"
  },
  "& > span": {
    p: "$10 $15",
    display: "block",
    backgroundColor: "$white",
    borderRadius: "inherit"
  },
  "&:hover:before": {
    filter: "brightness(120%)"
  },
  [`.${dark} &:hover:before`]: {
    filter: "brightness(140%)"
  }
});

// app/routes/$.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), meta9 = () => ({
  title: "404 | Aoviz",
  description: "aoviz\uFF08Art of Visualization\uFF09\uFF0C\u53EF\u89C6\u5316\u7684\u827A\u672F\u3002"
}), CAR = `                                                    7%;;WW/                                                                                                                                             
                                                   (W HQXXXXXXX/                                                                                                                                        
                                                 /;NNXXXXXXXXXXX                                                                                                                                        
                                                 (7 WXXXXXXXXXXXA                                                                                                                                       
                                               %7;% QXXXXXXXXXXXXQ                                                                                                                                      
                                              X;<Y  XXXXXXXXXXXXXXB                                                                                                                                     
                                            A(<(%   XXXXXXXXXXXXXXXQ                                                                                                                                    
                                        /QY(;;A     XXXXXXXXXXXXXXXX(                                                                                                                                   
                                      X;&(&;YV      XXXXXXXXXXXXXXXXX                                                                                                                                   
                                    X;;;;(;(        XXXXXXXXXXXXXXXXXX                                                                                                                                  
                                  77bW;W<<X&        XXXXXXXXXXXXXXXXXXX7                                                                                                                                
                                    /Y 7W7 (       ;XXXXXXXXXXXXXXAWQWWQ                                                                                                                                
                                   /               cXXXXXXXXBQyvvvv&vvvvX7                                                                                                                              
                                                   %XXXW&vcWvvXvvvyvvvcYAA                                                                                                                              
                                                   Q@vvcvvvvvvyvvvvcv     X /                                                                                                                           
                                                     @vvvv&vvvvvQvX      @/Y                                                                                                                            
                                                    /vvXXvvvvvvvvvc%    QvWvcX                                                                                                                          
                                                     HvvvBvvvvvvvvvvvv%&vvvvvvc                                                                                                                         
                                                     BWvvyvvvvvvvvcQ((((((XHXy                                                                                                                          
                                                    (vvyvvvvvvv%QW((((((((((W                                                                                                                           
                                                   (vvvyWQvvvX(((((((((((((((((v(                                                                                                                       
                                                   yvXvvvvvvQ(vX%(((((((W((7(((7V                                                                                                                       
                                                   @c2vvQvvvvB((((((((((&                                                                                                                               
                                                  /@@@&vXvvvvQ(((((((A                                                                                                                                  
                                                  (@@@@@@@yvvv@(((%&                                                                                                                                    
                                                 /@@@@@@@@@@@@W/A@H@                                                                                                                                    
                                                7@@@@@@@@@@@@@@@@XXX@                                                                                                                                   
                                               @@@@@@@@@@@@@@@@@@XXWB                                                                                                                                   
                                              @@@@@@@@@@@@@@@@@@@XX@                                                                                                                                    
                                             @@@@@@@@@@@@@@@@@@@@@@@                                                                                                                                    
                                           <@@@@@@@@@@@@@@@@@@@@@@@@@@                c/@                                                                                                               
                                          ;@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B              B/@                                                                                                              
                                          @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@N         //@@                                                                                                             
                                         @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@NN    @<c@                                                                                                            
                                         @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%   <Q N                                                                                                           
                                         @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@W;@/W Q/                                                                                                         
                                         @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@/<;X;%   7                                                                                                        
                                         @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@Nvv&Q(//y/@   B                                                                                                       
                                 WB7/////N@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@vvvy%@@@@7(@@@@@W7V(;                                                                                                 
                        @(<(A@@;/////<N@B%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@yvvWvv;<@(&/@<@(///////////////////////////////7&@W/                                                                   
                       &          &@@%/////@@@@@@@@NN@@@@@@@@@@@@@@@@@@@@@@@@@@@@vvvv@NBc//@&(@&//<<<(ccyQQ@@@N@NA&c7<////////<7cANHBcy7                                                                
                      %  /(%XBN@@QV((////////////////////////////////////////////////////////////////////////////////(<vv%yv&&&yv((//////BN                                                             
        <vQN@@@@A7/////////////////////////////////@/////////////////////////////////////////(7/////////////////////////////////////////////N                                                           
 (W//N/////////////////////////////////////////y/       //(v%A@@@@@@@@@@@@@@@@@@@NAAv(//        %////////////////////////////////////////////@                                                          
 &//&//////////////////////////////////////////Q y                                            ( @/////////////////////////////////////////////                                                          
A///@//////////////////////////////////////////                                                 c/////////////////////////////////////////////bQ                                                        
N///A/////////////////////////////////////////y                                                 //////////////////////////////////////////////@7                                                        
(///7/////////////////////////////////////////X                                                 /////////////////((yV&v(((////////////////////B@                                                        
///<//////////////////////////////////////////&                                                 ////////&@@@@@@@@@@@@@@@@@@@@@@ NH@@@@@@@@@Av (                                                         
///;//////////////////////////////////////////7                                                 Q///////@@@@@@@@@@@@@@@@@@@@@@@@7B  /     7 /X@                                                         
c///(///////////////////////////////////////////                                                @//////@@@@@@@@@X;(;((;(;B@@@@@@@@/////////////                                                         
@///A//////////////////////////////////////////N                                                7//////@@@@@@@W(%A//////W;(@@@@@@@@////////////                                                         
;///@//////////////////////<<//////////////////vV                                              b//////A@@@@@@b(N//////////7(W@@@@@@////////////                                                         
 @///c//////////////////@@@@N;N///////////@;c@N////@/%N@@@NW&7(////(<////77v&bWN@@@@NQy%<////@////////@@@@@@@;N////////////;(@@@@@@@//////////N                                                         
  /@BN/////////////////@@@@@((@////////////((@@@%//(/////////////////////////////////////////V////////cB@@@@N;B////////////y;N@@@@@    /%c(                                                             
         7N@@@@@N&&yyy@@@@@@v;@///////////<(;@@@@@@N@V;/////////////////////////////////////(////////cB@@@@@@(@////////////(;@@@@@@                                                                     
                      @@@@@@N(v(//////////@(N@@@@@/              ///v(vv(%XXA@@XX7vv//                 @@@@@@;(@//////////%(;@@@@@@                                                                     
                       @@@@@@V;(@////////B;X@@@@@@                                                     v@@@@@@;(7W//////@(;(@@@@@@                                                                      
                        @@N@@@@(;(X@@@@v(;@@@@@@@                                                       y@N@@@@@;(;((;(;(;N@@@@@@                                                                       
                         N@@@@@@@W(;;(;W@@@@B@@(                                                          @@@@@@@@@WV%X@@@@@@@@W                                                                        
                           @@@@@@@@@@@@@@@@@@@                                                              @@N@@@@@@@@@@@@@@@                                                                          
                             V@@@@@@@@@@@@@(                                                                  X@@@@@@@@@N@@(                                                                            
                                 /QQQQc                                                                                                                                                                 
                                                                                                                                                                                                        
`, loader2 = ({ request }) => {
  let url = new URL(request.url);
  switch (url.pathname) {
    case "/common/props":
    case "/components/spring-context":
      return (0, import_node2.redirect)("/docs");
    case "/basics":
      return (0, import_node2.redirect)("/docs/getting-started");
    case "/common/configs":
      return (0, import_node2.redirect)("/docs/advanced/config");
    case "/common/imperatives-and-refs":
      return (0, import_node2.redirect)("/docs/advanced/spring-ref");
    case "/common/interpolation":
      return (0, import_node2.redirect)("/docs/advanced/interpolation");
    case "/classes/controller":
      return (0, import_node2.redirect)("/docs/advanced/controller");
    case "/classes/spring-value":
      return (0, import_node2.redirect)("/docs/advanced/spring-value");
    case "/guides/accessibility":
      return (0, import_node2.redirect)("/docs/utilities/use-reduced-motion");
    case "/guides/r3f":
      return (0, import_node2.redirect)("/docs/guides/react-three-fiber");
    case "/guides/testing":
      return (0, import_node2.redirect)("/docs/guides/testing");
    case "/components/parallax":
      return (0, import_node2.redirect)("/docs/components/parallax");
  }
  let [_, type, comp] = url.pathname.split("/");
  return type === "hooks" || type === "components" ? (0, import_node2.redirect)(
    `/docs/components/${type === "components" ? `use-${comp}` : comp}`
  ) : (0, import_node2.json)({});
};
function Index2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, {
        addMarginToMain: !1,
        position: "fixed"
      }, void 0, !1, {
        fileName: "app/routes/$.tsx",
        lineNumber: 125,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Main4, {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Pre2, {
            children: CAR
          }, void 0, !1, {
            fileName: "app/routes/$.tsx",
            lineNumber: 127,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ErrorHeading, {
            tag: "h2",
            fontStyle: "$XL",
            children: "404, not found"
          }, void 0, !1, {
            fileName: "app/routes/$.tsx",
            lineNumber: 128,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GradientButton, {
            href: "/",
            children: "Go home"
          }, void 0, !1, {
            fileName: "app/routes/$.tsx",
            lineNumber: 131,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/$.tsx",
        lineNumber: 126,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/$.tsx",
    lineNumber: 124,
    columnNumber: 5
  }, this);
}
var Main4 = styled("main", {
  width: "100%",
  height: "100%",
  overflowX: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  mt: "$40",
  "@tabletUp": {
    mt: "$100"
  }
}), Pre2 = styled("pre", {
  fontSize: "clamp(2px, 1vw, 8px)",
  transform: "translateX(clamp(1px, 17vw, 130px))"
}), ErrorHeading = styled(Heading, {
  mt: "$10",
  mb: "$20",
  "@tabletUp": {
    mt: "$20",
    mb: "$40"
  }
});

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "4e195430", entry: { module: "/build/entry.client-64VICSST.js", imports: ["/build/_shared/chunk-6K7Y3HNJ.js", "/build/_shared/chunk-432IMSLU.js", "/build/_shared/chunk-454AYMIU.js", "/build/_shared/chunk-H7ERXWDW.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-UJ73C4EU.js", imports: ["/build/_shared/chunk-4HZGVXWO.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/$": { id: "routes/$", parentId: "root", path: "*", index: void 0, caseSensitive: void 0, module: "/build/routes/$-2XVVKLOU.js", imports: ["/build/_shared/chunk-ROSQRSFH.js", "/build/_shared/chunk-CK2HAHCG.js", "/build/_shared/chunk-MHFW5KOY.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/docs": { id: "routes/docs", parentId: "root", path: "docs", index: void 0, caseSensitive: void 0, module: "/build/routes/docs-TFPEIUXK.js", imports: ["/build/_shared/chunk-MYP57KII.js", "/build/_shared/chunk-K2GVUX5N.js", "/build/_shared/chunk-ROSQRSFH.js", "/build/_shared/chunk-CK2HAHCG.js", "/build/_shared/chunk-MHFW5KOY.js", "/build/_shared/chunk-FKBBATAY.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/docs/getting-started": { id: "routes/docs/getting-started", parentId: "routes/docs", path: "getting-started", index: void 0, caseSensitive: void 0, module: "/build/routes/docs/getting-started-B4FHOAT5.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/docs/index": { id: "routes/docs/index", parentId: "routes/docs", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/docs/index-BQRKOGGE.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/docs/instance": { id: "routes/docs/instance", parentId: "routes/docs", path: "instance", index: void 0, caseSensitive: void 0, module: "/build/routes/docs/instance-WCEJB2UC.js", imports: ["/build/_shared/chunk-4HZGVXWO.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/docs/plugins/fisheys": { id: "routes/docs/plugins/fisheys", parentId: "routes/docs", path: "plugins/fisheys", index: void 0, caseSensitive: void 0, module: "/build/routes/docs/plugins/fisheys-A5GSSFQO.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/docs/plugins/index": { id: "routes/docs/plugins/index", parentId: "routes/docs", path: "plugins", index: !0, caseSensitive: void 0, module: "/build/routes/docs/plugins/index-XVDCHBD3.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/docs/plugins/watermark": { id: "routes/docs/plugins/watermark", parentId: "routes/docs", path: "plugins/watermark", index: void 0, caseSensitive: void 0, module: "/build/routes/docs/plugins/watermark-TOJH6EDR.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/examples": { id: "routes/examples", parentId: "root", path: "examples", index: void 0, caseSensitive: void 0, module: "/build/routes/examples-EF2AZMDK.js", imports: ["/build/_shared/chunk-CK2HAHCG.js", "/build/_shared/chunk-MHFW5KOY.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-EETQOLWN.js", imports: ["/build/_shared/chunk-K2GVUX5N.js", "/build/_shared/chunk-ROSQRSFH.js", "/build/_shared/chunk-CK2HAHCG.js", "/build/_shared/chunk-MHFW5KOY.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-4E195430.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/examples": {
    id: "routes/examples",
    parentId: "root",
    path: "examples",
    index: void 0,
    caseSensitive: void 0,
    module: examples_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/docs": {
    id: "routes/docs",
    parentId: "root",
    path: "docs",
    index: void 0,
    caseSensitive: void 0,
    module: docs_exports
  },
  "routes/docs/plugins/watermark": {
    id: "routes/docs/plugins/watermark",
    parentId: "routes/docs",
    path: "plugins/watermark",
    index: void 0,
    caseSensitive: void 0,
    module: watermark_exports
  },
  "routes/docs/getting-started": {
    id: "routes/docs/getting-started",
    parentId: "routes/docs",
    path: "getting-started",
    index: void 0,
    caseSensitive: void 0,
    module: getting_started_exports
  },
  "routes/docs/plugins/fisheys": {
    id: "routes/docs/plugins/fisheys",
    parentId: "routes/docs",
    path: "plugins/fisheys",
    index: void 0,
    caseSensitive: void 0,
    module: fisheys_exports
  },
  "routes/docs/plugins/index": {
    id: "routes/docs/plugins/index",
    parentId: "routes/docs",
    path: "plugins",
    index: !0,
    caseSensitive: void 0,
    module: plugins_exports
  },
  "routes/docs/instance": {
    id: "routes/docs/instance",
    parentId: "routes/docs",
    path: "instance",
    index: void 0,
    caseSensitive: void 0,
    module: instance_exports
  },
  "routes/docs/index": {
    id: "routes/docs/index",
    parentId: "routes/docs",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: docs_exports2
  },
  "routes/$": {
    id: "routes/$",
    parentId: "root",
    path: "*",
    index: void 0,
    caseSensitive: void 0,
    module: __exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
