import { Tree } from "keep-react";
import PropTypes from "prop-types";

const TreeComponent = ({ syllabus }) => {
  const formatSyllabusData = (syllabus) => {
    const nodes = [];
    let id = 1;

    // Iterate over each week in the syllabus
    for (const [week, { topic, content }] of Object.entries(syllabus)) {
      const weekNode = {
        id: id++,
        title: `${week}: ${topic}`,
        children: [{ id: id++, title: content }],
      };
      nodes.push(weekNode);
    }

    return nodes;
  };

  const formattedSyllabus = formatSyllabusData(syllabus);

  return (
    <Tree
      showBorder={true}
      nodes={formattedSyllabus}
      itemStyle="p-4 border border-metal-200 rounded-lg text-metal-700"
    />
  );
};

export default TreeComponent;

TreeComponent.propTypes = {
  syllabus: PropTypes.object.isRequired,
};
