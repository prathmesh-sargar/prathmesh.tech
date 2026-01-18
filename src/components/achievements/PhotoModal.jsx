import { X } from "lucide-react";

const PhotoModal = ({ image, onClose }) => {
  if (!image) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4">
      <div className="relative max-w-4xl w-full bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden shadow-xl">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 dark:bg-neutral-800 text-gray-700 dark:text-gray-300 hover:scale-105 transition"
        >
          <X size={18} />
        </button>

        {/* Image */}
        <img
          src={image}
          alt="Achievement Photo"
          className="w-full max-h-[80vh] object-contain bg-black"
        />
      </div>
    </div>
  );
};

export default PhotoModal;
