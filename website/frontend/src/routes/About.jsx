import Container from '../components/Container';
import Card from '../components/Card';

export default function About() {
  const teamMembers = [
    {
      id: 1,
      name: 'Member One',
      role: 'Researcher',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit with expertise in computer vision.',
      image: 'https://placehold.co/400x400/4B9CD3/ffffff?text=M1',
      linkedin: '#',
    },
    {
      id: 2,
      name: 'Member Two',
      role: 'Researcher',
      bio: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua in machine learning.',
      image: 'https://placehold.co/400x400/3b85b5/ffffff?text=M2',
      linkedin: '#',
    },
    {
      id: 3,
      name: 'Member Three',
      role: 'Researcher',
      bio: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris in deep learning.',
      image: 'https://placehold.co/400x400/2f6b93/ffffff?text=M3',
      linkedin: '#',
    },
    {
      id: 4,
      name: 'Member Four',
      role: 'Researcher',
      bio: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum in AI research.',
      image: 'https://placehold.co/400x400/4B9CD3/ffffff?text=M4',
      linkedin: '#',
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <Container>
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Edge Labs at UNC
          </h1>
          <div className="prose dark:prose-invert max-w-none mx-auto">
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              We are Edge Labs at UNC and we are a team of 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Our mission is to advance the state of AI detection through rigorous research and innovative applications.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. We combine expertise in computer vision, machine learning, and signal processing to tackle one of the most pressing challenges in digital media today.
            </p>
          </div>
        </div>

        {/* Team Grid */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Our Team
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.id} className="text-center">
                <div className="flex flex-col items-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-brand/20">
                    <img
                      src={member.image}
                      alt={`${member.name} headshot`}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                    {member.name}
                  </h3>

                  <p className="text-sm font-medium text-brand mb-3">
                    {member.role}
                  </p>

                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {member.bio}
                  </p>

                  <a
                    href={member.linkedin}
                    className="inline-flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 hover:text-brand transition-colors focus:outline-none focus:ring-2 focus:ring-brand rounded px-2 py-1"
                    aria-label={`${member.name}'s LinkedIn profile`}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="max-w-4xl mx-auto mt-20">
          <Card className="bg-gradient-to-br from-brand/5 to-brand/10 border-brand/20">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Interested in Our Work?
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                We're always open to collaborations, questions, and discussions about AI detection research. Feel free to reach out through our contact channels or explore our tool to see our work in action.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-6 py-3 bg-brand hover:bg-brand-600 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand"
                >
                  Contact Us
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white dark:bg-gray-800 border-2 border-brand text-brand hover:bg-brand/5 dark:hover:bg-brand/10 font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand"
                >
                  View Publications
                </a>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </div>
  );
}
