/**
 * Created by umut.koseali on 28.02.2014.
 */
'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Task Schema
 */
var TaskSchema = new Schema({
    createDate: {
        type: Date,
        default: Date.now
    },
    content: {
        type: String,
        default: '',
        trim: true
    },
    project: {
        type: String,
        default: '',
        trim: true
    },
    isComplete: {
        type: Boolean,
        default: false
    },
    isActive: {
        type: Boolean,
        default: true
    },
    modifiedDate:{
        type: Date,
        default: Date.now
    }
});

/**
 * Validations
 */
TaskSchema.path('content').validate(function (content) {
    return content.length;
}, 'Icerik girmelisiniz');

/**
 * Statics
 */
TaskSchema.statics.load = function (id, cb) {
    this.findOne({
        _id: id
    }).populate('user', 'name username').exec(cb);
};

mongoose.model('Task', TaskSchema);
