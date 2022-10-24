const enumeration = (array) => {
   let i = 4;
   let temp = [];
   let j = 0;
   while (i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = array[i];
      array[i] = array[j];
      array[j] = temp;
   }

   return array;
};

export default enumeration;
