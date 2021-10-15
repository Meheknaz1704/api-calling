import "./card.module.css"

function Card(props) {
    return (
      <div id="contain">
        <img id="pic1" src={props.img} alt="{props.name}" />
  
        <h3>Name:{props.name}</h3>
        <h3>Birthday:{props.birthday}</h3>
        <h3>Nickname:{props.nickname}</h3>
        
      </div>
    );
  }
  export default Card;
  