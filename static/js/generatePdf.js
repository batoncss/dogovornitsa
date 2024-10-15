export async function clickingButtonPDF() {
    let generatingPDF = async () => {
        let data = {
            'city': document.getElementById('location').value,
            'date': document.getElementById('date').value,
            'buyerName1': document.getElementById('ownerName').value,
            'buyerName2': document.getElementById('ownerPassport').value,
            'buyerName3': document.getElementById('issueDate').value,
            'buyerName4': document.getElementById('departmentCode').value,
            'sellerName1': document.getElementById('buyerName').value,
            'sellerName2': document.getElementById('buyerPassport').value,
            'sellerName3': document.getElementById(''),
            'sellerName4': document.getElementById(''),
            'carModel': document.getElementById('vehicleBrand').value,
            'carVIN': document.getElementById('vinNumber').value,
            'carType': document.getElementById('vehicleType').value,
            'carReleaseYear': document.getElementById('releaseYear').value,
            'carMileage': document.getElementById(''),
            'carPower': document.getElementById('enginePower').value,
            'engineVolume': document.getElementById('engineVolume').value,
            'carColour': document.getElementById('color').value,
            'engineModel': document.getElementById('engineModel').value,
            'engineNumber': document.getElementById('engineNumber').value,
            'frameNumber': document.getElementById('chassisNumber').value,
            'bodyNumber': document.getElementById('bodyNumber').value,
            'documentNumber': document.getElementById('ptsNumber').value,
            'documentCreator': document.getElementById('ptsIssuedBy').value,
            'carStateNumber': document.getElementById('registrationNumber').value,
            'CertificateRegistrationSeries': document.getElementById('stsSeries').value,
            'CertificateRegistrationNumber': document.getElementById('stsNumber').value,
            'CertificateRegistrationCreator': document.getElementById('stsIssuedBy').value,
            'CertificateRegistrationDay': document.getElementById('stsIssueDate').value,
            'CertificateRegistrationMonth': document.getElementById('stsIssueDate').value,
            'CertificateRegistrationYear': document.getElementById('stsIssueDate').value,
            'carCost': document.getElementById('vehiclePrice').value,
            'carCostDecoding': document.getElementById('vehiclePrice').value,
            'receivedMoney': document.getElementById('vehiclePrice').value,
        };
        try {
            let response = await fetch('/dogovornitsaAPI/generatingPDF/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            if (response.ok) {
                let blob = await response.blob();
                let url = window.URL.createObjectURL(blob);
                window.open(url, '_blank');
                window.URL.revokeObjectURL(url);
            } else {
                console.log("Ошибка: " + response.statusText);
            }
        } catch (error) {
            console.error("Ошибка при запросе:", error);
        }
    }

    document.getElementById('buttonCreatingPDF').onclick = function(){
        generatingPDF();
    }
}