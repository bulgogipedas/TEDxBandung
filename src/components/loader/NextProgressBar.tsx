"use client";

import AppProgressBar from "nextjs-toploader";

export default function NextProgressBar() {
  return (
    <AppProgressBar
      color="#EB0028"
      showSpinner={false}
      easing="ease"
      crawl
      zIndex={1600}
    />
  );
}
