'use client';

import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Algorithm } from '@/lib/algorithms';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function AlgorithmVisualizer({ algorithm }: { algorithm: Algorithm }) {
  const data = {
    labels: algorithm.data.n.map(String),
    datasets: [
      {
        label: 'Relative Time vs. Input Size (n)',
        data: algorithm.data.time,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: `${algorithm.title} - ${algorithm.complexity}`,
      },
    },
    scales: {
        x: {
            title: {
                display: true,
                text: 'Input Size (n)',
            }
        },
        y: {
            title: {
                display: true,
                text: 'Relative Time (operations)',
            }
        }
    }
  };

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 my-4 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">{algorithm.title} <span className="text-lg font-mono text-cyan-400">{algorithm.complexity}</span></h2>
          <div className="mt-4">
            <h3 className="font-semibold text-white">Cases:</h3>
            <ul className="list-disc list-inside text-gray-300">
              <li><span className="font-medium text-green-400">Best Case:</span> {algorithm.bestCase}</li>
              <li><span className="font-medium text-yellow-400">Average Case:</span> {algorithm.averageCase}</li>
              <li><span className="font-medium text-red-400">Worst Case:</span> {algorithm.worstCase}</li>
            </ul>
          </div>
          <pre className="bg-gray-900 text-white p-4 rounded-md mt-4 text-sm overflow-x-auto"><code>{algorithm.javaCode}</code></pre>
        </div>
        <div className="bg-gray-900 p-4 rounded-lg">
          <Line options={options} data={data} />
        </div>
      </div>
    </div>
  );
}
