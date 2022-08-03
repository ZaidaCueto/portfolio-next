import Document, { Html, , Main, NextScript } from 'next/document'
import Head from 'next/head'

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
          <meta  
          name='description'
          content='Protfolio Frontend devloper '
          />
          <meta  
          name='keywords'
          content='Frontend devloper, full stack web developer, '
          />
         
        <title>Web developer │ Prtfoio  │ Frontend </title>
      
          
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
