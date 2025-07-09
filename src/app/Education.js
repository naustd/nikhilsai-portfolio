import NauLogo from "../assets/NAULogo.png";
import OULogo from "../assets/OULogo.webp";
export default function Education() {
  return (
    <>
      <div className=" bg-white dark:bg-gray-900">
        <h4 className="text-3xl font-bold text-gray-800 dark:text-zinc-50 mb-2 ">
          Education
        </h4>
        <div className="w-14 h-1 bg-blue-600 mb-4 ml-10 flex items-center"></div>
        <div className="p-4 bg-gray-100 rounded-md flex flex-col md:flex-row md:items-start ">
          <div className="flex flex-col md:flex-row items-cente md:items-start gap-4 md:gap-10">
            {/* Logo */}
            <div className="items-center w-32 h-32 flex-shrink-0">
              <img
                src={NauLogo}
                alt="Masters"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="text-center md:text-left">
              <p className="text-lg font-semibold">
                Master's in Information Technology
              </p>
              <p>2024 - 2025 </p>
              <p>Flagstaff, AZ, USA</p>
            </div>

            {/* Beside we need give details like */}
            {/* collegeName, Degree ,years, Address */}
          </div>
          <div className=" flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-10">
            {/* Logo */}
            <div className="w-32 h-32 flex-shrink-0">
              <img
                src={OULogo}
                alt="Bacherlors"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="text-center md:text-left">
              <p className="text-lg font-semibold">Osmania University</p>
              <p>Bachelor's in ECE</p>
              <p>2018 - 2021 </p>
              <p>Hyderabad, TG, India</p>
            </div>
            {/* Beside we need give details like */}
            {/* collegeName, Degree ,years, Address */}
          </div>
        </div>
      </div>
    </>
  );
}
