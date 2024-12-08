import useData from "./UseData";

export interface Genre {
  id: number;
  name: string;
}

const useGenres = () => {
  return(
  useData<Genre>("genres")
  )
};

export default useGenres;
