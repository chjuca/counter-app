import { getHeroeByIdAsync } from "../../base-pruebas/09.promises"

describe('Pruebas en 09-promises', () => {
    test('getHeroeByIdAsync debe retornar heroe', (done) => {
        const id = 1

        getHeroeByIdAsync(id).then(hero => {
            expect(hero).toEqual(
                {
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                }
            )
            done();
        })
    })

    test('getHeroeByIdAsync debe retornar un error', (done) => {
        const id = 100

        getHeroeByIdAsync(id).catch(error => {
            expect(error).toBe("No heroe" + id)
            done();
        })
    })
})