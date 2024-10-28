import { fireEvent, render, screen } from "@testing-library/react"
import CounterApp from "../CounterApp"

describe("Test <CounterApp/>", () =>{

    const value = 100

    test('Should match snapshot', () => {
        const {container} = render(<CounterApp value = {value}/>)
        expect (container).toMatchSnapshot()
    })

    test('should show initial value 100', () => {
        render(<CounterApp value={value}/>)
        expect (screen.getByRole('paragraph').innerHTML).toContain('100')
    })

    test('should increment with button +1', () => {
        render(<CounterApp value={value}/>)
        fireEvent.click(screen.getByText('+1'))
        expect (screen.getByRole('paragraph').innerHTML).toContain('101')
    })

    test('should decrement with button -1', () => {
        render(<CounterApp value={value}/>)
        fireEvent.click(screen.getByText('-1'))
        expect (screen.getByRole('paragraph').innerHTML).toContain('99')
    })

    test('should reset', () => {
        render(<CounterApp value={value}/>)
        fireEvent.click(screen.getByText('-1'))
        fireEvent.click(screen.getByText('+1'))
        fireEvent.click(screen.getByText('+1'))
        fireEvent.click(screen.getByText('+1'))
        fireEvent.click(screen.getByText('+1'))
        fireEvent.click(screen.getByRole('button', {name: "btn-increment"}))
        fireEvent.click(screen.getByText('Reset'))
        expect (screen.getByRole('paragraph').innerHTML).toContain('100')
    })


})