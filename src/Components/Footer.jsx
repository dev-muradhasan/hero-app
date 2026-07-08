// const Footer = () => {
//     return (
//       <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
//         <nav className="grid grid-flow-col gap-4">
//           <a className="link link-hover">About us</a>
//           <a className="link link-hover">Contact</a>
//           <a className="link link-hover">Jobs</a>
//           <a className="link link-hover">Press kit</a>
//         </nav>
//         <nav>
//           <div className="grid grid-flow-col gap-4">
//             <a>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 className="fill-current"
//               >
//                 <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
//               </svg>
//             </a>
//             <a>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 className="fill-current"
//               >
//                 <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
//               </svg>
//             </a>
//             <a>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 className="fill-current"
//               >
//                 <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
//               </svg>
//             </a>
//           </div>
//         </nav>
//         <aside>
//           <p>
//             Copyright © {new Date().getFullYear()} - All right reserved by ACME
//             Industries Ltd
//           </p>
//         </aside>
//       </footer>
//     );
// };

// export default Footer;

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