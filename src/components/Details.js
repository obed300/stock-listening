import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styles from '../style/Details.module.css';

const Details = () => {
  const { companyId } = useParams();

  let company = useSelector((state) => state.data.companies);
  company = company.find((c) => c.symbol === (companyId));

  return (
    <div className={styles.details}>
      <h1>{company?.name}</h1>
      <p className={styles.detailItem}>{`Symbol: ${company?.symbol}`}</p>
      <p className={styles.detailItem}>{`Headquaters: ${company?.headQuarter}`}</p>
      <p className={styles.detailItem}>{`Sector: ${company?.sector}`}</p>
      <p className={styles.detailItem}>{`Founded: ${company?.founded}`}</p>
      <p className={styles.detailItem}>{`Cik: ${company?.cik}`}</p>
    </div>
  );
};

export default Details;
