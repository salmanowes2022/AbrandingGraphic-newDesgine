import './CustomersSection.css';

const customers = [
  ['PANGO', 'TRULLION', 'ELAL', 'PENLINK', 'RISE'],
  ['ISRAEL HAYOM', 'BITUACH YASHIR', 'PRIMIS'],
  ['BANK HAPOALIM', 'YELLOW', 'BANK JERUSALEM'],
  ['ISROTEL', 'HASBARA']
];

const CustomersSection = () => (

<section className='customers-section-container'>
  <div className='customers-section-headline'>
    <h2 className='customers-title'>Costumers</h2>
  </div>
  <section className="customers-section">
    <div className="customers-list">
      {customers.map((group, i) => (
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