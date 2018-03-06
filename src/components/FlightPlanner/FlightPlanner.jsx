import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './FlightPlanner.css';
import SideNavBar from '../../components/SideNavBar/SideNavBar'
import {Row, 
        Input,
        Modal,
        Button
    } from 'react-materialize'


class FlightPlanner  extends Component {
    constructor() {
        super();
        this.state = {
            aircraft: 'SLG2',
            tailNumber: 'N166TW-SLG2',
            departure: '',
            destination: '',
            date: null,
            time: 0,
            altitude: 0,
            dayTakeoff: false,
            dayLanding: false,
            nightTakeoff: false,
            nightLanding: false,
            coPilot: '',
        };

    }

    updateField = (field, e) => {
        this.setState({
            [field]: e.target.value
        });
    }


    onClickDayTakeoff = () => {
        this.setState({
            dayTakeoff: !this.state.dayTakeoff}, () => {
        if (this.state.dayTakeoff === false) {
            console.log('false')
        } else if (this.state.dayTakeoff === true) {
            console.log('true')
          }
        })
    }

    onClickDayLanding = () => {
        this.setState({
            dayLanding: !this.state.dayLanding}, () => {
        if (this.state.dayLanding === false) {
            console.log('false')
        } else if (this.state.dayLanding === true) {
            console.log('true')
          }
        })
    }

    onClickNightTakeoff = () => {
        this.setState({
            nightTakeoff: !this.state.nightTakeoff}, () => {
        if (this.state.nightTakeoff === false) {
            console.log('false')
        } else if (this.state.nightTakeoff === true) {
            console.log('true')
          }
        })
    }

    onClickNightLanding = () => {
        this.setState({
            nightLanding: !this.state.nightLanding}, () => {
        if (this.state.nightLanding === false) {
            console.log('false')
        } else if (this.state.nightLanding === true) {
            console.log('true')
          }
        })
    }

    render() {
        return (
            <div>
            <SideNavBar handleLogout={this.handleLogout}/>
                <h3>Flight Plan</h3>
                <form action="#" className='formContainer'>
                    <div className='column'>
                        <div>
                            <Row>
                                <Input s={6} onChange={(e) => this.updateField('aircraft', e)} type='select' label='Select Aircraft' defaultValue='2'>
                                    <option value='SLG2'>SLG2</option>
                                    <option value='PA-44 Seminole'>PA-44 Seminole</option>
                                    <option value='172S-Skyhawk-C172'>172S Skyhawk-C172</option>
                                </Input>
                            </Row>
                        </div>
                        <div>
                            <Row>
                                <Input s={6} onChange={(e) => this.updateField('tailNumber', e)} type='select' label='Select TailNumber' defaultValue='2'>
                                    <option value='N166TW-SLG2'>N166TW (SLG2)</option>
                                    <option value='N238AT-Seminole'>N238AT (Seminole)</option>
                                    <option value='N997RA-Skyhawk'>N997RA (Skyhawk)</option>
                                </Input>
                            </Row>
                        </div>
                        <div>
                            <Row>
                                <Input s={6} onChange={(e) => this.updateField('coPilot', e)} label='Co-Pilot (if any)' />
                            </Row>
                        </div>
                        <div>
                            <Row>
                                <Input s={6} onChange={(e) => this.updateField('departure', e)} label='Departure Airport' />
                            </Row>
                        </div>
                        <div>
                            <Row>
                                <Input s={6} onChange={(e) => this.updateField('destination', e)} label='Destination Airport' />
                            </Row>
                        </div>
                    </div>
                    <div className='column'>
                        <div>
                            <Link to='/map'><p className='mapIcon'><i className='material-icons'>local_airport</i>Map your Route</p></Link>
                        </div>
                        <div>
                            <Row>
                                <Input label='Date of Flight' className='datepicker' type='date' onChange={(e) => this.updateField('date', e)} />
                            </Row>
                        </div>
                        <div>
                            <Row>
                                <Input s={6} onChange={(e) => this.updateField('altitude', e)} label='Cruise Altitude' />
                            </Row>
                        </div>
                        <div>
                            <Row>
                                <Input s={6} onChange={(e) => this.updateField('time', e)} label='Total Time (hrs)' />
                            </Row>
                        </div>
                        <div>
                            <Row>
                                <Input name='group1' type='checkbox' checked={this.state.dayTakeoff} onClick={this.onClickDayTakeoff} label='Day Takeoff' />
                                <Input name='group1' type='checkbox' checked={this.statedayLanding} onClick={this.onClickDayLanding} label='Day Landing' />
                            </Row>
                        </div>
                        <div>
                            <Row>
                                <Input name='group2' type='checkbox' checked={this.state.nightTakeoff} onClick={this.onClickNightTakeoff} label='Night Takeoff' />
                                <Input name='group2' type='checkbox' checked={this.state.nightLanding} onClick={this.onClickNightLanding} label='Night Landing' />
                            </Row>
                        </div>
                        <div> 
                        <Modal
                            header="Important"
                            trigger={<Button className='doneBtn' onClick={() => console.log('yoi')}>Done</Button>}
                            >
                            <p> Please confirm that the information you entered is correct. Once you click 'Submit' you will not be able to make any changes to your flight plan.</p>
                            <Button type="submit" onClick={() => this.props.addFlightPlan(this.state) }>Submit</Button>
                        </Modal>
                        </div>
                    </div>
                </form>
            </div>
        )
    }

}


export default FlightPlanner;