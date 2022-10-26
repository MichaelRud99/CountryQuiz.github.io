function requestDelete(id, async = true) {
   let XHR = new XMLHttpRequest();
   XHR.open("DELETE", "http://localhost:4200/questions/" + id, async);
   XHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
   XHR.send();
}

export default requestDelete;
