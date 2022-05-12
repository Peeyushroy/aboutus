import Head from "next/head";
import React from "react";

interface ssgProps {
    name: string;
    content: string
}

interface dataJson {
    name: string;
    content: string
}

const hybrid = ({ name, content }: ssgProps) => {
    const [data, setData] = React.useState<dataJson | null>(null);

    const getAllData = async () => {
        try {
            const data = await fetch(
                "http://localhost:3000/api/csrdata"
            );
            const json = await data.json();
            setData(json);
        } catch (e) {
            console.log(e);
        }
    };

    React.useEffect(() => {
        getAllData();
        return () => {
            setData(null);
        };
    }, []);

    return (
        <div>
            <Head>
                <title>{name}</title>
            </Head>
            <div className="content">
                <h2>{name}</h2>
                <p>{content}</p>
            </div>
            {data && <div className="hybrid">
                <h2>{data.name}</h2>
                <p>{data.content}</p>
            </div>}
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

export default hybrid;