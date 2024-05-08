import { useState } from "react"
import useCourseStore from "../app/store"


const CourseForm = () => {

    const addCourse = useCourseStore((state) => state.addCourse)

    const [courseTitle, setCourseTitle] = useState("")

  return (
    <div>CourseForm</div>
  )
}

export default CourseForm