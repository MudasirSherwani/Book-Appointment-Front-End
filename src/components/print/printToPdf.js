import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import Reservations from '../reservation/Reservations';

const printToPdf = () => {
  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
    <button onClick={handlePrint}>Print this out!</button>
      <Reservations ref={componentRef} />
    </div>
  );
};
export default printToPdf;