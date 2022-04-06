import type { AppProps } from "next/app";
import "../styles/index.scss";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <div className="globalWrapper">
      <Component {...pageProps} key={router.asPath} />
    </div>
  );
}

export default MyApp;
