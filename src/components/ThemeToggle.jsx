import Sun from '../assets/sun_icon.png'
import Moon from "../assets/moon_icon.png";


function ThemeToggle({ toggleTheme, theme }) {

  return (
      <img src={theme === 'Light' ? Moon : Sun} alt="" className="w-8 p-1 rounded-full bg-gray-200  absolute right-4 top-9 cursor-pointer"  onClick={toggleTheme} />

  );
}

export default ThemeToggle