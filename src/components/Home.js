import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/features/Home/homeSlice';

const Home = () => {
  const data = useSelector((state) => state.data.companies);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data.length === 0) {
      dispatch(fetchData());
    }
  }, [dispatch, data]);

  return (
    <div>
      <ul>
        {data.map((company) => (
          <li key={company.id}>{company.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
