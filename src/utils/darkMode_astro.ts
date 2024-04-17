export const darkMode_code1 = `
<!doctype html>

<script is:inline>
// Función para obtener la preferencia de tema del usuario
const getThemePreference = () => {
    // Verifica si localStorage está disponible y si hay una entrada para 'theme'
    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
        // Devuelve el valor almacenado en localStorage si está disponible
        return localStorage.getItem('theme');
    }
    // Si no hay valor en localStorage, determina la preferencia basada en el sistema operativo
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

// Determina si el tema actual es oscuro o claro
const isDark = getThemePreference() === 'dark';

// Añade o elimina la clase 'dark' del elemento raíz dependiendo de la preferencia de tema
document.documentElement.classList[isDark ? 'add' : 'remove']('dark');

// Verifica si localStorage está disponible para guardar la preferencia de tema
if (typeof localStorage !== 'undefined') {
    // Observa cambios en el atributo de clase del elemento raíz
    const observer = new MutationObserver(() => {
        // Verifica si la clase 'dark' está presente en el elemento raíz para determinar el tema
        const isDark = document.documentElement.classList.contains('dark');
        // Actualiza el valor almacenado en localStorage con la preferencia de tema actual
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
    // Observa cambios en el atributo 'class' del elemento raíz
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
}

</script>

<html lang="en">
	...
`;

export const darkMode_code2 = `
<style is:global>
	html{
		background-color: #f9f9f9;
		color: #333;
	}
	.dark {
		background-color: #333;
		color: #f9f9f9;
	}
</style>
`;

export const darkMode_code4 = `
import type { SVGProps } from "react";

export function Moon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 256 256"
      {...props}
    >
      <path
        fill="currentColor"
        d="M232.13 143.64a6 6 0 0 0-6-1.49a90.07 90.07 0 0 1-112.27-112.3a6 6 0 0 0-7.49-7.48a102.88 102.88 0 0 0-51.89 36.31a102 102 0 0 0 142.84 142.84a102.88 102.88 0 0 0 36.31-51.89a6 6 0 0 0-1.5-5.99m-42 48.29a90 90 0 0 1-126-126a90.9 90.9 0 0 1 35.52-28.27a102.06 102.06 0 0 0 118.69 118.69a90.9 90.9 0 0 1-28.24 35.58Z"
      ></path>
    </svg>
  );
}

export function Sun(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 256 256"
      {...props}
    >
      <path
        fill="currentColor"
        d="M122 40V16a6 6 0 0 1 12 0v24a6 6 0 0 1-12 0m68 88a62 62 0 1 1-62-62a62.07 62.07 0 0 1 62 62m-12 0a50 50 0 1 0-50 50a50.06 50.06 0 0 0 50-50M59.76 68.24a6 6 0 1 0 8.48-8.48l-16-16a6 6 0 0 0-8.48 8.48Zm0 119.52l-16 16a6 6 0 1 0 8.48 8.48l16-16a6 6 0 1 0-8.48-8.48M192 70a6 6 0 0 0 4.24-1.76l16-16a6 6 0 0 0-8.48-8.48l-16 16A6 6 0 0 0 192 70m4.24 117.76a6 6 0 0 0-8.48 8.48l16 16a6 6 0 0 0 8.48-8.48ZM46 128a6 6 0 0 0-6-6H16a6 6 0 0 0 0 12h24a6 6 0 0 0 6-6m82 82a6 6 0 0 0-6 6v24a6 6 0 0 0 12 0v-24a6 6 0 0 0-6-6m112-88h-24a6 6 0 0 0 0 12h24a6 6 0 0 0 0-12"
      ></path>
    </svg>
  );
}
`;

export const darkMode_code3 = `
import { Sun, Moon } from "../assets/icons/Sun-Mon";
import { useState, useEffect } from "react";

function ButtonDarkMode() {
  const [theme , setTheme] = useState("light");

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setTheme(isDarkMode ? "dark" : "light");
  }, []);

  useEffect(() => {
    const isDark = theme === "dark" || 
      (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches)
    document.documentElement.classList[isDark ? "add" : "remove"]("dark");
  }, [theme]);

  return (
    <div>
      <button
        className="flex items-center justify-center w-10 h-10 text-white bg-gray-800 rounded-full"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? <Sun /> : <Moon />}
      </button>
    </div>
  )
}

export default ButtonDarkMode
`;
