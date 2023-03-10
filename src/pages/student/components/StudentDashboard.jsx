import React from 'react'
import { Link } from 'react-router-dom';
import Progress from '../../../components/student/Progress'
import useFetch from '../../../hooks/useFetch';
import TaskList from './TaskList';

const StudentDashboard = () => {
    const { data: tasks } = useFetch("http://localhost:8000/tasks")
    let [month, date, year] = new Date().toLocaleDateString("en-US").split("/");
    let weekday= ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    let monthName= ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    let day= new Date().getDay()
    const five = [1,1,1,1,1]
    console.log(day)
  return (
    <> 
      <h1 className='font-medium text-2xl'>Dashboard</h1>
      <div className="grid lg:grid-cols-5 gap-4 mt-5">
        <div className="col-span-3">
          <Progress 
            title="Learning Progress"
            trackWeek="UX Design - Week 4"
            percentage="33%"
            pointsOverall="Points - Overall"  
            point="160 / 200"
            stagesCompleted="Stages Completed"
            stage="3 / 8"
          />
        </div>

        <div className="bg-white p-4 col-span-2 rounded-xl">
          <div className="top flex justify-between items-center">
            <h1>Calendar</h1>
            <Link to={'/student/calender'}>
            <div className="text-sm flex items-center space-x-2 px-3 text-blue-ribbon-500 py-1 border border-blue-ribbon-500 rounded-lg"> 
              <p>{monthName[month-1]}</p>
              <i class="fa-solid fa-calendar-days"></i>
            </div>
            </Link>
          </div>
          <div className="grid grid-cols-5 gap-1 mt-6 relative">
            {
              five.map(item=>{
                return (
                  <>
                  <div className={`col text-center border shadow-lg py-2 rounded-lg`}>
                    <p className='mb-2'>{weekday[day===7?day=0:day++]}</p>
                    <p>{date++}</p>
                  </div>
                  </>
                  
                )
              })
            }
            <Link to={'/student/calender'}><i class="fa-solid fa-angle-left absolute top-7"></i></Link>
            <Link to={'/student/calender'}><i class="fa-solid fa-angle-right absolute right-0 top-7"></i></Link>
          </div>
          <ul className='flex justify-between items-center mt-8'>
            <li className='text-sm flex items-center'>
              <div className="w-4 h-4 bg-[#CFD343] rounded-full mr-1"></div>
              Task</li>
            <li className='text-sm flex items-center'>
            <div className="w-4 h-4 bg-blue-ribbon-500 rounded-full mr-1"></div>
              Class</li>
            <li className='text-sm flex items-center'>
            <div className="w-4 h-4 bg-[#80DEAA] rounded-full mr-1"></div>
              Meeting</li>
          </ul>
        </div>
      </div>

      <div className="bg-white mt-6 rounded-xl">
        <h1 className='text-lg pt-4 px-4'>Recent Task</h1>
        {tasks && <TaskList tasks={tasks} />}
      </div>
    </>
  )
}

export default StudentDashboard