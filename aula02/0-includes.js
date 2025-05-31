require('colorized-console');
// exponecial
                 0
// let valorBase = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let novosValores = valorBase.map((indice, valor) => {
//   console.log(valor, indice, valor ** indice);
//   return indice ** valor;
//   // valor.pow(indice);
// });

// console.log(5 ** 10);

// const abc = (e, i) => e +i

// console.log(abc(9, 2));


// Includes
const restrictedValues = ["desativado", "NA", "cartao", "xablau"];

const ApprovedBrand = ["Adidas", "Nike"];

const productList = [
  { id: 1, nome: "Tenis", marca: "Adidas", categoria: "NA" },
  { id: 2, nome: "Tenis", marca: "Nike", categoria: "corrida" },
  { id: 3, nome: "Tenis", marca: "Puma", categoria: "NA" },
  { id: 1, nome: "Camiseta", marca: "Fila", categoria: "Manga Curta" },
];

const productBrand = ["Nike", "Adidas", "Puma", "Fila"];
console.log(productList.includes("Nike")); 

const marca = "Nike";
console.log(productBrand.includes(marca));

//const xablau = ApprovedBrand.includes(marca) // true
const approved = [];
productList.forEach((produto) => {
  const xablau = ApprovedBrand.includes(produto.marca);
  console.log(xablau, produto.marca);
  if (xablau === true) {
    approved.push(produto);
  }
});

const produtsAprroveds = productList.filter((produto) =>  !ApprovedBrand.includes(produto.marca)); // a ! nega o includes

console.log(approved);
console.log(produtsAprroveds)

