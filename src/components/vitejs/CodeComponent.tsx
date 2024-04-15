"use client";

import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";
import javascript from "highlight.js/lib/languages/javascript";
import { CopyIcon, CheckIcon } from "@radix-ui/react-icons"
import { toast } from "sonner"

hljs.registerLanguage("javascript", javascript);

type Props = {
  darkMode_code: string,
  size: string
}

function Codigo1({ darkMode_code, size} : Props) {
  const highlightedCode = hljs.highlight(darkMode_code, {
    language: "javascript",
  }).value;

    const copyCode = () => {
    navigator.clipboard.writeText(darkMode_code);
    toast("Copied", {
      description: "The code has been copied to your clipboard",
      icon: <CheckIcon />,
      duration: 2000,
    })
  }
  return (
    <section className="mb-12 px-4 mt-8 rounded-xl relative">
      <div className="flex justify-end">
        <button 
        onClick={copyCode}
        className="bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 p-1.5 rounded-s-md absolute top-0">
          <CopyIcon />
        </button>
      </div>
      <div className={`w-full bg-zinc-50 dark:bg-zinc-900/70 rounded-lg overflow-auto h-[${size}]`}>
        <pre>
          <code
            className="block px-4 pb-4 text-sm language-javascript"
            dangerouslySetInnerHTML={{ __html: highlightedCode }}
          ></code>
        </pre>
      </div>
    </section>
  );
}

export default Codigo1;
