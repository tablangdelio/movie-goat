import useAxiosFetch from "../Api/Hooks/useAxiosFetch";

const Home = () => {

    const {
        data,
        isLoading,
        isError
    } = useAxiosFetch('https://yts.mx/api/v2/list_movies.json');

    console.log(data);

    return(
        <div className={`mt-5 flex items-center justify-center`}>

        </div>
    );
}
export default Home;