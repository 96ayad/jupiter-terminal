import React from 'react';

const JupiterLogo: React.FC<{ width?: number; height?: number }> = ({ width = 24, height = 24 }) => {
  // eslint-disable-next-line @next/next/no-img-element

  ///////////ayad/////////////////
  // return <img src={'https://jup.ag/svg/jupiter-logo.svg'} width={width} height={height} alt="Jupiter aggregator" />;

  return <img src={'https://raw.githubusercontent.com/96ayad/images/59304b7f02800e3ebfc1a5bd324b7859ec3e8104/dex-swap%20(5).svg'} width={width} height={height} alt="Jupiter aggregator" />;
};
 
export default JupiterLogo;
