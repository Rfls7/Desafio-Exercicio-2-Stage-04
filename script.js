let students = [
    {
        name: "Rafael",
        notaUm: 7.5,
        notaDois: 7.5
    },
    {
        name: "Gustavo",
        notaUm: 7.5,
        notaDois: 6.5
    },
    {
        name: "Felipe",
        notaUm: 6.5,
        notaDois: 5.5
    }
]

for (let index = 0; index <= 3; index++) {
    let media = (students[index].notaUm + students[index].notaDois) / 2
    if(media >= 7){
        alert(`A média do(a) aluno(a) ${students[index].name} é:${media}
        Parabéns, ${students[index].name}, você foi APROVADO no concurso! `)
    } else {
        alert(`A média do(a) aluno(a) ${students[index].name} é:${media}
        Não foi dessa vez, ${students[index].name}! Tente novamente!`)
    }   
}

