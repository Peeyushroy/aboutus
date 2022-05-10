import Head from "next/head";

interface isrProps {
  name: string;
  content: string
}

const isr = ({ name, content }: isrProps) => {
  return (
    <div>
      <Head>
        <title>{name}</title>
      </Head>
      <div className="content">
        <h2>{name}</h2>
        <p>
          {content}
        </p>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const data = await fetch(
    "http://localhost:3000/api/isrdata"
  );
  const json = await data.json();

  return {
    props: {
      name: json.name,
      content: json.content
    },
    revalidate: 60,
  };
}

export default isr;