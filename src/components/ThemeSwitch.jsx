import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { switchTheme } from "../features/theme/themeSlice";
// import { RiSunFill, RiMoonFill } from "react-icons/ri";
import { IoDesktopOutline, IoSunny, IoMoon } from "react-icons/io5";

const ThemeSwitch = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((store) => store.theme);
  const element = document.documentElement;

  const options = [
    { icon: <IoSunny />, text: "light" },
    { icon: <IoMoon />, text: "dark" },
    { icon: <IoDesktopOutline />, text: "system" },
  ];
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const onWindowMatch = () => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };
  onWindowMatch();
  useEffect(() => {
    switch (theme) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;
      case "light":
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;
      default:
        localStorage.removeItem("theme");
        onWindowMatch();
        break;
    }
  }, [theme]);
  darkQuery.addEventListener("change", (event) => {
    if (!("theme" in localStorage)) {
      if (event.matches) {
        element.classList.add("dark");
      } else {
        element.classList.remove("dark");
      }
    }
  });
  return (
    // <label className="flex relative mb-4 self-end mr-[4.1666665%]">
    //   <input
    //     type="checkbox"
    //     className="peer appearance-none absolute top-0 left-0 h-full w-full"
    //     onClick={() => {
    //       dispatch(switchTheme());
    //     }}
    //   />
    //   <span className="sr-only">Basculer</span>
    //   <span className="bg-blue-600 h-7 w-14 rounded-full flex items-center after:bg-white after:w-5 after:h-5 after:rounded-full p-1 flex-shrink-0 peer-checked:bg-gray-900 peer-checked:after:translate-x-7 peer-checked:after:bg-gray-300 ease-in-out duration-200 after:duration-200 after:z-[1]"></span>
    //   <RiSunFill className="absolute right-1 top-1 z-[0] text-xl text-yellow-200" />
    //   <RiMoonFill className="absolute left-1 z-[0] top-1 justify-end text-xl text-yellow-200" />
    // </label>
    <div className="duration-200 text-gray-400 dark:text-gray-100 dark:bg-slate-800 bg-sky-200 rounded-lg flex items-center mb-4 self-end">
      {options.map((option) => {
        return (
          <div
            key={option.text}
            className={`w-8 h-8 leading-9 text-xl rounded-full m1 flex items-center justify-center ${
              theme === option.text && "text-sky-600"
            } cursor-pointer`}
            onClick={() => {
              dispatch(switchTheme(option.text));
            }}
          >
            {option.icon}
          </div>
        );
      })}
      {/* <div className="w-8 h-8 leading-9 text-xl rounded-full m1 text-sky-600 flex items-center justify-center">
        <IoSunny />
      </div>
      <div className="w-8 h-8 leading-9 text-xl rounded-full m1 text-sky-600 flex items-center justify-center">
        <IoMoon />
      </div>
      <div className="w-8 h-8 leading-9 text-xl rounded-full m1 text-sky-600 flex items-center justify-center">
        <IoDesktopOutline />
      </div> */}
    </div>
  );
};

export default ThemeSwitch;
