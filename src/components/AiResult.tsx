import { useState, useRef, useEffect } from "react";
import { useCompletion } from "ai/react";
import { FormDataType } from "@/components/Form";
import { AiOutlineCopy,AiFillCopy } from "react-icons/ai";

interface CompletionProps {
  formData: FormDataType;
}

const Completion = ({ formData }: CompletionProps) => {
  const [copied, setCopied] = useState("");
  const { name, description, category, experience, budget } = formData;

  const message = `Me llamo ${name}, y tengo una visión empresarial emocionante. Mi negocio soñado implica ${description}. En cuanto al presupuesto, cuento con ${budget} para invertir. Tengo una valiosa experiencia de ${experience} en el rubro, lo que me ha preparado para triunfar en la categoría de negocios llamada ${category}. ¿Qué opinas de mi proyecto? respondeme en base a la descripcion,categoria,presupuesto y experiencia que te di."`;

  const {
    completion,
    input,
    stop,
    isLoading,
    handleInputChange,
    handleSubmit,
    complete,
  } = useCompletion({
    api: "/api/completion",
    initialInput: message,
  });

  // const completionRef = useRef<HTMLDivElement>(null); // Creamos la referencia

// useEffect(() => {
//   if (completionRef.current) {
//     completionRef.current.scrollIntoView({ behavior: "instant" });
//   }
//   if (!completion) {
//     document.body.scrollTo({ top: document.body.scrollHeight, behavior: "instant" }); // Hacer scroll hasta el final de la página
//   }
// }, [completion]);

  const handleCopy = () => {
    setCopied(completion);
    navigator.clipboard.writeText(completion);
    setTimeout(() => {
      setCopied("");
    }, 1500);
  };

  return (
    <div className="max-w-[900px] flex justify-center items-center mx-auto">
      <form onSubmit={handleSubmit}>
        <div className=" grid content-center mt-3 items-center justify-center mx-auto   ">
          {isLoading && (
            <button
              type="button"
              onClick={stop}
              className="transition-background inline-flex h-12 items-center justify-center rounded-md border border-slate-800 bg-gradient-to-r from-red-100 via-red-200 to-red-400 bg-[length:200%_200%] bg-[0%_0%] px-6 font-medium text-black duration-500 hover:bg-[100%_200%] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              Stop
            </button>
          )}

          <button
            type="submit"
            id="result"
            disabled={isLoading}
            className="transition-background inline-flex h-12 items-center justify-center rounded-md border border-slate-800 bg-gradient-to-r from-yellow-100 via-orange-200 to-yellow-300 bg-[length:200%_200%] bg-[0%_0%] px-6 font-medium text-black duration-500 hover:bg-[100%_200%] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mt-2 "
          >
            {isLoading ? "Generando..." : "Generar Respuesta"}
          </button>
        </div>

        <input
          type="text"
          name="input"
          value={input}
          onChange={handleInputChange}
          className="hidden"
        />

        {completion && (
          <div
            className="bg-gray-700  p-2 m-2 md:p-4  rounded-xl lg:w-[1000px]"
            
          >
            <div className="flex justify-end m-2 gap-2" onClick={handleCopy}>
              {copied === completion ?
              <AiFillCopy className="h-6 w-6 cursor-pointer text-white" />
              :
              <AiOutlineCopy className="h-6 w-6 cursor-pointer text-white" />
              }
              <p className="font-medium cursor-pointer text-white text-sm">
                {copied === completion ? "Copiado!" : "Copiar Texto"}
              </p>
            </div>

            {completion &&
              completion.split("\n").map((line, index) => {
                if (
                  line.includes("Paso 1") ||
                  line.includes("Paso 2") ||
                  line.includes("Paso 3") ||
                  line.includes("Paso 4") 
                ) {
                  return (
                    <h2 key={index} className="text-blue-200 text-xl my-4">
                      {line}
                    </h2>
                  );
                } else {
                  return (
                    <p key={index} className="text-gray-100 text-lg my-2">
                      {line}
                    </p>
                  );
                }
              })}
          </div>
        )}
      </form>
    </div>
  );
};

export default Completion;
