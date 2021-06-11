import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from '.'

describe('<Button />', () => {
  test('It should the button with the text', () => {
    const fn = jest.fn()
    render(<Button text="Load more" onClick={fn} />)

    const button = screen.getByRole('button', { name: /load more/i })
    expect(button).toBeInTheDocument()
  })

  test('It should call function on button click', () => {
    const fn = jest.fn()
    render(<Button text="Load more" onClick={fn} />)

    const button = screen.getByRole('button', { name: /load more/i })
    userEvent.click(button)

    expect(fn).toHaveBeenCalledTimes(1)
  })

  test('It should be disabled when disabled is true', () => {
    render(<Button text="Load more" disabled={true} />)

    const button = screen.getByRole('button', { name: /load more/i })
    expect(button).toBeDisabled()
  })

  test('It should be enabled when disabled is false', () => {
    render(<Button text="Load more" disabled={false} />)

    const button = screen.getByRole('button', { name: /load more/i })
    expect(button).not.toBeDisabled()
  })

  test('should match snapshot', () => {
    const fn = jest.fn()
    const { container } = render(<Button text="Load more" disabled={false} onClick={fn} />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
