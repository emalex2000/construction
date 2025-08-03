export default function Goal() {
  return (
    <div className="flex flex-col md:flex-row bg-[#1a1a1a] justify-center items-stretch gap-6 px-6 py-12 text-black">
      {/* Vision Card */}
      <div className="bg-white p-6 rounded-md shadow-md w-full md:w-[20rem] text-center">
        <h2 className="text-red-500 font-bold text-lg mb-4">OUR VISION</h2>
        <p className="text-sm">
          “To become the leading Engineering and Construction firm in South India and
          eventually India, by consistently delivering projects of highest quality standards
          while ensuring a strong commitment and dedication to our clients.”
        </p>
      </div>

      {/* Mission Card */}
      <div className="bg-white p-6 rounded-md shadow-md w-full md:w-[28rem]">
        <h2 className="text-blue-500 font-bold text-lg mb-4 text-center">OUR MISSION</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>
            Over the next decade, become one of the key players in transforming South India’s building infrastructure.
          </li>
          <li>
            On-time completion of every project, delivered with highest quality and mechanization where possible.
          </li>
          <li>
            Commitment to achieve client satisfaction and success in every transaction.
          </li>
          <li>
            Become one of the well-known brands in employing migrant and local employees.
          </li>
          <li>
            Execute every project with a focus on environmental sustainability and reducing carbon footprint.
          </li>
        </ul>
      </div>
    </div>
  );
}
