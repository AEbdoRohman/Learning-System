const loaderContainerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  backgroundColor: "#f5f5f5",
};

const loaderStyle = {
  width: "45px",
  aspectRatio: "0.75",
  background: `
    no-repeat linear-gradient(#000 0 0) 0%   100%,
    no-repeat linear-gradient(#000 0 0) 50%  100%,
    no-repeat linear-gradient(#000 0 0) 100% 100%`,
  backgroundSize: "20% 65%",
  animation: "l5 1s infinite linear",
};

const Loading = () => {
  return (
    <div style={loaderContainerStyle} className="loader-container">
      <div style={loaderStyle} className="loader"></div>
      <style>
        {`
          @keyframes l5 {
            20% {background-position: 0% 50% ,50% 100%,100% 100%}
            40% {background-position: 0% 0%  ,50% 50% ,100% 100%}
            60% {background-position: 0% 100%,50% 0%  ,100% 50% }
            80% {background-position: 0% 100%,50% 100%,100% 0%  }
          }
        `}
      </style>
    </div>
  );
};

export default Loading;
