// Réaliser c'est test dans ce fichier avec la vérification de jest pour les hooks 

function sum(a, b) {
  return a + b;
}

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});