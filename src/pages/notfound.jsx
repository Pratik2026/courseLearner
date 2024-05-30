import { Button, Empty } from "keep-react";
import { useNavigate } from "react-router-dom";

export const EmptyComponent = () => {
  const navigate = useNavigate();
  return (
    <Empty>
      <Empty.Image>
        <img
          src="https://staticmania.cdn.prismic.io/staticmania/499b23f3-41ed-4bc9-a9eb-43d13779d2f8_Property+1%3DSad+screen_+Property+2%3DSm.svg"
          height={234}
          width={350}
          alt="404"
        />
      </Empty.Image>
      <Empty.Title>Oops! You seem to be lost</Empty.Title>
      <Empty.Description>
        Its okay, we are here to help you get back to the right path. Click the
        button below to go to the home page.
      </Empty.Description>
      <Button variant="outline" onClick={() => navigate("/")}>
        Go to home
      </Button>
    </Empty>
  );
};
