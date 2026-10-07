import Link from "next/link";

export const metadata = { title: "Page not found", robots: { index: false } };

export default function NotFound() {
  return (
    <>
      <main id="main">
        <header className="phero">
          <h1>Page not found</h1>
          <p>The page you are looking for does not exist or has moved.</p>
          <div className="ctas">
            <Link href="/" className="btn fill">
              Back to home
            </Link>
          </div>
        </header>
      </main>
    </>
  );
}
