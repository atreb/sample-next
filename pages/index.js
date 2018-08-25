import Head from 'next/head'
import Link from 'next/link'

export default () => 
  <div>
  <Head>
    <title></title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
  </Head>
  <p>Welcome to <img src='/static/next.png'/></p>
  <p>
    Click{' '}
    <Link href="/agent">
      <a>here</a>
    </Link>{' '}
    to see user agent
  </p>
  </div>