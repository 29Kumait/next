import { lazy, Suspense } from "react";
import { ContentProvider } from "./ContentContext.jsx";

const ContentList = lazy(() => import("./ContentList"));

const ContentListWrapper = () => {
  return (
    <ContentProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <ContentList />
      </Suspense>
    </ContentProvider>
  );
};

export default ContentListWrapper;

// import { Suspense, lazy } from "react";
//
// const ContentList = lazy(() => import("./ContentList"));
//
// const ContentListWrapper = () => {
//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       <ContentList />
//     </Suspense>
//   );
// };
//
// export default ContentListWrapper;
