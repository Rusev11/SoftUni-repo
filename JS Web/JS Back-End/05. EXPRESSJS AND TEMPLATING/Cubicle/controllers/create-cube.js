const Cube = require('../models/cube');

const newCube1 = new Cube ('Default 1', 'This is a default cube 1', 'https://ae01.alicdn.com/kf/HTB1CSddXRxRMKJjy0Fdq6yifFXa6/Gan-356-Air-SM-3x3-Black-Magic-cube-GAN-Air-SM-Magnetic-3x3x3-Speed-cube-gans.jpg', 3);
const newCube2 = new Cube ('Default 2', 'This is a default cube 2', 'https://thingsidesire.com/wp-content/uploads/2018/06/Eco-Dark-Rubik%E2%80%99s-Cube2.jpg', 6);
const newCube3 = new Cube ('Default 3', 'This is a default cube 3', 'https://images-na.ssl-images-amazon.com/images/I/61izOzq%2BBAL._SY355_.jpg', 1);
const newCube4 = new Cube ('Default 4', 'This is a default cube 4', 'https://images-na.ssl-images-amazon.com/images/I/61HpQqVQ37L._SY355_.jpg', 3);

// console.log(newCube);

// newCube1.save();
// newCube2.save();
// newCube3.save();
newCube4.save();