class FiltriCard {
    constructor(data) {
      // Assume data is an object containing the full table data and any necessary metadata
      this.data = data; // Your data array (rows of the table)
      this.label = data.label; // Labels or headers for the table
      this.totalPages = 0; // To store total pages count
      this.page = 1; // Default page
      this.itemsPerPage = 8; // Items per page, can be adjusted if needed
    }
  
    // Method to set the number of items per page
    setItemsPerPage(items) {
      this.itemsPerPage = items;
      this.calculateTotalPages();
    }
  
    // Calculate total pages based on the current data and items per page
    calculateTotalPages() {
      this.totalPages = Math.ceil(this.data.data.length / this.itemsPerPage);
    }
  
    // Method to retrieve data for the current page
    getDataForCurrentPage() {
      const startIndex = (this.page - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.data.data.slice(startIndex, endIndex);
    }
  
    // Method to set the page number
    setPageNumber(pageNumber) {
      if (pageNumber >= 1 && pageNumber <= this.totalPages) {
        this.page = pageNumber;
      }
    }
  
    // Method to get the current page number
    getPageNumber() {
      return this.page;
    }
  
    // Method to get the total pages count
    getTotalPages() {
      return this.totalPages;
    }
  
    // Placeholder method for filters (could be expanded as per your needs)
    filterData(criteria) {
      // Implement filtering logic here
      // For example, filter by a search term or specific column values
      this.data.data = this.data.data.filter(row => row.some(col => col.includes(criteria)));
      this.calculateTotalPages(); // Recalculate total pages after filtering
    }
  }
  
  export default FiltriCard;
  