import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../db/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { NavbarComponent } from "../components/navbar";
import { Card, Button, Badge, Divider } from "keep-react";
import TreeComponent from "../components/syllabustree";
import { ArrowRight, Heart, Check } from "phosphor-react";
import courseimg from "../assets/courseimg.png";
import Footer from "../components/footer";
import { Toaster, toast } from "react-hot-toast";

const CourseDetail = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [Enrolled, setEnrolled] = useState(false);
  const [isLiked, setisLiked] = useState(false);

  useEffect(() => {
    const fetchCourse = async () => {
      const courseDoc = doc(db, "courses", id);
      const courseSnapshot = await getDoc(courseDoc);
      if (courseSnapshot.exists()) {
        setCourse({ id: courseSnapshot.id, ...courseSnapshot.data() });
        setEnrolled(courseSnapshot.data().enrolled || false);
        setisLiked(courseSnapshot.data().isLiked || false);
      } else {
        console.error("No such document!");
      }
    };

    fetchCourse();
  }, [id]);

  const handleLikes = async (id) => {
    const courseDoc = doc(db, "courses", id);

    await updateDoc(courseDoc, {
      likes: course.likes + 1,
    });

    setisLiked(true);
  };

  const hanldeEnroll = async (id) => {
    const now = new Date();
    const dueDate = new Date(now.setMonth(now.getMonth() + 6)).toDateString();

    const courseDoc = doc(db, "courses", id);

    await updateDoc(courseDoc, {
      enrolled: !Enrolled,
      completed: false,
      dueDate: dueDate,
    });

    setEnrolled(!Enrolled);
    {
      Enrolled
        ? toast.error("Unenrolled Successfully", { duration: 1000 })
        : toast.success("Enrolled Successfully", { duration: 1000 });
    }
  };

  if (!course) {
    return <div>No Details Avaialble</div>;
  }

  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="py-4">
          <NavbarComponent />
        </div>
        <Divider color="secondary" />
      </div>

      <div className="flex flex-col gap-8">
        <div className="flex flex-col lg:flex-row md:p-8 p-2 gap-8 lg:justify-between items-center">
          <div className="flex flex-col gap-4 p-4 rounded-lg w-full bg-slate-50">
            <div className="text-4xl font-bold">{course.name}</div>
            <div className="max-w-3xl md:text-base text-sm">
              {course.description}
            </div>
            <Divider color="secondary" />
            <div className="flex items-center md:gap-4 gap-2">
              <div className="md:text-base text-sm">
                Instructor:{" "}
                <span className="text-blue-600 font-medium md:text-base text-sm">
                  {course.instructor}
                </span>
              </div>
              <div>|</div>
              <div className="md:text-base text-sm">
                Duration: {course.duration}
              </div>
              <div>|</div>
              <div className="md:text-base text-sm">
                Location: {course.location}
              </div>
            </div>
            <div className="flex items-center justify-between">
              {" "}
              <div className="md:text-base text-sm">
                Enrollment Status:{" "}
                <Badge
                  color={
                    course.enrollmentStatus === "Open"
                      ? "success"
                      : course.enrollmentStatus === "Closed"
                      ? "error"
                      : course.enrollmentStatus === "In Progress"
                      ? "warning"
                      : ""
                  }
                  className="p-4"
                >
                  {course.enrollmentStatus}
                </Badge>
              </div>
            </div>

            <div className="flex gap-2 md:text-base text-sm">
              <div>Prerequisites:</div>
              <ul className="flex gap-2">
                {course.prerequisites.map((prerequisite, index) => (
                  <li key={index}>{prerequisite}, </li>
                ))}
              </ul>
            </div>

            <p className="md:text-base text-sm">Schedule: {course.schedule}</p>
          </div>
          <Card className="shadow-large">
            <Card.Header>
              <img src={courseimg} alt="image" width={600} height={400} />
            </Card.Header>
            <Card.Content className="space-y-3">
              <Button
                className={`w-full border-black flex gap-2 items-center bg-black hover:bg-error-500 text-white ${
                  isLiked ? "cursor-not-allowed" : ""
                }`}
                onClick={() => handleLikes(course.id)}
              >
                {isLiked ? "Liked" : "Like"}
                <Heart size={18} />
              </Button>
              <Button
                variant="outline"
                className={`${
                  course.enrollmentStatus == "Closed"
                    ? "cursor-not-allowed opacity-50"
                    : ""
                } w-full text-black border-black flex gap-2 items-center`}
                onClick={() => hanldeEnroll(course.id)}
              >
                {Enrolled ? "Already Enrolled" : "Enroll Now"}
                {Enrolled ? <Check size={18} /> : <ArrowRight size={18} />}
              </Button>
            </Card.Content>
          </Card>
        </div>
        <div className="flex flex-col gap-4 p-4 mx-8 rounded-lg bg-slate-50">
          <div className="text-xl font-bold text-metal-800">Syllabus:</div>
          <TreeComponent syllabus={course.syllabus} />
        </div>
      </div>
      <Footer />
      <Toaster position="top-center" />
    </>
  );
};

export default CourseDetail;
