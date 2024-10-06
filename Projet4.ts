
let matrice1: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];

let matrice2: number[][] = [
    [0, 0, 0],
    [0, 0, 1],
    [0, 0, 0]
  ];
function addition(m1: number[][], m2: number[][]): number[][] {
    
    let matriceaddition:number[][]=[];
    
    for (let i=0; i< m1.length; i++){
        matriceaddition[i]=[];
        for (let j=0; j< m1[i].length; j++ )
            matriceaddition[i][j]=m1[i][j]+m2[i][j]
    }
    return matriceaddition;

}

function multiplication(m1: number[][], m2: number[][]): number[][] {
    let rows1 = m1.length;          
    let cols1 = m1[0].length;       
    let rows2 = m2.length;          
    let cols2 = m2[0].length;       

    let matricemult: number[][] = [];

    for (let i = 0; i < rows1; i++) {
        matricemult[i] = [];
        for (let j = 0; j < cols2; j++) {
            matricemult[i][j] = 0;  
            for (let k = 0; k < cols1; k++) {
                matricemult[i][j] += m1[i][k] * m2[k][j];
            }
        }
    }

    return matricemult;
}

console.log(addition(matrice1,matrice2))
console.log(multiplication(matrice1,matrice2))
