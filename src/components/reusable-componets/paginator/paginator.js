import React, { useEffect, useState } from 'react';
import './paginator.scss';

const Paginator = ({ totalPages, currentPage, onPageChange, filtriCard }) => {
  const [pageInput, setPageInput] = useState(currentPage);
  const [errorMessage, setErrorMessage] = useState('');

  // Sincronizza il valore dell'input con la pagina corrente
  useEffect(() => {
    setPageInput(currentPage);
  }, [currentPage]);

  useEffect(() => {
    if (filtriCard) {
      console.log('FiltriCard Object:', filtriCard);
    }
  }, [filtriCard]);

  const handlePrevClick = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePageInputChange = (e) => {
    setPageInput(e.target.value);
  };

  const handlePageInputBlur = () => {
    const pageNumber = parseInt(pageInput, 10);
    if (isNaN(pageNumber) || pageNumber < 1 || pageNumber > totalPages) {
      setErrorMessage(`Please enter a number between 1 and ${totalPages}`);
      setPageInput(currentPage); // Reset se input non valido
    } else {
      setErrorMessage('');
      onPageChange(pageNumber);
    }
  };

  return (
    <div className="paginator">
<div id="recap-page">
      <button onClick={handlePrevClick} disabled={currentPage <= 1}>
        Previous
      </button>
      
      <span>Page {currentPage} of {totalPages}</span>

      <button onClick={handleNextClick} disabled={currentPage >= totalPages}>
        Next
      </button>
</div>
      <div id="recap-page">
        <div className="input-wrapper">
          <div className="page-label">
            <label htmlFor="actualPage">Pages</label>
            <input
              id="actualPage"
              type="number"
              min="1"
              max={totalPages}
              value={pageInput}
              placeholder="1"
              className="page-input"
              onChange={handlePageInputChange}
              onBlur={handlePageInputBlur}
            />
            of {totalPages}
          </div>
          {errorMessage && <span id="error-page" className="error-message">{errorMessage}</span>}
        </div>
      </div>
    </div>
  );
};

export default Paginator;
