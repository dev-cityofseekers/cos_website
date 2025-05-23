
function Team() {
  const teamMembers = [

    {
      name: "Adalbert",
      role: "Tech & Infrastructure",
      description: "22 year old tech guy and crazy person that you probably will find running around, solving problems. Let's connect, deeptalk, party and create amazing memories :)",
      image: "/images/team/adel.jpg",
    },
    {
      name: "Anja",
      role: "First Aid & Comfort person",
      description: "I'm a 22 year old dog mom, who loves to travel with my furry friend. Ready to implement your crazy ideas, or have a deep talk at the campfire. Super excited to meet all of you at CoS 24.",
      image: "/images/team/Anja.jpg",
    },
    {
      name: "Autumn",
      role: "Designer",
      description: "Just your local Canadian living and working in Germany. Also an avid musician and painter, just trying to make cool things for a living.",
      image: "/images/team/autumn.jpg",
    },
    {
      name: "Didi",
      role: "Team management & Workshops",
      description: "Rule number one: no one is allowed to leave my house with an empty stomach. So basically I'm a Grandma to all of my friends. Let's find some four-leaf clovers together and share some strawberries. See you soon!!!",
      image: "/images/team/didi.png",
    },
    {
      name: "Ela",
      role: "Workshops & Marketing",
      description: "28 years old who loves to be outside, especially in the mountains, hiking in summer and skiing in winter. Favorite quote: 'If I could choose where I was born I would choose a place that knows no fear But since this change is mine to live it would be nowhere else but here' - Bukahara",
      image: "/images/team/ela.jpg",
    },
    {
      name: "Freddyi",
      role: "Finance & Legal",
      description: "Hey, I'm Freddyi, an aspring nurse and travel enthusiast who recently discovered her passion for tattoos with friends. I get caught sleeping at every possible moment and occasionally steal super cute dogs. And I can't wait to meet you at CoS! And yes, you get to meet said dog there.",
      image: "/images/team/freddyi.png",
    },
    {
      name: "Johar",
      role: "Marketing & Social Media",
      description: "Curious, creative connector. Musician & tech tool geek. \n" +
          "My guiding question: how can I make this moment & this life better for those in front of me? \n" +
          "When not in motion, I’m probably asleep, meditating, eating everything I find, or deeply listening to you.\n" +
          "Let’s hug and transform together this summer!",
      image: "/images/team/johar.jpg",
    },
    {
      name: "Luke/Liiav",
      role: "Vibe control & Website Developer",
      description: "Hi, I'm Luke, Spiritual seeker, Musician, Visionary, UX Designer/Frontend Dev, Event Organizer from Vienna. In COS 1.0 I felt a calling to unite and nourish a community that chooses love over fear, yeah baby. Im super excited for COS25.",
      image: "/images/team/luke.jpg",
    },
    {
      name: "Ness",
      role: "Financing & Fund Raising",
      description: "Hi I'm Ness, a 22 year old seeker, always curious and a farm enthusiast. Making dreams come true is my passion, COS 24 made me realise it's actually possible!!",
      image: "/images/team/Ness.jpg",
    },
    {
      name: "Sören",
      role: "Marketing ",
      description: "Farmgrown Marketing student, that aspires to do some good and pet some alpacas. I'm making sure to get only the best people on- and in front of the stage.",
      image: "/images/team/soeren_cut.jpg",
    },
    {
      name: "This could be you!",
      role: "Your Role Here",
      description: "Have skills that could enhance the COS experience? Our event wouldn't be be the same without our incredible guests - you're part of what makes it special! We're always happy to welcome passionate helpers or workshop hosts who want to contribute. If you'd like to get involved, reach out and let's create something amazing together!",
      image: "/images/team/group.JPG",
    }



  ];

  return (
      <div className="md:w-full lg:w-9/12 mx-auto pb-10">
        <div className="text-center mb-8 mx-8">
          <h2 className="font-omnes text-4xl pb-4">Meet Our Team</h2>
          <p className="text-gray-600">
            We are a passionate group of individuals who came together to make
            this dream a reality.
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
