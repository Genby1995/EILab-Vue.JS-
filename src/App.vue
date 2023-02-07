<template>
  <nav>
    <router-link to="/">Главная страница</router-link>
    <router-link to="/table">Таблица</router-link>
    <router-link to="/layout">Вёрстка</router-link>
  </nav>
  <div class="main">
    <router-view />
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap");

:root {
  --color-text: rgb(35, 35, 35);
  --color-text-dark: rgb(15, 15, 15);
  --color-text-trans: rgba(35, 35, 35, 0.5);
  --color-text-warn: red;
  --color-stroke: rgba(35, 35, 35, 0.25);
  --color-bkg: rgb(195, 195, 195);
  --color-main: rgb(225, 225, 225);
  --color-main-light: rgb(235, 235, 235);
  --color-main-dark: rgb(155, 155, 155);
  --color-char: rgb(66, 185, 131);
  --color-char-trans: rgba(66, 185, 131, 0.5);
  --color-char-text: rgb(250, 250, 250);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: var(--color-text);
}

a {
  text-decoration: none;
}

#app {
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-width: 300px;
  font-size: medium;
  font-weight: normal;
}

nav {
  display: flex;
  background: rgb(66, 185, 131);
  padding: 15px;
  gap: 15px;
  justify-content: center;
  align-items: center;

  & a {
    background: var(--color-main);
    font-weight: bold;
    padding: 5px;
    border: 1px solid var(--color-stroke);
  }

  & a.router-link-exact-active {
    color: var(--color-char)
  }
}

.main {
  display: flex;
  justify-content: center;
  align-items: center;;
}

</style>
