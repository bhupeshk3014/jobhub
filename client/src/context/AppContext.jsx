import { useEffect } from "react";
import { createContext, useState } from "react";
import { jobsData } from "../assets/assets.js";

export const AppContext = createContext();

export const AppContextProvider = (props) => {

    const [searchFilter, setSearchFilter] = useState({
        title:'',
        location:''
})

    const [isSearched, setIsSearched] = useState(false);

    const [jobs, setJobs] = useState([]); // You can initialize with an array of job objects if needed

    const [showRecruiterLogin, setShowRecruiterLogin] = useState(false);

    // Function to fetch jobs

    const fetchJobs = async () => {
        setJobs(jobsData);
    }

    useEffect(() => {
        fetchJobs();
    }, [])

    const value = {
        setSearchFilter,
        searchFilter,
        isSearched,
        setIsSearched,
        jobs,
        setJobs,
        showRecruiterLogin,
        setShowRecruiterLogin,
    }

    return (<AppContext.Provider value={value}>
        {props.children}
    </AppContext.Provider>)
}