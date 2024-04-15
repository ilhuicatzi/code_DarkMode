import CodeComponent from "@/components/vitejs/CodeComponent";
import { darkMode_code1, darkMode_code2, darkMode_code3, darkMode_code4 } from "@/utils/darkMode_next";


export default function Nextjs() {
  return (
    <main>
      <article className="flex flex-col items-start justify-center sm:mx-14 md:mx-32 mt-20">
        <section className="sm:w-3/4 mb-20 px-4">
          <h2 className="text-4xl font-bold mb-4">Dark Mode</h2>
          <p>
            Activar el modo oscuro en Next.js usando Tailwind CSS y next-themes.
          </p>
        </section>

        <section className="sm:w-10/12 mx-5 w-11/12">
          <ol className="relative border-s border-zinc-200 dark:border-zinc-700">
            <li className="mb-14 ms-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-zinc-100 rounded-full -start-3 ring-8 ring-white dark:ring-zinc-900 dark:bg-zinc-900">
                <p className="font-semibold">1</p>
              </span>
              <h3 className="flex items-center mb-1 text-xl font-semibold text-zinc-900 dark:text-white">
              Instalar next-themes (Install next-themes)
              </h3>
              <p className="block mb-2 text-sm font-normal leading-none text-zinc-400 dark:text-zinc-500">
              next-theme es una librería que nos permite cambiar el tema de nuestra aplicación de forma sencilla.
              </p>
              <CodeComponent darkMode_code={darkMode_code1} size="20px" />
            </li>

            <li className="mb-14 ms-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-zinc-100 rounded-full -start-3 ring-8 ring-white dark:ring-zinc-900 dark:bg-zinc-900">
                <p className="font-semibold">2</p>
              </span>
              <h3 className="flex items-center mb-1 text-xl font-semibold text-zinc-900 dark:text-white">
              Crear un Theme Provider (Create a Theme Provider)
              </h3>
              <p className="block mb-2 text-sm font-normal leading-none text-zinc-400 dark:text-zinc-500">
              contexts/themeProvider.tsx
              </p>
              <CodeComponent darkMode_code={darkMode_code2} size="320px" />
            </li>

            <li className="mb-14 ms-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-zinc-100 rounded-full -start-3 ring-8 ring-white dark:ring-zinc-900 dark:bg-zinc-900">
                <p className="font-semibold">3</p>
              </span>
              <h3 className="flex items-center mb-1 text-xl font-semibold text-zinc-900 dark:text-white">
              Usar el proveedor de temas (Use the theme provider)
              </h3>
              <p className="my-2">
              Agregar <code className="px-1 py-0.5 bg-zinc-100 dark:bg-zinc-800 rounded-lg ">ThemeProvider</code> al archivo raíz (layaout)
              </p>
              <p className="block mb-2 text-sm font-normal leading-none text-zinc-400 dark:text-zinc-500">
              app/layaout.tsx
              </p>
              <CodeComponent darkMode_code={darkMode_code3} size="300px" />
            </li>

            <li className="mb-14 ms-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-zinc-100 rounded-full -start-3 ring-8 ring-white dark:ring-zinc-900 dark:bg-zinc-900">
                <p className="font-semibold">4</p>
              </span>
              <h3 className="flex items-center mb-1 text-xl font-semibold text-zinc-900 dark:text-white">
              Cambiar el tema (Change the theme)
              </h3>
              <p className="block mb-2 text-sm font-normal leading-none text-zinc-400 dark:text-zinc-500">
              components/ButtonThemeSwitcher.tsx
              </p>
              <CodeComponent darkMode_code={darkMode_code4} size="350px" />
            </li>
          </ol>
        </section>
      </article>
    </main>
  );
}
