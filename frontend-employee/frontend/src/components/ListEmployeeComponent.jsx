  
import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'

class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                employees: []
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    deleteEmployee(id){
        EmployeeService.deleteEmployee(id).then( res => {
            this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
        });
    }
    viewEmployee(id){
        this.props.history.push(`/view-employee/${id}`);
    }
    updateEmployee(id){
        this.props.history.push(`/add-employee/${id}`);
    }

    componentDidMount(){
        EmployeeService.getEmployees().then((res) => {
            this.setState({ employees: res.data});
        });
    }

    addEmployee(){
        this.props.history.push('/add-employee/_add');
    }
    
    // eslint-disable-next-line no-dupe-class-members
    updateEmployee(){
        this.props.history.push('/update-employee/_update');
    }



    render() {
        return (
            <div>
               
                 <button class="ui fluid green button" onClick={this.addEmployee}> Add Employee </button>
                 
                 
                 

                 
                 
                    <button class="ui fluid yellow button" onClick={this.updateEmployee}> Update Employee</button>
                 
                 <br></br>
                 <h2 class="text-center">Employees List</h2>
                 
                
                 
                        <table class = "ui celled table">

                            <thead class="">
                                <tr class="">
                                    <th class=""> Employee First Name</th>
                                    <th class=""> Employee Last Name</th>
                                    <th class=""> Department</th> 
                                    <th class=""> Employee Email Id</th>
                                    <th class=""> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.employees.map(
                                        employee => 
                                        <tr key = {employee.id}>
                                             <td> { employee.firstName} </td>   
                                             <td> {employee.lastName}</td>
                                             <td> {employee.department}</td>
                                             <td> {employee.emailId}</td>
                                             <td>
                                                 <button onClick={ () => this.updateEmployee(employee.id)} class="ui button">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteEmployee(employee.id)} class="ui button">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewEmployee(employee.id)} class="ui button">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

        
        )
    }
}

export default ListEmployeeComponent