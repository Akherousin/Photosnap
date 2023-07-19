import Toggle from '../Toggle';
import PriceCard from '../PriceCard';
import Table from '../Table';
import styles from './PriceSection.module.scss';
import { useState } from 'react';
import { pricingPlans } from '../../DATA';

function PriceSection() {
  const [selectedPlan, setSelectedPlan] = useState('monthly');

  return (
    <section className={styles.section}>
      <Toggle
        firstValue="monthly"
        secondValue="yearly"
        onChange={setSelectedPlan}
      />
      <ul role="list">
        {pricingPlans.map(({ title, desc, price, recommended }) => (
          <li key={title}>
            <PriceCard
              title={title}
              desc={desc}
              plan={selectedPlan}
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
