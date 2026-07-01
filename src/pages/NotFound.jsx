import { Link } from 'react-router-dom'
import Container from '../components/Container'
import Button from '../components/Button'

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <p className="text-sm font-medium uppercase tracking-wider text-primary">404</p>
      <h1 className="mt-3 text-3xl font-semibold text-text sm:text-4xl">Page not found</h1>
      <p className="mt-4 max-w-md text-base text-muted">
        The page you are looking for does not exist or may have been moved.
      </p>
      <Button as={Link} to="/" variant="primary" size="md" className="mt-8">
        Back to Home
      </Button>
    </Container>
  )
}
