import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

// eslint-disable-next-line import/no-unresolved
import { RouterLink } from './components';

// ----------------------------------------------------------------------

const Logo = forwardRef(({ disabledLink = false, sx, ...other }, ref) => {



  // OR using local (public folder)
  // -------------------------------------------------------
  // const logo = (
  //   <Box
  //     component="img"
  //     src="/logo/logo_single.svg" => your path
  //     sx={{ width: 40, height: 40, cursor: 'pointer', ...sx }}
  //   />
  // );

  const logo = (
    <Box
      component="img"
      src="/assets/background/logo_single.png" // Correct path relative to the `public` folder
      sx={{

        marginTop: -9,

        width: 190, height: 90, cursor: 'pointer', ...sx
      }}
    />

  );

  if (disabledLink) {
    return logo;
  }

  return (
    <Link component={RouterLink} href="../../" sx={{ display: 'contents' }}>
      {logo}
    </Link>
  );
});

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

export default Logo;
