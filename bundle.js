const google_url = "";

const results = [["Nithin", "Thampi"], ["Neethu", "Thampi"]];

$("#upload").on("change", function({ target }) {
  const [file] = target.files;
  var reader = new FileReader();
  reader.readAsDataURL(file);

  reader.onload = function({ target: reader }) {
    $.ajax({
      type: "POST",
      dataType: "json",
      contentType: "application/json",
      url:
        "https://vision.googleapis.com/v1/images:annotate?key=AIzaSyDIrSfTeYMIY4s1d6ujTluGvcDnsSaU1JQ",
      data: JSON.stringify({
        requests: [
          {
            image: {
              content: reader.result.split(",")[1]
            },
            features: [
              {
                type: "TEXT_DETECTION"
              }
            ]
          }
        ]
      })
    }).done(data => {
      console.log(data.responses[0].fullTextAnnotation.text.split("\n"));
    });
  };
});
