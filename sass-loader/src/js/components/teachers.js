import Teacher from './teacher.js';
import React, {Component} from 'react';
import '../../css/teachers.scss';

class Teachers extends Component{
    render(){
        return(
            <ul className="Teachers">
                {this.props.data.teachers.map((data)=>{
                    <Teacher {...data}/>
                })}
            </ul>
        )
    }
}

export default Teachers;