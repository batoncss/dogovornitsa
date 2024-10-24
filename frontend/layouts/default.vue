<template>
  <div>
    <head>
      <title><nuxt-child /></title>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
      <link rel="stylesheet" type="text/css" href="~/css/base.css">
      <link rel="stylesheet" type="text/css" href="~/css/createDocument.css">
      <link rel="icon" href="data:;base64,="> <!-- удаляет ошибку со значком -->
    </head>

    <header class="d-flex justify-content-center py-3">
      <ul class="nav nav-pills">
        <li class="nav-item"><nuxt-link to="/" class="nav-link" aria-current="page">Главная</nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/createDocument" class="nav-link">Создать документ</nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/faq" class="nav-link">FAQ</nuxt-link></li>
      </ul>
    </header>

    <main>
      <nuxt />
    </main>

    <footer>
      <ul class="nav justify-content-center border-bottom pb-3 mb-3">
        <li class="nav-item"><nuxt-link to="/" class="nav-link px-2 text-body-secondary">Главная</nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/createDocument" class="nav-link px-2 text-body-secondary">Создать документ</nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/faq" class="nav-link px-2 text-body-secondary">FAQ</nuxt-link></li>
      </ul>
      <p class="text-center text-body-secondary">© 2024 Договорница</p>
    </footer>

    <script type="module" src="~/js/main.js"></script>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.title,
    };
  },
};
</script>

<style scoped>
/* Вы можете добавить CSS стили здесь, если они специфичны для этого компонента */
</style>
