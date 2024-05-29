import { Button, Card } from "keep-react";
import PropTypes from "prop-types";
import HighlightText from "./highlighttext";

export const CardComponent = ({ name, instructor, searchquery }) => {
  return (
    <Card className="flex gap-4 max-w-[750px]">
      <Card.Header>
        <img
          src="https://via.placeholder.com/600x400"
          alt="image"
          className="w-full h-52 object-cover"
        />
      </Card.Header>
      <Card.Content className="space-y-3 max-w-sm">
        <Card.Title className=" break-words ">
          <HighlightText text={name} highlight={searchquery} />
        </Card.Title>
        <Card.Description>
          By <HighlightText text={instructor} highlight={searchquery} />
        </Card.Description>
        <Button size="sm" color="primary">
          Enroll Now
        </Button>
      </Card.Content>
    </Card>
  );
};

CardComponent.propTypes = {
  name: PropTypes.string.isRequired,
  instructor: PropTypes.string.isRequired,
  searchquery: PropTypes.string,
};
