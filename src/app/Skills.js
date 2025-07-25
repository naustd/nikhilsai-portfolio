import React from "react";
export default function Skills() {
  const skillsData = [
    { id: 1, skill: "Java 8/11/17" },
    { id: 2, skill: "React JS" },
    { id: 3, skill: "Postgre Sql" },
    { id: 4, skill: "Spring Boot" },
    { id: 5, skill: "Spring" },
    { id: 6, skill: "Oracle Sql" },
    { id: 7, skill: "Angular" },
    { id: 8, skill: "GitHub" },
    { id: 9, skill: "AWS" },
    { id: 10, skill: "Dynamo DB" },
  ];
  return (
    <>
      <div className=" bg-white dark:bg-gray-900">
        <h4 className="text-3xl font-bold text-gray-800 dark:text-zinc-50 mb-2 ml-8 ">
          Skills
        </h4>
        <div className="w-14 h-1 bg-blue-600 mb-4 ml-10 flex items-center"></div>
        <div className="p-4 bg-gray-100 rounded-md ">
          <div className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-8 gap-2">
            {skillsData.map((item) => {
              return (
                <div
                  key={item.id}
                  className="bg-white p-1 rounded-2xl shadow-md hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 hover:ring-2 hover:ring-indigo-400 cursor-pointer"
                >
                  <h6 className="text-center text-gray-800 text-wrap text-2md font-semibold">
                    {item.skill}
                  </h6>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
