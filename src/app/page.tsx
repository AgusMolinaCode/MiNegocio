import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Form from "../components/Form";
import Completion from "@/components/AiResult";

const page = () => {
  return (
    <div className="fondo ">
      <Navbar />
      <Hero />
      <div className="">
        <Form />
      </div>
    </div>
  );
};

export default page;
