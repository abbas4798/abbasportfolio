import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full h-screen pt-20 pb-10 relative" id="contact">
      <div
        className="flex items-center w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url(/main-bg.webp)" }}
      >
        <div className="pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]">
          <div className="w-full absolute left-0 -bottom-72 min-h-96">
            <img
              src="/footer-grid.svg"
              alt="grid"
              className="w-full h-full opacity-50 "
            />
          </div>

          <div className="flex flex-col items-center">
            <h1 className="heading lg:max-w-[65vw]">
              Ready to take <span className="text-purple">your</span> digital
              presence to the next level?
            </h1>
            <p className="text-white-200 md:mt-5 my-2 text-center">
              Reach out to me today and let&apos;s discuss how I can help you
              achieve your goals.
            </p>
            <a href="mailto:abbasmuhammad4798@gmail.com">
              <MagicButton
                title="Let's get in touch"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>
          <div className="flex items-center align-bottom md:gap-3 gap-6">
            {socialMedia.map((info) => (
              <a
                key={info.id}
                href={info.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-65 bg-black-200 rounded-lg border border-black-300 hover:bg-opacity-100  "
              >
                <img
                  src={info.img}
                  alt={`${info.url.split("https://")[1]} icon`}
                  width={info.width}
                  height={info.height}
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 z-[10]">
        <Image
          src="/horse.png"
          alt="horse"
          height={300}
          width={300}
          className="absolute right-55 top-40"
        />

        <Image src="/cliff.webp" alt="cliff" width={480} height={480} />
      </div>

      <div className="absolute bottom-0 z-[5] w-full h-auto">
        <Image
          src="/trees.webp"
          alt="trees"
          width={2000}
          height={2000}
          className="w-full h-full"
        />
      </div>

      <Image
        src="/stars.png"
        alt="stars"
        height={300}
        width={300}
        className="absolute top-0 left-0 z-[10]"
      />
    </footer>
  );
};

export default Footer;
