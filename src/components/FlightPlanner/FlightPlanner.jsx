import React from 'react';
import { Link } from 'react-router-dom';
import './FlightPlanner.css';
import {Row, 
        Input,
        Autocomplete,
        Button
    } from 'react-materialize'

const FlightPlanner = ({ addFlightPlan, coPilot, onChangeCoPilot, onChangeDeparture, departure, onClickDayTakeoff, dayTakeoff, onClickDayLanding, dayLanding, onChangeDistance, distance, onClickNightTakeoff, nightTakeoff, onClickNightLanding, nightLanding}) => {
    return (
        <div>
          <div>
            <Link to='/homepage'>Back</Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <Link to='/history'>Flight History</Link>
          </div>
            <h3>Flight Planner</h3>
            <form action="#" className='formContainer' onSubmit={addFlightPlan}>
                <div className='column'>
                    {/* <div>
                        <Row>
                            <Input s={6} type='select' label='Select an Aircraft' defaultValue='2'>
                                <option value='SLG2'>SLG2</option>
                                <option value='PA-44 Seminole'>PA-44 Seminole</option>
                                <option value='172S Skyhawk'>172S Skyhawk</option>
                            </Input>
                        </Row>
                    </div> */}
                    {/* <div>
                        <Row>
                            <Autocomplete
                                title='Tail Number'
                                data={
                                    {
                                        'N166TW': null,
                                        'N238AT': null,
                                        'N997RA': null
                                    }
                                }/>
                        </Row>
                    </div> */}
                    <div>
                        <Row>
                            <Input s={6} value={coPilot} onChange={onChangeCoPilot} label='Co-Pilot (if any)' />
                        </Row>
                    </div>
                    <div>
                        <Row>
                            <Input label='Date of Flight' className='datepicker' type='date' onChange={function(e, value) {}} />
                        </Row>
                    </div>
                    <div>
                        <Row>
                            <Input s={6} value={departure} onChange={onChangeDeparture} label='Departure Airport' />
                        </Row>
                    </div>
                    <div>
                        <Row>
                            <Input s={6} label='Destination Airport' />
                        </Row>
                    </div>
                </div>
                <div className='column'>
                    {/* <div>
                        <Row>
                            <Input s={6} label='Route' />
                        </Row>
                    </div> */}
                    <div>
                        <Row>
                            <Input s={6} value={distance} onChange={onChangeDistance} label='Distance' />
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
                    <Button type='submit'>Submit</Button>
                </div>
                {/* <Button><input type='submit' value='Flight Plan'/>Submit</Button> */}
            </form>
        </div>
    )
}


export default FlightPlanner;