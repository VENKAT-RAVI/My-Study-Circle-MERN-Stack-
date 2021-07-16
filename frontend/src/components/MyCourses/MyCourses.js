import react, {useState} from 'react';
import './MyCourses.scss';
import  data from './MyCourseData';

class MyCourses extends react.Component {
    constructor() {
        super();
        // CREATE A STATE VARIABLE TO STORE ALL COURSES ENROLLED
        this.state = {
            MyCoursesData: data
        }
        // binding the handle change function with class to callback without worrying about the context when we pass it
        // this.handleChange = this.handleChange.bind(this);
    }

    // invokes when we laod the component
    // componentWillUnmount() {
    //     // fetch data from database from API
    //     fetch("")
    //     .this(response => response.json())
    //     .then(data => {
    //         // Storing fetch ApI to the state variable
    //         this.setState({
    //             MyCoursesData: data
    //         })
    //     })
    // }

    // handleChange(id){
    //     this.setState(prevState => {
    //         const updatedCourses = prevState.MyCoursesData.map(MyCourses => {

    //             // inverts if the course is not hidden
    //             if(MyCourses._id == id) {
    //                 MyCourses.hidden =  !MyCourses.hidden;
                    
    //                 // fetch method to update in the database
    //                 fetch('' + MyCourses._id, {
    //                     method: 'PUT',
    //                     headers: {
    //                     'Content-Type': 'application/json',
    //                     },
    //                     body: JSON.stringify(MyCourses),
    //                 })
    //                     .then(response => response.json())
    //                     .then(data => {
    //                         window.location.reload();
                    
    //                     })
    //                     .catch(error => alert('Error posting data: ', error));
    //             }
    //             return MyCourses;
    //         })
    //         return {
    //             MyCourses: updatedCourses
    //         }
    //     })
    // }

// Render all the components
render() {
    const MyCoursesComponents = this.state.MyCoursesData.map(MyCourses => <MyCourses key={MyCourses._id} MyCourses={MyCourses} handleChange={this.handleChange} />)
    return(
        <div>
            <div>
                {MyCoursesComponents}
            </div>
        </div>
    )

    }
}

export default MyCourses;