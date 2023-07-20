// app/components/Form.tsx
"use client";

import { useState } from "react";
import { AiOutlineUser, AiFillFileText } from "react-icons/ai";
import { BiCategory, BiDownArrow } from "react-icons/bi";
import { GiSkills } from "react-icons/gi";
import { PiArrowFatDownFill } from "react-icons/pi";
import Completion from "@/components/AiResult";


export interface FormDataType {
  name: string;
  description: string;
  category: string;
  experience: string;
  budget: string;
}

const Form = () => {
  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    description: "",
    category: "",
    experience: "",
    budget: "",
  });

  const [formArray, setFormArray] = useState<FormDataType[]>([]);
  const [showCompletion, setShowCompletion] = useState(false); // 

  const handleInputChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { name, description, category, experience, budget } = formData;
    if (name && description && category && experience && budget) {
      const newFormData: FormDataType = {
        name: formData.name,
        description: formData.description,
        category: formData.category,
        experience: formData.experience,
        budget: formData.budget,
      };
      setFormArray((prevFormArray) => [...prevFormArray, newFormData]);
      setShowCompletion(true); 
    } else {
      alert("Por favor, completa todos los campos del formulario.");
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      description: "",
      category: "",
      experience: "",
      budget: "",
    });
    setFormArray([]);
    setShowCompletion(false); 
  };

  const handleEdit = () => {
    setShowCompletion(false); 
  };

  return (
    <div className="">
      <div className="mx-auto w-full px-2 md:px-7 pt-20  lg:px-10">
        <div className="mx-auto ">
          <h1 className="text-center text-5xl md:text-6xl font-bold text-[#e61717] ">
            Completa <span className="text-red-400">el</span>{" "}
            <span className="text-red-300">formulario</span>
          </h1>

          <p className="mx-auto mt-4 max-w-md text-center text-gray-400">
            completa el formulario para que podamos ayudarte, ten en cuenta que
            necesitamos que nos des la mayor cantidad de información posible
            para que la IA pueda ayudarte. Trata de ser lo mas especifico
            posible.
          </p>

          <div className="flex justify-center mx-auto mt-2">
            <PiArrowFatDownFill size={90} className="text-gray-800" />
            <PiArrowFatDownFill size={90} className="text-gray-800" />
            <PiArrowFatDownFill size={90} className="text-gray-800" />
            <PiArrowFatDownFill size={90} className="text-gray-800" />
            <PiArrowFatDownFill size={90} className="text-gray-800" />
          </div>

          <form onSubmit={handleSubmit} className={`${showCompletion ? 'pb-0' : 'pb-24'} mt-5 rounded-lg`}>
            <div className="sm:flex justify-center gap-2 md:gap-8 mx-auto ">
              <div className="w-full md:w-[600px] grid">
                <div>
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className=" rounded-lg w-full border-gray-200 p-4 pe-12 text-md shadow-sm"
                      placeholder="Tu nombre"
                      required
                    />

                    <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                      <AiOutlineUser size={22} className="text-gray-400" />
                    </span>
                  </div>
                </div>

                <div>
                  <div className="relative mt-4">
                    <textarea
                      name="description"
                      id="descripcion"
                      cols={30}
                      rows={9}
                      value={formData.description}
                      onChange={handleInputChange}
                      className="w-full rounded-lg   border-gray-200 p-4 pe-12 text-md shadow-sm"
                      placeholder='Descripción de idea de negocio: Ejemplo: "Me gustaría establecer una tienda en línea especializada en productos de belleza y cuidado personal naturales y libres de químicos dañinos, promoviendo un estilo de vida más saludable."'
                      required
                    />

                    <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                      <AiFillFileText size={22} className="text-gray-400" />
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex-col gap-4 w-full md:w-[600px]">
                <div>
                  <div className="relative">
                    <input
                      type="text"
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full rounded-lg border-gray-200 p-4 pe-12 text-md shadow-sm"
                      placeholder='Categoría o industria: Ejemplo: "Alimentación y gastronomía"'
                      required
                    />

                    <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                      <BiCategory size={22} className="text-gray-400" />
                    </span>
                  </div>
                </div>

                <div>
                  <div className="relative mt-4">
                    <input
                      type="text"
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      className="w-full rounded-lg border-gray-200 p-4 pe-12 text-md shadow-sm"
                      placeholder='Nivel de experiencia emprendedora: Ejemplo: "Principiante"'
                      required
                    />

                    <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                      <GiSkills size={22} className="text-gray-400" />
                    </span>
                  </div>
                </div>

                <div>
                  <div className="relative mt-4">
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full rounded-lg  border-gray-200 p-4 pe-12 text-md shadow-sm appearance-none"
                      required
                    >
                      <option value="">¿Cuál es tu presupuesto?</option>
                      <option value="Muy Bajo">Muy Bajo</option>
                      <option value="Bajo">Bajo</option>
                      <option value="Medio">Medio</option>
                      <option value="Alto">Alto</option>
                      <option value="Muy Alto">Muy Alto</option>
                    </select>
                    <span className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <BiDownArrow
                        size={20}
                        className="text-gray-400 mr-[0.6rem]"
                      />
                    </span>
                  </div>
                </div>

                <div className="flex justify-center gap-4 mt-8">
                  {showCompletion ? null : (
                    
                    <button
                    type="submit"
                    
                    className={`transition-background inline-flex h-12 items-center justify-center rounded-md border border-slate-800 bg-gradient-to-r from-green-100 via-green-200 to-green-400 bg-[length:200%_200%] bg-[0%_0%] px-6 font-medium text-black duration-500 hover:bg-[100%_200%] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50`}
                  >
                    Enviar Formulario
                  </button>
                  
                  )}

                  <button
                    type="submit"
                    onClick={handleReset}
                    className="transition-background inline-flex h-12 items-center justify-center rounded-md border border-slate-800 bg-gradient-to-r from-red-100 via-red-200 to-red-400 bg-[length:200%_200%] bg-[0%_0%] px-6 font-medium text-black duration-500 hover:bg-[100%_200%] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                  >
                    Reset
                  </button>

                  {showCompletion ? (
                    <button
                    type="button"
                    onClick={handleEdit}
                    className="transition-background inline-flex h-12 items-center justify-center rounded-md border border-slate-800 bg-gradient-to-r from-indigo-100 via-blue-200 to-indigo-400 bg-[length:200%_200%] bg-[0%_0%] px-6 font-medium text-black duration-500 hover:bg-[100%_200%] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                  >
                    Editar
                  </button>
                  ) : null}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      {showCompletion && <Completion formData={formData} />}
    </div>
  );
};

export default Form;
