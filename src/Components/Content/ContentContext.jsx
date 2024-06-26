import PropTypes from "prop-types";
import { createContext, useContext, useEffect, useState } from "react";
import { fetchContentList as fetchContentListAPI } from "./FetchContent";

const ContentContext = createContext();

export const useContent = () => {
  return useContext(ContentContext);
};

export const ContentProvider = ({ children }) => {
  const [contents, setContents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await fetchContentListAPI();
        setContents(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <ContentContext.Provider value={{ contents, loading, error }}>
      {children}
    </ContentContext.Provider>
  );
};

ContentProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// import React, { createContext, useState, useEffect, useContext } from "react";
// import { fetchContentList as fetchContentListAPI } from "./FetchContent";
//
// const ContentContext = createContext();
//
// export const useContent = () => {
//   return useContext(ContentContext);
// };
//
// export const ContentProvider = ({ children }) => {
//   const [contents, setContents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//
//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         const data = await fetchContentListAPI();
//         setContents(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };
//
//     fetchData();
//   }, []);
//
//   const updateContent = (index, newContent) => {
//     setContents((prevContents) => {
//       const updatedContents = [...prevContents];
//       updatedContents[index] = { ...updatedContents[index], ...newContent };
//       return updatedContents;
//     });
//   };
//
//   return (
//     <ContentContext.Provider
//       value={{ contents, loading, error, updateContent }}
//     >
//       {children}
//     </ContentContext.Provider>
//   );
// };

//
// // import { createContext, useState, useEffect, useContext } from "react";
// // import { fetchContentList as fetchContentListAPI } from "./FetchContent";
// //
// // const ContentContext = createContext();
// //
// // export const ContentProvider = ({ children }) => {
// //   const [contentState, setContentState] = useState({
// //     contents: [],
// //     loading: true,
// //     error: null,
// //   });
// //
// //   useEffect(() => {
// //     const fetchData = async () => {
// //       setContentState({ contents: [], loading: true, error: null });
// //       try {
// //         const data = await fetchContentListAPI();
// //         setContentState({ contents: data, loading: false, error: null });
// //       } catch (error) {
// //         setContentState({ contents: [], loading: false, error: error.message });
// //       }
// //     };
// //
// //     fetchData();
// //   }, []);
// //
// //   return (
// //       <ContentContext.Provider value={contentState}>
// //         {children}
// //       </ContentContext.Provider>
// //   );
// // };
// //
// // export const useContent = () => useContext(ContentContext);
