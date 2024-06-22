import Header from '../shered/Header/Header';
import Navbar from '../shered/Navbar/Navbar';
import RightSideNav from '../shered/RightSideNav/RightSideNav';

const News = () => {
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <div className="grid md:grid-cols-4">
        <div className="col-span-3">
          <h1>this is a news</h1>
        </div>
        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default News;
