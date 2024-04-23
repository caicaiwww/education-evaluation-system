import axios from 'axios'

const BASE_URL = 'http://172.20.13.12:8082';

export const fetchStudents = async (classId, week) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/integral-statictis/class/${classId}/week/${week}`);
    console.log(response.data.code);

    const data = response.data.result.data[0]; 

    const students = data.items.map(student => ({
      studentId: student.studentId,
      id: student.id,
      name: student.name,
      scores: student.scores,
      subjectScores: student.scores.map((score, index) => ({
        subject: data.cols[index],
        score: score
      }))
    }));

    return students;
  } catch (error) {
    console.error('Error fetching students:', error);
    throw error;
  }
};
