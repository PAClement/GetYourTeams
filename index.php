<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GetYourTeams</title>

    <link rel="stylesheet" href="assets/css/bootstrap.min.css">
    <link rel="stylesheet" href="assets/css/main.css">
</head>

<body>
    <nav>
        <div class="container">
            <p class="text-center text-muted pt-3">&copy; <?php echo date('Y'); ?> GetYourTeams, v.1</p>
        </div>
    </nav>

    <div class="container d-flex flex-column align-items-center">

        <h1 class="text-success mt-3">Get your teams</h1>
        <h6 class="mb-5">Only balanced teams are supported, an upcoming update will fix that !</h6>

        <div class="col-12 col-md-6">
            <select id="participate" class="form-select mb-5" aria-label="Default select example">
                <?php include('includes/_options.php'); ?>
            </select>
        </div>
    </div>

    <div class="container d-flex flex-column align-items-center">
        <div class="col-12 col-md-6 pl-0">
            <span id="input_concurrents"></span>
        </div>

        <div class="col-12 col-md-6 pl-0 mt-3">
            <span id="btn_teams"></span>
        </div>

        <div class="col-12 d-flex flex-wrap">
            <span id="show_teams"></span>
        </div>
    </div>

    <script src="assets/js/jquery.min.js"></script>
    <script src="assets/js/bootstrap.bundle.min.js"></script>
    <script src="assets/js/shuffle.js"></script>
    <script src="assets/js/teams.js"></script>
</body>

</html>