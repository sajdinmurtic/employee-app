import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';


class CreateEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            department: '',
            emailId: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeDepartmentHandler = this.changeDepartmentHandler.bind(this);
        this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);
    }

    
    componentDidMount(){

    
        if(this.state.id === '_add'){
            return
        }else{
            EmployeeService.getEmployeeById(this.state.id).then( (res) =>{
                let employee = res.data;
                this.setState({firstName: employee.firstName,
                    lastName: employee.lastName,
                    department: employee.department,
                    emailId : employee.emailId
                });
            });
        }        
    }
    saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        let employee = {firstName: this.state.firstName, lastName: this.state.lastName, department: this.state.department,emailId: this.state.emailId};
        console.log('employee => ' + JSON.stringify(employee));

        
        if(this.state.id === '_add'){
            EmployeeService.createEmployee(employee).then(res =>{
                this.props.history.push('/employees');
            });
        }else{
            EmployeeService.updateEmployee(employee, this.state.id).then( res => {
                this.props.history.push('/employees');
            });
        }
    }
    
    changeFirstNameHandler= (event) => {
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler= (event) => {
        this.setState({lastName: event.target.value});
    }
    changeDepartmentHandler=(event)=> {
    this.setState({department: event.target.value});
    }
    changeEmailHandler= (event) => {
        this.setState({emailId: event.target.value});
    }

    cancel(){
        this.props.history.push('/employees');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 class="text-center">Add Employee</h3>
        }else{
            return <h3 class="text-center">Update Employee</h3>
        }
    }
    render() {
        return (
            <div>

                                {
                                    this.getTitle()
                                }
                                

                                <form class="ui form">
                                    <div class="field">
                                        <label>First Name</label>
                                        <input type="text" placeholder="First name"
                                        value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                        <div class="ui pointing label">Please enter a value</div>                             
                                    
                            </div>
                                       

                                                
                                        
                                        <div class = "field">
                                            <label> Last Name </label>
                                            <input type="text" name="lastName"
                                                value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                       <div class="ui pointing label">Please enter a value</div>
                                        </div>
                                        
                                        
                                        <div class= "field">
                                            <label> Department </label>
                                            <input type="text" name="department" 
                                                value={this.state.department} onChange={this.changeDepartmentHandler}/>
                                               <div class="ui pointing label">Please enter a value</div> 
                                        </div>
                                        

                                        <div class = "field">
                                            <label> Email Id </label>
                                            <input type="text" name="emailId"  
                                                value={this.state.emailId} onChange={this.changeEmailHandler}/>
                                                <div class="ui pointing label">Please enter a value</div>
                                        </div>
                                         
                                        <div class="ui buttons">
                                        <button class="ui positive button" onClick={this.saveOrUpdateEmployee}>Save</button>
                                        <div class="or"></div><button class="ui  button" onClick={this.cancel.bind(this)}>Cancel</button>
                                        </div>
                                        
                                    </form>
                                </div>
                                
                              
                    

                   
            
        )
    }
}

export default CreateEmployeeComponent;