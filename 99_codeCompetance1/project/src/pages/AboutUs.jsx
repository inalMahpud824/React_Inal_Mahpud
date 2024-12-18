import place from "../assets/img/about.png";
import abt2 from "../assets/img/abt-2.png";
import { Navbar } from "../Components/Navbar";
export const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col bg-[#808D7C] px-[2rem] py-[4rem] ">
        <div className="flex justify-center items-center ">
          <div className="">
            <h1 className="text-4xl font-bold text-white text-center mb-8">
              About Us - Serene Valley
            </h1>
            <p className="text-lg text-white leading-relaxed mb-6">
              Selamat datang di Serene Valley, tempat di mana kedamaian dan
              keindahan alam bertemu untuk menciptakan pengalaman yang tak
              terlupakan. Di Serene Valley, kami percaya bahwa setiap langkah
              yang Anda ambil harus membawa Anda lebih dekat pada ketenangan
              jiwa dan kebahagiaan sejati.
            </p>
          </div>
          <img src={place} alt="" />
        </div>
        <div className="flex justify-center items-center bg-[#808D7C] py-7">
          <img src={abt2} alt="" />
          <div className="">
            <h1 className="text-4xl font-bold text-white text-center mb-8">
              Misi Kami
            </h1>
            <p className="text-lg text-white leading-relaxed mb-6">
              Misi kami adalah untuk menyediakan ruang di mana setiap individu
              dapat merasakan kedamaian dan keindahan alam. Kami berkomitmen
              untuk menjaga kelestarian lingkungan dan memberikan pengalaman
              yang memperkaya jiwa bagi setiap pengunjung yang datang.
            </p>
          </div>
        </div>
      </div>
      {/* <h2>Misi Kami</h2>
      <p>
        Misi Kami Misi kami adalah untuk menyediakan ruang di mana setiap
        individu dapat merasakan kedamaian dan keindahan alam. Kami berkomitmen
        untuk menjaga kelestarian lingkungan dan memberikan pengalaman yang
        memperkaya jiwa bagi setiap pengunjung yang datang.
      </p> */}
    </>
  );
}