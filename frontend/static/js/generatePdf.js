export async function clickingButtonPDF() {
    function parsingCertificateRegistrationDate(parameter){
        let date = document.getElementById('certificateRegistrationDate').value;
        let [day, month, year] = date.split('.');
        switch (parameter){
            case 'day':
                return day;
            case 'month':
                return month;
            case 'year':
                return year;
            default:
                return null;
        }
    }
    document.getElementById('buttonCreatingPDF').onclick = async function(){
        let data = {
            'city': document.getElementById('city').value,
            'date': document.getElementById('date').value,
            'buyerName1': `${document.getElementById('buyerName').value} рожден ${document.getElementById('buyerDate').value} в городе ${document.getElementById('buyerCity').value}`,
            'buyerName2': `Паспорт ${document.getElementById('buyerPassportNumber').value} выдан: ${document.getElementById('buyerPassportDate').value} кем: ${document.getElementById('buyerPassportCreatedBy').value} код подразделения: ${document.getElementById('buyerPassportDepartmentCode').value}`,
            'buyerName3': `Адрес регистрации: ${document.getElementById('buyerRegistrationAddress').value}`,
            'buyerName4': `Номер телефона: ${document.getElementById('buyerPhone').value}`,
            'sellerName1': `${document.getElementById('sellerName').value} рожден ${document.getElementById('sellerDate').value} в городе ${document.getElementById('sellerCity').value}`,
            'sellerName2': `Паспорт ${document.getElementById('sellerPassportNumber').value} выдан: ${document.getElementById('sellerPassportDate').value} кем: ${document.getElementById('sellerPassportCreatedBy').value} код подразделения: ${document.getElementById('sellerPassportDepartmentCode').value}`,
            'sellerName3': `Адрес регистрации: ${document.getElementById('sellerRegistrationAddress').value}`,
            'sellerName4': `Номер телефона: ${document.getElementById('sellerPhone').value}`,

            'carModel': `${document.getElementById('carBrand').value} ${document.getElementById('carModel').value}`,
            'carVIN': document.getElementById('carNumber').value,
            'carType': document.getElementById('carType').value,
            'carReleaseYear': document.getElementById('carReleaseYear').value,
            'carMileage': document.getElementById('carMileage').value,
            'carPower': document.getElementById('carPower').value,
            'engineVolume': document.getElementById('engineVolume').value,
            'carColour': document.getElementById('carColour').value,
            'engineModel': document.getElementById('engineModel').value,
            'engineNumber': document.getElementById('engineNumber').value,
            'frameNumber': document.getElementById('frameNumber').value,
            'bodyNumber': document.getElementById('bodyNumber').value,
            'documentSeries': document.getElementById('documentSeries').value,
            'documentNumber': document.getElementById('documentNumber').value,
            'documentCreator': document.getElementById('documentCreator').value,
            'carStateNumber': document.getElementById('carStateNumber').value,
            'certificateRegistrationSeries': document.getElementById('certificateRegistrationSeries').value,
            'certificateRegistrationNumber': document.getElementById('certificateRegistrationNumber').value,
            'certificateRegistrationCreator': document.getElementById('certificateRegistrationCreator').value,
            'certificateRegistrationDay': parsingCertificateRegistrationDate('day'),
            'certificateRegistrationMonth': parsingCertificateRegistrationDate('month'),
            'certificateRegistrationYear': parsingCertificateRegistrationDate('year'),
            'carCost': document.getElementById('carCost').value,
            'carCostDecoding': document.getElementById('carCost').value,
            'receivedMoney': document.getElementById('carCost').value,
        };
        console.log(data);
        try {
            let response = await fetch('/PDF/generatingPDF/', {
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
}

export function fillingFormReadyValues(){
    function actualDate(){
        const date = new Date();
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}.${month}.${year}`
    }
    document.getElementById('buttonFillingForm').onclick = function() {
        document.getElementById('city').value = 'Уфа';
        document.getElementById('date').value = actualDate();

        document.getElementById('sellerName').value = 'Иванов Иван Иванович';
        document.getElementById('sellerDate').value = '23.12.1976';
        document.getElementById('sellerCity').value = 'Уфа';
        document.getElementById('sellerPassportNumber').value = '5360 034324';
        document.getElementById('sellerPassportDate').value = '09.09.2012';
        document.getElementById('sellerPassportDepartmentCode').value = '450-003';
        document.getElementById('sellerPassportCreatedBy').value = 'Отдел №3';
        document.getElementById('sellerRegistrationAddress').value = 'г.Уфа, пр.Ленина д.3 кв.23';
        document.getElementById('sellerPhone').value = '8-912-434-12-32';

        document.getElementById('buyerName').value = 'Петечкин Петр Петрович';
        document.getElementById('buyerDate').value = '13.11.1973';
        document.getElementById('buyerCity').value = 'Уфа';
        document.getElementById('buyerPassportNumber').value = '5360 034324';
        document.getElementById('buyerPassportDate').value = '22.01.2012';
        document.getElementById('buyerPassportDepartmentCode').value = '450-003';
        document.getElementById('buyerPassportCreatedBy').value = 'Отдел №45';
        document.getElementById('buyerRegistrationAddress').value = 'г.Уфа, пр.Светлый д.23';
        document.getElementById('buyerPhone').value = '8-932-123-43-54';

        document.getElementById('carBrand').value = 'Toyota';
        document.getElementById('carModel').value = 'Avalon';
        document.getElementById('carNumber').value = 'JTDBL40E799123456';
        document.getElementById('carType').value = 'Легковой';
        document.getElementById('carReleaseYear').value = '2020';
        document.getElementById('carMileage').value = '12040';
        document.getElementById('carPower').value = '150';
        document.getElementById('engineVolume').value = '1998';
        document.getElementById('carColour').value = 'Черный';
        document.getElementById('engineModel').value = '1NZ-FE';
        document.getElementById('engineNumber').value = '1NZ1234567';
        document.getElementById('frameNumber').value = '123456789';
        document.getElementById('bodyNumber').value = '123456789';

        document.getElementById('documentSeries').value = '50 УЮ';
        document.getElementById('documentNumber').value = '123456';
        document.getElementById('documentCreator').value = 'ГИБДД г. Уфа';
        document.getElementById('documentDate').value = '2022-08-15';

        document.getElementById('certificateRegistrationSeries').value = '77 АК';
        document.getElementById('certificateRegistrationNumber').value = '123456';
        document.getElementById('certificateRegistrationDate').value = '15.08.2022';
        document.getElementById('certificateRegistrationCreator').value = 'ГИБДД г. Москва';

        document.getElementById('carStateNumber').value = 'А123ВС 102';
        document.getElementById('carCost').value = '1030200';
    }
}

export function creatingInputDateMask() {
    const inputs = document.getElementsByClassName('inputDate');
    for (let input of inputs) {
        input.oninput = function() {
            let value = this.value.replace(/\D/g, ""); // Удаляем все нецифровые символы
            if (value.length >= 2) {
                value = value.slice(0, 2) + '.' + value.slice(2); // Добавляем точку после дня
            }
            if (value.length >= 5) {
                value = value.slice(0, 5) + '.' + value.slice(5); // Добавляем точку после месяца
            }
            this.value = value; // Обновляем значение input
        }
    }
}
