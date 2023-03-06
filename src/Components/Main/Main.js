import './Main.css';


const Main = (props) => {
    console.log(props);
    return (
        <div className='main-container'>
            <h1> {props.title} </h1>
            <p> {props.text} </p>
        </div>
    )

}
export default Main;