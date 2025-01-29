document.addEventListener("DOMContentLoaded", async () => {
   
    const apiurl = "http://localhost:8000/api/birth_certificates";
    const birthCertificateDiv = document.querySelector("#birth_certificates ul");

    try {
        const response = await fetch(apiurl);

        if(!response.ok) {
            throw new Error ("Error feteching data");
        }

        const birthCertificates = await response.json();
          
        //logging the fetched data
        console.log("Fetched data: ", birthCertificates);
          
        //check if the fetched data is an array and the is data in it, if not throw error again 
        
        if(Array.isArray(birthCertificates) && birthCertificates.length > 0) {
            //go through each certifiicate and index it
            birthCertificates.forEach(certificate => {
             const certList = document.createElement("li");
             certList.textContent = `Name: ${certificate.first_name}, Health Status: ${certificate.health_status}, Hospital code: ${certificate.hospital_code}, Date of birth: ${certificate.birth_date}`;
             birthCertificateDiv.appendChild(certList);
            });
        } else {
            //was not an array or was empty
            const errorMessage = document.createElement("p");
            errorMessage.textContent = "Was not an array or was empty";
            birthCertificateDiv.appendChild(errorMessage);
        }

          } catch(error) {
            console.log("error fetching data");
            const errorMessage = document.createElement("p");
            errorMessage.textContent = "Unable to list the birth certificates.";
            birthCertificateDiv.appendChild(errorMessage);
          } 


});