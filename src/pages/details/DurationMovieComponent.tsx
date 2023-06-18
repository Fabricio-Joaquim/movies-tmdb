import React from 'react'
import moment from "moment"

const DurationMovieComponent = ({ runtime }: { runtime: number }) => {

    const duration = moment.duration(runtime, 'minutes');
    const horus = Math.floor(duration.asHours());
    const min = duration.minutes();

    return (
        <p className='text-base'>{horus}h {min}m</p>
    )
}

export default React.memo(DurationMovieComponent)