import { Link } from 'react-router-dom';
import Navbar from '../shered/Navbar/Navbar';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvide';

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const handleRegister = e => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    const photo = form.get('photo');
    const email = form.get('email');
    const password = form.get('password');
    console.log(name, photo, email, password);
    // create user
    createUser(email, password)
      .then(result => {
        console.log(result.user);
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <div>
      <div>
        <Navbar></Navbar>
        <div>
          <h1 className="text-center text-3xl font-bold mb-5">Register naw </h1>
          <form
            onSubmit={handleRegister}
            className="card-body md:h-2/3 lg:w-1/2 mx-auto border rounded-md"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
                required
                name="name"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo url</span>
              </label>
              <input
                type="text"
                placeholder="photo url"
                className="input input-bordered"
                required
                name="photo"
              />
            </div>
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
            <Link to="/login" className="text-rose-500">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
