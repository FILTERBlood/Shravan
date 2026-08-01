import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaTimes, FaLock } from "react-icons/fa";
import AlbumImages from "../../data/albumImage";

const AlbumPassword = "123456";

function HiddenAlbum({ isOpen, onClose }) {
  const [input, setInput] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setInput("");
      setUnlocked(false);
      setError(false);
    }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input === AlbumPassword) {
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-6 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className={
              unlocked
                ? "relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-2xl border border-slate-800 bg-slate-900 p-6"
                : "relative w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-8"
            }
          >
            <button
              onClick={handleClose}
              className="absolute right-4 top-4 text-slate-400 transition hover:text-white"
            >
              <FaTimes className="h-5 w-5" />
            </button>

            {!unlocked ? (
              <form onSubmit={handleSubmit}>
                <div className="flex items-center gap-2 text-blue-400">
                  <FaLock />
                  <h3 className="text-xl font-semibold text-white">
                    Hidden Album
                  </h3>
                </div>

                <p className="mt-2 text-slate-400">
                  Enter password to continue.
                </p>

                <input
                  type="password"
                  value={input}
                  autoFocus
                  placeholder="Enter password"
                  onChange={(e) => {
                    setInput(e.target.value);
                    setError(false);
                  }}
                  className="mt-5 w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition focus:border-blue-500"
                />

                {error && (
                  <p className="mt-3 text-sm text-red-400">
                    Incorrect password.
                  </p>
                )}

                <button
                  type="submit"
                  className="mt-5 w-full rounded-xl bg-blue-600 py-3 font-medium text-white transition hover:bg-blue-500"
                >
                  Unlock Album
                </button>
              </form>
            ) : (
              <>
                <h2 className="mb-6 text-2xl font-bold text-white">
                  Hidden Album
                </h2>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {AlbumImages.map((image) => (
                    <motion.div
                      key={image.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.3 }}
                      className="group relative aspect-square overflow-hidden rounded-xl border border-slate-800"
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        loading="lazy"
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/20" />

                      <div className="absolute bottom-0 left-0 right-0 translate-y-full bg-gradient-to-t from-black/90 to-transparent p-3 text-white transition duration-300 group-hover:translate-y-0">
                        {image.alt}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default HiddenAlbum;