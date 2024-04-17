import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import NextJs from "@/assets/Nextjs";
import Astro from "@/assets/Astro";
import Vitejs from "@/assets/Vitejs";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  return (
    <main>
      <section className=" px-10 mt-8 pt-10 sm:pb-20">
        <div className="sm:mx-10">
        <h1 className="sm:text-5xl text-2xl font-bold">Dark Mode</h1>
        <h2 className="sm:text-lg text-pretty md:w-3/4 mt-4">
          Hola soy <strong>Gonzalo</strong>. Bienvenido a mi sitio web, aquí
          encontrarás información sobre como implementar el modo oscuro en tu
          sitio web.
        </h2>
        </div>
      </section>

      <section className=" px-10 py-10 2xl:w-3/4">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center gap-5">

          <Card 
          onClick={() => navigate("/darkmode/astro")}
          className="flex flex-col items-center lg:w-5/6 xl:w-3/4 2xl:w-3/5 hover:bg-zinc-50 cursor-pointer dark:hover:bg-black/80 transition group duration-300">
            <CardHeader>
              <CardTitle className="text-center text-lg">Astro</CardTitle>
              <div className="overflow-hidden rounded-full flex justify-center items-center">
                <Astro className="rounded-full group-hover:scale-105 transition duration-300 object-cover h-24 w-24" />
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                Implementar el modo oscuro en Astro
              </CardDescription>
            </CardContent>
          </Card>

          <Card 
            onClick={() => navigate("/darkmode/nextjs")}
          className="lg:w-5/6 xl:w-3/4 2xl:w-3/5 flex flex-col items-center hover:bg-zinc-50 cursor-pointer dark:hover:bg-black/80 transition group duration-300">
            <CardHeader>
              <CardTitle className="text-center text-lg">Next.js</CardTitle>
              <div className="overflow-hidden rounded-full flex justify-center items-center">
                <NextJs className="rounded-full group-hover:scale-105 transition duration-300 object-cover h-24 w-24" />
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                Implementar el modo oscuro en Next.js
              </CardDescription>
            </CardContent>
          </Card>

          <Card
            onClick={() => navigate("/darkmode/vitejs")}
          className="lg:w-5/6 xl:w-3/4 2xl:w-3/5 flex flex-col items-center hover:bg-zinc-50 cursor-pointer dark:hover:bg-black/80 transition group duration-300">
            <CardHeader>
              <CardTitle className="text-center text-lg">Vite.js</CardTitle>
              <div className="overflow-hidden rounded-full flex justify-center items-center">
                <Vitejs className="rounded-full group-hover:scale-105 transition duration-300 object-cover h-24 w-24" />
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                Implementar el modo oscuro en Vite.js
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
