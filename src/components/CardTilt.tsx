import React from "react";

const CardTilt = () => {
  return (
    <>
      <div className="relative h-36 max-w-[500px] overflow-hidden rounded-xl border border-slate-800 p-[1px] backdrop-blur-3xl">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ffffbf_0%,#ffffbf_50%,#feed73_100%)]" />
        <div className="inline-flex h-full w-full items-center justify-center rounded-xl bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl" >
        <h1 className="text-xl md:text-2xl text-gray-200 text-center">Completa nuestro formulario y desbloquea el camino hacia tu negocio soñado.</h1>
        </div>
      </div>
    </>
  );
};

export default CardTilt;
