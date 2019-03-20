// https://reactwork.shop/Functions

function getName(person) {
  return person.name;
}

// Is autobound
// Can be shortened
const getName = person => {
  return person.name;
};

const getName = ({ name, ...personInfo }) => name;

// const NameHeading = props => <h1 color={props.color}>{props.name}</h1>;
// const NameHeading = ({ name, color }) => <h1 color={color}>{name}</h1>;
