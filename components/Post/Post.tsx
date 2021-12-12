import { useRouter, NextRouter } from "next/router";
import Image from "next/image";
import Button from "components/Button";
import { BsArrowRight } from "react-icons/bs";
import type { Post } from "global/types/post";
import { StyledPost } from "./styles";

interface Props {
  data: Post;
}

const PostComponet: React.FC<Props> = ({ data }) => {
  const { push }: NextRouter = useRouter();

  const handleGoToPost = (
    e: React.MouseEvent<HTMLImageElement | HTMLButtonElement>
  ) => {
    e.preventDefault();
    push(`/posts/${data._id}`);
  };

  return (
    <StyledPost>
      <div className="header">
        {data.image && (
          <Image
            onClick={handleGoToPost}
            width={350}
            height={350}
            src={data.image}
            alt="Post-Image"
          />
        )}
      </div>
      <div className="body">
        <span className="body-info">
          Date: {new Date(data.date).toDateString()}
        </span>
        <h3 className="body-title">{data.title}</h3>
        <p className="body-description">
          {data.description.substring(0, 50)}...
        </p>
        <Button onClick={handleGoToPost} color="#fff" bgColor="var(--red)">
          Read more
          <BsArrowRight size={25} color="#fff" style={{ marginLeft: "1rem" }} />
        </Button>
      </div>
    </StyledPost>
  );
};

export default PostComponet;
