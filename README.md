Las pruebas se dividen en cuatro escenarios diferentes, cada uno de ellos prueba un aspecto específico de las operaciones CRUD de cafés:

  1. Obtener cafés:

     * Prueba que la ruta GET /cafes devuelve un código de estado 200 y un arreglo con al menos un objeto de café.

  2. Eliminar café inexistente:

     * Comprueba que se obtiene un código de estado 404 al intentar eliminar un café con un ID que no existe.

  4. Agregar nuevo café:

     * Prueba que la ruta POST /cafes agrega un nuevo café y devuelve un código de estado 201.

  5. Actualizar café:

     * Prueba que la ruta PUT /cafes devuelve un código de estado 400 si se intenta actualizar un café enviando un ID en los parámetros que sea diferente al ID dentro del payload.
