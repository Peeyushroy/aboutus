import Head from "next/head";

interface ssrProps {
  name: string;
  content: string
}

const ssr = ({ name, content }: ssrProps) => {
  return (
    <div>
      <Head>
        <title>{name}</title>
      </Head>
      <div className="content">
        <h2>{name}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const data = await fetch(
    "http://localhost:3000/api/ssrdata"
  );
  const json = await data.json();

  return {
    props: {
      name: json.name,
      content: json.content
    },
  };
}

export default ssr;