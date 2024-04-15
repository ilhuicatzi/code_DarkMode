import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "@/hooks/UseTheme"

function ButtonDarkMode() {
  const { theme, setTheme } = useTheme()

  const handleClick = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }
  return (
    <div>
      <button
        className="hover:bg-zinc-200/60 hover:dark:bg-zinc-800 p-2 rounded-full"
        onClick={handleClick}
      >
        {theme === "dark" ? <FaSun /> : <FaMoon />}
      </button>
    </div>
  )
}

export default ButtonDarkMode