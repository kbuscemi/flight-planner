import React from 'react';
import { Link } from 'react-router-dom';
import './FlightPlanner.css';
import {Row, 
        Input,
        Modal,
        Autocomplete,
        Button
    } from 'react-materialize'

const FlightPlanner = ({ addFlightPlan, aircraft, onChangeAircraft, tailNumber, onChangeTailNumber, coPilot, onChangeCoPilot, onChangeDeparture, departure, onChangeDestination, destination, onChangeDate, date, altitude, onChangeAltitude, onClickDayTakeoff, dayTakeoff, onClickDayLanding, dayLanding, onChangeTime, time, onClickNightTakeoff, nightTakeoff, onClickNightLanding, nightLanding}) => {
    let x;

    console.log(x)
    return (
        <div>
          <div>
            <Link to='/homepage'>Back</Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <Link to='/history'>Flight History</Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <Link to='/map' className='NavBar-link'>Google Maps</Link>
          </div>
            <h3>Flight Planner</h3>
            <form action="#" className='formContainer' ref={domNode => x = domNode}>
                <div className='column'>
                    <div>
                        <Row>
                            <Input s={6} value={aircraft} onChange={onChangeAircraft} type='select' label='Select Aircraft' defaultValue='2'>
                                <option value='SLG2'>SLG2</option>
                                <option value='PA-44 Seminole'>PA-44 Seminole</option>
                                <option value='172S-Skyhawk-C172'>172S Skyhawk-C172</option>
                            </Input>
                        </Row>
                    </div>
                    <div>
                        <Row>
                            <Input s={6} value={tailNumber} onChange={onChangeTailNumber} type='select' label='Select TailNumber' defaultValue='2'>
                                <option value='N166TW'>N166TW (SLG2)</option>
                                <option value='N238AT'>N238AT (Seminole)</option>
                                <option value='N997RA'>N997RA (Skyhawk)</option>
                            </Input>
                        </Row>
                    </div>
                    <div>
                        <Row>
                            <Input s={6} value={coPilot} onChange={onChangeCoPilot} label='Co-Pilot (if any)' />
                        </Row>
                    </div>
                    <div>
                        <Row>
                            <Input s={6} value={departure} onChange={onChangeDeparture} label='Departure Airport' />
                        </Row>
                    </div>
                    <div>
                        <Row>
                            <Input s={6} value={destination} onChange={onChangeDestination} label='Destination Airport' />
                        </Row>
                    </div>
                </div>
                <div className='column'>
                    <div>
                        <Row>
                            <Input value={date} label='Date of Flight' className='datepicker' type='date' onChange={onChangeDate} />
                        </Row>
                    </div>
                    <div>
                        <Row>
                            <Input s={6} value={altitude} onChange={onChangeAltitude} label='Cruise Altitude' />
                        </Row>
                    </div>
                    {/* <div>
                        <Row>
                            <Input s={6} label='Route' />
                        </Row>
                    </div> */}
                    <div>
                        <Row>
                            <Input s={6} value={time} onChange={onChangeTime} label='Total Time (hrs)' />
                        </Row>
                    </div>
                    <div>
                        <Row>
                            <Input name='group1' type='checkbox' checked={dayTakeoff} onClick={onClickDayTakeoff} label='Day Takeoff' />
                            <Input name='group1' type='checkbox' checked={dayLanding} onClick={onClickDayLanding} label='Day Landing' />
                        </Row>
                    </div>
                    <div>
                        <Row>
                            <Input name='group2' type='checkbox' checked={nightTakeoff} onClick={onClickNightTakeoff} label='Night Takeoff' />
                            <Input name='group2' type='checkbox' checked={nightLanding} onClick={onClickNightLanding} label='Night Landing' />
                        </Row>
                    </div>
                    {/* <div>
                        <Row>
                            <Input s={6} label='Longitude' />
                        </Row>
                    </div> */}
                    {/* <div>
                        <Row>
                            <Input s={6} label='Latitude' />
                        </Row>
                    </div> */}
                </div>
                <div> 
                    <Modal
                        header="Please Read"
                        trigger={<Button onClick={() => console.log('yoi')}>Done</Button>}
                    >
                        <p> Please confirm that the information you entered is correct. Once you click 'Submit' you will not be able to make any changes to your flight plan.</p>
                        <Button type="submit" onClick={addFlightPlan}>Submit</Button>
                    </Modal>
                </div>
            </form>
        </div>
    )
}


export default FlightPlanner;