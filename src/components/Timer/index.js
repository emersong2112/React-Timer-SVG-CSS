import { useEffect, useState } from "react";
import './timer.scss'
const Timer = (props) => {

    const [remainingTime, setRemainingTime] = useState(props.time)
    const [percent, setPercent] = useState(100)
    const updateTime = () => {
        setRemainingTime(remainingTime-1)
        setPercent(((remainingTime / props.time) * 100).toFixed(0))
    }

    const timeFormat = (time) => {
        const mins = Math.floor(time / 60)
        let secs = time % 60
        if (secs < 10) {
            secs = `0${secs}`
        }
        return `${mins}:${secs}`
    }

    useEffect(() => {
        if(remainingTime > 0){
            const interval = setInterval(() =>{
                updateTime()
            }, 1000)
            return () => clearTimeout(interval)
        }
    },[remainingTime])

    return (
    <section className="timer" style={{ "--percent": percent}}>
            <svg>
                <circle></circle>
                <circle></circle>
            </svg>
            <h2>{timeFormat(remainingTime)}</h2>
        </section>
    )
}
export default Timer;