const references = require('../api/references');

describe("Criação de pessoas", () => {

  it("Chamando a função sem passar parâmetros", () => {
    expect(references.people.createPerson()).toStrictEqual(new Error("People must be an object!"));
  })

  it("Passando objeto com 2 propriedades", () => {
    const newPerson = {
      "name": "leo",
      "cpf": 12345
    }

    const createdPerson = references.people.createPerson(newPerson);
    expect(typeof createdPerson).toStrictEqual("object")

    expect(createdPerson).toStrictEqual({
      ...newPerson,
      id: expect.any(Number)
    })

  })

})