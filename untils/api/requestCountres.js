async function requestCountres(path) {
   let response = await fetch(path);
   const data = await response.json();
   return data;
}

export default requestCountres;
