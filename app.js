document.addEventListener("DOMContentLoaded", async() => {
   const apiUrl = "http://localhost:8000/api/birth-certificates";
   const birthCertificatesDiv = document.querySelector("#birth_certificates ul");

   //fetching the data which will return a promise
   const data = await fetch(apiUrl);

   //verify that the data was fetched if not throw error
   if(!data.ok) {
    throw new Error("Error fetching the API data");
   }

   const birthCertificate = await data.json();
   

});