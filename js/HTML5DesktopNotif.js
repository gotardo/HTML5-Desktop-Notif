/* --------------------------------------------------

	@class: 			Notif class
	@description: Allows to show HTML5 Notifications. 
	@author: 			Gotardo Gonz‡lez (contact@gotardo.es)
	@license: 		ATTENTION: This software comes with no warranty. You may use this library under the terms of either the MIT License.
	
	Use:
	<script type="text/javascript">
		Notif.show({msg: "This is my message"});
	</script>
	
-------------------------------------------------- */

		var Notif = {

			// Webkit Notification object
			
			wkNotif							: null,
			
			// View Config. params.
						
			icon 								: '',
			notificationType   	: 'text',
			title 							: '',
			url									: '',		
			msg									: '',
			
			// Behavior Config. params
			
			autoclose						: 5,
			debug								: false,
			
			// Event callbacks

			ondisplay						:	function (){},
			onclose							:	function (){},
			onclick							:	function (){},
			onerror							:	function (){},		
			
			
			/* ------------------------------------------
				Dump the settings into the object
			------------------------------------------ */
			
			config 	: function (settings) {

				for (option in settings)
					this[option] = settings[option];
				
			},
			
			
			/* ------------------------------------------
				Check the avaliability of HTML5 notifications
			------------------------------------------ */
			
			isAvailable	: function () {
				return (typeof window.webkitNotifications == "object");
			},
			
			/* ------------------------------------------
				Shows the notification (if possible)
			------------------------------------------ */		
			
			show 	: function (settings) {
				
				//Update new settings (if needed)
				this.config(settings);
				
				//If webkitNotifications object is not available and we are in debug mode, an exception will be thrown...
				if (!this.isAvailable()) {
					if (this.debug)
						throw { 
							name:        			"Notifications error", 
							level:       			"Show Stopper", 
							message:     			"Browser doesn't support HTML5 notifcations."
						}
				}	
				//If webkitNotifications object is available
				else {
					
					//Check for permission to show notifications. Request permission if notifications are not allowed
					
					if (window.webkitNotifications.checkPermission() == window.webkitNotifications.PERMISSION_NOT_ALLOWED)
						window.webkitNotifications.requestPermission();						

					//If permission is allowed, the notification is shown.

					if (window.webkitNotifications.checkPermission() == 0) {
						//Check for browser notifications support
						
						if (this.notificationType == 'html') 
							this.wkNotif = window.webkitNotifications.createHTMLNotification(this.url);
						else 
							this.wkNotif = window.webkitNotifications.createNotification( this.icon, this.title, this.msg);		
						
						
						// Shows the notif
						
						this.wkNotif.show();
						
						// Autoclose the notif	
		
						if (this.autoclose) setTimeout(function () {
							Notif.wkNotif.cancel();
						}, this.autoclose * 1000);						
						
					}
											

				}//End If
				
				return this;
			}
		
		};