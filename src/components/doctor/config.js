/* eslint-disable import/no-extraneous-dependencies */
import 'react-multi-carousel/lib/styles.css';

const configure = ([desktop, tablet, mobile]) => ({
  extraLarge: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },

  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: desktop || 3,
  },

  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: tablet || 2,
  },

  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: mobile || 1,
  },
});

export default configure;
