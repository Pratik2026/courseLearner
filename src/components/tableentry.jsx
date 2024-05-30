import { CircleProgress, Label, Checkbox } from "keep-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { db } from "../db/firebase.js";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import img1 from "../assets/img1.png";
import PropTypes from "prop-types";

const Entry = ({ name, instructor, id, dueDate }) => {
  const navigate = useNavigate();
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const fetchCourseStatus = async () => {
      try {
        const courseDoc = doc(db, "courses", id);
        const courseSnapshot = await getDoc(courseDoc);
        if (courseSnapshot.exists()) {
          setCompleted(courseSnapshot.data().completed || false);
        } else {
          console.error("No such document!");
        }
      } catch (error) {
        console.error("Error fetching course status:", error);
      }
    };

    fetchCourseStatus();
  }, [id]);

  const handleCheckboxChange = async () => {
    try {
      const courseDoc = doc(db, "courses", id);
      await updateDoc(courseDoc, {
        completed: !completed,
      });
      setCompleted(!completed);
    } catch (error) {
      console.error("Error updating course status:", error);
    }
  };

  return (
    <>
      <div className="bg-white flex flex-col lg:flex-row lg:items-center gap-8 w-full p-4">
        <div className="flex md:gap-24 xl:gap-36 gap-8 lg:px-8 px-2">
          <div
            className="cursor-pointer w-full"
            onClick={() => navigate(`/course/${id}`)}
          >
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <img width="120px" height="80px" src={img1} alt="" />
              <div>
                <p className="-mb-0.5 md:text-xl text-lg font-medium text-metal-600 max-w-[260px] break-words">
                  {name}
                </p>
                <span className="md:text-base text-xs">By {instructor}</span>
              </div>
            </div>
          </div>
          <div className=" flex flex-col md:flex-row gap-4 items-center">
            <span className="md:text-base text-sm">Progress</span>
            <CircleProgress progress={55} className="">
              <CircleProgress.Text>55%</CircleProgress.Text>
            </CircleProgress>
          </div>
        </div>

        <div className="flex md:gap-24 xl:gap-36 lg:px-8 px-2">
          <div className="lg:max-w-52 flex items-center gap-4">
            <span className="md:text-base text-xs">Due-Date:</span>
            <p className="md:text-base text-xs max-w-20 min-w-20"> {dueDate} </p>
          </div>
          <fieldset className="flex items-center gap-2 ">
            <Checkbox
              id="checked"
              variant="checked"
              checked={completed}
              onChange={handleCheckboxChange}
            />
            <Label htmlFor="checked" className="md:text-base text-xs">
              {" "}
              {completed ? "Completed" : "Marked as completed"}
            </Label>
          </fieldset>
        </div>
      </div>
    </>
  );
};
export default Entry;

Entry.propTypes = {
  name: PropTypes.string.isRequired,
  instructor: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  dueDate: PropTypes.string.isRequired,
};
