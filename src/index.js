// /**
//  * @param preferences - target student focus
//  * @param knowsProgramming - if student can do programming and know basics
//  * @param config - private student ability to perform for different focus modes
//  * @returns number of weeks needed for finish education
//  */
// module.exports = function getTimeForEducation(
//     focus = 'family', 
//     knowsProgramming = true,
//     config = {family: 4}
//     ) {
//       return 0;
//   };
  


  /**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
  focus = 'family', 
  knowsProgramming = true,
  config = {family: 4}
  ) {

    if (knowsProgramming == true){
      return Math.ceil(800/config[focus]);
      // it needs 800 hours
    }
      else{
        //it needs 1300 hours
        return Math.ceil(1300/config[focus]);
      }

};
