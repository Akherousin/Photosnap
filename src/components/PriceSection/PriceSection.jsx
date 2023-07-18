import Toggle from '../Toggle';
import PriceCard from '../PriceCard';
import Table from '../Table';
import styles from './PriceSection.module.scss';
import { useState } from 'react';
import { pricingPlans } from '../../DATA';

function PriceSection() {
  const [selectedPlan, setSelectedPlan] = useState('mounthly');

  return (
    <section className={styles.section}>
      <Toggle
        firstValue="mounthly"
        secondValue="yearly"
        onChange={setSelectedPlan}
      />
      <ul role="list">
        {pricingPlans.map(({ title, desc, price, recommended }) => (
          <li key="title">
            <PriceCard
              title={title}
              desc={desc}
              price={price[selectedPlan]}
              recommended={recommended}
            />
          </li>
        ))}
      </ul>
      <Table />
    </section>
  );
}

export default PriceSection;
