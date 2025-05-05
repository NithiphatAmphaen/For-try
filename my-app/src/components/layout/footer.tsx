export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center mb-6">
          <h2 className="text-2xl font-bold text-white mb-4 md:mb-0 px-10">
            Some Feature for later on
          </h2>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Links Section */}
        <div className="flex justify-between md:grid-cols-3 gap-8 px-10">
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Company</h3>
            <ul className="space-y-2">
              <li>
                  About Us
              </li>
              <li>
                  Careers
              </li>
              <li>
                  Contact
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Resources</h3>
            <ul className="space-y-2">
              <li>
                  Blog
              </li>
              <li>
                  Help Center
              </li>
              <li>
                  Privacy Policy
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Follow Us</h3>
            <ul className="space-y-2">
              <li>
                  Twitter
              </li>
              <li>
                  Facebook
              </li>
              <li>
                  Instagram
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Some Copyright.
        </div>
      </div>
    </footer>
  );
}