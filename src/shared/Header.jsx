import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import { CiSearch } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import LanguageSwitcher from "../components/language/LanguageSwitcher";

//  const { t } = useTranslation();
// const navListMenuItems = [
//   {
//     title: t("header.PsychologicalConsultations"),
//     description: "",
//   },
//   {
//     title: t("header.StudyAbroadServices"),
//     description: "",
//   },
//   {
//     title: t("header.Offers"),
//     description: "",
//   },
//   {
//     title: t("header.Other"),
//     description: "",
//   },
// ];
function NavListMenu() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = navListMenuItems.map(({ title, description }, key) => (
    <a href="#" key={key}>
      <MenuItem className="flex items-center flex-col grid-cols-1 rounded-lg">
        <div>
          <Typography
            variant="h6"
            color="blue-gray"
            className="flex items-center text-sm font-bold"
          >
            {title}
          </Typography>
          <Typography
            variant="paragraph"
            className="text-xs ! text-blue-gray-500"
          >
            {description}
          </Typography>
        </div>
      </MenuItem>
    </a>
  ));

//   return (
//     <section>
//       <Menu
//         open={isMenuOpen}
//         handler={setIsMenuOpen}
//         offset={{ mainAxis: 20 }}
//         placement="bottom"
//         allowHover={true}
//       >
//         <MenuHandler>
//           <Typography as="div" variant="small" className="font-medium">
//             <ListItem
//               className="flex items-center gap-2 py-2 pr-4 text-gray-900 text-[17.5px] font-semibold justify-center text-center hover:text-pColor hover:bg-opacity-0"
//               selected={isMenuOpen || isMobileMenuOpen}
//               onClick={() => setIsMobileMenuOpen((cur) => !cur)}
//             >
//               {t("header.Other")}
//               <ChevronDownIcon
//                 strokeWidth={2.5}
//                 className={`hidden h-3 w-3 transition-transform lg:block ${
//                   isMenuOpen ? "rotate-180" : ""
//                 }`}
//               />
//               <ChevronDownIcon
//                 strokeWidth={2.5}
//                 className={`block h-3 w-3 transition-transform lg:hidden ${
//                   isMobileMenuOpen ? "rotate-180" : ""
//                 }`}
//               />
//             </ListItem>
//           </Typography>
//         </MenuHandler>
//         <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
//           <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
//             {renderItems}
//           </ul>
//         </MenuList>
//       </Menu>
//       <div className="block lg:hidden">
//         <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
//       </div>
//     </section>
//   );
// }
function NavList() {
  const { t } = useTranslation();
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1 flex flex-col items-center text-center lg:items-start lg:text-start">
      <Link to={"/"}>
        <ListItem className="flex items-center gap-2 py-2 pr-4 text-black mt-[1.2%] text-[17.5px] font-semibold hover:text-pColor hover:bg-opacity-0">
          {t("header.home")}
        </ListItem>
      </Link>

      <Typography
        as="a"
        href="#dasd"
        variant="small"
        color="blue-gray"
        className=""
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4 text-[17.5px] font-semibold hover:text-pColor hover:bg-opacity-0">
          {t("header.Courses")}
        </ListItem>
      </Typography>

      <Typography
        as="a"
        href="#dasd"
        variant="small"
        color="blue-gray"
        className=""
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4 text-[17.5px] font-semibold  hover:text-pColor hover:bg-opacity-0">
          {t("header.Dimplomas")}
        </ListItem>
      </Typography>

      <Typography
        as="a"
        href="#dasd"
        variant="small"
        color="blue-gray"
        className=""
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4 text-[17.5px] font-semibold hover:text-pColor hover:bg-opacity-0">
          {t("header.Blogs")}
        </ListItem>
      </Typography>

      <Typography
        as="a"
        href="#dasd"
        variant="small"
        color="blue-gray"
        className=""
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4 text-[17.5px] font-semibold hover:text-pColor hover:bg-opacity-0">
          {t("header.Offers")}
        </ListItem>
      </Typography>

      <Typography
        as="a"
        href="#dasd"
        variant="small"
        color="blue-gray"
        className=""
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4 text-[17.5px] font-semibold hover:text-pColor hover:bg-opacity-0">
          {t("header.Children's school")}
        </ListItem>
      </Typography>

      {/* <NavListMenu /> */}
    </List>
  );
}
}
export default function Header() {
  const [openNav, setOpenNav] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const headerRef = useRef();
  const { t } = useTranslation();
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
    if (headerRef.current) {
      headerRef.current.style.flexDirection = "column-reverse";
    }
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        if (headerRef.current) {
        headerRef.current.style.background = "#eee";
      }
      } else {
        if (headerRef.current){
          headerRef.current.style.background = "transparent";
        }
      }
    });
  }, []);

  return (
    <Navbar
      ref={headerRef}
      className="fixed top-0 left-0 w-full z-50 transition-all duration-500  max-w-full px-4 bg-transparent border-none rounded-none shadow-none"
    >
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 lg:ml-2 flex justify-center items-center"
        >
          <Link className="flex justify-center items-center">
            <img
              src="/src/assets/images/logo-2.png"
              alt="logo"
              className="w-12"
            />
            <span className="text-2xl text-[#525fe1] font-semibold">IAC</span>
          </Link>
        </Typography>
        {/* links */}
        <div className="hidden lg:block">
          <NavList />
        </div>
        {/* logo */}
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>

        <div className="hidden  lg:flex">
          <div className="bg-pColor bg-opacity-10 relative mb-[-5px] text-pColor rounded-[50%] p-3 cursor-pointer">
            <span className="absolute top-[-.9rem] z-[10] right-[-.5rem] text-[15px] border-2 text-white rounded-[50%] bg-pColor px-[.3rem]">
              {numberOfItems.length}
            </span>
            <FaCartShopping className="text-[17px]" />
          </div>
          <div className="bg-pColor bg-opacity-10 mx-2 mb-[-5px] text-pColor rounded-[50%] p-3 cursor-pointer">
            <CiSearch className="text-[17px]" />
          </div>
          <Button
            className="w-[150px] h-[35px] border-[1px] text-pColor mx-auto pt-[4px]  hover:bg-hoverColor hover:text-white bg-opacity-5 transition-all duration-500 border-pColor text-[15.5px]"
            variant="text"
          >
            <Link to={"/login"}> {t("header.Login")} </Link>
          </Button>
          <div className="flex items-center justify-center mx-[.5rem]"><LanguageSwitcher /></div>
          
        </div>
      </div>

      <Collapse open={openNav} className="">
        <NavList />
        <div className="flex w-full flex-wrap items-center justify-center gap-4 lg:hidden pb-[10px]">
          <Button
            className="w-[160px] h-[40px] border-[1px] text-pColor pt-[4px] hover:bg-hoverColor hover:text-white bg-opacity-5 transition-all duration-500 border-pColor text-[18.5px]"
            variant="text"
          >
            <Link to={"/login"}> تسجيل الدخول</Link>
          </Button>
          <div className="bg-pColor bg-opacity-10 text-pColor rounded-[50%] p-3">
            <CiSearch className="text-[22px]" />
          </div>
          <div className="bg-pColor bg-opacity-10 relative text-pColor rounded-[50%] p-3">
            <span className="absolute top-[-6px] z-[10] right-[-7px] text-[15px] border-2 text-white rounded-[50%] bg-pColor p-[4px]">
              1
            </span>
            <FaCartShopping className="text-[22px]" />
          </div>
        </div>
        <div className="flex items-center justify-center ">
          <LanguageSwitcher />
        </div>
      </Collapse>
      {showSearch && <SearchBar onClose={() => setShowSearch(false)} />}
    </Navbar>
  );
}


