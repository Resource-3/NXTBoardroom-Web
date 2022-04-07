export function isCheckValueAndSetParams(params, value) {
  if (typeof (value) === "undefined" || value === null || value === "") {
    return ''
  }
  return params + value
}

export const downloadFile = (link) => {
  fetch(link)
    .then(response => {
      let filename = response.url.split('/')
      response.blob().then(blob => {
        let url = window.URL.createObjectURL(blob);
        let a = document.createElement('a');
        a.href = url;
        a.download = filename[filename.length - 1];
        a.click();
      });
    });
}
export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
export const uploadFIle = async (file) => {
  var formdata = new FormData();
  formdata.append("file", file);
  formdata.append("cloud_name", process.env.REACT_APP_CLOUDINARY_CLOUD_NAME);
  formdata.append("upload_preset", process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET);

  let res = await fetch(
    "https://api.cloudinary.com/v1_1/zudu/upload",
    {
      method: "post",
      mode: "cors",
      body: formdata
    }
  );

  let json = await res.json();
  console.log(JSON.stringify(json.secure_url));
  let imageURL = json.secure_url.split('/')
  return imageURL[imageURL.length - 1];
}