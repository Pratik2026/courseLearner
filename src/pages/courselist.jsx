import { useState, useEffect, useMemo } from "react";
import { db } from "../db/firebase.js";
import { collection, getDocs } from "firebase/firestore";
import { CardComponent } from "../components/card.jsx";
import { SidebarComponent } from "../components/filtersidebar.jsx";
import { Dropdown, Divider, Button } from "keep-react";
import { CaretDown } from "phosphor-react";
import { NavbarComponent } from "../components/navbar.jsx";
import { useDebounce } from "../utility/usedebounce.jsx";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  useEffect(() => {
    const fetchCourses = async () => {
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
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const filteredCourses = useMemo(() => {
    const query = debouncedSearchQuery.toLowerCase();
    return courses.filter(
      (course) =>
        course.name.toLowerCase().includes(query) ||
        course.instructor.toLowerCase().includes(query)
    );
  }, [debouncedSearchQuery, courses]);

  useEffect(() => {
    const fetchCourses = async () => {
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
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) {
    return <>Loading...</>;
  }

  const dropdownData = ["Recent", "Popular", "Top Rated", "Newest", "Oldest"];

  return (
    <div className="flex flex-col gap-4 p-4">
      <NavbarComponent />
      <Divider color="secondary" />
      <div className="flex gap-12 justify-center">
        <SidebarComponent
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <div className="flex flex-col gap-4 justify-center items-end w-full">
          <Dropdown
            action={
              <Button
                color="secondary"
                variant="outline"
                className="flex items-center gap-2"
              >
                <CaretDown size={16} />
                Sort By
              </Button>
            }
            actionClassName="border-none"
            className="pl-0"
          >
            <Dropdown.List>
              {dropdownData.map((data) => (
                <Dropdown.Item key={Math.random()}>
                  <p className="text-body-4 font-normal text-metal-400">
                    {data}
                  </p>
                </Dropdown.Item>
              ))}
            </Dropdown.List>
          </Dropdown>
          <div className="flex flex-col gap-8 justify-center w-full">
            {filteredCourses.map((course) => (
              <CardComponent
                key={course.id}
                searchquery={searchQuery}
                {...course}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
