import { Activity, Battery, Sun, TrendingUp } from '../assets/icons/react-icons';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip as ChartTooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler, ChartTooltip, Legend);

export function Monitoring() {
  const data = [
    { time: '6 AM', production: 0.2, consumption: 0.8 },
    { time: '8 AM', production: 2.5, consumption: 1.5 },
    { time: '10 AM', production: 4.8, consumption: 2.2 },
    { time: '12 PM', production: 6.5, consumption: 3.0 },
    { time: '2 PM', production: 5.8, consumption: 2.8 },
    { time: '4 PM', production: 3.5, consumption: 3.5 },
    { time: '6 PM', production: 1.2, consumption: 4.2 },
    { time: '8 PM', production: 0, consumption: 3.8 },
  ];

  const stats = [
    {
      icon: Sun,
      label: 'Today\'s Production',
      value: '32.5 kWh',
      change: '+12%',
      color: 'bg-yellow-100 text-yellow-600',
    },
    {
      icon: Activity,
      label: 'Energy Consumption',
      value: '24.8 kWh',
      change: '-5%',
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: Battery,
      label: 'Battery Level',
      value: '85%',
      change: 'Charging',
      color: 'bg-green-100 text-green-600',
    },
    {
      icon: TrendingUp,
      label: 'Grid Export',
      value: '7.7 kWh',
      change: '+18%',
      color: 'bg-purple-100 text-purple-600',
    },
  ];

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      intersect: false,
      mode: 'index',
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: '#fff',
        titleColor: '#111827',
        bodyColor: '#4b5563',
        borderColor: '#e5e7eb',
        borderWidth: 1,
        cornerRadius: 8,
        padding: 12,
        callbacks: {
          label: (context) => `${context.dataset.label}: ${context.parsed.y} kWh`,
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#6b7280',
        },
      },
      y: {
        grid: {
          color: '#e5e7eb',
        },
        ticks: {
          color: '#6b7280',
        },
        title: {
          display: true,
          text: 'kWh',
        },
      },
    },
  };

  const chartData = {
    labels: data.map((item) => item.time),
    datasets: [
      {
        label: 'Production',
        data: data.map((item) => item.production),
        borderColor: '#eab308',
        backgroundColor: 'rgba(234, 179, 8, 0.2)',
        fill: true,
        tension: 0.4,
        pointRadius: 0,
      },
      {
        label: 'Consumption',
        data: data.map((item) => item.consumption),
        borderColor: '#3b82f6',
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        fill: true,
        tension: 0.4,
        pointRadius: 0,
      },
    ],
  };

  return (
    <section id="monitoring" className="px-4 md:px-8 py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-gray-900 mb-4">Real-Time Monitoring</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Track your solar performance and energy usage with detailed analytics
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${stat.color}`}>
                  <stat.icon className="w-5 h-5" />
                </div>
                <span className="text-xs text-green-600">{stat.change}</span>
              </div>
              <div className="text-2xl text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
            <div>
              <h3 className="text-gray-900 mb-1">Energy Overview</h3>
              <p className="text-sm text-gray-500">Production vs Consumption Today</p>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Production</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Consumption</span>
              </div>
            </div>
          </div>

          <div className="h-[300px] md:h-[400px]">
            <Line data={chartData} options={chartOptions} />
          </div>
        </div>
      </div>
    </section>
  );
}
