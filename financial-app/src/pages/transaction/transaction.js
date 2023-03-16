import React from "react";
import Layout from "../../components/layout/layout";
// import transaction from '../../components/transaction/transaction';
import DenseTable from "../../components/transaction/transaction";

import "../transaction/transaction.css";
export default function transaction() {
  return (
    // <section className='transaction-page'>
    // </section>
    <div className="dashboard" style={{ backgroundColor: "#F8F9FD" }}>
      <Layout>
        <DenseTable />
      </Layout>
    </div>
  );
}
