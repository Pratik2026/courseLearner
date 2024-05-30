import { useState, useEffect, useMemo } from "react";
import { db } from "../db/firebase.js";
import { collection, getDocs } from "firebase/firestore";
import { CardComponent } from "../components/card.jsx";
import { SidebarComponent } from "../components/filtersidebar.jsx";
import { Dropdown, Divider, Button } from "keep-react";
import { CaretDown } from "phosphor-react";
import { NavbarComponent } from "../components/navbar.jsx";
import { useDebounce } from "../utility/usedebounce.jsx";
import Footer from "../components/footer.jsx";
import { useSelector, useDispatch } from "react-redux";
import { setIsLoading } from "../Redux/loadingslice.js";
import ScreenLoader from "../components/loader.jsx";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const loading = useSelector((state) => state.loading.isLoading);
  const dispatch = useDispatch();

  const debouncedSearchQuery = useDebounce(searchQuery, 500);
  const isLargeScreen = window.matchMedia("(min-width: 769px)").matches;

  useEffect(() => {
    const fetchCourses = async () => {
      dispatch(setIsLoading(true));
      try {
        const coursesCollection = collection(db, "courses");
        const querySnapshot = await getDocs(coursesCollection);
        const coursesData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setCourses(coursesData);
      } catch (error) {
        console.error("Error fetching the courses:", error);
      } finally {
        dispatch(setIsLoading(false));
      }
    };

    fetchCourses();
  }, [dispatch]);

  const filteredCourses = useMemo(() => {
    const query = debouncedSearchQuery.toLowerCase();
    return courses.filter(
      (course) =>
        course.name.toLowerCase().includes(query) ||
        course.instructor.toLowerCase().includes(query)
    );
  }, [debouncedSearchQuery, courses]);

  const dropdownData = ["Relevance", "Most Liked"];

  const handleSort = (data) => {
    if (data === "Most Liked") {
      const sortedCourses = [...filteredCourses].sort(
        (a, b) => b.likes - a.likes
      );
      setCourses(sortedCourses);
    }
    else {
      const sortedCourses = [...filteredCourses].sort(
        (a, b) => a.id - b.id
      );
      setCourses(sortedCourses);
    }
  };

  if (loading) {
    return (
      <>
        <ScreenLoader />
      </>
    );
  }

  return (
    <div className="flex flex-col gap-4 lg:p-4 p-2">
      <NavbarComponent />
      <Divider color="secondary" />
      <div className="flex lg:flex-row flex-col gap-6 xl:gap-12 justify-center items-center lg:items-start">
        <SidebarComponent
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <div className="flex flex-col gap-4 justify-center items-end w-full">
          {isLargeScreen && (
            <Dropdown
              action={
                <Button
                  color="secondary"
                  variant="outline"
                  className="flex items-center gap-2 md:p-3 p-2"
                >
                  <CaretDown size={16} />
                  Sort By
                </Button>
              }
              actionClassName="border-none"
              className="pl-0"
            >
              <Dropdown.List className="flex flex-col items-center ">
                {dropdownData.map((data) => (
                  <Dropdown.Item
                    key={Math.random()}
                    className=" hover:bg-metal-50 w-full flex justify-center"
                    onClick={() => handleSort(data)}
                  >
                    <p className="text-body-4 font-normal text-metal-600 text-center">
                      {data}
                    </p>
                  </Dropdown.Item>
                ))}
              </Dropdown.List>
            </Dropdown>
          )}

          <div className="flex flex-col items-center md:items-start gap-8 justify-center w-full">
            {filteredCourses.map((course) => (
              <div key={course.id}>
                <CardComponent searchquery={searchQuery} {...course} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Courses;
