import Head from "next/head";
import { Page } from "styles/Global";
import { MongoClient } from "mongodb";
import { dbUrl } from "global/DB";
import PostComponent from "components/Post";
import { Container } from "styles/post/index.styles";
import type { NextPage, GetStaticProps, GetStaticPropsResult } from "next";
import type { Post } from "global/types/post";

interface Props {
  posts: Post[];
}

const Posts: NextPage<Props> = ({ posts }) => {
  return (
    <Page>
      <Head>
        <title>All Posts</title>
        <meta
          name="description"
          content="Maxtsh Blog created by NEXT.JS v12 All posts"
        />
      </Head>
      <Container>
        {posts.map((p: Post) => (
          <PostComponent key={p._id} data={p} />
        ))}
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

export default Posts;
