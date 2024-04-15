
function AboutPage() {
  return (
    <main className="flex justify-center items-center">
      <section className="sm:mx-10 p-10 sm:w-3/4 lg:w-8/12 xl:w-3/6 mb-20">
        <h1 className="sm:text-4xl text-2xl font-bold mb-8">About</h1>
        <div className="flex flex-col gap-y-4 text-sm sm:text-base">
        <p>
          Hola soy <strong>Gonzalo</strong> un desarrollador web. Me encanta aprender cosas nuevas y compartir conocimientos
        </p>
        <p>
          Este proyecto es un ejemplo de como implementar el modo oscuro en una aplicación web utilizando React, TypeScript y Tailwind ya sea con <strong>Astro</strong>, <strong>Next.js</strong> o <strong>Vite.js</strong> 
        </p>

        <p>
          Puedes encontrar el código fuente en el siguiente repositorio de <code className="bg-zinc-200 dark:bg-zinc-800 px-3 py-0.5 rounded-lg cursor-pointer">GitHub </code>
        </p>

        <p>
          Si tienes alguna pregunta o sugerencia no dudes en contactarme a través de mi correo electrónico <button className="font-mono text-sm bg-zinc-200 dark:bg-zinc-800 px-3 py-0.5 rounded-lg cursor-pointer">g.ilhuicatzi@gmail.com</button>
        </p>
        </div>
      </section>
    </main>
  )
}

export default AboutPage