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
    <Link href="/test/agent">
      <a>click here to see your user agent</a>
    </Link>{' '}
  </p>
  <p>
    <Link href="/orgs/dj01/apps/test/stacks/prod">
      <a>dj01:test:prod</a>
    </Link>
  </p>
  </div>