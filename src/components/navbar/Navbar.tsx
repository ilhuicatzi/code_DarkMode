import { FaGithub } from "react-icons/fa";
import ButtonDarkMode from "./ButtonDarkMode";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="flex justify-end items-center px-8 py-2">
      <ul className="flex  items-center gap-2">
        <li>
          <button
            onClick={() => navigate("/")}
            className="px-3 py-0.5 hover:bg-zinc-200/60 hover:dark:bg-zinc-800 rounded-lg "
          >
            Home
          </button>
        </li>
        <li>
          <button
            onClick={() => navigate("/about")
            }
            className="px-3 py-0.5 hover:bg-zinc-200/60 hover:dark:bg-zinc-800 rounded-lg "
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() =>
              window.open(
                "https://github.com/ilhuicatzi/code_DarkMode",
                "_blank"
              )
            }
            className="hover:bg-zinc-200/60 hover:dark:bg-zinc-800 p-2 rounded-full mr-1"
          >
            <FaGithub className="w-5 h-5" />
          </button>
        </li>
        <li>
          <ButtonDarkMode />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
