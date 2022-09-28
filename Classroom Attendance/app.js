function getStudents(classroom) {
    const { hasTeachingAssistant, classList } = classroom;
    let teacher, assistant, students

    if (hasTeachingAssistant === true) {
        [teacher, assistant, ...students] = classList;
        return students;
    } else {
        [teacher, ...students] = classList;
        return students;
    }
}

classroom1 = {
    hasTeachingAssistant: true,
    classList: ["Rashida", "John", "Roman", "Lisa", "Omar", "Lukas"]
}

classroom2 = {
    hasTeachingAssistant: false,
    classList: ["Rashida", "John", "Roman", "Lisa", "Omar", "Lukas"]
}