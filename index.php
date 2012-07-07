<?php
?><!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
	<title>HTML5DesktopNotif</title>
	<script type="text/javascript" src="js/HTML5DesktopNotif.js"></script>		
	<script type="text/javascript">
	
		Notif.config({
			notificationType: "text"			
		});
	
	</script>
</head>

<body>
	<button id ="show_button" onclick='javascript:Notif.show({ title: "Warning!", msg: "You have a new notification."});'>
		Show notif
	</button>
</body>
</html>
