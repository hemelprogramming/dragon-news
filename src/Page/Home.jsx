import { useLoaderData } from 'react-router-dom';
import Header from './shered/Header/Header';
import UpdateNews from './shered/Header/UpdateNews';
import LeftSideNav from './shered/LeftSideNav/LeftSideNav';
import Navbar from './shered/Navbar/Navbar';
import RightSideNav from './shered/RightSideNav/RightSideNav';
import NewsCard from './NewsCard';

const Home = () => {
  const news = useLoaderData();

  console.log(news);
  return (
    <div>
      <Header></Header>
      <UpdateNews></UpdateNews>
      <Navbar></Navbar>
      <div className="grid grid-cols-1  lg:grid-cols-4 gap-6">
        <div>
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="grid col-span-2">
          {news.map(aNews => (
            <NewsCard key={aNews._id} news={aNews}></NewsCard>
          ))}
        </div>
        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
