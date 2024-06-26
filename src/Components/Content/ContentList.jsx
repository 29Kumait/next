// import { use } from "react";
import stylex from "@stylexjs/stylex";
// import { fetchContentList } from "./FetchContent";

const ContentList = () => {
  // const contents = use(fetchContentList());
  //
  // return (
  //   <ul data-loaded={contents.length > 0}>
  //     {contents.map((content) => (
  //       <li {...stylex.props(stylesContentList.ContentList)} key={content._id}>
  //         {content.description}
  //       </li>
  //     ))}
  //   </ul>
  // );
};

export default ContentList;

const stylesContentList = stylex.create({
  ContentList: {
    fontSize: "1rem",
    margin: "29px",
    color: "#4b51b7",
    alignItems: "center",
    borderColor: "#4a86c7",
    borderRadius: 8,
    borderStyle: "solid",
    borderWidth: 2,
    display: "flex",
    flexBasis: 0,
    flexGrow: 1,
    height: "auto",
    justifyContent: "center",
    marginEnd: "auto",
    marginStart: "auto",
    paddingEnd: 8,
    paddingStart: 8,
    maxWidth: "calc(80% - 30px)",
    backgroundColor: "rbg(106,115,123)",
    paddingTop: 49,
    paddingBottom: 29,
    textAlign: "center",
  },
});

/* *
Although it works, without using a Suspense-compatible library.we have this error:

[Debug] [vite] connecting... (client, line 469)
[Debug] [vite] connected. (client, line 576)
[Error] Warning: A component was suspended by an uncached promise. Creating promises inside a Client Components or hook is not yet supported, except via a Suspense-compatible library or framework.
ContentList@http://localhost:8080/src/Components/Content/ContentList.jsx:24:15
Suspense
ContentListWrapper@http://localhost:8080/src/Components/Content/ContentList.jsx:98:15
Page@http://localhost:8080/src/Pages/Page.jsx:27:15
RenderedRoute@http://localhost:8080/node_modules/.vite/deps/react-router-dom.js:3656:11
Routes@http://localhost:8080/node_modules/.vite/deps/react-router-dom.js:4090:12
Router@http://localhost:8080/node_modules/.vite/deps/react-router-dom.js:4038:12
BrowserRouter@http://localhost:8080/node_modules/.vite/deps/react-router-dom.js:4778:12
div
AuthProvider@http://localhost:8080/src/Components/AuthProvider.jsx:23:15
App@http://localhost:8080/src/App.jsx:50:15
    printWarning (react-dom_client.js:512)
    error (react-dom_client.js:497)
    trackUsedThenable (react-dom_client.js:8300)
    useThenable (react-dom_client.js:10048)
    ContentList (ContentList.jsx:38)
    renderWithHooksAgain (react-dom_client.js:9900)
    replaySuspendedComponentWithHooks (react-dom_client.js:9872)
    replayFunctionComponent (react-dom_client.js:13163)
    replaySuspendedUnitOfWork (react-dom_client.js:20024)
    renderRootConcurrent (react-dom_client.js:19885)
    performConcurrentWorkOnRoot (react-dom_client.js:19271)
    workLoop (react-dom_client.js:193)
    flushWork (react-dom_client.js:172)
    performWorkUntilDeadline (react-dom_client.js:380)
*/
// import { useContent } from "./ContentContext.jsx";
// import stylex from "@stylexjs/stylex";
//
// const ContentList = () => {
//   const { contents, loading, error } = useContent();
//
//   if (loading) {
//     return <div>Loading...</div>;
//   }
//
//   if (error) {
//     return <div>Error: {error}</div>;
//   }
//
//   return (
//     <ul data-loaded={contents.length > 0}>
//       {contents.map((content) => (
//         <li {...stylex.props(stylesContentList.ContentList)} key={content._id}>
//           {content.description}
//         </li>
//       ))}
//     </ul>
//   );
// };
//
// export default ContentList;
