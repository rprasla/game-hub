import useData from "./UseData";

interface Platform{
    id: number;
    name: string;
    slug: string; 
}

const UsePlatforms = () => useData<Platform>("/platforms/lists/parents");

export default UsePlatforms;