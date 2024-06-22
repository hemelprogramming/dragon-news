import { Link, NavLink } from 'react-router-dom';
import userDefaultpicture from '../../../assets/user.png';
import { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvide';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const NavLinks = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/career">Career</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/register">Register</NavLink>
    </>
  );
  const handleLogOut = () => {
    logOut()
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {NavLinks}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4">{NavLinks}</ul>
      </div>
      <div className="navbar-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <img alt="Tailwind CSS Navbar component" src={userDefaultpicture} />
          </div>
        </div>
        {user ? (
          <>
            <span>{user.email}</span>
            <button onClick={handleLogOut} className="btn btn-sm">
              Sing Out
            </button>
          </>
        ) : (
          <Link to="/login">
            <button className="btn btn-sm">LogIn</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
