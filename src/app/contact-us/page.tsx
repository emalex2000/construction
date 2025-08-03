import NavBar from "../../../components/NavBar";

export default function ContactUs() {
  return (
    <>
      <div className="bg-[url('/blurry-bg.jpg')] bg-cover bg-center w-full">
        <NavBar />

        <div className="text-white flex flex-col items-center pt-[5rem] pb-[2rem] px-4 text-center">
          <div className="flex flex-row gap-1 text-sm text-gray-300 mt-2">
            <a href="/" className="hover:underline">
              Home
            </a>{" "}
            / <p className="text-red-500">Contact Us</p>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold">Contact</h1>
        </div>
      </div>

      <div className="flex flex-col gap-9 bg-[#1a1a1a] items-center pt-[5rem] px-4 pb-[4rem]">
        <h1 className="pb-5 text-white border-b border-gray-400 text-xl sm:text-2xl">
          SEND US A MESSAGE
        </h1>

        <div className="flex flex-col gap-6 w-full max-w-3xl">
          {/* Name and Email */}
          <div className="flex flex-col sm:flex-row gap-6 w-full">
            <input
              type="text"
              placeholder="Full Name"
              id="fullname"
              className="flex-1 bg-white rounded-2xl focus:outline-none p-3 w-full"
            />
            <input
              type="email"
              placeholder="Email Address"
              id="email"
              className="flex-1 bg-white rounded-2xl focus:outline-none p-3 w-full"
            />
          </div>

          {/* Message */}
          <textarea
            name="message"
            id="message"
            placeholder="Leave your Message"
            className="w-full h-60 p-3 bg-white rounded-2xl focus:outline-none resize-none"
          ></textarea>

          {/* Button */}
          <button className="p-3 text-white bg-blue-600 hover:bg-blue-400 transition-colors rounded-xl w-full">
            Send
          </button>
        </div>
      </div>
    </>
  );
}
