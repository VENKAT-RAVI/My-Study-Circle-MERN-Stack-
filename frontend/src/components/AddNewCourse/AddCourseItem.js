import react, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import './AddCourseItem.scss';

const isAuthenticated = () => {
    if (typeof window == 'undefined') {
        return false;
    }

    if (localStorage.getItem('jwt')) {
        return JSON.parse(localStorage.getItem('jwt'));
    } else {
        return false;
    }
}


class AddCourseItem extends react.Component {


    constructor(props) {
        super(props);
        this.state = {
            // instructor:false
            name: '',
            description: '',
            category: '',
            redirect:false
        
        }
        // this.onChangeValue = this.onChangeValue.bind(this);
        // this.formSubmit = this.formSubmit(this);
        this.changeHandler = this.changeHandler.bind(this);

    }

    changeHandler = name => event => {
    
        this.setState({ [name]: event.target.value });
    };

    addNewCourse = (e) => {
        e.preventDefault();

        const instructor = isAuthenticated().user._id;
        const instructorName = isAuthenticated().user.name;
        const { name, description, category } = this.state;
        const course = {
            name,
            description,
            category,
            instructor,
            instructorName,
            
        };
        console.log(course);
        fetch(`http://localhost:9000/app/courses/`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(course),
        })
            .then(response => response.json())
            .then(data => {

                // this.state.redirect = true
                window.location.reload();
                console.log(data)
            })
            .catch(error => alert('Error posting data: ', error));
    }

    render() {
        const { name, description, category, redirect } = this.state;

        if(redirect){
            return <Redirect to="/courses"></Redirect>
        }

        return (
            <section className="section-CourseItem-container">
                <div className="section-CourseItem-box">
                    <div className="overlay">
                        {/* <button className="btn-text-add">Add Course</button> */}
                    </div>


                    <div className="flex-box1">
                    </div>
                    <div>
                        <div className="editable-AddCourse">
                            <form onSubmit={this.addNewCourse}>
                                <label for="name" className="label-name">
                                    <span className="content-name">CourseName</span>
                                </label>
                                <input type="text" name="name" value={name} required onChange={this.changeHandler("name")}></input>

                                <label for="desc" className="desc">
                                    <span className="content-desc">Description</span>
                                </label>
                                <input type="text" name="description" value={description} required onChange={this.changeHandler("description")}></input>

                                <label for="category" className="category">
                                    <span className="content-category">category</span>
                                </label>
                                <input type="text" name="category" value={category} required onChange={this.changeHandler("category")}></input>

                                <br></br>
                                <br></br>

                                <button className="btn-text-blue">Submit</button>

                            </form>
                        </div>
                    </div>

                </div>
            </section>
        )
    }
}
export default AddCourseItem;