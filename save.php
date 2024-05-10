<html>
    <head>

    <style>
        body{
            background:black;
            height: 100vh;
            display: flex;
            justify-content:center;
            align-items:center;
        }

        h1{
            color:#fff;
            background:green;
            padding: 12px 30px;
        }
    </style>
        <body>
            
        <?php

$server = "localhost";
$username = "root";
$message = "";
$dbname = "test";

$con = mysqli_connect($server, $username, $message,  $dbname
);



$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$sql="INSERT INTO `test`(`name`, `email`, `message`) VALUES ('$name','$email','$message')";

$result = mysqli_query($con , $sql);

if ($result){
    echo "<h1>Thankyou Your Data is Submited</h1>";
}
else{
    echo "Sorry For Error";
}

?>
        </body>
    </head>
</html>

