import { CustomTabs } from "@components/form"
import { StudentAttendance } from "./Partials/StudentAttendance"
import { TeacherAttendance } from "./Partials/TeacherAttendance"


export const AttendanceTabs = () =>{
    const items = [
        {
            key : "1",
            label : "Student Attendance",
            children : <StudentAttendance />

            
        },
         {
            key : "2",
             label : "Teacher Attendance",
             children : <TeacherAttendance />
        }
    ]
    return(
        <div>
            <CustomTabs items={items}/>
        </div>
    )
}