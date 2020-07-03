type A = {
    num : number;
}

type B = {
    text : string;
}

type C = A & B;

let c : C = {num:2 , text : "t"}