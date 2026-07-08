
import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Link } from "react-router";
import logo from '../assets/logo.png'
import googlePlay from '../assets/icons8-google-play-store-96.png'
import appStore from '../assets/icons8-app-store-96.png'

const Footer = () => {
  return (
    <footer className="bg-[#001931] text-white mt-20">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8 lg:px-12 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img className="w-12 h-12" src={logo} alt="Logo" />

              <h2 className="text-3xl font-bold bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                HERO.IO
              </h2>
            </div>

            <p className="text-gray-300 leading-7">
              Discover premium mobile applications for productivity,
              entertainment, education, finance and much more. Download your
              favorite apps with confidence.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-5">Quick Links</h3>

            <div className="flex flex-col gap-3 text-gray-300">
              <Link to="/">Home</Link>
              <Link to="/apps">Applications</Link>
              <Link to="/installation">My Apps</Link>
              <Link to="/about">About Us</Link>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-5">Categories</h3>

            <div className="flex flex-col gap-3 text-gray-300">
              <p>Productivity</p>
              <p>Social</p>
              <p>Entertainment</p>
              <p>Education</p>
              <p>Business</p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-5">Get Our App</h3>

            <div className="space-y-4">
              <Link
                to="https://play.google.com/store/apps"
                target="_blank"
                rel="noreferrer"
                className="btn w-full bg-white text-black"
              >
                <img className="w-10" src={googlePlay} alt="Play Store" />
                Google Play
              </Link>

              <Link
                to="https://www.apple.com/app-store/"
                target="_blank"
                rel="noreferrer"
                className="btn w-full bg-white text-black"
              >
                <img className="w-10" src={appStore} alt="App Store" />
                App Store
              </Link>
            </div>

            <div className="flex gap-4 mt-7">
              <Link
                to="https://www.facebook.com/murad.hasan.199454"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookF size={20} />
              </Link>

              <Link
                to="https://github.com/dev-muradhasan"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub size={20} />
              </Link>

              <Link
                to="https://bd.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn size={20} />
              </Link>

              <Link
              to="https://bd.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter size={20} />
              </Link>
            </div>
          </div>
        </div>

        <hr className="border-white/20 my-10" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400">© 2026 AppVerse. All Rights Reserved.</p>

          <div className="flex gap-6 text-gray-400">
            <Link>Privacy Policy</Link>
            <Link>Terms & Conditions</Link>
            <Link>Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;