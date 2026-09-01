import { CheckCircle, X } from "lucide-react";

interface ToastProps {
  message: string;
  onClose: () => void;
}

function Toast({ message, onClose }: ToastProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-5 right-5 z-[100] flex w-[calc(100%-40px)] max-w-sm items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-lg dark:border-slate-700 dark:bg-slate-900"
    >
      <CheckCircle
        size={20}
        className="shrink-0 text-emerald-500"
      />

      <p className="flex-1 text-sm font-medium text-gray-800 dark:text-slate-200">
        {message}
      </p>

      <button
        type="button"
        onClick={onClose}
        className="rounded-lg p-1.5 text-gray-400 transition hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:hover:bg-slate-800 dark:hover:text-white"
        aria-label="Close notification"
      >
        <X size={17} />
      </button>
    </div>
  );
}

export default Toast;