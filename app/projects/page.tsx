"use client"
import ProjectCarousel from "@/components/ProjectCarosel";

const getProjectData = async () => {

    const url = "https://api.github.com/users/seanrogan/repos";
    let response = await fetch(url);
    if(!response.ok){
        throw new Error('github api call failed');
    }
    return results = response.json();

}
export default function ProjectsPage(){

    const projects = getProjectData()
    return(
        <>
            <ProjectCarousel items={projects}/>
        </>
    )
}