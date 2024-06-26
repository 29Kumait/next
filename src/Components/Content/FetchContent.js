// const BASE_SERVER_URL = import.meta.env.VITE_BASE_SERVER_URL;
//
// const fetchCreateContent = async ({ description }) => {
//   try {
//     const response = await fetch(`${BASE_SERVER_URL}/api/create`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ description }),
//     });
//
//     if (!response.ok) {
//       const errorData = await response.json();
//
//       return errorData.message || "An error occurred while saving content.";
//     }
//
//     return await response.json();
//   } catch (error) {
//     return error.message || "An error occurred while saving content.";
//   }
// };
//
// const fetchContentList = async () => {
//   try {
//     const response = await fetch(`${BASE_SERVER_URL}/api`, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//
//     if (!response.ok) {
//       const errorData = await response.json();
//       return errorData.message || "An error occurred while fetching content.";
//     }
//
//     return await response.json();
//   } catch (error) {
//     return error.message || "An error occurred while fetching content.";
//   }
// };
//
// export { fetchCreateContent, fetchContentList };
