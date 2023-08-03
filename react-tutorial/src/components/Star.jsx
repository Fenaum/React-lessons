 export default function Star(prop) {
let starIcon = prop.isFilled ? "star-filled.png" : "star-empty.png";

  return (
    <img
      src={`./src/assets/images/${starIcon}`}
      className="card--favorite"
      onClick={prop.handleClick}
    />
  );
}
