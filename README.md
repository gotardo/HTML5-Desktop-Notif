HTML5-Desktop-Notif
===================

JavaScript class to easily manage HTML5 Desktop Notifications

Use
===================

  <script type="text/javascript" src="js/HTML5DesktopNotif.js"></script>		
  
	<script type="text/javascript">
	
		Notif.config({
			notificationType: "text",
			icon: "css/img/Alf-48.png",
			autoclose: 3
		});
	
	</script>


Change Log
===================
V0.2
- Add Notif.isAvailable() method to check the availability of webkitNotifications object.
- Add 'autoclose' configuration param. The notification will cancel in 'autoclose' number of seconds. If 'autoclose' is 0 or false the notification will not be canceled.
- Update authoring and licenses.

V0.1
- Just a simple JavaScript class.