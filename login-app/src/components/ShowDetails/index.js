import React, { Component } from "react";
import { connect } from "react-redux";
import { Table}  from "react-bootstrap";
import userData from "../../constants/UserData";
class ShowDetails extends React.Component {

    renderUserData = (data) => {
        // let aqiColor = this.state.aqiColor || "#000000";
        return data.map((key, index) => {
            return (
                <tr style={{padding:60}}> 
                    <td style={{padding:10}}>
                      {key.id}
                    </td>
                    <td>
                      {key.name}
                    </td>
                    <td>
                      {key.age}
                    </td>
                    <td>
                      {key.gender}
                    </td>
                    <td>
                      {key.email}
                    </td>
                    <td>
                      {key.phoneNo}
                    </td>
                </tr>
            )
        })
    }

    render() {
        let data = this.props.userDetails.user || userData.user;
        return (
            <div style={{marginTop: 100, padding:40}}>
                <h3 style={{display:"flex", justifyContent:"center", padding: 30}}>Employee Details</h3>
                <Table striped bordered hover>
                <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Email</th>
                            <th>Phone No</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.renderUserData(data)}
                    </tbody>
                   
                </Table>
                </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        userDetails: state.userDetails
    }
};

export default connect(mapStateToProps, null)(ShowDetails);