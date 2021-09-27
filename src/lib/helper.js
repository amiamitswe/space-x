const formatDate = (detDate) => {
   const date = new Date(detDate);
   let dd = date.getDate();
   let mm = date.getMonth() + 1;
   let yyyy = date.getFullYear();
   if (dd < 10) { dd = '0' + dd; }
   if (mm < 10) { mm = '0' + mm; };
   return detDate = dd + '/' + mm + '/' + yyyy;
};

const getYearData = (detDate) => {
   const date = new Date(detDate);
   let yyyy = date.getFullYear();
   return detDate = yyyy;
};

const getMonthOfGetDate = (detDate) => {
   const date = new Date(detDate);
   let mm = date.getMonth() + 1;
   let yyyy = date.getFullYear();
   if (mm < 10) { mm = '0' + mm; };
   return detDate = Date.UTC(yyyy, mm);
};

const getLastMonthOfThisYear = (detDate) => {
   let date = new Date(detDate);
   date.setDate(date.getMonth());
   let mm = date.getMonth();
   let yyyy = date.getFullYear();
   return detDate = Date.UTC(yyyy, mm);
};

const getLastWeakOfThisYear = (detDate) => {
   let date = new Date(detDate);
   date.setDate(date.getDate() - 7);
   let dd = date.getDate();
   let mm = date.getMonth() + 1;
   let yyyy = date.getFullYear();
   return detDate = Date.UTC(yyyy, mm, dd);
};

const getWeakOfGetDate = (detDate) => {
   var date = new Date(detDate);
   let dd = date.getDate();
   let mm = date.getMonth() + 1;
   let yyyy = date.getFullYear();
   return detDate = Date.UTC(yyyy, mm, dd);
};

export { formatDate, getYearData, getMonthOfGetDate, getLastMonthOfThisYear, getLastWeakOfThisYear, getWeakOfGetDate };