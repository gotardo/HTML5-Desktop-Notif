/*
	Notif class
	Allows to show HTML5 Notifications. 
	
	Use:
	Notif.show({msg: "This is my message"});
*/

		var Notif = {

			/*
				Webkit Notification object
			*/
			
			wkNotif							: null,
			
			/*
				Event callbacks
			*/
						
			icon 								: '',
			notificationType   	: 'text',
			title 							: '',
			url									: '',		
			msg									: '',
			
			/*
				Event callbacks
			*/
			
			ondisplay						:	function (){},
			onclose							:	function (){},
			onclick							:	function (){},
			onerror							:	function (){},						
			
			/*
				Dump the settings into the object
			*/
			
			config 	: function (settings) {

				for (option in settings)
					this[option] = settings[option];
				
			},
			
			/*
				Shows the notification (if possible)
			*/		
			
			show 	: function (settings) {
				
				this.config(settings);
				
				if (!window.webkitNotifications) {

					throw { 
						name:        			"Notifications error", 
						level:       			"Show Stopper", 
						message:     			"Browser doesn't support HTML5 notifcations."
					} 

				}	

				else {
					/*
						Check for permission to show notifications. Request permission if notifications are not allowed
					*/
					
					if (window.webkitNotifications.checkPermission()) 
						window.webkitNotifications.requestPermission();
											
					/*
						Check for browser notifications support
					*/
					
					if (this.notificationType == 'html') 
						this.wkNotif = window.webkitNotifications.createHTMLNotification(this.url);
					else 
						this.wkNotif = window.webkitNotifications.createNotification( this.icon, this.title, this.msg);		
					

	
					/*
						Shows the notif
					*/			
					
					this.wkNotif.show();
					
					
				}
				
				return this;
			}
		
		};

	





	
