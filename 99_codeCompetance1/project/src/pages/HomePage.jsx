import { AboutUs } from "./AboutUs";
import { Footer } from "../Components/Footer"
import { Navbar } from "../Components/Navbar";
import bgImage from "../assets/img/bg-hero.jpg"
import { ContactUs } from "./ContactUs";

export const HomePage = () => {
  return (
    <>
      <div
        className="w-full flex flex-col justify-center items-center min-h-screen bg-bottom bg-no-repeat bg-cover relative "
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <Navbar />
        <h1 className="text-5xl font-bold text-[#C1CFA1] py-4 text-center">
          Temukan Kedamaian di Setiap Langkah
        </h1>
        <p className="text-center text-[#FEFAE0] max-w-2xl text-sm font-light">
          Biarkan diri Anda menyatu dengan keindahan alam yang menenangkan.
          Jelajahi hamparan pegunungan dan lembah yang membentang di depan mata,
          di mana langit menyapa bumi dan kabut menyelimuti setiap sudut
          keindahan. Saatnya merasakan ketenangan dan kesejukan alam dalam hidup
          Anda
        </p>
        <div className="flex gap-4 pt-5">
          <button className="btn bg-[#A5B68D] text-white">
            Mulai Petualangan
          </button>
          <button className="btn bg-[#C1CFA1] text-white">
            Jelajahi Sekarang
          </button>
        </div>
      </div>
      <ContactUs />
      <Footer />
    </>
  );
}