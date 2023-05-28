import Head from "next/head";

export default function MainLayout({ children }) {
  return (
    <div as="main">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Just A Calculator" />
        <meta name="author" content="AxewBoTX" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="shortcut icon" href="/logo.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Calci" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@AxewBoTX" />
        <meta name="twitter:creator" content="@AxewBoTX" />
        <meta property="og:site_name" content="Calci" />
        <meta name="og:title" content="Calci" />
        <meta property="og:type" content="website" />
        <title>Calci</title>
      </Head>
      {children}
    </div>
  );
}
