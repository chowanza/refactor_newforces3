import React from "react";

const ContactBanner: React.FC = () => {
  // Función para copiar el número de teléfono al portapapeles
  const handleCopyPhoneNumber = async () => {
    try {
      await navigator.clipboard.writeText('(941) 337-0680');
      alert('Phone number copied to clipboard!');
    } catch (error) {
      console.error('Failed to copy text: ', error);
    }
  };

  return (
    <section className="flex items-center justify-between px-6 bg-orange-500 text-white">
      {/* Left Section: Image and Text */}
      <div className="flex items-center gap-4">
        <img
          src="/worker.webp" // Replace with the actual image path
          alt="Construction worker"
          className="w-32 h-auto object-contain hidden md:block"
        />
        <p className="text-lg md:text-xl font-medium">
          For more information, <span className="font-bold">Contact us</span>
        </p>
      </div>

      {/* Right Section: Phone Logo and Number */}
      <div className="flex items-center gap-4 bg-white text-black px-4 py-2 rounded-full shadow-md">
        <img
          src="/phone.svg" // Replace with the actual phone logo path
          alt="Phone icon"
          className="w-8 h-8 object-contain"
        />
        <p className="text-lg md:text-xl font-bold">(941) 337-0680</p>
        <button
          className="text-white ml-2 p-1 rounded bg-[#f97316] hover:bg-[#f86306] text-sm"
          onClick={handleCopyPhoneNumber}
        >
          Copy
        </button>
      </div>
    </section>
  );
};

export default ContactBanner;
