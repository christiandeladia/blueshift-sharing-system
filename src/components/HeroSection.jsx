import { ArrowRight, Star, FaCalendarCheck } from "../assets/icons/react-icons";
import homes_img from "../assets/img/project/homes_img.webp";

export function HeroSection() {
  const agents = [
    {
      url: "https://images.unsplash.com/photo-1762341120638-b5b9358ef571?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBlcnNvbnxlbnwxfHx8fDE3NjM0MDY1Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      url: "https://images.unsplash.com/photo-1649589244330-09ca58e4fa64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzUxMjQxOHww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      url: "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1hbiUyMGhlYWRzaG90fGVufDF8fHx8MTc2MzQ3Mzk0Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      url: "https://images.unsplash.com/photo-1649589244330-09ca58e4fa64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMHdvbWFufGVufDF8fHx8MTc2MzQyMDIwM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  return (
    <section className="mx-4 md:mx-8 mt-2">
      <div className="relative bg-white rounded-[40px]">
        <div className="relative rounded-4xl overflow-hidden min-h-[600px] md:min-h-[800px]">
          <div className="absolute inset-0">
            <img
              src={homes_img}
              alt="Modern roof architecture"
              className="w-full h-full object-cover brightness-75"
            />
            <div className="absolute inset-0 bg-linear-to-r from-blue-900/70 via-blue-900/30 to-transparent"></div>
          </div>

          <div className="relative px-6 md:px-12 py-12 md:py-24 flex flex-col justify-between h-full">
            <div className="max-w-2xl">
              <div className="inline-flex items-center space-x-2 bg-white/10 text-white text-xs md:text-sm font-medium px-4 py-1.5 rounded-full mb-4">
                <div className="w-2.5 h-2.5 bg-green-400 rounded-full"></div>
                <span>Solar system is now on</span>
              </div>
              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6 font-bold uppercase">
                Paolo's Path to Zero Bills
              </h1>
              <p className="text-white/90 text-sm md:text-base mb-6 md:mb-8 max-w-lg">
                Discover how this powerful solar installation achieved maximum savings and environmental freedom. This path to success can be shared! Forward this page to your network to unlock rewards and begin helping others on their journey to zero electric bills.
              </p>
              <button className="bg-white text-blue-600 px-6 py-3 rounded-full flex items-center gap-2 hover:bg-gray-100 transition-colors cursor-pointer font-semibold">
                Refer & Earn
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="mt-12 md:mt-16">
              <div className="flex flex-wrap gap-8 md:gap-12">
                <div>
                  <div className="text-white text-3xl md:text-4xl mb-1">
                    75<sup>+</sup><span className="text-sm">kWh</span>
                  </div>
                  <div className="text-white/80 text-xs md:text-sm">
                    Energy Produced
                  </div>
                </div>
                <div>
                  <div className="text-white text-3xl md:text-4xl mb-1">
                    20<span className="text-sm">tons</span>
                  </div>
                  <div className="text-white/80 text-xs md:text-sm">
                    CO₂e Reduction
                  </div>
                </div>
                <div>
                  <div className="text-white text-3xl md:text-4xl mb-1">
                    4M<sup>+</sup>
                  </div>
                  <div className="text-white/80 text-xs md:text-sm">
                    Peso Savings
                  </div>
                </div>
              </div>
            </div>
          </div>
<div className="absolute bottom-6 right-6">
            <div 
              className="rounded-2xl px-4 py-2 flex items-center gap-2 shadow-xl
                         bg-white/5  backdrop-blur-xs border border-white/10" // 💡 Glassmorphism styles
            >
              
              {/* Icon Container */}
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10"> {/* Icon background also made slightly transparent */}
                <FaCalendarCheck className="w-6 h-6 text-white" /> {/* Icon color changed for better contrast */}
              </div>
              
              {/* Date Text Content */}
              <div className="flex flex-col items-start justify-center">
                
                {/* Top: Date Installed */}
                <div className="text-white text-base font-semibold whitespace-nowrap"> {/* Text color changed to white for contrast */}
                  Date Installed
                </div>
                
                {/* Bottom: The Actual Date */}
                <div className="text-white/80 text-sm"> {/* Text color changed to white/80 */}
                  10/25/2024 {/* Replace with actual date or prop */}
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
