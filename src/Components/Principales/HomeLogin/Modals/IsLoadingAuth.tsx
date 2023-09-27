import "./isLoadingAuth.css";
const IsLoadingAuth = () => {
  return (
    <div className="fixed inset-0 z-10 flex justify-center items-center backdrop-blur-xl ">
      <div className="loader text-center   ">
        
      </div>
    </div>
  );
};

export default IsLoadingAuth;
