<?php
// Check if both message and sender are received
if (isset($_POST['message']) && isset($_POST['sender'])) {
    // Get the message and sender from the request
    $message = $_POST['message'];
    $sender = $_POST['sender'];

    // Format the message with sender's name
    $formattedMessage = "$sender: $message\n";

    // Save the message to a text file
    $file = 'messages.txt';
    file_put_contents($file, $formattedMessage, FILE_APPEND);
}
?>
