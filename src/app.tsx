import { MetaProvider, Title } from '@solidjs/meta'
import { Route, Router } from '@solidjs/router'
import { createSignal, Suspense } from 'solid-js'
import Home from './routes'
import Day, { filters as dayFilters } from './routes/day'
import NotFound from './routes/[...404]'
import './reset.css'
import './app.css'
import Navigation from './components/Navigation'

export default function App() {
  const [menuOpen, setMenuOpen] = createSignal(false)
  return (
    <Router
      root={(props) => (
        <MetaProvider>
          <Title>Advent of Code 2025</Title>
          <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <main id='main-content' class='main' aria-disabled={menuOpen()}>
            <Suspense>{props.children}</Suspense>
          </main>
        </MetaProvider>
      )}
    >
      <Route path='/' component={Home} />
      <Route path='/day/:id' component={Day} matchFilters={dayFilters} />
      <Route path='*404' component={NotFound} />
    </Router>
  )
}
