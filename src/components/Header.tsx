import { Link, useLocation } from '@tanstack/react-router'
import { ModeToggle } from './mode-toggle'

export default function Header() {
  const location = useLocation()
  const isWritePage = location.pathname === '/write'
  const isLearnPage = location.pathname === '/learn'
  const isAboutPage = location.pathname === '/about'

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center gap-6">
          {/* Navigation links */}
          <div className="text-2xl font-mono font-bold px-3 py-1.5">
            {isWritePage ? (
              <>
                <Link
                  to="/"
                  className="rounded hover:underline hover:opacity-90 transition-opacity"
                  aria-label="Home"
                >
                  ~
                </Link>
                /write
              </>
            ) : isLearnPage ? (
              <>
                <Link
                  to="/"
                  className="rounded hover:underline hover:opacity-90 transition-opacity"
                  aria-label="Home"
                >
                  ~
                </Link>
                /learn
              </>
            ) : isAboutPage ? (
              <>
                <Link
                  to="/"
                  className="rounded hover:underline hover:opacity-90 transition-opacity"
                  aria-label="Home"
                >
                  ~
                </Link>
                /about
              </>
            ) : (
              <>
                <Link
                  to="/"
                  className="rounded hover:opacity-90 transition-opacity"
                  aria-label="Home"
                >
                  ~
                </Link>
                /
              </>
            )}
          </div>

          <div className="flex items-center gap-6 ml-auto">
            {!isWritePage && (
              <Link
                to="/write"
                className="text-2xl font-mono font-bold hover:underline underline-offset-4 transition-all"
              >
                write
              </Link>
            )}
            {!isLearnPage && (
              <Link
                to="/learn"
                className="text-2xl font-mono font-bold hover:underline underline-offset-4 transition-all"
              >
                learn
              </Link>
            )}
            {!isAboutPage && (
              <Link
                to="/about"
                className="text-2xl font-mono font-bold hover:underline underline-offset-4 transition-all"
              >
                about
              </Link>
            )}
            {/* theme toggle */}
            <ModeToggle />
          </div>
        </nav>
      </div>
    </header>
  )
}
