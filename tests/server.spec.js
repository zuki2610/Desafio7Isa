const request = require("supertest");
const server = require("../index");

describe("Operaciones CRUD de cafes", () => {
    /*1. Testea que la ruta GET /cafes devuelve un status code 200 y el tipo de dato recibido 
    es un arreglo con por lo menos 1 objeto.*/
    it("Devolviendo status 200", async () => {
        const response = await request(server)
            .get("/cafes")
            .send();
        const status = response.statusCode;
        const product = response.body;
        const total = product.length;

        expect(status).toBe(200);
        expect(product).toBeInstanceOf(Object);
        expect(total).toBeGreaterThan(0);
    })

    /*2. Comprueba que se obtiene un código 404 al intentar eliminar un café con un id que
    no existe */
    it("Obteniendo un 404", async () => {
        const jwt = "token";
        const idToDelete = "id";
        const response = await request(server)
            .delete(`/cafes/${idToDelete}`)
            .set("Authorization", jwt)
            .send();

        expect(response.statusCode).toBe(404);
    })

    /*3. Prueba que la ruta POST /cafes agrega un nuevo café y devuelve un código 201.*/
    it("Probando ruta POST", async () => {
        const cafe = { id: 5, nombre: "nuevo cafe" };
        const result = await request(server)
            .post("/cafes")
            .send(cafe);
        const status = result.statusCode;
        const cafes = result.body

        expect(cafes).toContainEqual(cafe);
        expect(status).toBe(201);
    })

    /*4. Prueba que la ruta PUT /cafes devuelve un status code 400 si intentas actualizar un
    café enviando un id en los parámetros que sea diferente al id dentro del payload.*/
    it('actualizando', async () => {
        const id = "1";
        const cafe = { id: 999, nombre: "Cortado" };
        const result = await request(server)
            .put(`/cafes/${id}`)
            .send(cafe);
        const status = result.statusCode;
        
        expect(status).toBe(400);
    })
});