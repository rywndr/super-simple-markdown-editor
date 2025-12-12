import { Link, useLocation } from '@tanstack/react-router'
import { ModeToggle } from './mode-toggle'

export default function Header() {
  const location = useLocation()
  const isWritePage = location.pathname === '/write'

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
                <span>/write</span>
              </>
            ) : (
              <Link
                to="/"
                className="rounded hover:opacity-90 transition-opacity"
                aria-label="Home"
              >
                ~
              </Link>
            )}
          </div>

          {!isWritePage && (
            <ul className="flex items-center gap-6 flex-1">
              <li>
                <Link
                  to="/write"
                  className="text-lg font-bold hover:underline underline-offset-4 transition-all"
                >
                  Start Writing
                </Link>
              </li>
            </ul>
          )}

          {/* theme toggle */}
          <div className="ml-auto">
            <ModeToggle />
          </div>
        </nav>
      </div>
    </header>
  )
}
