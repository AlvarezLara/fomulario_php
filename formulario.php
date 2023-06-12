<?php if ($_POST) {
    $nombre = $_POST["nombre"];
    $apellido = $_POST["apellido"];
    $email = $_POST["email"];

    //conexion con PDO
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "cursosql";

    //create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    //check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $sql = "INSERT INTO usuarios (nombre, apellido, email)
  VALUES ('$nombre', '$apellido', '$email')";

    if ($conn->query($sql) === true) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
    header("Location: index .html");
}
