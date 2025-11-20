import { ArrowLeftRight, Home, Lightbulb, Zap } from '../assets/icons/react-icons';

export function NetMetering() {
  return (
    <section id="net-metering" className="px-4 md:px-8 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-gray-900 mb-4">How Net Metering Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Maximize your savings by selling excess energy back to the grid
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Visual Diagram */}
          <div className="relative bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl p-8 md:p-12">
            <div className="flex flex-col items-center gap-8">
              {/* Solar Panels */}
              <div className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm w-full">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <div className="text-gray-900">Solar Panels</div>
                  <div className="text-sm text-gray-500">Generate Energy</div>
                </div>
              </div>

              {/* Arrows */}
              <div className="flex items-center justify-between w-full gap-4">
                <ArrowLeftRight className="w-8 h-8 text-gray-400 transform rotate-90" />
              </div>

              {/* Home */}
              <div className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm w-full">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Home className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="text-gray-900">Your Home</div>
                  <div className="text-sm text-gray-500">Use Energy</div>
                </div>
              </div>

              {/* Arrows */}
              <div className="flex items-center justify-between w-full gap-4">
                <ArrowLeftRight className="w-8 h-8 text-gray-400 transform rotate-90" />
              </div>

              {/* Grid */}
              <div className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm w-full">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="text-gray-900">Power Grid</div>
                  <div className="text-sm text-gray-500">Buy/Sell Energy</div>
                </div>
              </div>
            </div>

            {/* Image Overlay */}
            <div className="mt-8 rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1626793369994-a904d2462888?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVsJTIwZ3JpZCUyMGVsZWN0cmljaXR5fGVufDF8fHx8MTc2MzUyMzgzM3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Solar panels and grid connection"
                className="w-full h-48 object-cover"
              />
            </div>
          </div>

          {/* Information */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-600">1</span>
                </div>
                <div>
                  <h3 className="text-gray-900 mb-2">Generate Solar Energy</h3>
                  <p className="text-gray-600 text-sm">
                    Your solar panels generate clean energy during daylight hours, powering your home first.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600">2</span>
                </div>
                <div>
                  <h3 className="text-gray-900 mb-2">Export Excess Power</h3>
                  <p className="text-gray-600 text-sm">
                    Any surplus energy automatically flows back to the grid, earning you credits on your electricity bill.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-yellow-600">3</span>
                </div>
                <div>
                  <h3 className="text-gray-900 mb-2">Import When Needed</h3>
                  <p className="text-gray-600 text-sm">
                    At night or during high usage, import electricity from the grid, offset by your earned credits.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 text-white rounded-2xl p-6">
              <div className="text-3xl mb-2">$800+</div>
              <div className="text-sm text-gray-300">Average annual savings with net metering</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
