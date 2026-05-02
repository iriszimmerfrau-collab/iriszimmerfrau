import type { ProcessStep } from '@/types';

export default function ProcessSteps({ steps }: { steps: ProcessStep[] }) {
  return (
    <div className="space-y-8">
      {steps.map((step) => (
        <div key={step.step} className="flex gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-100 text-sm font-bold text-brand-700">
            {step.step}
          </div>
          <div>
            <h3 className="text-base font-semibold text-gray-900">{step.title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-gray-600">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
