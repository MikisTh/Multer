Peticionamento 
//Elaborar formulário
<!DOCTYPE html>
<html>
<head>
 <title>File Upload Test</title>
</head>
<body>
 <h1>File Upload Test</h1>
<! - Single File Upload →
 <h2>Single File Upload</h2>
 <form action="http://localhost:3000/uploadSingle" method="post" enctype="multipart/form-data">
 <input type="file" name="singleFile">
 <br>
 <input type="submit" value="Upload">
 </form>

<! - Multiple File Uploads from a Single Field →
 <h2>Multiple File Uploads from a Single Field</h2>
 <form action="http://localhost:3000/uploadMultipleSingleField" method="post" enctype="multipart/form-data">
 <input type="file" name="multipleFiles" multiple>
 <br>
 <input type="submit" value="Upload">
 </form>

<! - Multiple File Uploads from Multiple Fields →
 <h2>Multiple File Uploads from Multiple Fields</h2>
 <form action="http://localhost:3000/uploadMultipleFields" method="post" enctype="multipart/form-data">
 <h3>Field 1</h3>
 <input type="file" name="field1Files" multiple>
 <br>
 <h3>Field 2</h3>
 <input type="file" name="field2Files" multiple>
 <br>
 <input type="submit" value="Upload">
 </form>

</body>
</html>