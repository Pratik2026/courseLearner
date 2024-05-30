import Footer from "../components/footer";
import { NavbarComponent } from "../components/navbar";
import Tableentry from "../components/tableentry.jsx";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../db/firebase.js";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setIsLoading } from "../Redux/loadingslice.js";
import ScreenLoader from "../components/loader.jsx";


const Dashboard = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const loading = useSelector((state) => state.loading.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCourses = async () => {
      dispatch(setIsLoading(true));
      try {
        const coursesCollection = collection(db, "courses");
        const q = query(coursesCollection, where("enrolled", "==", true));
        const querySnapshot = await getDocs(q);
        const coursesData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setEnrolledCourses(coursesData);
      } catch (error) {
        console.error("Error fetching the courses:", error);
      } finally {
        dispatch(setIsLoading(false));
      }
    };

    fetchCourses();
  }, [dispatch]);

  if (loading) {
    return <><ScreenLoader /></>;
  }

  return (
    <div className="flex flex-col gap-4 bg-[#F4F6FC]">
      <div className="py-4 bg-white">
        <NavbarComponent />
      </div>

      <div className="py-4">
        <div className="flex flex-col gap-4">
          {enrolledCourses.map((course) => (
            <Tableentry key={course.id} {...course} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
