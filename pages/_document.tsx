import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="bg-gradient-to-r from-purple-300 to-purple-900 dark:from-gray-900 dark-to-gray-500 dark:text-purple-500">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
