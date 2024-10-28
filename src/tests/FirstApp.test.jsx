import { getByText, render } from "@testing-library/react"
import FirstApp from "../FirstApp"

describe("Test <FirstApp/>", () =>{
    test('Should match snapshot', () => {

        const title = "Hola, soy Carlos"
        const {container, getByText, getByTestId} = render(<FirstApp title={title}/>)
        expect (container).toMatchSnapshot()
        expect(getByText(title)).toBeTruthy()

        // const h1 = container.querySelector('h1')
        // expect(h1.innerHTML).toBe(title)


        expect(getByTestId("test-title").innerHTML).toContain(title)

    })

    test("Show subtitle send by props", () => {
        
        const title = "Hola, soy Carlos"
        const subtitle = "soy un subtitulo"
        const {getAllByText} = render(
        <FirstApp 
            title={title}
            subTitle={subtitle}
        />
        )

        expect(getAllByText(subtitle).length).toBe(2)
    })
})