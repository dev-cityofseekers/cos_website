function Team() {
    const teamMembers = [
      {
        name: 'John Doe',
        role: 'Founder & Organizer',
        description:
          'John is the visionary behind the festival, with years of experience in event planning and a passion for bringing people together.',
        image: '/images/john.jpg',
      },
      {
        name: 'Alice Smith',
        role: 'Marketing Manager',
        description:
          'Alice is responsible for promoting the festival and ensuring that the word gets out to as many people as possible.',
        image: '/images/alice.jpg',
      },
      {
        name: 'Alice Smith',
        role: 'Marketing Manager',
        description:
          'Alice is responsible for promoting the festival and ensuring that the word gets out to as many people as possible.',
        image: '/images/alice.jpg',
      },
      
      // Add more team members as needed
    ];
  
    return (
      <div className="md:w-full lg:w-9/12 mx-auto">
        {/* Introduction */}
        <div className="text-center mb-8 mx-8">
          <h2 className="font-omnes text-4xl pb-4">Meet Our Team</h2>
          <p className="text-gray-600">
            We are a passionate group of individuals who came together to make this festival a reality.
          </p>
          <img
            src="/images/team_cut.jpg"
            alt="Group Photo"
            className="mt-4 rounded-lg shadow-lg w-full h-auto mx-auto"
          />
        </div>
  
        {/* Team Members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-8 ">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600 text-sm">{member.role}</p>
                <p className="text-gray-700 text-sm mt-2">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Team;
  