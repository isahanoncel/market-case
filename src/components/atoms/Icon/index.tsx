import React, { FC } from 'react';
import { COLORS } from '../../../constants/theme';
import { Colors, Icons } from '../../../interfaces/styled-components';

interface IIcon {
  name: Icons;
  color?: Colors;
  size?: number;
}

const Icon: FC<IIcon> = ({ name, color = 'primary', size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox={`0 0 ${size} ${size}`}
    fill={COLORS[color]}
    xmlns="http://www.w3.org/2000/svg"
  >
    {name === 'ArrowLeft' && (
      <path
        fill={COLORS[color]}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.0667786 7.33281C0.110539 7.43791 0.171804 7.53425 0.259324 7.61308L6.38574 13.7438C6.72707 14.0854 7.27844 14.0854 7.61977 13.7438C7.9611 13.4023 7.9611 12.8505 7.61977 12.5089L2.98995 7.87582L13.1248 7.87582C13.6062 7.87582 14 7.4817 14 7C14 6.5183 13.6062 6.12418 13.1248 6.12418L2.9812 6.12418L7.61102 1.49109C7.95235 1.14951 7.95235 0.597748 7.61102 0.256178C7.26969 -0.0853924 6.71832 -0.0853923 6.37699 0.256178L0.250571 6.38693C0.171802 6.46575 0.110537 6.56209 0.0580247 6.66719C-0.020744 6.87739 -0.0207421 7.12262 0.0667786 7.33281Z"
      />
    )}
    {name === 'Bag' && (
      <>
        <path
          d="M0.411743 5.46655H13.5884V17.0081H0.411743V5.46655Z"
          fill="white"
        />
        <path
          d="M4.67188 0.657471H9.34121L10.2765 1.62625V5.4666L9.26455 5.46388V1.6242H4.75454V5.46388L3.72388 5.4666V1.6242L4.67188 0.657471Z"
          fill="white"
        />
      </>
    )}
  </svg>
);

export default Icon;
