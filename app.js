
const yargs = require('yargs')
const students = require('./students')

yargs.command({
    command: 'add',
    describe:'Add a Student',
    builder: {
        id: {
            describe:'This is Student ID',
            demandOption: true,
            type : 'number' ,
        },
        name:{
            describe:'This is Student Name',
            demandOption: true,
            type : 'string' ,
        },
        comment:{
            describe:'This is Comment',
            type : 'string' ,
        },
        grades:{
            describe:'This is grades of student',
            type : 'array' ,
            demandOption: true,
        },
    },
    handler: (x)=> {
        students.addStudent(x.id,x.name,x.grades,x.comment)

    }

})

//////////////////////////////////////////////////////////////////////////////

yargs.command({
    command: 'delete',
    describe: 'Delete student',
    builder: {
        id: {
            describe:'This is Student ID',
            demandOption: true,
            type : 'number' ,
        },
    },
    handler: (x)=> {
        students.deleteStudent(x.id)

    }
})
/////////////////////////////////////

yargs.command({
    command: 'read',
    describe: 'Read Student',
    builder: {
        id: {
            describe:'This is Student ID',
            demandOption: true,
            type : 'number' ,
        },
    },
    handler: (x)=> {
        students.readStudent(x.id)

    }
})

///////////////////////////////////////////////////////////////////

yargs.command({
    command: 'list',
    describe: 'list Student',
    handler: ()=>{
        students.listStudent(x.id)
    }
})




yargs.parse()
