import { Button, Card } from "keep-react";
import { Heart } from "phosphor-react";
import PropTypes from "prop-types";
import HighlightText from "../utility/highlighttext";
import courseimg from "../assets/courseimg.png";
import { useNavigate } from "react-router-dom";

export const CardComponent = ({ name, instructor, searchquery, likes, id }) => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/course/${id}`);
  };

  return (
    <Card className="flex flex-col md:flex-row md:gap-4 md:max-w-[628px] md:min-w-[628px]">
      <Card.Header>
        <img
          src={courseimg}
          alt="image"
          className="md:min-w-72 w-full md:min-h-52 object-cover"
        />
      </Card.Header>
      <Card.Content className="space-y-3 w-full">
        <Card.Title className=" break-words md:text-xl text-lg">
          <HighlightText text={name} highlight={searchquery} />
        </Card.Title>
        <Card.Description className="md:text-base text-sm">
          By <HighlightText text={instructor} highlight={searchquery} />
        </Card.Description>
        <div className="flex justify-between items-center">
          <Button
            size="sm"
            color="secondary"
            variant="outline"
            className="border border-metal-800"
            onClick={() => handleClick(id)}
          >
            View More
          </Button>
          <div className="flex gap-2 items-center">
            <Heart size="20" color="red" />
            <p className="font-medium text-metal-800">{likes}</p>
          </div>
        </div>
      </Card.Content>
    </Card>
  );
};

CardComponent.propTypes = {
  name: PropTypes.string.isRequired,
  instructor: PropTypes.string.isRequired,
  searchquery: PropTypes.string,
  likes: PropTypes.number,
  id: PropTypes.string.isRequired,
};
