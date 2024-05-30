import { Navbar, Avatar } from "keep-react";
import { useNavigate } from "react-router-dom";

export const NavbarComponent = () => {
  const navigate = useNavigate();
  return (
    <Navbar fluid={true} className="px-0">
      <Navbar.Container className="flex items-center justify-between">
        <Navbar.Container className="flex items-center">
          <div
            className="text-xl md:text-3xl font-bold pb-2 cursor-pointer"
            onClick={() => navigate("/")}
          >
            CourseLearner
          </div>
          <Navbar.Divider></Navbar.Divider>
          <Navbar.Container
            tag="ul"
            className="lg:flex hidden items-center justify-between gap-8"
          >
            <a href="/">Home</a>
            <a href="/dashboard">Dashboard</a>
            <a href="/About">About</a>
          </Navbar.Container>
          <Navbar.Collapse collapseType="sidebar">
            <Navbar.Container tag="ul" className="flex flex-col gap-5">
              <a href="/">Home</a>
              <a href="/dashboard">Dashboard</a>
              <a href="/About">About</a>
            </Navbar.Container>
          </Navbar.Collapse>
        </Navbar.Container>

        <Navbar.Container className="flex gap-2">
          <Avatar size="lg" />
          <Navbar.Toggle />
        </Navbar.Container>
      </Navbar.Container>
    </Navbar>
  );
};
