document.addEventListener("DOMContentLoaded", async() => {
   const apiUrl = "http://localhost:8000/api/birth_certificates";
   const birthCertificatesDiv = document.querySelector("#birth_certificates ul");

   try {

   //fetching the data which will return a promise
   const data = await fetch(apiUrl);

   //verify that the data was fetched if not throw error
   if(!data.ok) {
    throw new Error("Error fetching the API data");
   }

   const birthCertificate = await data.json();
   birthCertificate.forEach(certificate => {
    const listItem = document.createElement("li");    //create the li to hold each response in a list
    listItem.textContent = 'Name: ${birth_certificates.first_name}, Date of Birth ${birth_certificates.birth_date}, Health Status ${birth_certificates.health_status}';
    birthCertificatesDiv.appendChild(listItem);   //add the child element and append it to the div 
});
  
} catch(error) {
    console.log("Error fetching data");
    const errorMessage = document.createElement("p");
    errorMessage.textContent = "Unable to list the birth certificates from the API";
    birthCertificatesDiv.appendChild(errorMessage);
   }


});