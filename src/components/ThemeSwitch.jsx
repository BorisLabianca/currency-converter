import { useDispatch } from "react-redux";
import { switchTheme } from "../features/theme/themeSlice";
import { RiSunFill, RiMoonFill } from "react-icons/ri";

const ThemeSwitch = () => {
  const dispatch = useDispatch();
  return (
    <label className="flex relative mb-4 self-end mr-[4.1666665%]">
      <input
        type="checkbox"
        className="peer appearance-none absolute top-0 left-0 h-full w-full"
        onClick={() => {
          dispatch(switchTheme());
        }}
      />
      <span className="sr-only">Basculer</span>
      <span className="bg-blue-600 h-7 w-14 rounded-full flex items-center after:bg-white after:w-5 after:h-5 after:rounded-full p-1 flex-shrink-0 peer-checked:bg-gray-900 peer-checked:after:translate-x-7 peer-checked:after:bg-gray-300 ease-in-out duration-300 after:duration-300 after:z-[1]"></span>
      <RiSunFill className="absolute right-1 top-1 z-[0] text-xl text-yellow-200" />
      <RiMoonFill className="absolute left-1 z-[0] top-1 justify-end text-xl text-yellow-200" />
    </label>
  );
};

export default ThemeSwitch;
