import AlgorithmVisualizer from '@/components/AlgorithmVisualizer';
import { algorithms } from '@/lib/algorithms';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 bg-gray-900 text-white">
      <div className="w-full max-w-7xl">
        <header className="text-center mb-12">
            <h1 className='text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]'>Big <span className="text-cyan-400">O</span> Notation Visualizer</h1>
            <p className="text-xl text-gray-400 mt-4">An interactive guide to algorithm efficiency with Java examples.</p>
        </header>
        
        <div className="space-y-8">
          {algorithms.map((alg) => (
            <AlgorithmVisualizer key={alg.complexity} algorithm={alg} />
          ))}
        </div>

        <footer className="text-center mt-12 text-gray-500">
            <p>Built with Next.js, shadcn/ui, and Chart.js. Deployed on Vercel.</p>
        </footer>
      </div>
    </main>
  );
}
