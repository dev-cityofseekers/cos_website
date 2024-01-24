import { stringify } from "querystring";

function Team() {
  const teamMembers = [
    {
      name: "Luke/Liiav",
      role: "Vibe control & Website Developer",
      description:
        "Hi, I'm Luke, Spiritual seeker, Musician, Visionary, UX Designer/Frontend Dev, Event Organizer from Vienna. In COS 23 I felt a calling to unite and nourish a community that chooses love over fear, yeah baby. Im super excited for COS24.",
      image: "/images/team/luke.jpg",
    },
    {
      name: "Freddyi",
      role: "Finance & Legal",
      description:
        "21 years old and I’m in my second year of studying nursing. Most of my spare time is used for traveling, exploring new places, or meeting people. I can’t wait to get to know more people at and through the Event and create lifelong memories.",
      image: "/images/team/freddyi.png",
    },
    {
      name: "Ela",
      role: "Workshops & Marketing",
      description:
        "28 years old who loves to be outside, especially in the mountains, hiking in summer and skiing in winter. Favorite quote: 'If I could choose where I was born I would choose a place that knows no fear But since this change is mine to live it would be nowhere else but here' - Bukahara",
      image: "/images/team/ela.jpg",
    },
    {
      name: "Adalbert",
      role: "Tech & Infrastructure",
      description:
        "21 year old tech guy and crazy person that you probably will find running around, solving problems. Let's connect, deeptalk, party and create amazing memories :)",
      image: "/images/team/adel.jpg",
    },
    {
      name: "Sören",
      role: "Marketing ",
      description:
        "Farmgrown Marketing student, that aspires to do some good and pet some alpacas. I'm making sure to get only the best people on- and in front of the stage.",
      image: "/images/team/soeren_cut.jpg",
    },
    {
      name: "Didi",
      role: "Team management & Artists",
      description:
        "Rule number one: no one is allowed to leave my house with an empty stomach. So basically I'm the 25-year-old Grandma to all of my friends.",
      image: "/images/team/didi.jpg",
    },
    {
      name: "Johar",
      role: "Marketing & Social Media",
      description:
        "Idealistic neurodivergent teacher/coach, content creator, musician & budding techie. In my free time... well, I'm asleep. All over Germany. Let's have coffee outside our comfort zones!",
      image: "/images/team/johar.jpg",
    },
    {
      name: "Autumn",
      role: "Designer",
      description:
        "Just your local Canadian living and working in Germany. Also an avid musician and painter, just trying to make cool things for a living.",
      image: "/images/team/autumn.jpg",
    },
    {
      name: "ELIPSØ",
      role: "DJ",
      description:
        "ELIPSØ is responsible for providing quality music, throughout the evenings.\r\n Keeping energy at an all time high, this DJ knows what the crowd wants and delivers without fail.",
      image: "/images/team/jordan.jpeg",
    },
    {
      name: "Elias",
      role: "Tech & Safety Management",
      description:
        "25, a carpenter and an event technician from Germany. Currently living in Wiesbaden.",
      image: "/images/team/elias.png",
    },
    {
      name: "Áron",
      role: "Media production",
      description:
        "Your everyday creative with a physics degree. Chasing a dream in art and media. With a deep passion towards jazz, photography, and storytelling, I'm here to document our journey through COS.",
      image: "/images/team/Áron.jpg",
    },

    // Add more team members as needed
  ];

  return (
    <div className="md:w-full lg:w-9/12 mx-auto pb-10">
      {/* Introduction */}
      <div className="text-center mb-8 mx-8">
        <h2 className="font-omnes text-4xl pb-4">Meet Our Team</h2>
        <p className="text-gray-600">
          We are a passionate group of individuals who came together to make
          this dream a reality.
        </p>
        <img
          src="/images/team/teamfoto.png"
          alt="Group Photo"
          className="mt-4 rounded-lg shadow-lg w-full h-auto mx-auto"
        />
      </div>

      {/* Team Members */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-8 ">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-56 object-cover"
            />
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
