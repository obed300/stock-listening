import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  fetchData,
  searchByNameOrSymbol,
  reset,
} from '../redux/features/Home/homeSlice';
import styles from '../style/Home.module.css';
import Stock from '../images/Stock.jpg';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredCompanies = useSelector((state) => state.data.filteredCompanies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    if (e.target.value === '') {
      dispatch(reset());
    } else {
      dispatch(searchByNameOrSymbol(e.target.value));
    }
  };

  const companiesWithId = filteredCompanies.map((company) => ({
    ...company,
    id: company.symbol,
  }));

  return (
    <div className={styles.wrapper}>
      <img src={Stock} alt="Stock Market" className={styles.imageStock} />
      <div>
        <input
          type="search"
          id="search"
          name="search"
          placeholder="Search Company by Name or Symbol"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <ul className={styles.wrap}>
        {companiesWithId.map((company) => (
          <Link
            to={`/details/${company.id}`}
            className={styles.companyLink}
            key={company.name}
          >
            <li className={styles.companyList}>
              <div className={styles.companyContainer}>
                <div className={styles.company}>
                  <h3>{company.name}</h3>
                  <h3>{company.symbol}</h3>
                </div>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Home;
