import React from "react";
import Header from "./Header";
import AddPOstSection from "./AddPOstSection";
import PostList from "./PostList";
const AppLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 px-4 py-6">
      <Header />
      <AddPOstSection />
      <main className="bg-white shadow-md rounded-lg p-4">
        <PostList />
      </main>
    </div>
  );
};

export default AppLayout;
