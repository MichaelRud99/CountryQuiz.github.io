function requests(data, method, id) {
   const XHR = new XMLHttpRequest();
   data = data[0];

   let urlEncodedData = "",
      urlEncodedDataPairs = [],
      name;

   for (name in data) {
      urlEncodedDataPairs.push(
         encodeURIComponent(name) + "=" + encodeURIComponent(data[name])
      );
   }
   urlEncodedData = urlEncodedDataPairs.join("&").replace(/%20/g, "+");
   if (id === undefined) {
      XHR.open(method, "http://localhost:4200/questions",false);
   } else {
      XHR.open(method, "http://localhost:4200/questions/" + id);
   }
   XHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
   XHR.send(urlEncodedData);
}

export default requests;
