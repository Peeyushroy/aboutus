import Head from "next/head";

interface ssgProps {
  name: string;
  content: string
}

const ssg = ({ name, content }: ssgProps) => {
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

export async function getStaticProps() {
  const data = await fetch(
    "http://localhost:3000/api/ssgdata"
  );
  const json = await data.json();

  return {
    props: {
      name: json.name,
      content: json.content
    },
  };
}

export default ssg;