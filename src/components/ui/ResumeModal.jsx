import { motion, AnimatePresence } from "framer-motion";
import { FaFilePdf, FaFileWord, FaTimes } from "react-icons/fa";

function ResumeModal({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-sm rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-8"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 text-slate-400 hover:text-white"
            >
              <FaTimes className="h-5 w-5" />
            </button>

            <h3 className="text-xl font-semibold text-white">
              Choose a format
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              Select which file type you'd like to download.
            </p>

            <div className="mt-6 flex flex-col gap-3">
              <a
                href={`${import.meta.env.BASE_URL}Shravan_Kamble_Resume.pdf`}
                download="Shravan_Kamble_Resume.pdf"
                onClick={onClose}
                className="flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-800/50 px-4 py-3 text-white hover:border-blue-500/60 hover:bg-blue-500/10"
              >
                <FaFilePdf className="h-5 w-5 text-red-400" />
                <span className="font-medium">Download as PDF</span>
              </a>

              <a
                href={`${import.meta.env.BASE_URL}Shravan_Kamble_Resume.docx`}
                download="Shravan_Kamble_Resume.docx"
                onClick={onClose}
                className="flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-800/50 px-4 py-3 text-white hover:border-blue-500/60 hover:bg-blue-500/10"
              >
                <FaFileWord className="h-5 w-5 text-blue-400" />
                <span className="font-medium">Download as Word (.docx)</span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ResumeModal;