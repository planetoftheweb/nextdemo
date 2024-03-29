import Head from "next/head"

export const layout = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://unpkg.com/@picocss/pico@latest/css/pico.min.css" />
      </Head>
      <div>{children}</div>
    </>
  )
}

export default layout