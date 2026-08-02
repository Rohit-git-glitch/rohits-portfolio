import EducationLottie from "../components/EducationLottie";
import i2itLogo from "../assets/i2itLogo.png";
import HSC from "../assets/HSC.png";
import schoolLogo from "../assets/schoolLogo.png";
const educationData = [
    {
        logo: i2itLogo,
        duration: "2024 - Present",
        title: "B.Tech Information Technology",
        institute: "International Institute of Information Technology (I²IT), Pune",
        details: "Savitribai Phule Pune University , 1st Year CGPA: 9.6 | 2nd Year CGPA: 9.16",
    },
    {
        logo: HSC,
        duration: "2021 - 2024",
        title: "Higher Secondary Education",
        institute: "SSRBJC College , Lonikand",
        details: "Maharashtra Board , Percentage: 80%",
    },
    {
        logo: schoolLogo,
        duration: "2020 - 2021",
        title: "SSC",
        institute: "Friends Education Institute",
        details: "Maharashtra State Board , Percentage: 86% ",
    },
];
function Education() {
    return (
        <section
            id="education"
            className="py-24 px-6"
        >
            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold">
                        Education
                    </h2>

                    <p className="text-gray-400 mt-4 text-lg">
                        My Academic Journey , so far
                    </p>
                </div>

                {/* Main Layout */}
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Side */}
                    <div className="flex justify-center items-center h-[500px] rounded-3xl border">

                        <EducationLottie />

                    </div>

                    {/* Right Side */}
                    <div className="space-y-10">

                        <div className="relative">

                            {/* Vertical Line */}
                            <div className="absolute left-8 top-0 w-1 h-full bg-blue-500 rounded-full"></div>

                            <div className="space-y-12">

                                {educationData.map((item, index) => (

                                    <div
                                        key={index}
                                        className="flex items-start gap-8 relative"
                                    >

                                        {/* Logo Circle */}
                                        <div className="z-10 w-16 h-16 rounded-full bg-white border-4 border-blue-500 flex items-center justify-center shadow-lg">

                                            <img
                                                src={item.logo}
                                                alt={item.title}
                                                className="w-10 h-10 object-contain"
                                            />

                                        </div>

                                        {/* Card */}
                                        <div className="flex-1 border rounded-2xl p-6 hover:shadow-xl transition">

                                            <span className="inline-block bg-blue-500 text-white text-sm px-4 py-1 rounded-full mb-4">
                                                {item.duration}
                                            </span>

                                            <h3 className="text-2xl font-bold">
                                                {item.title}
                                            </h3>

                                            <p className="mt-2 text-lg">
                                                {item.institute}
                                            </p>

                                            <p className="mt-2 text-gray-400">
                                                {item.details}
                                            </p>

                                        </div>

                                    </div>

                                ))}

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default Education;