/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
function ship(length) {
  let hits = 0;
  const getHits = () => hits;
  const gotHit = () => hits++;
  console.log(hits);
  const isSunk = () => {
    if (length === 4 && hits === 4) {
      console.log("Ship drowned");
    } else if (length === 3 && hits === 3) {
      console.log("Ship drowned");
    } else if (length === 2 && hits === 2) {
      console.log("Ship drowned");
    }
  };
  return {
    getHits,
    gotHit,
    isSunk
  };
}
const newShip = ship(4);
newShip.gotHit();
newShip.gotHit();
newShip.gotHit();
newShip.isSunk();
console.log(newShip.getHits());
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLFNBQVNBLElBQUlBLENBQUNDLE1BQU0sRUFBRTtFQUNyQixJQUFJQyxJQUFJLEdBQUcsQ0FBQztFQUNaLE1BQU1DLE9BQU8sR0FBR0EsQ0FBQSxLQUFNRCxJQUFJO0VBQzFCLE1BQU1FLE1BQU0sR0FBR0EsQ0FBQSxLQUFNRixJQUFJLEVBQUU7RUFDM0JHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSixJQUFJLENBQUM7RUFDakIsTUFBTUssTUFBTSxHQUFHQSxDQUFBLEtBQU07SUFDcEIsSUFBSU4sTUFBTSxLQUFLLENBQUMsSUFBSUMsSUFBSSxLQUFLLENBQUMsRUFBRTtNQUMvQkcsT0FBTyxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDO0lBQzVCLENBQUMsTUFBTSxJQUFJTCxNQUFNLEtBQUssQ0FBQyxJQUFJQyxJQUFJLEtBQUssQ0FBQyxFQUFFO01BQ3RDRyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUM7SUFDNUIsQ0FBQyxNQUFNLElBQUlMLE1BQU0sS0FBSyxDQUFDLElBQUlDLElBQUksS0FBSyxDQUFDLEVBQUU7TUFDdENHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsQ0FBQztJQUM1QjtFQUNELENBQUM7RUFDRCxPQUFPO0lBQUVILE9BQU87SUFBRUMsTUFBTTtJQUFFRztFQUFPLENBQUM7QUFDbkM7QUFFQSxNQUFNQyxPQUFPLEdBQUdSLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDdkJRLE9BQU8sQ0FBQ0osTUFBTSxDQUFDLENBQUM7QUFDaEJJLE9BQU8sQ0FBQ0osTUFBTSxDQUFDLENBQUM7QUFDaEJJLE9BQU8sQ0FBQ0osTUFBTSxDQUFDLENBQUM7QUFFaEJJLE9BQU8sQ0FBQ0QsTUFBTSxDQUFDLENBQUM7QUFDaEJGLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRSxPQUFPLENBQUNMLE9BQU8sQ0FBQyxDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLXJlcG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gc2hpcChsZW5ndGgpIHtcblx0bGV0IGhpdHMgPSAwO1xuXHRjb25zdCBnZXRIaXRzID0gKCkgPT4gaGl0cztcblx0Y29uc3QgZ290SGl0ID0gKCkgPT4gaGl0cysrO1xuXHRjb25zb2xlLmxvZyhoaXRzKTtcblx0Y29uc3QgaXNTdW5rID0gKCkgPT4ge1xuXHRcdGlmIChsZW5ndGggPT09IDQgJiYgaGl0cyA9PT0gNCkge1xuXHRcdFx0Y29uc29sZS5sb2coXCJTaGlwIGRyb3duZWRcIik7XG5cdFx0fSBlbHNlIGlmIChsZW5ndGggPT09IDMgJiYgaGl0cyA9PT0gMykge1xuXHRcdFx0Y29uc29sZS5sb2coXCJTaGlwIGRyb3duZWRcIik7XG5cdFx0fSBlbHNlIGlmIChsZW5ndGggPT09IDIgJiYgaGl0cyA9PT0gMikge1xuXHRcdFx0Y29uc29sZS5sb2coXCJTaGlwIGRyb3duZWRcIik7XG5cdFx0fVxuXHR9O1xuXHRyZXR1cm4geyBnZXRIaXRzLCBnb3RIaXQsIGlzU3VuayB9O1xufVxuXG5jb25zdCBuZXdTaGlwID0gc2hpcCg0KTtcbm5ld1NoaXAuZ290SGl0KCk7XG5uZXdTaGlwLmdvdEhpdCgpO1xubmV3U2hpcC5nb3RIaXQoKTtcblxubmV3U2hpcC5pc1N1bmsoKTtcbmNvbnNvbGUubG9nKG5ld1NoaXAuZ2V0SGl0cygpKTtcbiJdLCJuYW1lcyI6WyJzaGlwIiwibGVuZ3RoIiwiaGl0cyIsImdldEhpdHMiLCJnb3RIaXQiLCJjb25zb2xlIiwibG9nIiwiaXNTdW5rIiwibmV3U2hpcCJdLCJzb3VyY2VSb290IjoiIn0=