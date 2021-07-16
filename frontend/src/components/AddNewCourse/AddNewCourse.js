import react, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AddNewCourse.scss';

class AddCourse extends react.Component {

    render() {
        return (

            <section className="section-newCourse-container">
                <div className="section-newCourse-box">
                    <div className="section-newCourse-heading">
                        <h1 className="heading-secondary-newCourse">Manage Courses</h1>
                    </div>
                    <div className="flexButtons">
                        <Link to="/addNewCourseItem" className="btn-text-addCourse">Add Course</Link>
                        <Link to="/admin/delete" className="btn-text-addCourse">Delete Course</Link>
                        <Link to="/addNewCourseItem" className="btn-text-addCourse">update Course</Link>
                    </div>


                    
                </div>
            </section>

        )
    }
}

export default AddCourse;