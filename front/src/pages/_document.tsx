import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
//crossorigin 2


  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Lobster&family=Pacifico&family=Shantell+Sans:wght@300&display=swap" rel="stylesheet"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
