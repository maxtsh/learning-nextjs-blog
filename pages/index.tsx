import { Page } from "styles/Global";
import { Container } from "styles/index.styles";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
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
      </Container>
    </Page>
  );
};

export default Home;
