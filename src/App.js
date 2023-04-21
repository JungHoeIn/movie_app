import React from "react";

function Car({ name, picture }) {
  return (
    <div id='gaga'>
      <h2>{name}</h2>;
      <img src = {picture} alt = {name}/>
    </div>
  );
}

const car = [
  {
    id : 1,
    name : 'RS7',
    image : 'https://www.mansory.com/sites/default/files/styles/fullwidth_image_with_custom_ratio/public/2021-09/audi_rs_7_rear_1.jpg?itok=MPj17c2h',
  },
  {
    id : 2,
    name : 'S63 AMG',
    image : 'https://i.ytimg.com/vi/IQtBU0-s7co/maxresdefault.jpg',
  },
  {
    id : 3,
    name : 'Panamera',
    image : 'https://www.supersprint.com/public/img/PORSCHE%20Panamera%20Sedan%20GTS%204.0L%20V8%20(460%20Hp)%202017%20-%20(with%20valve)-400989.jpg',
  },
  {
    id : 4,
    name : 'AMG GT63 4door',
    image : 'https://i.ytimg.com/vi/Y2ptUZb-608/maxresdefault.jpg',
  },
];

function App() {
  return (
    <div>
      {car.map(dish => (
        <Car key = {dish.id} name = {dish.name} picture = {dish.image} />
      ))}
    </div>
  );
}

export default App;
