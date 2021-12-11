import { MongoClient } from "mongodb";
import { dbUrl } from "global/DB";
import { Page } from "styles/Global";
import { Container } from "styles/index.styles";
import type { NextPage, GetStaticProps, GetStaticPropsResult } from "next";
import type { Post } from "global/types/post";
import Head from "next/head";
import Image from "next/image";
import Button from "components/Button";

interface Props {
  posts: Post[];
}

const Home: NextPage<Props> = ({ posts }) => {
  console.log(posts);
  return (
    <Page>
      <Head>
        <title>Maxtsh Blog</title>
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
          <button className="intro-btn">Hire me</button>
        </div>
        <div className="posts">
          {posts.map((p: Post) => (
            <div key={p._id} className="posts-post">
              <div className="posts-post-header">
                {p.image && (
                  <Image
                    width={350}
                    height={350}
                    src={p.image}
                    alt="Post-Image"
                  />
                )}
              </div>
              <div className="posts-post-body">
                <span className="posts-post-body-info">
                  Date: {new Date(p.date).toDateString()}
                </span>
                <h3 className="posts-post-body-title">{p.title}</h3>
                <p className="posts-post-body-description">{p.description}</p>
                <Button color="#fff" bgColor="var(--red)">
                  Read more
                </Button>
              </div>
            </div>
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
    const res = await db.collection("posts").find().sort({ _id: -1 }).toArray();
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
