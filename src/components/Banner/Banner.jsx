// import bannerImage from "../../assets/Photos/Banner.jpg";
import "./Banner.css";
const Banner = () => {
  return (
    <div>
      <div className="hero lg:h-[550px] rounded-[32px]  bg-no-repeat bg-cover background">
        <div className="hero-content flex-col lg:flex-row-reverse justify-center lg:justify-between gap-8 lg:gap-36 p-8">
          <div className="text-center">
            <h1 className="mb-5 text-4xl lg:text-5xl font-black w-[890px] mx-auto leading-tight text-white">
              Discover an exceptional cooking <br /> class tailored for you!
            </h1>
            <p className="mb-5 max-w-[900px] text-lg lg:text-lg text-[#ffffffcc]">
              Learn and Master Basic Programming, Data Structures, Algorithm,
              OOP, Database and solve 500+ coding problems to become an
              exceptionally well world-class Programmer.
            </p>
            <div className="flex justify-center gap-3">
              <button
                onClick="searchHandle()"
                className="btn px-4 md:px-7 bg-[#0BE58A] hover:bg-[#34a073] border-2 border-[#0BE58A] hover:border-[#34a073] text-base md:text-xl rounded-full font-bold text-black"
              >
                Explore Now
              </button>
              <button
                onClick="searchHandle()"
                className="btn bg-transparent hover:bg-white hover:text-black px-4 md:px-7 border-2 border-white hover:border-white text-base md:text-xl rounded-full font-bold text-white outline-none"
              >
                Our Feedback
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
