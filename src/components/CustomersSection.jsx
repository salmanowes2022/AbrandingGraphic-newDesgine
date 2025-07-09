import './CustomersSection.css';
import translations from '../translations';

const CustomersSection = ({ language }) => (
  <section className='customers-section-container'>
    <div className='customers-section-headline'>
      <h2 className='customers-title'>{translations[language].customersTitle}</h2>
    </div>
    <section className="customers-section">
      <div className="customers-list">
        {translations[language].customers.map((group, i) => (
          <div key={i} className="customers-row">
            {group.map((name, idx) => (
              <span key={name} className="customers-name">
                {name}{idx !== group.length - 1 ? ',' : ''}
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  </section>
);

export default CustomersSection; 