   <?php
   //add event

   print_r($_POST);


   //Database Connection
   $servername = "localhost";
   $username   = "root";
   $password   = "";
   $dbname     = "events";
   // Create connection
   $conn = new mysqli($servername, $username, $password, $dbname);
   // Check connection
   if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
   }
   //Please create events database inside phpmysql admin and create events tabel and create id, title, startdate fields
   //Add Event
   if (isset($_POST['title'])) {

      $sql = "INSERT INTO events (title, startdate)
            VALUES ('" . $_POST['title'] . "', '" . $_POST['startdate'] . "')";
      if (mysqli_query($conn, $sql)) {
         $data = array("data" => "success");
         echo json_encode($data);
      } else {
         $data = array("data" => "Error: " . $sql . "<br>" . $conn->error);
         echo json_encode($data);
      }
   }
   ?>