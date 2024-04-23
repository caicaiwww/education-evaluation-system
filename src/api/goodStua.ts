import axios from 'axios';

async function getGradeAndClassData() {
  try {
    const response = await axios.get('http://172.20.13.12:8082/api/class/teachClasses');
    const data = response.data.result.data;
    
    // 将数据处理成适合使用的格式
    const gradeAndClassData = data.map(item => ({
      grade: item.gradeName,
      className: item.className,
      classId: item.classId
    }));

    return gradeAndClassData;
  } catch (error) {
    console.error('Error fetching grade and class data:', error);
    return []; // 返回空数组表示获取失败
  }
}

async function getGradeClassScoreRanking(classId) {
  try {
    const response = await axios.get(`http://172.20.13.12:8082/api/integral-statictis/class/${classId}/week/1?target=subject&pindex&number`);
    const data = response.data.result.data;
    // 在这里处理返回的成绩排行榜数据
    return data;
  } catch (error) {
    console.error('Error fetching grade class score ranking:', error);
    return []; // 返回空数组表示获取失败
  }
}

// 使用示例
(async () => {
  const gradeAndClassData = await getGradeAndClassData();
  console.log('Grade and class data:', gradeAndClassData);
  
  // 假设我们想要获取第一个班级的成绩排行榜
  if (gradeAndClassData.length > 0) {
    const firstClassId = gradeAndClassData[0].classId;
    const scoreRanking = await getGradeClassScoreRanking(firstClassId);
    console.log('Score ranking for the first class:', scoreRanking);
  }
})();
