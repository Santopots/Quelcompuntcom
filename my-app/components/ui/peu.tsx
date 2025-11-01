"use client";
function Peu() {
    return (
        <footer className="bg-gray-800 text-white py-6 mt-auto">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-sm">
                    © {new Date().getFullYear()} Your Company. All rights reserved.
                </p>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <a href="/about" className="text-sm hover:text-gray-300 transition">
                    About
                    </a>
                    <a href="/contact" className="text-sm hover:text-gray-300 transition">
                    Contact
                    </a>
                    <a href="/privacy" className="text-sm hover:text-gray-300 transition">
                    Privacy
                    </a>
                </div>
                </div>
            </div>
            </footer>
  );
}

export default Peu;