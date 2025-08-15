import styled from "styled-components";

const customers = [
  ["PANGO", "TRULLION", "ELAL", "PENLINK", "RISE"],
  ["ISRAEL HAYOM", "BITUACH YASHIR", "PRIMIS"],
  ["BANK HAPOALIM", "YELLOW", "BANK JERUSALEM"],
  ["ISROTEL", "HASBARA"],
];

const CustomersSectionContainer = styled.section`
  width: 100%;
  max-width: 1980px;
  margin: 0 auto 96px auto;
  padding: 48px 16px 48px 16px;
  box-sizing: border-box;
`;

const CustomersSectionHeadline = styled.div`
  margin-bottom: 32px;
  text-align: left;
  font-size: 2.5rem;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 0.04em;
`;

const CustomersSection = styled.section`
  width: 100%;
  max-width: 1980px;
  margin: 0 auto 96px auto;
  padding: 48px 16px 48px 16px;
  border-top: 1px solid rgb(0, 0, 0);
  box-sizing: border-box;

  @media (max-width: 900px) {
    padding: 24px 4px 24px 4px;
    margin: 0 auto 32px auto;
  }

  @media (max-width: 600px) {
    padding: 12px 2px 12px 2px;
    margin: 0 auto 16px auto;
  }
`;

const CustomersTitle = styled.h2`
  font-size: 2.5rem;
  font-family: "RagSans", sans-serif;
  font-weight: 200; /* ExtraLight */
  margin-bottom: 32px;
  text-transform: uppercase;
  margin-right: 20px;
  text-align: left;
  letter-spacing: 0.04em;

  @media (max-width: 900px) {
    font-size: 1.2rem;
    margin-bottom: -1rem;
  }

  @media (max-width: 600px) {
    font-size: 2rem;
    margin-bottom: -1rem;
  }
`;

const CustomersList = styled.div`
  font-size: 3rem;
  font-weight: 300;
  text-align: center;
  line-height: 1.3;

  @media (max-width: 900px) {
    font-size: 1.2rem;
  }

  @media (max-width: 600px) {
    font-size: 1rem;
    text-align: left;
  }
`;

const CustomersRow = styled.div`
  margin-bottom: 8px;

  @media (max-width: 900px) {
    margin-bottom: 4px;
  }
`;

const CustomersName = styled.span`
  display: inline-block;
  margin: 0 12px 4px 12px;

  @media (max-width: 900px) {
    margin: 0 6px 2px 6px;
  }

  @media (max-width: 600px) {
    margin: 0 3px 1px 3px;
  }
`;

const CustomersSectionComponent = () => (
  <CustomersSectionContainer>
    <CustomersSectionHeadline>
      <CustomersTitle>Costumers</CustomersTitle>
    </CustomersSectionHeadline>
    <CustomersSection>
      <CustomersList>
        {customers.map((group, i) => (
          <CustomersRow key={i}>
            {group.map((name, idx) => (
              <CustomersName key={name}>
                {name}
                {idx !== group.length - 1 ? "," : ""}
              </CustomersName>
            ))}
          </CustomersRow>
        ))}
      </CustomersList>
    </CustomersSection>
  </CustomersSectionContainer>
);

export default CustomersSectionComponent;
