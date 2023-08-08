import * as React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.3043 8.20435C15.8665 8.20435 15.5087 8.56216 15.5087 9C15.5087 12.5882 12.5882 15.5087 9 15.5087C5.41175 15.5087 2.4913 12.5882 2.4913 9C2.4913 5.41175 5.41175 2.4913 9 2.4913C11.158 2.4913 13.1706 3.56168 14.3869 5.34318C14.6355 5.71081 15.1327 5.80068 15.4913 5.55207C15.8587 5.30339 15.9485 4.80624 15.6998 4.44771C14.1855 2.22056 11.6851 0.9 9 0.9C4.53608 0.9 0.9 4.53608 0.9 9C0.9 13.4639 4.53608 17.1 9 17.1C13.4639 17.1 17.1 13.4639 17.1 9C17.1 8.56216 16.7422 8.20435 16.3043 8.20435Z" fill="url(#paint0_linear_256_839)" stroke="url(#paint1_linear_256_839)" strokeWidth="0.2"/>
    <path d="M11.8608 8.71301C12.2434 8.71301 12.5564 8.39996 12.5564 8.01736C12.5564 7.63475 12.2434 7.3217 11.8608 7.3217H10.6781L12.2955 5.70431C12.5651 5.43475 12.5651 4.99127 12.2955 4.7217C12.026 4.45214 11.5825 4.45214 11.3129 4.7217L8.99988 7.03475L6.68684 4.71301C6.41727 4.44344 5.97379 4.44344 5.70423 4.71301C5.43466 4.98257 5.43466 5.42605 5.70423 5.69562L7.32162 7.31301H6.13901C5.7564 7.31301 5.44336 7.62605 5.44336 8.00866C5.44336 8.39127 5.7564 8.70431 6.13901 8.70431H8.30423V9.46083H6.13901C5.7564 9.46083 5.44336 9.77388 5.44336 10.1565C5.44336 10.5391 5.7564 10.8521 6.13901 10.8521H8.30423V12.7913C8.30423 13.1739 8.61727 13.4869 8.99988 13.4869C9.38249 13.4869 9.69553 13.1739 9.69553 12.7913V10.8521H11.8608C12.2434 10.8521 12.5564 10.5391 12.5564 10.1565C12.5564 9.77388 12.2434 9.46083 11.8608 9.46083H9.69553V8.70431H11.8608V8.71301Z" fill="url(#paint2_linear_256_839)"/>
    <defs>
    <linearGradient id="paint0_linear_256_839" x1="5.17799" y1="2.50412" x2="13.8736" y2="16.6346" gradientUnits="userSpaceOnUse">
    <stop stopColor="#FFA335"/>
    <stop offset="1" stopColor="#FF6C43"/>
    </linearGradient>
    <linearGradient id="paint1_linear_256_839" x1="4.63451" y1="2.50412" x2="13.8736" y2="15.5476" gradientUnits="userSpaceOnUse">
    <stop stopColor="#FFA136"/>
    <stop offset="1" stopColor="#FF7541"/>
    </linearGradient>
    <linearGradient id="paint2_linear_256_839" x1="6.26495" y1="4.13454" x2="11.1562" y2="13.3737" gradientUnits="userSpaceOnUse">
    <stop stopColor="#FFA335"/>
    <stop offset="1" stopColor="#FF6C43"/>
    </linearGradient>
    </defs>
  </svg>
);

export default Icon;
