import * as CSS from 'csstype';
import Loader from "react-loader-spinner";

const LoaderElement = () => {
  const styleObject: CSS.Properties = {
    position: 'absolute',
    top: "calc(50vh - 30px)",
    left: "calc(50vw - 30px)",
  }

  return (
    <div style={styleObject}>
      <Loader
        type="Puff"
        color="#f10f0f"
        height={60}
        width={60}
      />
    </div>
  );
};

export default LoaderElement;
