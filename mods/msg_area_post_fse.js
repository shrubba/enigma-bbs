/* jslint node: true */
'use strict';

var FullScreenEditorModule		= require('../core/fse.js').FullScreenEditorModule;
var Message						= require('../core/message.js').Message;
var user						= require('../core/user.js');

var _							= require('lodash');
var async					 	= require('async');

exports.getModule				= AreaPostFSEModule;

exports.moduleInfo = {
	name	: 'Message Area Post',
	desc	: 'Module posting a new message to an area',
	author	: 'NuSkooler',
};

function AreaPostFSEModule(options) {
	FullScreenEditorModule.call(this, options);

	var self = this;

	//	we're posting, so always start with 'edit' mode
	this.editorMode = 'edit';

	this.menuMethods.editModeMenuSave = function(formData, extraArgs) {
		var msg = self.getMessage();

		async.series(
			[
				function prepareMessage(callback) {
					if(self.isLocalEmail()) {
						msg.setLocalFromUserId(self.client.user.userId);
						msg.setLocalToUserId(self.toUserId);
					}

					callback(null);
				},
				function saveMessage(callback) {
					msg.persist(function persisted(err) {
						callback(err);
					});
				}
			],
			function complete(err) {
				if(err) {
					//	:TODO:... sooooo now what?
				} else {
					console.log(msg);
				}

				self.client.gotoMenuModule( { name : self.menuConfig.fallback } );
			}
		);
	};
}

require('util').inherits(AreaPostFSEModule, FullScreenEditorModule);

AreaPostFSEModule.prototype.enter = function(client) {	

	if(_.isString(client.user.properties.message_area_name)) {
		this.messageAreaName = client.user.properties.message_area_name;
	}
	
	AreaPostFSEModule.super_.prototype.enter.call(this, client);
};

AreaPostFSEModule.prototype.validateToUserName = function(un, cb) {

	console.log('bazinga')


	var self = this;

	if(!self.isLocalEmail()) {
		cb(null);
		return;
	}

	user.getUserIdAndName(un, function uidAndName(err, userId, userName) {
		self.toUserId = userId;
		cb(err);
	});
};