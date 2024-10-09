/*
Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- Crie uma **função** que irá calcular a média das notas de cada aluno;
- Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.
*/

const students = [
  {
    name: "Laura",
  },

  {
    name: "Gabriel",
    firstNote: 5,
    secondNote: 7,
  },

  {
    name: "Ivan",
    firstNote: 3,
    secondNote: 7,
  },
];

function checkStudents(students) {
  const passingScore = 7;

  students.forEach(student => {
    if (student.firstNote == null && student.secondNote == null) {
      alert(`Não será possível calcular a média do aluno: ${student.name}`)
      return
    } else if (student.firstNote == null || student.secondNote == null) {
      if (student.firstNote == null) {
        student.firstNote = 0
      } else {
        student.secondNote = 0
      }
    }
    const media = (student.firstNote + student.secondNote) / 2;
    if (media => passingScore) {
      alert(`Parabéns ${student.name} sua média final foi: ${media}. Aprovado!`)
    } else {
      alert(`${student.name} você foi reprovado, sua média final foi: ${media}`)
    }
  })
}

//Chamando a função

checkStudents(students)