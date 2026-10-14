import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiCheckCircle, FiAlertCircle, FiInfo, FiAlertTriangle, FiX } from "react-icons/fi";
import { useFlash } from "@/contexts/FlashContext";

export default function Flashes() {
  const { messages, dispatch } = useFlash();

  return (
    <div
      aria-live="polite"
      className="fixed top-5 right-5 z-50 flex flex-col gap-2.5 max-w-sm w-full pointer-events-none px-4 sm:px-0"
    >
      <AnimatePresence>
        {messages.map((message) => (
          <FlashItem
            key={`${message.timestamp}-${message.message}`}
            message={message}
            onClose={() => dispatch({ type: FlashReducerActions.REMOVE, message })}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}

function FlashItem({
  message,
  onClose,
}: {
  message: FlashMessageInterface;
  onClose: () => void;
}) {
  useEffect(() => {
    const delay = message.type === "success" ? 5000 : 8000;
    const timer = setTimeout(onClose, delay);
    return () => clearTimeout(timer);
  }, [message.type, onClose]);

  const config = {
    success: {
      icon: FiCheckCircle,
      bg: "bg-emerald-50 dark:bg-emerald-950/80 border-emerald-200 dark:border-emerald-800",
      text: "text-emerald-900 dark:text-emerald-100",
      iconColor: "text-emerald-600 dark:text-emerald-400",
      label: "Success",
    },
    error: {
      icon: FiAlertCircle,
      bg: "bg-rose-50 dark:bg-rose-950/80 border-rose-200 dark:border-rose-800",
      text: "text-rose-900 dark:text-rose-100",
      iconColor: "text-rose-600 dark:text-rose-400",
      label: "Error",
    },
    warning: {
      icon: FiAlertTriangle,
      bg: "bg-amber-50 dark:bg-amber-950/80 border-amber-200 dark:border-amber-800",
      text: "text-amber-900 dark:text-amber-100",
      iconColor: "text-amber-600 dark:text-amber-400",
      label: "Warning",
    },
    info: {
      icon: FiInfo,
      bg: "bg-sky-50 dark:bg-sky-950/80 border-sky-200 dark:border-sky-800",
      text: "text-sky-900 dark:text-sky-100",
      iconColor: "text-sky-600 dark:text-sky-400",
      label: "Info",
    },
  }[message.type] || {
    icon: FiInfo,
    bg: "bg-surface border-border",
    text: "text-primary",
    iconColor: "text-primary",
    label: "Notice",
  };

  const Icon = config.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: -15, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -10, scale: 0.9 }}
      transition={{ duration: 0.2 }}
      className={`pointer-events-auto rounded-xl border p-4 shadow-lg backdrop-blur-md flex items-start gap-3 ${config.bg}`}
      role="alert"
    >
      <Icon className={`w-5 h-5 flex-shrink-0 mt-0.5 ${config.iconColor}`} />
      <div className="flex-1 text-sm">
        <p className={`font-semibold capitalize text-xs tracking-wider mb-0.5 ${config.iconColor}`}>
          {config.label}
        </p>
        <p className={config.text}>{message.message}</p>
      </div>
      <button
        onClick={onClose}
        className="p-1 rounded-md text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
        aria-label="Dismiss notification"
      >
        <FiX className="w-4 h-4" />
      </button>
    </motion.div>
  );
}
