import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white px-4 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row flex-wrap justify-between gap-10">

        {/* About Us */}
        <div className="flex flex-col gap-3 w-full md:w-[17rem]">
          <h1 className="text-[1.5rem] font-semibold">About Us</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Odio massa est ultricies
            bibendum ornare. Ultrices sed massa mauris leo leo enim quis
            convallis. Ut convallis tortor amet quam. In ut mauris eu nibh vel.
          </p>
          <div className="flex gap-5 text-2xl mt-2">
            <a
              className="hover:text-blue-500 transition-colors"
              href="https://facebook.com"
              target="_blank"
            >
              <FaFacebookF />
            </a>
            <a
              className="hover:text-pink-500 transition-colors"
              href="https://instagram.com"
              target="_blank"
            >
              <FaInstagram />
            </a>
            <a
              className="hover:text-sky-400 transition-colors"
              href="https://twitter.com"
              target="_blank"
            >
              <FaTwitter />
            </a>
            <a
              className="hover:text-blue-700 transition-colors"
              href="https://linkedin.com"
              target="_blank"
            >
              <FaLinkedinIn />
            </a>
            <a
              className="hover:text-red-600 transition-colors"
              href="https://youtube.com"
              target="_blank"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Head Office */}
        <div className="flex flex-col gap-4 w-full md:w-[17rem]">
          <h1 className="text-[1.5rem] font-semibold">Head Office</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Id netus ante porttitor
            imperdiet.
          </p>
          <p>
            Phone: <span>0123456789</span>
          </p>
          <p>
            Email:{" "}
            <a
              href="mailto:example@gmail.com"
              className="text-blue-400 hover:text-red-500"
            >
              example@gmail.com
            </a>
          </p>
          <p>Office time: 9AM to 6PM</p>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col gap-4 w-full md:w-[17rem]">
          <h1 className="text-[1.5rem] font-semibold">Newsletter</h1>
          <p>
            Subscribe to our newsletter for updates.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex w-full bg-white rounded overflow-hidden"
          >
            <input
              type="email"
              placeholder="Email Address*"
              className="flex-grow px-4 py-2 text-black focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-red-600 text-white px-4 hover:bg-red-700 transition-colors"
            >
              Go
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}
