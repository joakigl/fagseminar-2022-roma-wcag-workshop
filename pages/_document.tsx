import Document, { Html, Head, Main, NextScript } from "next/document";

function setInitialColorMode() {
  function getInitialColorMode() {
    const preference = window.localStorage.getItem("theme");
    /**
     * If the user has explicitly chosen light or dark,
     * use it. Otherwise, this value will be null.
     */
    if (typeof preference === "string") {
      return preference;
    }
    const mql = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return mql ? "dark-theme" : "light-theme";
  }
  const colorMode = getInitialColorMode();

  if (colorMode === "dark-theme") {
    document.documentElement.setAttribute("class", "dark");
    window.localStorage.setItem("theme", "dark-theme");
  } else {
    document.documentElement.setAttribute("class", "light");
    window.localStorage.setItem("theme", "light-theme");
  }
}

// our function needs to be a string
const blockingSetInitialColorMode = `(function() {
      ${setInitialColorMode.toString()}
      setInitialColorMode();
  })()
  `;

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body className="bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-100">
          <script
            dangerouslySetInnerHTML={{
              __html: blockingSetInitialColorMode,
            }}
          ></script>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
