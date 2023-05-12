import "./overviewcard.scss";


const Overviewcard = ({title, number}) =>{
    return (
        <div className="overwrapper">
            <p className="overtitle">{title}</p>
            <p className="overnum">{number}</p>
        </div>
    )
}
 
export default Overviewcard