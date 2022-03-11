
const fs = require('fs')

const addStudent = (id,name,grades,comment) =>{
    const students = loadStudent()
    const duplicateIds = students.filter((obj)=>{
        return obj.id === id
    })
    console.log(duplicateIds)
    if(duplicateIds.length == 0){
        students.push({
            id,
            name,
            grades,
            comment
        })
        saveStudents(students)
        console.log('Saved Successfully')
    }
    else{
        console.log('Error Duplicate ID')
    }
}

const loadStudent =  () =>{
    try{
        const dataBuffer = fs.readFileSync('students.json').toString
        return JSON.parse(dataBuffer)
    }
    catch{
        return []
    }
}

const saveStudents = (students) =>{
    const saveData = JSON.stringify(students)
    fs.writeFileSync('students.json',saveData)
}

/////////////////////////////////////////

const deleteStudent = (id) =>{
    const students = loadStudent()  
    const studentsToKeep = students.filter((obj)=>{
        return obj.id !== id
    })
    console.log(studentsToKeep)
    saveStudents(studentsToKeep)
    console.log('Deleted')

}

////////////////////////////////////////////////////////
const readStudent = (id)=>{
    const students = loadStudent()
    const studentToRead = students.find((obj)=>{
        return obj.id == id 
    })
    console.log(studentToRead)
    if(studentToRead){
        console.log(studentToRead.name)
    }
    else{
        console.log('not found')
    }
}

/////////////////////////////////////////////////////////////////
const listStudent = ()=>{
    const students  = loadStudent()
    students.forEach((el)=>{
        console.log(el.id,el.name,el.grades)
    })
}



module.exports = {
    addStudent,
    deleteStudent,
    readStudent,
    listStudent
}