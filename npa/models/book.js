var mongoose = require('mongoose');

var Book = mongoose.model('Book', {
  bookName: {
    type: String,
    required: true,
    trim: true
  },
  bookStatus: {
    type: Boolean
  },
  bookPrice: {
    type: String,
    // required: true,

  }

})

module.exports={Book};