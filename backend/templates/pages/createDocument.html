<template>
  <div class="container mt-4">
    <button type="button" class="btn btn-primary" @click="fillForm">Заполнить значениями</button>
    <form @submit.prevent="createPDF">
      <div class="category">
        <h3>Дата и место составления</h3>
        <div class="mb-3">
          <label for="date" class="form-label">Дата составления</label>
          <input class="form-control inputDate" v-model="formData.date" id="date" type="text">
          <label for="city" class="form-label">Место составления</label>
          <input class="form-control" v-model="formData.city" id="city" type="text">
        </div>
      </div>
      <div class="category">
        <h3>Текущий владелец транспортного средства</h3>
        <div class="mb-3">
          <label for="sellerName" class="form-label">ФИО (как в паспорте)</label>
          <input class="form-control" v-model="formData.seller.name" id="sellerName" type="text">
          <label for="sellerDate" class="form-label">Дата рождения</label>
          <input class="form-control inputDate" v-model="formData.seller.dateOfBirth" id="sellerDate" type="text">
          <label for="sellerCity" class="form-label">Место рождения</label>
          <input class="form-control" v-model="formData.seller.city" id="sellerCity" type="text">
          <label for="sellerPassportNumber" class="form-label">Серия и номер паспорта</label>
          <input class="form-control" v-model="formData.seller.passportNumber" id="sellerPassportNumber" type="text">
          <label for="sellerPassportDate" class="form-label">Дата выдачи</label>
          <input class="form-control inputDate" v-model="formData.seller.passportDate" id="sellerPassportDate" type="text">
          <label for="sellerPassportDepartmentCode" class="form-label">Код подразделения</label>
          <input class="form-control" v-model="formData.seller.departmentCode" id="sellerPassportDepartmentCode" type="text">
          <label for="sellerPassportCreatedBy" class="form-label">Кем выдан</label>
          <input class="form-control" v-model="formData.seller.createdBy" id="sellerPassportCreatedBy" type="text">
          <label for="sellerRegistrationAddress" class="form-label">Адрес регистрации</label>
          <input class="form-control" v-model="formData.seller.registrationAddress" id="sellerRegistrationAddress" type="text">
          <label for="sellerPhone" class="form-label">Номер телефона</label>
          <input class="form-control" v-model="formData.seller.phone" id="sellerPhone" type="tel">
        </div>
      </div>
      <div class="category">
        <h3>Покупатель транспортного средства</h3>
        <div class="mb-3">
          <label for="buyerName" class="form-label">ФИО (как в паспорте)</label>
          <input class="form-control" v-model="formData.buyer.name" id="buyerName" type="text">
          <label for="buyerDate" class="form-label">Дата рождения</label>
          <input class="form-control inputDate" v-model="formData.buyer.dateOfBirth" id="buyerDate" type="text">
          <label for="buyerCity" class="form-label">Место рождения</label>
          <input class="form-control" v-model="formData.buyer.city" id="buyerCity" type="text">
          <label for="buyerPassportNumber" class="form-label">Серия и номер паспорта</label>
          <input class="form-control" v-model="formData.buyer.passportNumber" id="buyerPassportNumber" type="text">
          <label for="buyerPassportDate" class="form-label">Дата выдачи</label>
          <input class="form-control inputDate" v-model="formData.buyer.passportDate" id="buyerPassportDate" type="text">
          <label for="buyerPassportDepartmentCode" class="form-label">Код подразделения</label>
          <input class="form-control" v-model="formData.buyer.departmentCode" id="buyerPassportDepartmentCode" type="text">
          <label for="buyerPassportCreatedBy" class="form-label">Кем выдан</label>
          <input class="form-control" v-model="formData.buyer.createdBy" id="buyerPassportCreatedBy" type="text">
          <label for="buyerRegistrationAddress" class="form-label">Адрес регистрации</label>
          <input class="form-control" v-model="formData.buyer.registrationAddress" id="buyerRegistrationAddress" type="text">
          <label for="buyerPhone" class="form-label">Номер телефона</label>
          <input class="form-control" v-model="formData.buyer.phone" id="buyerPhone" type="tel">
        </div>
      </div>
      <div class="category">
        <h3>Транспортное средство</h3>
        <div class="mb-3">
          <label for="carBrand" class="form-label">Марка ТС</label>
          <input class="form-control" v-model="formData.vehicle.brand" id="carBrand" type="text">
          <label for="carModel" class="form-label">Модель ТС</label>
          <input class="form-control" v-model="formData.vehicle.model" id="carModel" type="text">
          <label for="carNumber" class="form-label">VIN номер</label>
          <input class="form-control" v-model="formData.vehicle.vin" id="carNumber" type="text">
          <label for="carType" class="form-label">Тип ТС</label>
          <select class="form-select" v-model="formData.vehicle.type" id="carType">
            <option value="Легковой">Легковой</option>
            <option value="Грузовой">Грузовой</option>
            <option value="Автобус">Автобус</option>
            <option value="Мотоцикл">Мотоцикл</option>
          </select>
          <label for="carReleaseYear" class="form-label">Год выпуска</label>
          <input class="form-control" v-model="formData.vehicle.releaseYear" id="carReleaseYear" type="number">
          <label for="carMileage" class="form-label">Пробег, км</label>
          <input class="form-control" v-model="formData.vehicle.mileage" id="carMileage" type="number">
          <label for="carPower" class="form-label">Мощность двигателя, л.с.</label>
          <input class="form-control" v-model="formData.vehicle.power" id="carPower" type="number">
          <label for="engineVolume" class="form-label">Рабочий объем, куб.см.</label>
          <input class="form-control" v-model="formData.vehicle.engineVolume" id="engineVolume" type="number">
          <label for="carColour" class="form-label">Цвет</label>
          <input class="form-control" v-model="formData.vehicle.color" id="carColour" type="text">
          <label for="engineModel" class="form-label">Модель двигателя</label>
          <input class="form-control" v-model="formData.vehicle.engineModel" id="engineModel" type="text">
          <label for="engineNumber" class="form-label">Номер двигателя</label>
          <input class="form-control" v-model="formData.vehicle.engineNumber" id="engineNumber" type="text">
          <label for="frameNumber" class="form-label">Номер шасси, рамы</label>
          <input class="form-control" v-model="formData.vehicle.frameNumber" id="frameNumber" type="text">
          <label for="bodyNumber" class="form-label">Номер кузова</label>
          <input class="form-control" v-model="formData.vehicle.bodyNumber" id="bodyNumber" type="text">
        </div>
      </div>
      <div class="category">
        <h3>ПТС</h3>
        <div class="mb-3">
          <label for="documentSeries" class="form-label">ПТС, серия</label>
          <input class="form-control" v-model="formData.pts.series" id="documentSeries" type="text">
          <label for="documentNumber" class="form-label">ПТС, номер</label>
          <input class="form-control" v-model="formData.pts.number" id="documentNumber" type="text">
          <label for="documentDate" class="form-label">ПТС, дата выдачи</label>
          <input class="form-control inputDate" v-model="formData.pts.issueDate" id="documentDate" type="text">
          <label for="documentCreator" class="form-label">ПТС, кем выдан</label>
          <input class="form-control" v-model="formData.pts.creator" id="documentCreator" type="text">
        </div>
      </div>
      <div class="category">
        <h3>СТС</h3>
        <div class="mb-3">
          <label for="certificateRegistrationSeries" class="form-label">СТС, серия</label>
          <input class="form-control" v-model="formData.sts.series" id="certificateRegistrationSeries" type="text">
          <label for="certificateRegistrationNumber" class="form-label">СТС, номер</label>
          <input class="form-control" v-model="formData.sts.number" id="certificateRegistrationNumber" type="text">
          <label for="certificateRegistrationDate" class="form-label">СТС, дата выдачи</label>
          <input class="form-control inputDate" v-model="formData.sts.issueDate" id="certificateRegistrationDate" type="text">
          <label for="certificateRegistrationCreator" class="form-label">СТС, кем выдан</label>
          <input class="form-control" v-model="formData.sts.creator" id="certificateRegistrationCreator" type="text">
        </div>
      </div>
      <div class="category">
        <div class="mb-3">
          <label for="carStateNumber" class="form-label">Гос. номер</label>
          <input class="form-control" v-model="formData.stateNumber" id="carStateNumber" type="text">
          <label for="carCost" class="form-label">Стоимость ТС</label>
          <input class="form-control" v-model="formData.cost" id="carCost" type="number">
        </div>
        <button type="submit" class="btn btn-primary">Создать PDF</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        date: '',
        city: '',
        seller: {
          name: '',
          dateOfBirth: '',
          city: '',
          passportNumber: '',
          passportDate: '',
          departmentCode: '',
          createdBy: '',
          registrationAddress: '',
          phone: '',
        },
        buyer: {
          name: '',
          dateOfBirth: '',
          city: '',
          passportNumber: '',
          passportDate: '',
          departmentCode: '',
          createdBy: '',
          registrationAddress: '',
          phone: '',
        },
        vehicle: {
          brand: '',
          model: '',
          vin: '',
          type: '',
          releaseYear: '',
          mileage: '',
          power: '',
          engineVolume: '',
          color: '',
          engineModel: '',
          engineNumber: '',
          frameNumber: '',
          bodyNumber: '',
        },
        pts: {
          series: '',
          number: '',
          issueDate: '',
          creator: '',
        },
        sts: {
          series: '',
          number: '',
          issueDate: '',
          creator: '',
        },
        stateNumber: '',
        cost: '',
      },
    };
  },
  methods: {
    fillForm() {
      // Заполнение формы значениями
      this.formData = {
        ...this.formData,
        date: '2024-10-01',
        city: 'Москва',
        seller: {
          name: 'Иванов Иван Иванович',
          dateOfBirth: '1990-01-01',
          city: 'Москва',
          passportNumber: '1234 567890',
          passportDate: '2010-01-01',
          departmentCode: '123-456',
          createdBy: 'Отдел УФМС',
          registrationAddress: 'ул. Ленина, 1',
          phone: '+7 (123) 456-78-90',
        },
        buyer: {
          name: 'Петров Петр Петрович',
          dateOfBirth: '1995-01-01',
          city: 'Санкт-Петербург',
          passportNumber: '4321 098765',
          passportDate: '2015-01-01',
          departmentCode: '654-321',
          createdBy: 'Отдел УФМС',
          registrationAddress: 'ул. Пушкина, 2',
          phone: '+7 (321) 654-32-10',
        },
        vehicle: {
          brand: 'Toyota',
          model: 'Camry',
          vin: '1HGBH41JXMN109186',
          type: 'Легковой',
          releaseYear: 2020,
          mileage: 50000,
          power: 200,
          engineVolume: 2500,
          color: 'Синий',
          engineModel: '2AR-FE',
          engineNumber: '1234567890',
          frameNumber: '1HGBH41JXMN109186',
          bodyNumber: '1234567',
        },
        pts: {
          series: '1234',
          number: '567890',
          issueDate: '2020-01-01',
          creator: 'Отдел ГИБДД',
        },
        sts: {
          series: '4321',
          number: '098765',
          issueDate: '2020-01-01',
          creator: 'Отдел ГИБДД',
        },
        stateNumber: 'A123BC',
        cost: 1500000,
      };
    },
    createPDF() {
      // Логика создания PDF документа
      console.log('Создание PDF с данными:', this.formData);
    },
  },
  head() {
    return {
      title: 'Создать документ',
    };
  },
};
</script>

<style scoped>
/* Здесь можно добавить специфичные стили для этой страницы */
</style>
