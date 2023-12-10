// import { fecthAllLaunches, fecthOneLaunches } from "./http";

// export const selectLaunchesYear = () =>{
    
//   const selectLaunchYear = document.createElement("select");
//   const defaultOption = document.createElement("option");
//   defaultOption.value = "default";
//   defaultOption.textContent = "Select Launch Year";
//   selectLaunchYear.appendChild(defaultOption);

// //   year.forEach((el) => {
// //     const optionLaunchYear = document.createElement("option");
// //     optionLaunchYear.value = el;
// //     optionLaunchYear.textContent = el;
// //     selectLaunchYear.appendChild(optionLaunchYear);
// //   })

// //   selectLaunchYear.addEventListener("change", async (event) => {
// //     try {
// //         const response = await fecthAllLaunches()
// //         const filteredLaunches = response.data.filter(launch => {
// //             return launch.launch_year === event.target.value;
// //         })
// //         RenderLaunches(filteredLaunches);
// //     } catch (error) {
// //       // eslint-disable-next-line no-console
// //         console.log(error);
// //     }
// // })
//   return selectLaunchYear
// }

// export const SelectFlightNumber = (numbers) => {

//     const selectFlightNumber = document.createElement("select");
//     const defaultOption = document.createElement("option");
//     defaultOption.value = "default";
//     defaultOption.textContent = "Select Flight Number";
//     selectFlightNumber.appendChild(defaultOption);
    
//     numbers.forEach((el) => {
//       const optionFlightNumber = document.createElement("option");
//       optionFlightNumber.value = el;
//       optionFlightNumber.textContent = el;
//       selectFlightNumber.appendChild(optionFlightNumber);
//     })
//     selectFlightNumber.addEventListener("change", async (event) => {
//       try {
//           const response = await fecthOneLaunches(event.target.value);
//           renderLaunches([response.data]); // Render a single launch based on the selected flight number
//       } catch (error) {
//         // eslint-disable-next-line no-console
//           console.log(error);
//       }
//     })
//     return selectFlightNumber 
//     }