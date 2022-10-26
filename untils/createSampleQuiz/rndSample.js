const rndSample = (regionArr, iteration) => {
   let sampleQuiz = [];
   const max = regionArr.length-1;
   const rndInt = Math.floor(Math.random() * max);

   for (let i = 0; i < iteration; i++) {
      if (rndInt === max) {
         rndInt = i;
      }
      if (rndInt != max) {
         rndInt = rndInt + 1;
      }
      sampleQuiz.push(regionArr[rndInt]);
   }
   return sampleQuiz;
};

export default rndSample;
