import Card from './Card';
import ProgressBar from './ProgressBar';

export default function ResultCard({ label, confidence, explanation }) {
  const isAI = label.toLowerCase().includes('ai');

  return (
    <Card className="mt-6">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <span
            className={`
              inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold
              ${isAI
                ? 'bg-brand/10 text-brand-700 dark:text-brand'
                : 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
              }
            `}
          >
            {label}
          </span>
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Confidence
            </span>
            <span className="text-sm font-bold text-gray-900 dark:text-gray-100">
              {confidence}%
            </span>
          </div>
          <ProgressBar progress={confidence} />
        </div>

        <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            {explanation}
          </p>
        </div>
      </div>
    </Card>
  );
}
