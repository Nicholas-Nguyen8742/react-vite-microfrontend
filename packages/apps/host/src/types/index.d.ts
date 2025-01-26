import React from 'react';

// host-app/src/types/remote-app.d.ts
declare module 'remoteApp/Button' {
  const Button: React.FC;
  export default Button;
}

declare module 'remoteApp/Header' {
  const Header: React.FC;
  export default Header;
}
