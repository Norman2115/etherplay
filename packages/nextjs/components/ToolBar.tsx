import React from "react";

export default function ToolBar() {
  return (
    <div className="flex items-center justify-center mt-32 mb-20">
      <div className="flex flex-row items-center justify-center space-x-12 px-12 py-3 bg-white bg-opacity-20 rounded-md">
        <h2 className="text-lg">Your Store</h2>
        <h2 className="text-lg">Note & Noteworthy</h2>
        <h2 className="text-lg">Discover</h2>
        <h2 className="text-lg">Categories</h2>
        <h2 className="text-lg">News</h2>
      </div>
    </div>
  );
}
