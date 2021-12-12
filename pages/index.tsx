import { MongoClient } from "mongodb";
import { BsArrowRight } from "react-icons/bs";
import { dbUrl } from "global/DB";
import { Page } from "styles/Global";
import { Container } from "styles/index.styles";
import PostComponent from "components/Post";
import type { NextPage, GetStaticProps, GetStaticPropsResult } from "next";
import type { Post } from "global/types/post";
import Head from "next/head";
import React from "react";

interface Props {
  posts: Post[];
}

const Home: NextPage<Props> = ({ posts }) => {
  const handleHire = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.open("https://www.linkedin.com/in/mohammad-tatshahdoost/", "_blank");
  };

  return (
    <Page>
      <Head>
        <title>Maxtsh Blog Home</title>
        <meta
          name="description"
          content="Maxtsh Blog created by NEXT.JS v12 Home Page"
        />
      </Head>
      <Container>
        <div className="intro">
          <h1 className="intro-title">Hello, My name is MaxTsh!</h1>
          <h1 className="intro-subtitle">Front-End Engineer</h1>
          <svg
            className="intro-bubble"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#FF0066"
              d="M55.2,5.7C55.2,32.7,27.6,65.5,-1,65.5C-29.7,65.5,-59.4,32.7,-59.4,5.7C-59.4,-21.3,-29.7,-42.6,-1,-42.6C27.6,-42.6,55.2,-21.3,55.2,5.7Z"
              transform="translate(100 100)"
            />
          </svg>
          <p className="intro-description">
            A highly passionate and motivated React.js Front-End Developer,
            Experienced in multiple projects using JavaScript ES6+/ TypeScript,
            React.js, Redux.js, Redux.
          </p>
          <button className="intro-btn" onClick={handleHire}>
            Hire me
            <BsArrowRight
              size={25}
              color="#fff"
              style={{ marginLeft: "1rem" }}
            />
          </button>
        </div>
        <div className="posts">
          {posts.map((p: Post) => (
            <PostComponent key={p._id} data={p} />
          ))}
        </div>
      </Container>
    </Page>
  );
};

export const getStaticProps: GetStaticProps = async (): Promise<
  GetStaticPropsResult<Props>
> => {
  const client = await MongoClient.connect(dbUrl);
  const db = client.db();
  let data: Post[] = [];

  try {
    const res = await db
      .collection("posts")
      .find({ featured: { $eq: true } })
      .sort({ _id: -1 })
      .toArray();
    data = JSON.parse(JSON.stringify(res));
    client.close();
  } catch (err) {
    console.log(err);
  }

  return {
    props: {
      posts: data,
    },
    revalidate: 30,
  };
};

export default Home;
