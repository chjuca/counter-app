import { getSaludo } from "../../base-pruebas/02-template-string"

describe("Pruebas 02-template-string", () => {
    test("getSaludo debe retornar Hola Carlos", () => {
        const name = 'Carlos'
        const message = getSaludo(name);

        expect(message).toBe(`Hola Carlos`)

    })
})