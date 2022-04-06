import Head from 'next/head'
import Layout from '../components/layout'
import { CastList } from '../components/CastList'

export default function Home({ cast }) {
  return (
    <Layout>
      <div>
        <Head>
          <title>Cast Members</title>
        </Head>
        <main className='container'>
          <h1>Cast Members</h1>
          <CastList cast={cast} />
        </main>
      </div>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const res = await fetch('https://pixelprowess.com/i/stargazers/data.json');
  const data = await res.json();
  return {
    props: {
      cast: data
    }
  }
}
