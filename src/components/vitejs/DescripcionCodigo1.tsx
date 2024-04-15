import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function DescripcionCodigo1() {
  return (
    <section className="mb-32 px-4">
      <h3 className="text-xl font-semibold">Funcionamiento</h3>
      <div className="px-1">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Importaciones</AccordionTrigger>
            <AccordionContent>
              <p>Se importan las funciones y hooks esenciales de React:</p>
              <ul className="px-4 my-4 font-mono text-muted-foreground">
                <li>createContext</li>
                <li>useContext</li>
                <li>useEffect</li>
                <li>useState</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Tipos y Props</AccordionTrigger>
            <AccordionContent>
              <p>
                Se definen tipos y una interfaz para el componente `ThemeProvider`:
              </p>
              <ul className="px-4 my-4 font-mono text-muted-foreground">
                <li>
                  Theme: &quot;dark&quot; | &quot;light&quot; | &quot;system&quot;
                </li>
                <li>ThemeProviderProps: children, defaultTheme, storageKey</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Estado Inicial y Contexto</AccordionTrigger>
            <AccordionContent>
              <p>Se establece el estado inicial y se crea el contexto:</p>
              <ul className="px-4 my-4 font-mono text-muted-foreground">
                <li>initialState: theme, setTheme</li>
                <li>ThemeProviderContext: createContext</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>ThemeProvider Component</AccordionTrigger>
            <AccordionContent>
              <p>Se crea el componente `ThemeProvider` para gestionar el tema:</p>
              <ul className="px-4 my-4 font-mono text-muted-foreground">
                <li>useState: theme</li>
                <li>useEffect: aplicar el tema al HTML</li>
                <li>value: estado del tema y función para actualizarlo</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}

export default DescripcionCodigo1;
