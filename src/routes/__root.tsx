import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  Link,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-page px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-ink font-display">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-ink">Page not found</h2>
        <p className="mt-2 text-sm text-ink-deep/70">
          The page you're looking for doesn't exist.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-ink px-5 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-white"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-page px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold text-ink font-display">This page didn't load</h1>
        <p className="mt-2 text-sm text-ink-deep/70">Something went wrong. Try refreshing.</p>
        <div className="mt-6">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-full bg-ink px-5 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-white"
          >
            Try again
          </button>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Agility Management Consulting" },
      { name: "description", content: "Agility SAP Hub is a premium enterprise SAP consulting website showcasing technical leadership and strategic solutions." },
      { name: "author", content: "Agility Management Consulting" },
      { property: "og:title", content: "Agility Management Consulting" },
      { property: "og:description", content: "Agility SAP Hub is a premium enterprise SAP consulting website showcasing technical leadership and strategic solutions." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Agility Management Consulting" },
      { name: "twitter:description", content: "Agility SAP Hub is a premium enterprise SAP consulting website showcasing technical leadership and strategic solutions." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/b57518b5-1fae-4f15-acc4-73028a846802/id-preview-577edf3a--a2e922ec-771d-4d12-96bb-6b0db1dd6e0e.lovable.app-1779345157480.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/b57518b5-1fae-4f15-acc4-73028a846802/id-preview-577edf3a--a2e922ec-771d-4d12-96bb-6b0db1dd6e0e.lovable.app-1779345157480.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&family=Space+Grotesk:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
