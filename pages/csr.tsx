import Head from "next/head";
import React from "react";

interface dataJson {
    name: string;
    content: string
}

const Csr = () => {
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const [data, setData] = React.useState<dataJson | null>(null);
    const [isError, setIsError] = React.useState<boolean>(false);

    const getAllData = async () => {
        setIsLoading(true);
        try {
            const data = await fetch(
                "http://localhost:3000/api/csrdata"
            );
            const json = await data.json();
            setData(json);
        } catch (e) {
            setIsError(true);
        }
        setIsLoading(false);
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
                {!data && <title>Client Side Rendering</title>}
                {data && !isError && <title>Client Side Rendering - {data.name}</title>}
            </Head>
            <div className="content">
                {isLoading && <h2>Loading...</h2>}
                {isError && <h2>Oops, something went wrong!</h2>}
                {data && !isError && (
                    <>
                        <h2>{data.name}</h2>
                        <p>{data.content}</p>
                    </>
                )}
            </div>
        </div>
    );
};

export default Csr;