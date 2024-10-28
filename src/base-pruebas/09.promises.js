import { getHeroeByID } from "./08-imp-exp";


export const getHeroeByIdAsync = (id) => {
   
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const p1 = getHeroeByID(id);
            p1 ? resolve(p1) : reject ('No heroe' + id)
        }, 2000)
    })
}