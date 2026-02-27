import { useState } from "react";
import { FiFileText } from "react-icons/fi";
import { X } from "lucide-react";

const ResumeButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* BUTTON */}
      <button
        onClick={() => setOpen(true)}
        className="
          flex items-center gap-2 px-4 py-2 cursor-pointer
          rounded-md font-medium
          bg-black text-white
          hover:opacity-90 transition border border-black dark:bg-white dark:text-black dark:border-white
        "
      >
        <FiFileText />
        Resume
      </button>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4">
          <div className="relative w-full max-w-4xl h-[85vh] bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden shadow-xl">
            {/* HEADER */}
            <div className="flex justify-between items-center px-4 py-3 border-b dark:border-neutral-800">
              <h3 className="text-sm font-semibold">Resume</h3>

              <div className="flex items-center gap-4">
                <a
                  href="https://drive.google.com/file/d/1ttYmk-ZY6HXYreNda_zmSzTHC_-c5vNQ/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium underline"
                >
                  Open in Drive

                <button
                  onClick={() => setOpen(false)}
                  className="p-1 rounded hover:bg-gray-100 dark:hover:bg-neutral-800"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* RESUME PREVIEW */}
            <iframe
              src="https://drive.google.com/file/d/140BDA4AL3bDHIWU_Fzp9BQxj9qB33IPR/preview?usp=sharing"
              className="w-full h-full"
              title="Resume Preview"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ResumeButton;
