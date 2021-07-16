import react, { useEffect, useState } from 'react';
import {userEffect} from 'react';
import './CourseDetails.scss';
// import MyProfileEditForm from './MyProfileEditForm'


// class CourseDetails extends react.Component {

//     constructor(props) {

//         super(props);
//         this.state = {
//             courseData: []
//         }
//     }

//     componentWillMount() {
//         console.log("Mathc is" + this.props.match);
//         fetch(`http://localhost:9000/app/courses/${this.props.match.params.courseId}`)
//             .then(response => response.json())
//             .then(data => {
//                 // storing todo data from API to the state variable
//                 console.log(data);
//                 this.setState({
//                     courseData: data
            
//                 })
//             })
//     }
//     render() {


//         return (

//             <section className="section-Course-container">
//                 <div className="section-Course-box">
//                     <div className="section-Course-heading">
//                         <h1 className="heading-secondary-Course">{this.state.courseData.name}</h1>
//                     </div>
//                     <div className="section-Course-editable">
//                         <p className="para">Professor</p>
//                         <p className="para">jadfkalsdjfklj</p>
//                     </div>
//                     <br></br>
//                     <p className="para">Students Enrolled</p>

//                     {/* {Render lessons of that course over here} */}
//                 </div>
//             </section>

//         )
//     }
// }

function CourseDetails({match}){
    useEffect(()=>{
        fetchCourse();
        console.log(match);
    }, []);

    const [course, setCourse] = useState({});

    const fetchCourse = async() =>{
        const fetchCourse = await fetch(`http://localhost:9000/app/courses/${match.params.courseId}`);
        const course = await fetchCourse.json();
        console.log(course);
        setCourse(course);
    }

    return(
        <section className="section-Course-container">
                 <div className="section-Course-box">
                    <div className="section-Course-heading">
                         <h1 className="heading-secondary-Course">{course.name}</h1>
                     </div>
                     <div className="section-Course-editable">
                         <p className="para">{course.instructorName}</p>
                         <p className="para">jadfkalsdjfklj</p>
                     </div>
                     <br></br>

                     {/* {Render lessons of that course over here} */}
                 </div>
             </section>

    )
}

export default CourseDetails;