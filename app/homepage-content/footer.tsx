export default function Footer() {
    return (
      <footer className="bg-blue-900 text-white py-6 px-4 mt-auto">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* Left Section - Logo & Address */}
          <div className="flex items-center space-x-4">
            <img src="/logo.png" alt="Logo" className="h-12 w-12" />
            <div>
              <h2 className="text-lg font-semibold">Guidance and Counseling Unit</h2>
              <p className="text-sm">
                Quirino Highway, San Bartolome, Novaliches, Quezon City <br />
                Mon - Fri 8am - 5pm
              </p>
            </div>
          </div>
  
          {/* Right Section - Contact Info */}
          <div className="mt-4 md:mt-0 text-center md:text-right">
            <p className="font-semibold">Email Us</p>
            <a href="mailto:guidance.unit@qcu.edu.ph" className="text-sm hover:underline">
              guidance.unit@qcu.edu.ph
            </a>
  
            <p className="mt-2 font-semibold">Follow us on Facebook</p>
            <a
              href="https://facebook.com/OCU.Guidance.Unit"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:underline"
            >
              OCU Guidance Unit
            </a>
          </div>
        </div>
  
        {/* Bottom Copyright */}
        <div className="text-center text-xs mt-4 border-t border-white/20 pt-2">
          © 2024 QCU Guidance and Counseling
        </div>
      </footer>
    );
}
  