'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Artsubmission Schema
 */
var ArtsubmissionSchema = new Schema({
  name: {
    type: String,
    default: '',
    required: 'Please fill Art submission name',
    trim: true
  },
  email: {
    type: String,
    default: '',
    required: 'Please fill Art submission email',
    trim: true
  },
  school: {
    type: String,
    default: '',
    required: 'Please fill Art submission school',
    trim: true
  },
  age: {
    type: String,
    default: '',
    required: 'Please fill Art submission age',
    trim: true
  },
  address: {
    type: String,
    default: '',
    required: 'Please fill Art submission address',
    trim: true
  },
  city: {
    type: String,
    default: '',
    required: 'Please fill Art submission city',
    trim: true
  },
  state: {
    type: String,
    default: '',
    required: 'Please fill Art submission state',
    trim: true
  },
  zipcode: {
    type: String,
    default: '',
    required: 'Please fill Art submission zip code',
    trim: true
  },
  message: {
    type: String,
    default: '',
    trim: true
  },
  AdminNotes: {
    type: String,
    default: '',
    trim: true
  },
  approve: {
    type: String,
    default: '',
    trim: true
  },
  thumbnail: {
    type: String,
    default: 'modules/artsubmissions/client/img/profile/default.png'
  },
  created: {
    type: Date,
    default: Date.now
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

mongoose.model('Artsubmission', ArtsubmissionSchema);
