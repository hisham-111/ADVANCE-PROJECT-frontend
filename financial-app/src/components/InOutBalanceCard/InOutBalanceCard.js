import React from 'react';
import '../InOutBalanceCard/InOutBalanceCard.css';

export default function InOutBalanceCard({ amount, typeCode, currency }) {
  return (
    <div className='InOutBalanceCard'>
      <div className='TypeCode_title'>{typeCode}</div>
      <div className="currencyandamout_holder">
        <span className='Currency_and_amount_class'>{currency}</span>
        <span className='Currency_and_amount_class'>{amount}</span>
      </div>
    </div>
  );
}
