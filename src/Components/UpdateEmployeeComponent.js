import React from 'react';
import PropTypes from 'prop-types';
import EmployeeService from '../services/EmployeeService';

class UpdateEmployeeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id:this.props.match.parama.id,
            firstName:'',
            lastName:'',
            emailid:''
        }
        this.changeFirstNameHandler=this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler=this.changeLastNameHandler.bind(this);
        this.updateEmployee=this.updateEmployee.bind(this);
    }
    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then((res)=>{
            let employee=res.data;
            this.setState({firstName:employee.firstName,
            lastName:employee.lastName,
        emailid:employee.emailid});
        });
    }
    updateEmployee=(e)=>
    {
        e.preventDefault();
        let employee={firstName:this.state.firstName,lastName:this.state.lastName,
        emailid:this.state.emailid};
        console.log('employee => ' + JSON.stringify(employee));
        
    }
    changeFirstNameHandler=(event)=>{
        this.setState({firstName:event.target.value});
    }
    changeLastNameHandler=(event)=>{
        this.setState({lastName:event.target.value});
    }
    changeemailidHandler=(event)=>{
        this.setState({emailid:event.target.value});
    }
    cancel()
    {
        this.props.history.push('/add-employee');
    }
    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                            <h3 className='text-left'>Add Employee</h3>
                            <div className='card-body'>
                                <form>
                                    <div className='form-group'>
                                        <label>First Name : </label>
                                        <input placeholder='First Name' name='firstName'
                                        className="form-control" value={this.state.firstName} onChange={this.changeFirstNameHandler}/>

                                    </div>
                                    <div className='form-group'>
                                        <label>First Name : </label>
                                        <input placeholder='Last Name' name='lastName'
                                        className="form-control" value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                            

                                    </div>
                                    <div className='form-group'>
                                        <label>Email id : </label>
                                        <input placeholder='Email Id' name='emailid'
                                        className="form-control" value={this.state.emailid} onChange={this.changeemailidHandler}/>
                                    </div>
                                    <button className='btn btn-success' onClick={this.updateEmployee}>Save</button>
                                    <button className='btn btn-danger' onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>

                                    
                                    
                                    

                                </form>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        );
    }
}

UpdateEmployeeComponent.propTypes = {};

export default UpdateEmployeeComponent;
