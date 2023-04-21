import React from "react";
import PropTypes from 'prop-types';

function Car({ name, picture, rating }) {
  return (
    <div id='gaga'>
      <div id='text'>
      <h2>{name}</h2>
      <h4>Design score : {rating}/5</h4>
      </div>
      <img src = {picture} alt = {name}/>
    </div>
  );
}


const car = [
  {
    id : 1,
    name : 'AUDI RS7',
    image : 'https://www.mansory.com/sites/default/files/styles/fullwidth_image_with_custom_ratio/public/2021-09/audi_rs_7_rear_1.jpg?itok=MPj17c2h',
    rating : 4.5,
  },
  {
    id : 2,
    name : 'Mercedes benz S63 AMG',
    image : 'https://i.ytimg.com/vi/IQtBU0-s7co/maxresdefault.jpg',
    rating : 4.7,
  },
  {
    id : 3,
    name : 'Porshe Panamera',
    image : 'https://www.supersprint.com/public/img/PORSCHE%20Panamera%20Sedan%20GTS%204.0L%20V8%20(460%20Hp)%202017%20-%20(with%20valve)-400989.jpg',
    rating : 5,
  },
  {
    id : 4,
    name : 'Mercedes benz AMG GT63 4door',
    image : 'https://i.ytimg.com/vi/Y2ptUZb-608/maxresdefault.jpg',
    rating : 4.8
  },
  {
    id : 5,
    name : '안지선 Pick ♡ 아반떼N',
    image : 'https://imgauto-phinf.pstatic.net/20210714_37/auto_16262330211873wYnR_JPEG/20210714122330_vsQDIRTn.jpg',
    rating : '(그녀의 평가 점수) ' + 5,
  }
];

function App() {
  return (
    <div>
      {car.map(dish => (
        <Car key = {dish.id} name = {dish.name} picture = {dish.image} rating = {dish.rating}/>
      ))}
    </div>
  );
}

Car.propTypes = {
  name : PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating : PropTypes.number
};

export default App;
