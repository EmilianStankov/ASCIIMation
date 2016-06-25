<?php
class Config {

  public $SITE_FN = 61740;
  public $SITE_CREATOR = "Emilian Stankov";
  public $SITE_ADMIN_EMAIL = "eminstine@abv.bg";
  public $SITE_INFO = "This project was created during 2016 year, on Web Technologies, Sofia University, FMI, lead by:
Milen Petrov, assistant: ";

  public $SITE_URL="http://localhost";
  public $ROOT_FOLDER="c:\\xampp\\htdocs\\";
  public $DB_USER="61740_user";
  public $DB_PASS="61740_pass";
  public $DB_NAME="www_6ed_61740_alg_animation";
  public $SITE_DESCRIPTION="What is ready, and what can be improved for future";
}

$con = mysqli_connect("localhost", "root");
$config = new Config();
mysqli_query($con, "CREATE DATABASE IF NOT EXISTS ".$config->DB_NAME.";");
mysqli_close($con);
?>
