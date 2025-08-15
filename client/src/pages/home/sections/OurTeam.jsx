import React from "react";

export default function OurTeam() {
  const teamMembers = [
    {
      name: "John Doe",
      profession: "Lead Designer",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Jane Smith",
      profession: "Frontend Developer",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Alex Johnson",
      profession: "Backend Engineer",
      img: "https://randomuser.me/api/portraits/men/65.jpg",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 ">
      <div className="flex flex-col items-center text-center mb-20">
        <h4 className="uppercase text-xs text-green-600 font-semibold mb-2">
          Our Team
        </h4>
        <h2 className="text-2xl md:text-4xl font-bold text-green-900 leading-tight max-w-xl mx-auto">
          Meet the Creative Minds Behind MyNextTrip
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {teamMembers.map((member, idx) => (
          <div
            key={idx}
            className="relative flex flex-col items-center bg-green-50 rounded-xl shadow-md pt-20 pb-8 px-6"
          >
            <div className="absolute -top-16 left-1/2 -translate-x-1/2">
              <img
                src={member.img}
                alt={member.name}
                className="w-28 h-28 rounded-full border-4 border-green-500 outline outline-2 outline-green-300 object-cover"
                style={{
                  outlineOffset: "8px",
                  width: "112px",
                  height: "112px",
                }}
              />
            </div>
            <div className="mt-8 flex flex-col items-center">
              <h3 className="text-lg font-semibold text-green-800 mb-1">
                {member.name}
              </h3>
              <span className="text-green-600 text-sm">
                {member.profession}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
