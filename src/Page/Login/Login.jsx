import { Link, useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../shered/Navbar/Navbar';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvide';

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const location = useLocation();
  console.log('location in the login page', location);
  const navigate = useNavigate();
  const handleLogin = e => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');
    console.log(email, password);
    // login user
    loginUser(email, password)
      .then(result => {
        console.log(result);
        navigate(location?.state ? location.state : '/');
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <h1 className="text-center text-3xl font-bold mb-5">Please Login</h1>
        <form
          onSubmit={handleLogin}
          className="card-body md:h-2/3 lg:w-1/2 mx-auto border rounded-md"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
              name="email"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
              name="password"
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <p className="text-center mt-3 ">
          Do not have an account please{' '}
          <Link to="/register" className="text-rose-500">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
