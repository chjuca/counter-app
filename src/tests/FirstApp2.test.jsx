import { render, screen } from "@testing-library/react"
import FirstApp from "../FirstApp"

describe("Test <FirstApp/>", () =>{

    const title = "Hola, soy Carlos"
    const subTitle = "soy un subtitulo"

    test('Should match snapshot', () => {

        const {container} = render(<FirstApp title={title}/>)
        expect (container).toMatchSnapshot()
    })


    test('Should match screen title', () => {

        render(<FirstApp title={title}/>)
        expect (screen.getByText(title)).toBeTruthy()
    })

    test('Should show title in h1', () => {

        render(<FirstApp title={title}/>)
        expect (screen.getByRole('heading', {level: 1}).innerHTML).toContain(title)
    })

    test('Should show subtitle send in props', () => {

        render(<FirstApp title={title} subTitle={subTitle}/>)
        expect (screen.getAllByText(subTitle).length).toBe(2)
    })


})