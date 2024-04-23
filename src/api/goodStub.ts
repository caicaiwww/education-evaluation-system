import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:4523/mock2/753352/14686858';

export const fetchStudents = async (classId: string, week: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/integral-statictis/class/${classId}/week/${week}`);
    const data = response.data.result.data;

    const sortedStudents = data.flatMap((item: any) => item.items)
      .map((student: any) => ({
        ...student,
        totalScore: student.scores.reduce((acc: number, score: number) => acc + score, 0),
        subjectScores: data[0].cols.map((subject: string, index: number) => ({
          subject: subject,
          score: student.scores[index]
        }))
      }))
      .sort((a: any, b: any) => b.totalScore - a.totalScore);

    return sortedStudents;
  } catch (error) {
    console.error('Error fetching students:', error);
    throw error;
  }
};
export async function getGradeAndClassData() {
  try {
    const response = await axios.get('http://172.20.13.12:8082/api/class/teachClasses');
    const data = response.data.result.data;

    // 将数据处理成适合使用的格式
    const gradeAndClassData = data.map(item => ({
      grade: item.gradeName,
      class: item.className
    }));
    console.log(gradeAndClassData); // 添加这行来检查数据

    return gradeAndClassData;
  } catch (error) {
    console.error('Error fetching grade and class data:', error);
    return []; // 返回空数组表示获取失败
  }
}
