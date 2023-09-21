export interface Question {
    //ist interface und keine klasse, da ich mit json sowieso keine Methoden speichern kann
    id: string,
    title: string,
    a1: string,
    a2: string,
    a3: string,
    a4: string,
    correct: number,
}