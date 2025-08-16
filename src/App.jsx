import AppLayout from "./component/AppLayout";
import PostContext from "./PostContext";
const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 px-4 py-6">
      <PostContext>
        <AppLayout />
      </PostContext>
    </div>
  );
};

export default App;
