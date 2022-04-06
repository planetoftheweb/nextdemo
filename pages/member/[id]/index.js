import Layout from '/components/layout'
import Link from 'next/link'
import Image from 'next/image'

const castMember = ({ castMember }) => {
  console.log(castMember)
  return (
    <Layout>
      <main className='container'>
        <h1>{castMember.name}</h1>
        <Image src={`/images/${castMember.slug}.svg`} alt={castMember.name} width={600} height={800} />
        <p>{castMember.bio}</p>
        <Link href="/">
          <button>Back to Cast</button>
        </Link>
      </main>
    </Layout>
  )


}

export const getServerSideProps = async (context) => {
  const res = await fetch('https://pixelprowess.com/i/stargazers/data.json');
  const data = await res.json();
  const castMember = data.filter(item => item.id == context.params.id)

  return {
    props: {
      castMember: castMember[0]
    }
  }
}

export default castMember