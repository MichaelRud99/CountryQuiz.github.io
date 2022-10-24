const rndSample = (regionArr, iteration) => {
   let sampleQuiz = [];
   let previoustRnd = -1;
   const max = regionArr.length;
   for (let i = 0; i < iteration; i++) {
      const rndInt = Math.floor(Math.random() * max);
      if (rndInt === previoustRnd) {
         rndInt = Math.floor((Math.random() * max) / 2);
      }
      previoustRnd = rndInt;
      sampleQuiz.push(regionArr[rndInt]);
   }
   return sampleQuiz;
};

export default rndSample;
