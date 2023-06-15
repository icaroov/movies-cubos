'use client'

type ErrorPageProps = {
  error: Error
  reset: () => void
}

const Error = ({ error, reset }: ErrorPageProps) => {
  return (
    <div className='errorContainer'>
      <h1>Oops!</h1>
      <p>{error.message}</p>
      <button className='errorButton' onClick={() => reset()}>
        Tentar novamente
      </button>
    </div>
  )
}

export default Error
