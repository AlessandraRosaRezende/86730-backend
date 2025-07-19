require('dotenv').config()
const studentModel = require('./models/students.model');
const courseModel = require('./models/courses.model')
const mongoose = require('mongoose')

const environment = async () => {
  await mongoose.connect(process.env.MONGO_URI);

  // PASSO 1 - CRIAR UM USUÁRIO E UM CURSO PARA PODER FAZER A ASSOCIAÇÃO
  // await studentModel.create({
  //   first_name: 'Alê',
  //   last_name: 'Rosa',
  //   email: 'alessandra.teste@mail.com',
  //   gender: 'F',
  // });

  // const student = await studentModel.findOne({ first_name: 'Alê' })
  // console.log(student);

  // await courseModel.create({
  //   title: 'Curso de Backend com Node.js',
  //   description: 'Curso de Node.js para iniciantes',
  //   difficulty: 5,
  //   topics: ['Node.js', 'JavaScript', 'Template Engine', 'Express'],
  //   professor: 'Alessandra',
  // });

  // PASSO 2 - SÓ DEPOIS DE CRIAR O USUÁRIO E O CURSO, PODEMOS FAZER A ASSOCIAÇÃO
  // const course = await courseModel.findOne()
  // console.log(course);
  // const student = await studentModel.findOne({ first_name: 'Alê' })
  // const course = await courseModel.findOne()

  // student.courses.push({ course: course._id })

  // let result = await studentModel.updateOne({ _id: student._id}, student)
  // console.log(result);

  // result = await studentModel.findOne({ _id: student._id })
  // console.log(result);

  // PASSO 3 - POPULATE: DEPOIS QUE MOSTRAMOS O USUÁRIO, PODEMOS POPULAR O CAMPO 'COURSES.COURSE'
  // let student = await studentModel.findOne({ first_name: "Alê" });

  // result = await studentModel.find({ _id: student._id }).populate('courses.course');
  // // console.log(result);
  // console.log(JSON.stringify(result, null, 2));

  // PASSO 4: POPULATE COM O MÉTODO 'PRE' DO SCHEMA
  let student = await studentModel.find({ first_name: 'Alê' })
  console.log(JSON.stringify(student, null, 2));

  // let course = await courseModel.findOne()
  // console.log(JSON.stringify(course, null, 2));
}

environment();