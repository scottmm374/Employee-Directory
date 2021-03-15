import React, {useState, useEffect} from 'react'
import axios from 'axios'

const EmployeeList = () => {
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        axios
        .get('https://codechallenge.rivet.work/api/v1/profiles', {
            headers: {
                'token': 'XA8K6b8GSM5mGNN2v5Q3j6xUUwpkoPSx3zdxbAADwtzuHrexRHWi58rHZkRZJhf7'
            }
        })
        .then(res => {
            setEmployees(res.data);
            console.log(res.data)
        })
        .catch(err => {
            console.log("error", err)
        })
    }, [])

    return (
        <div>

        </div>
    )
}

export default EmployeeList;