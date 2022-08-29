import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
   
  render() {
    return (
      <Html dir='rtl' lang="fa">
        <Head />
        <body>
          <Main/>
          <NextScript />
        </body>
      </Html>
    )
  }
}
export default MyDocument;
