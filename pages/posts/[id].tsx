import { NextPage } from "next";
import Image from "next/image";
import { Page } from "styles/Global";
import { MongoClient, ObjectId } from "mongodb";
import { dbUrl } from "global/DB";
import { Container } from "styles/post/[id]";
import type { Post } from "global/types/post";
import { formatDate } from "utils/dates";
import type {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from "next";
import { BsClockHistory } from "react-icons/bs";
import Head from "next/head";

interface Props {
  post: Post | null;
}

const SinglePost: NextPage<Props> = ({ post }) => {
  if (!post) {
    return (
      <Page>
        <h1>Loading...</h1>
      </Page>
    );
  }

  return (
    <Page>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.description.substring(0, 20)} />
        <meta property="og:title" content={post.title} />
        <meta property="og:type" content="article" />
        <meta
          property="og:description"
          content={post.description.substring(0, 20)}
        />
        <meta property="og:image" content={post.image || ""} />
        <meta
          property="og:url"
          content={`https://learning-nextjs-blog-tau.vercel.app/posts/${post._id}`}
        />
      </Head>
      <Container>
        <div className="header">
          <h6 className="header-date">
            <BsClockHistory size={20} style={{ marginRight: "1rem" }} />
            Posted on: {formatDate(post.date)}
          </h6>
          <h1 className="header-title">{post.title}</h1>
        </div>
        <div className="body">
          <div className="body-image">
            {post.image && (
              <Image
                layout="fill"
                objectFit="contain"
                src={post.image}
                alt="body-image-tag"
              />
            )}
          </div>
          <p className="body-description">{post.description}</p>
        </div>
      </Container>
    </Page>
  );
};

// We could use getStaticProps here because the content will mostly never change for a post but
// in getStaticProps for dynamic routes we will need getStaticPaths and for a large number of data its not a good idea
export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<Props>> => {
  const { params } = context;
  const id = params?.id;

  const client = await MongoClient.connect(dbUrl);
  const db = client.db();
  let data: Post | null = null;

  try {
    const res = await db
      .collection("posts")
      .findOne({ _id: new ObjectId(id?.toString()) });
    data = JSON.parse(JSON.stringify(res));
    client.close();
  } catch (err) {
    console.log(err);
  }

  // If no data then return notfound page
  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post: data,
    },
  };
};

export default SinglePost;
