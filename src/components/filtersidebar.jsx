import { MagnifyingGlass, FunnelSimple, CaretDown } from "phosphor-react";
import { Divider, Icon, Input, Rating, Sidebar } from "keep-react";
import { Dropdown, Button } from "keep-react";
import PropTypes from "prop-types";

export const SidebarComponent = ({ searchQuery, setSearchQuery }) => {
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };
  const isLargeScreen = window.matchMedia("(min-width: 769px)").matches;
  const dropdownData = ["Rating", "Price", "Newest", "Oldest"];

  return (
    <>
      {isLargeScreen ? (
        <Sidebar className="lg:min-w-max min-w-72 lg:px-4 px-0 shadow-sm">
          <Sidebar.Header className="space-y-4 flex flex-col">
            <div className="flex gap-4 items-center">
              <FunnelSimple size={18} />
              <div className="font-bold text-metal-700">Filter</div>
            </div>
            <Divider color="secondary" />
          </Sidebar.Header>

          <Sidebar.Body>
            <div className="flex flex-col gap-4 mt-8">
              <fieldset className="relative max-w-md ml-2">
                <Input
                  placeholder="Search by title, name"
                  className="ps-11 outline outline-1 outline-metal-400"
                  size={30}
                  value={searchQuery}
                  onChange={handleSearch}
                />
                <Icon>
                  <MagnifyingGlass size={18} color="#AFBACA" />
                </Icon>
              </fieldset>
              <Dropdown
                action={
                  <Button
                    color="secondary"
                    variant="outline"
                    className="flex items-center gap-2"
                  >
                    <CaretDown size={16} />
                    Rating
                  </Button>
                }
                actionClassName="border-none"
                className="pl-0"
              >
                <Dropdown.List>
                  <Dropdown.Item>
                    <Rating>
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star />
                    </Rating>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Rating>
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star />
                    </Rating>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Rating>
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star />
                    </Rating>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Rating>
                      <Rating.Star />
                      <Rating.Star />
                    </Rating>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Rating>
                      <Rating.Star />
                    </Rating>
                  </Dropdown.Item>
                </Dropdown.List>
              </Dropdown>
            </div>
          </Sidebar.Body>
        </Sidebar>
      ) : (
        <div className="flex justify-between lg:px-4 w-full">
          <fieldset className="relative w-full md:max-w-md md:ml-2 py-2 max-h-20">
            <Input
              placeholder="Search by title, name"
              className="md:ps-11 ps-8 outline outline-1 outline-metal-400"
              size={30}
              value={searchQuery}
              onChange={handleSearch}
            />
            <Icon>
              <MagnifyingGlass
                size={18}
                color="#AFBACA"
                className="absolute top-5 left-2 "
              />
            </Icon>
          </fieldset>
          <Dropdown
            action={
              <Button
                color="secondary"
                variant="outline"
                className="flex items-center md:gap-2 gap-1 md:p-3 p-1 text-xs md:text-base"
              >
                {isLargeScreen && <CaretDown size={16} />}
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
        </div>
      )}
    </>
  );
};

SidebarComponent.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  setSearchQuery: PropTypes.func.isRequired,
};
