
import error404 from '../assets/error-404.png'
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
      <div className="max-w-screen-2xl w-full mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex justify-center py-8">
          <img className="w-96 h-82" src={error404} alt="" />
        </div>
        <div className="text-center space-y-3 mb-10">
          <h1 className="text-[#001931] font-bold text-4xl">
            Oops, page not found!{" "}
          </h1>
          <p className="text-xl text-[#627382] mb-6">
            The page you are looking for is not available.
          </p>
          <Link to={"/"} className="font-bold">
            <span className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white">
              Go Back
            </span>
          </Link>
        </div>
      </div>
    );
};

export default ErrorPage;