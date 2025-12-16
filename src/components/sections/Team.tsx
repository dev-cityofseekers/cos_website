import { teamMembers } from "../../data/teamMembers";

function Team() {
  return (
    <div className="md:w-full lg:w-9/12 mx-auto pb-10">
      <div className="text-center mb-8 mx-8">
        <h2 className="font-omnes text-4xl pb-4">Meet Our Team</h2>
        <p className="text-gray-600">
          We are a passionate group of individuals who came together to make this dream a reality.
        </p>
        <img
          src="/images/team/teamfoto.png"
          alt="Group pic"
          className="mt-4 rounded-lg shadow-lg w-full h-auto mx-auto"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img src={member.image} alt={member.name} className="w-full h-56 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-600 text-sm">{member.role}</p>
              <p className="text-gray-700 text-sm mt-2">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
