import AboutImage from '@/components/Home/About/AboutImage';
import { aboutMe, hobbies } from '@/constants/aboutMe';

const AboutPage = () => {
  return (
    <div
      className="min-h-[calc(100vh-332px)] flex flex-col justify-center container mx-auto px-4 py-8 text-white/60 pt-24"
      data-aos="fade-left"
    >
      <div className="flex flex-col lg:flex-row justify-between gap-12">
        <div className="ml-6 mt-6">
          <AboutImage />
        </div>

        <div className="lg:mt-6 flex-1 text-justify">
          {/* About me section */}
          {aboutMe.map((about, index: number) => (
            <div key={index} className="mb-8">
              <h2 className="text-2xl lg:text-4xl pb-4 font-bold text-white/80">{about.title}</h2>
              {about.paragraphs.map((para, index: number) => (
                <p key={index} className="mb-4">
                  {para}
                </p>
              ))}
              {about.list && (
                <ul className="list-disc list-inside mt-2">
                  {about.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}

              {/* Show hobbies only for "My Hobbies and Interests" */}
              {about.title === 'My Hobbies and Interests' && (
                <div className="flex flex-wrap justify-center gap-8 bg-gray-700/30 p-6 rounded-2xl shadow-lg mt-6">
                  {hobbies.map((hobby, index: number) => {
                    const Icon = hobby.icon;
                    return (
                      <div key={index} className="flex flex-col items-center">
                        <div className="bg-gray-900 p-4 rounded-full text-4xl text-white shadow-md">
                          <Icon />
                        </div>
                        <span className="text-white/80 text-lg font-medium mt-2">
                          {hobby.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
