import React, { useState } from 'react'
import MultipleSlider from '../Header/MultipleSlider'

function UpcomingClass() {
    const data = [
        {
            "classTitle": "Meditation",
            "dateTime": "12:00pm- 1:30pm, Wednesday"
        },
        {
            "classTitle": "Body Building",
            "dateTime": "12:00pm- 1:30pm, Wednesday"
        },
        {
            "classTitle": "Martial Arts",
            "dateTime": "12:00pm- 1:30pm, Wednesday"
        },
        {
            "classTitle": "Cycling",
            "dateTime": "12:00pm- 1:30pm, Wednesday"
        },
        {
            "classTitle": "Yoga",
            "dateTime": "12:00pm- 1:30pm, Wednesday"
        },
        {
            "classTitle": "Meditation",
            "dateTime": "12:00pm- 1:30pm, Wednesday"
        },
        {
            "classTitle": "Body Building",
            "dateTime": "12:00pm- 1:30pm, Wednesday"
        },
    ]
    const [UpcomingClassData, setUpcomingClassData] = useState(data);
    return (
        <>
            {/* Start Upcoming Classes area */}
            <div className="upcoming-classes-area">
                <div className="container-fluid">
                    <div className="row no-gutters">
                        <div className="col-lg-3 col-md-3 col-sm-4">
                            <div className="upcoming-classes-content">
                                <h2>UPCOMING CLASSES</h2>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-9 col-sm-8">
                            <div className="gym-carousel nav-control-left">
                                <MultipleSlider courusledata={UpcomingClassData} type='UpcomingClass' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Upcoming Classes area */}
        </>
    )
}

export default UpcomingClass