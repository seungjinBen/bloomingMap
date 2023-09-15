const deviceSizes = {
    iphoneSE: 375,
    galaxyS20: 412,
    iphoneXR: 414,
  };
  
  const device = {
    iphoneSE: `screen and (max-width: ${deviceSizes.iphoneSE}px)`,
    galaxyS20: `screen and (max-width: ${deviceSizes.galaxyS20}px)`,
    iphoneXR: `screen and (max-width: ${deviceSizes.iphoneXR}px)`,
  };
  
  const theme = {
    device
  };
  
  export default theme;