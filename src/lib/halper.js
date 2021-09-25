const formatDate = (detDate) => {
   const date = new Date(detDate);
   let dd = date.getDate();
   let mm = date.getMonth() + 1;
   let yyyy = date.getFullYear();
   if (dd < 10) { dd = '0' + dd; }
   if (mm < 10) { mm = '0' + mm; };
   return detDate = dd + '/' + mm + '/' + yyyy;
};

export { formatDate };