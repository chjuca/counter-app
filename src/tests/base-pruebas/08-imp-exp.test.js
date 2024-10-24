import { getHeroeByID } from "../../base-pruebas/08-imp-exp";

describe("Pruebas 08-imp-exp", () => {

    test("getHeroeByID debe retornar un heroe", () => {

        const id = 1;
        const hero = getHeroeByID(id)

        expect(hero).toEqual(
            {
                id: 1,
                name: 'Batman',
                owner: 'DC'
            }
        )

    })


    test("getHeroeByID debe retornar undefined", () => {

        const id = 100;
        const hero = getHeroeByID(id)

        expect(hero).toEqual(undefined)

    })
})