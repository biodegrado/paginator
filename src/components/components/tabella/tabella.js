import React, { useState, useEffect } from 'react';
import Paginator from '../../reusable-componets/paginator/paginator'; // Assuming Paginator is properly implemented
import FiltriCard from '../../../services/services/filterCard'; // Assuming FiltriCard is a component or class for your pagination logic
import './tabella.scss';

const Tabella = ({ fsTable }) => {

  const tableData ={
    "label": [
        "<tr><th scope='col'>Località</th><th scope='col'>Esercizio</th><th scope='col'>Indirizzo</th><th scope='col'>Telefono</th><th scope='col'>Giorni di apertura</th><th scope='col'>Orario</th></tr>"
    ],
    "data":[
        "<tr><td>Napoli</td><td>Dimensione avventura Travel Agency</td><td>Via Tiburtina Valeria Km112+215, C/O Centro Comm. Coop 'I Marsi'</td><td>sconto-pagina1</td><td>lun - mar - mer - gio - ven - sab</td><td>9.30 - 12.30 16.00 - 19.30</td></tr>",
        "<tr><td>Roma</td><td>Dimensione avventura Travel Agency</td><td>Via Tiburtina Valeria Km112+215, C/O Centro Comm. Coop 'I Marsi'</td><td>sconto-pagina1</td><td>lun - mar - mer - gio - ven - sab</td><td>9.30 - 12.30 16.00 - 19.30</td></tr>",
        "<tr><td>Udine</td><td colspan='2'>Dimensione avventura Travel Agency</td><td>sconto-pagina1</td><td>lun - mar - mer - gio - ven - sab</td><td>9.30 - 12.30 16.00 - 19.30</td></tr>",
        "<tr><td>Napoli</td><td>Dimensione avventura Travel Agency</td><td>Via Tiburtina Valeria Km112+215, C/O Centro Comm. Coop 'I Marsi'</td><td>sconto-pagina1</td><td>lun - mar - mer - gio - ven - sab</td><td>9.30 - 12.30 16.00 - 19.30</td></tr>",
        "<tr><td>Roma</td><td>Dimensione avventura Travel Agency</td><td>Via Tiburtina Valeria Km112+215, C/O Centro Comm. Coop 'I Marsi'</td><td>sconto-pagina1</td><td>lun - mar - mer - gio - ven - sab</td><td>9.30 - 12.30 16.00 - 19.30</td></tr>",
        "<tr><td>Udine</td><td colspan='2'>Dimensione avventura Travel Agency</td><td>sconto-pagina1</td><td>lun - mar - mer - gio - ven - sab</td><td>9.30 - 12.30 16.00 - 19.30</td></tr>",
        "<tr><td>Napoli</td><td>Dimensione avventura Travel Agency</td><td>Via Tiburtina Valeria Km112+215, C/O Centro Comm. Coop 'I Marsi'</td><td>sconto-pagina1</td><td>lun - mar - mer - gio - ven - sab</td><td>9.30 - 12.30 16.00 - 19.30</td></tr>",
        "<tr><td>Roma</td><td>Dimensione avventura Travel Agency</td><td>Via Tiburtina Valeria Km112+215, C/O Centro Comm. Coop 'I Marsi'</td><td>sconto-pagina1</td><td>lun - mar - mer - gio - ven - sab</td><td>9.30 - 12.30 16.00 - 19.30</td></tr>",
        "<tr><td>Udine</td><td colspan='2'>Dimensione avventura Travel Agency</td><td>sconto-pagina1</td><td>lun - mar - mer - gio - ven - sab</td><td>9.30 - 12.30 16.00 - 19.30</td></tr>",
        "<tr><td>Napoli</td><td>Dimensione avventura Travel Agency</td><td>Via Tiburtina Valeria Km112+215, C/O Centro Comm. Coop 'I Marsi'</td><td>sconto-pagina1</td><td>lun - mar - mer - gio - ven - sab</td><td>9.30 - 12.30 16.00 - 19.30</td></tr>",
        "<tr><td>Roma</td><td>Dimensione avventura Travel Agency</td><td>Via Tiburtina Valeria Km112+215, C/O Centro Comm. Coop 'I Marsi'</td><td>sconto-pagina1</td><td>lun - mar - mer - gio - ven - sab</td><td>9.30 - 12.30 16.00 - 19.30</td></tr>",
        "<tr><td>Udine</td><td colspan='2'>Dimensione avventura Travel Agency</td><td>sconto-pagina1</td><td>lun - mar - mer - gio - ven - sab</td><td>9.30 - 12.30 16.00 - 19.30</td></tr>",
        "<tr><td>Napoli</td><td>Dimensione avventura Travel Agency</td><td>Via Tiburtina Valeria Km112+215, C/O Centro Comm. Coop 'I Marsi'</td><td>sconto-pagina1</td><td>lun - mar - mer - gio - ven - sab</td><td>9.30 - 12.30 16.00 - 19.30</td></tr>",
        "<tr><td>Roma</td><td>Dimensione avventura Travel Agency</td><td>Via Tiburtina Valeria Km112+215, C/O Centro Comm. Coop 'I Marsi'</td><td>sconto-pagina1</td><td>lun - mar - mer - gio - ven - sab</td><td>9.30 - 12.30 16.00 - 19.30</td></tr>",
        "<tr><td>Udine</td><td colspan='2'>Dimensione avventura Travel Agency</td><td>sconto-pagina1</td><td>lun - mar - mer - gio - ven - sab</td><td>9.30 - 12.30 16.00 - 19.30</td></tr>"
    ]
  }
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [filtricard, setFiltricard] = useState(null); // Store the FiltriCard object

  const itemInPage = 3; // Number of items per page
  
  useEffect(() => {
    setTotalPages(Math.ceil(tableData.data.length / itemInPage));

    // Create the FiltriCard instance (this is just an example, replace with your actual logic)
    const filtriCardInstance = new FiltriCard(tableData);
    setFiltricard(filtriCardInstance);
  }, [fsTable]);

  // Function to handle page change
  const handlePageChange = (newPageNumber) => {
    setCurrentPage(newPageNumber);
  };

  // Get the rows to display based on the current page
  const getRowsForCurrentPage = () => {
    const startIndex = (currentPage - 1) * itemInPage;
    const endIndex = startIndex + itemInPage;

    return tableData.data.slice(startIndex, endIndex);
  };

  // Render the table labels (headers)
  const createLabelRow = (labels) => {
    return (
      
       <thead dangerouslySetInnerHTML={{ __html: labels[0] }} />
    
    );
  };

  // Render the table body (rows)
  const createTBody = (rowsToShow) => {
    return (
      <tbody>
        {rowsToShow.map((row, index) => (
          <tr key={index} dangerouslySetInnerHTML={{ __html: row }} />
        ))}
      </tbody>
    );
  };


  return (
    <div className="fs-table-comp" ref={fsTable}>
      <table className="tableTrain">
        {createLabelRow(tableData.label)}
        {createTBody(getRowsForCurrentPage())}
      </table>
      
      {/* Pass necessary data to the Paginator */}
      <Paginator
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
        filtriCard={filtricard} // Passing the FiltriCard object to the Paginator
      />
    </div>
  );
};

export default Tabella;
