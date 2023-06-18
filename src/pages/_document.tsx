import { Html, Head, Main, NextScript, DocumentProps } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Roboto&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css" />
      </Head>
      <body className='flex h-screen'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
