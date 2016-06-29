<?php
  require_once('config.php');

  $config = new Config();
  $con = mysqli_connect("localhost", "root");
  mysqli_query($con, "USE ".$config->DB_NAME.";");

  if(isset($_POST['action']) && !empty($_POST['action'])) {
    $action = $_POST['action'];
    if($action == 'new') {
      newAnimation($con, $_POST['name'], $_POST['frames']);
    } else if($action == 'edit') {
      editAnimation($con, $_POST['name'], $_POST['frames'], $_POST['new_name']);
    } else if($action == 'delete') {
      deleteAnimation($con, $_POST['name']);
    } else if($action == 'get') {
      getAnimation($con, $_POST['name']);
    } else if($action == 'getAll') {
      getAnimations($con);
    }
  }

  function newAnimation($con, $name, $frames) {
    mysqli_query($con, "CREATE TABLE IF NOT EXISTS Animations(ID int AUTO_INCREMENT PRIMARY KEY, Name varchar(255) UNIQUE, Frames mediumtext);");
    mysqli_query($con, "INSERT INTO Animations (Name, Frames) VALUES('".$name."', '".$frames."')");
  }

  function editAnimation($con, $name, $frames, $new_name) {
    mysqli_query($con, "CREATE TABLE IF NOT EXISTS Animations(ID int AUTO_INCREMENT PRIMARY KEY, Name varchar(255) UNIQUE, Frames mediumtext);");
    mysqli_query($con, "UPDATE Animations SET Name='".$new_name."', Frames='".$frames."' WHERE Name='".$name."';");
  }

  function deleteAnimation($con, $name) {
    mysqli_query($con, "DELETE FROM Animations WHERE Name='".$name."';");
  }

  function getAnimation($con, $name) {
    $data = mysqli_query($con, "SELECT Frames FROM Animations WHERE Name='".$name."';");
    $result = mysqli_fetch_row($data);
    echo json_encode(explode("~#frame#~", $result[0]));
  }

  function getAnimations($con) {
    $data = mysqli_query($con, "SELECT Name FROM Animations;");
    $result = [];
    while ($row = mysqli_fetch_array($data)) {
      $result[] = $row[0];
    }
    echo json_encode($result);
  }

  mysqli_close($con);
?>
