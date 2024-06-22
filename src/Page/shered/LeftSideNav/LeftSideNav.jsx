import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch('categories.json')
      .then(res => res.json())
      .then(data => setCategories(data));
  }, []);
  return (
    <div className="space-y-6">
      <h1 className="text-3xl"> Left side : {categories.length}</h1>
      {categories.map(category => (
        <NavLink
          className="block ml-4 text-lg font-semibold"
          key={category.id}
          to={`/category/${category.id}`}
        >
          {category.name}
        </NavLink>
      ))}
    </div>
  );
};

export default LeftSideNav;
