import CodeComponent from "@/components/vitejs/CodeComponent";
import { darkMode_code1, darkMode_code2, darkMode_code3, darkMode_code4 } from "@/utils/darkMode_astro";


export default function Astro() {
  return (
    <main>
      <article className="flex flex-col items-start justify-center sm:mx-14 md:mx-32 mt-20">
        <section className="sm:w-3/4 mb-20 px-4">
          <h2 className="text-4xl font-bold mb-4">Dark Mode</h2>
          <p>
            Activar el modo oscuro en Astro usando Tailwind CSS y almecenando el tema en localStorage.
          </p>
        </section>

        <section className="sm:w-10/12 mx-5 w-11/12">
          <ol className="relative border-s border-zinc-200 dark:border-zinc-700">
            <li className="mb-14 ms-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-zinc-100 rounded-full -start-3 ring-8 ring-white dark:ring-zinc-900 dark:bg-zinc-900">
                <p className="font-semibold">1</p>
              </span>
              <h3 className="flex items-center mb-1 text-xl font-semibold text-zinc-900 dark:text-white">
                Agrega el tema al localStorage (Add theme to localStorage)
              </h3>
              <p className="block my-2 text-sm font-normal leading-none text-zinc-400 dark:text-zinc-500">
              layouts/Layout.astro 
              </p>
              <CodeComponent darkMode_code={darkMode_code1} size="20px" />
            </li>

            <li className="mb-14 ms-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-zinc-100 rounded-full -start-3 ring-8 ring-white dark:ring-zinc-900 dark:bg-zinc-900">
                <p className="font-semibold">2</p>
              </span>
              <h3 className="flex items-center mb-1 text-xl font-semibold text-zinc-900 dark:text-white">
              Agregar los estilos (Add styles)
              </h3>
              <p className="block my-2 text-sm font-normal leading-none text-zinc-400 dark:text-zinc-500">
              layouts/Layout.astro
              </p>
              <CodeComponent darkMode_code={darkMode_code2} size="320px" />
            </li>

            <li className="mb-14 ms-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-zinc-100 rounded-full -start-3 ring-8 ring-white dark:ring-zinc-900 dark:bg-zinc-900">
                <p className="font-semibold">3</p>
              </span>
              <h3 className="flex items-center mb-1 text-xl font-semibold text-zinc-900 dark:text-white">
              Cambiar el tema (Change the theme)
              </h3>
              <p className="my-2">
              Se crea un componente ButtonDarkMode.tsx, es decir, un componente de <a className="text-blue-700" href="https://docs.astro.build/es/guides/integrations-guide/react/" target="_blank" rel="noopener noreferrer">React</a>.
              </p>
              <p className="block my-2 text-sm font-normal leading-none text-zinc-400 dark:text-zinc-500">
              components/ButtonDarkMode.tsx
              </p>
              <CodeComponent darkMode_code={darkMode_code3} size="300px" />
            </li>

            <li className="mb-14 ms-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-zinc-100 rounded-full -start-3 ring-8 ring-white dark:ring-zinc-900 dark:bg-zinc-900">
                <p className="font-semibold">4</p>
              </span>
              <h3 className="flex items-center mb-1 text-xl font-semibold text-zinc-900 dark:text-white">
              **Extra: Iconos (Moon and Sun icons)
              </h3>
              <p className="block my-2 text-sm font-normal leading-none text-zinc-400 dark:text-zinc-500">
              src/assets/icons/Sun-Mon.tsx
              </p>
              <CodeComponent darkMode_code={darkMode_code4} size="350px" />
            </li>
          </ol>
        </section>
      </article>
    </main>
  );
}
