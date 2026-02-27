import { createRootRoute, createRoute, createRouter } from '@tanstack/react-router';
import { Outlet, Link } from '@tanstack/react-router';

function Shell() {
  return (
    <div className="container">
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/blog">Blog</Link>
      </nav>
      <Outlet />
    </div>
  );
}

const rootRoute = createRootRoute({ component: Shell });

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: () => (
    <section className="hero">
      <p>Vibe Coding Website</p>
      <h1>zhsjf-website</h1>
      <p>TanStack + React unified website foundation.</p>
    </section>
  )
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: () => <h2>About ZHSJF</h2>
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: () => <h2>Contact ZHSJF</h2>
});

const blogRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/blog',
  component: () => <h2>Blog index for zhsjf-website</h2>
});

const routeTree = rootRoute.addChildren([homeRoute, aboutRoute, contactRoute, blogRoute]);

export const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
