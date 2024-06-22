import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from 'react-icons/fa';
import qZoneImage1 from '../../../assets/qZone1.png';
import qZoneImage2 from '../../../assets/qZone2.png';
import qZoneImage3 from '../../../assets/qZone3.png';
const RightSideNav = () => {
  return (
    <div>
      <div className="p-4 space-y-3 mb-5">
        <h1 className="text-2xl">Login new</h1>
        <button className="btn btn-outline btn-sm w-full">
          <FaGoogle></FaGoogle>
          Google
        </button>
        <button className="btn btn-outline btn-sm w-full">
          <FaGithub></FaGithub>
          Github
        </button>
      </div>
      <div className="p-4">
        <h1 className="text-2xl">Find Us On</h1>
        <a className=" p-3 flex items-center border rounded-t-lg" href="">
          <FaFacebook className="mr-3"></FaFacebook>
          <span>Facebook</span>
        </a>
        <a className=" p-3 flex items-center border-x" href="">
          <FaTwitter className="mr-3"></FaTwitter>
          <span>Twitter</span>
        </a>
        <a className=" p-3 flex items-center border rounded-b-lg" href="">
          <FaInstagram className="mr-3"></FaInstagram>
          <span>Instagram</span>
        </a>
      </div>
      <div className="p-4 space-y-3 mb-5">
        <h1 className="text-2xl">Q Zone</h1>
        <img src={qZoneImage1} alt="" />
        <img src={qZoneImage2} alt="" />
        <img src={qZoneImage3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
