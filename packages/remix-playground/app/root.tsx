import { LinksFunction } from '@remix-run/node';
import { Links, LiveReload, Outlet } from '@remix-run/react';

import globalStyles from './styles/global.css';
import globalLargeStyles from './styles/global-large.css';
import globalMediumStyles from './styles/global-medium.css';

export const links: LinksFunction = () => {
  return [
    {
      rel: 'stylesheet',
      href: globalStyles,
    },
    {
      rel: 'stylesheet',
      href: globalMediumStyles,
      media: 'print, (min-width: 640px)',
    },
    {
      rel: 'stylesheet',
      href: globalLargeStyles,
      media: 'screen and (min-width: 1024px)',
    },
  ];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Remix: So great, it's funny!</title>
        <Links />
      </head>
      <body>
        <Outlet />
        <LiveReload />
      </body>
    </html>
  );
}
