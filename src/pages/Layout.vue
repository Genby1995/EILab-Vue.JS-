<template>
  <div class="wrapper">
    <info class="info_wrapper">
      <div class="info_container">
        <MyInfoItem
          :parameter="'Отсчётов сформировано'"
          :value="'10600'"
          :iconPath="iconPaths.mdiFileChartOutline"
        />
        <MyInfoItem
          :parameter="'Численность работников'"
          :value="'13783'"
          :iconPath="iconPaths.mdiAccountTie"
        />
        <MyInfoItem
          :parameter="'Качество групп'"
          :value="'737'"
          :iconPath="iconPaths.mdiBank"
        />
      </div>
    </info>
    <actions class="actions_container">
      <div class="action_item">
        <div class="form">
          <label class="input">
            <input type="checkbox" v-model="rest" value="info" />
            <span class="checkmark" />
            Заполните информацию о компании
          </label>
          <MyButton>Перейти</MyButton>
        </div>
        <div class="hint">
          Это создаст более привлекательный образ компании и позволит вашим сотрудникам
          убедиться, что всё идёт как нужно.
        </div>
      </div>

      <div class="action_item">
        <div class="form">
          <label class="input">
            <input type="checkbox" v-model="rest" value="employee" />
            <span class="checkmark" />
            Заполните информацию о компании
          </label>
          <MyButton>Перейти</MyButton>
        </div>
        <div class="hint">
          Это создаст более привлекательный образ компании и позволит вашим сотрудникам
          убедиться, что всё идёт как нужно.
        </div>
      </div>
    </actions>
  </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton.vue";
import { mdiBank } from "@mdi/js";
import { mdiAccountTie } from "@mdi/js";
import { mdiFileChartOutline } from "@mdi/js";

export default {
  name: "Layout",
  data() {
    return {
      iconPaths: {
        mdiBank: mdiBank,
        mdiAccountTie: mdiAccountTie,
        mdiFileChartOutline: mdiFileChartOutline,
      },
      rest: [],
    };
  },
  components: { MyButton },
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
}
.info_wrapper {
  width: 100%;
  padding: 15px;
  background-color: var(--color-main);
  .info_container {
    width: 100%;
    padding: 15px;
    background-color: white;
    border-radius: 10px;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    gap: 20px;
  }
}
.actions_container {
  .action_item {
    margin-inline: 25px;
    .form,
    .hint {
      border-top: 1px solid var(--color-main);
      padding-top: 15px;
      padding-bottom: 15px;
      font-weight: lighter;
    }

    .form {
      position: relative;
      display: flex;
      justify-content: space-between;

      & label {
        display: flex;
        justify-content: start;
        align-items: center;
        gap: 10px;
        font-weight: bold;
        cursor: pointer;

        & input {
          position: absolute;
          z-index: -1;
          opacity: 0;
          height: 0;
          width: 0;
        }
        & .checkmark {
          position: relative;
          display: block;
          min-height: 25px;
          min-width: 25px;
          border: 2px solid var(--color-main);
          transition: all 0.3s;

          &:after {
            content: "";
            position: absolute;
            display: none;
            left: 50%;
            top: 50%;
            width: 30%;
            height: 60%;
            border: solid var(--color-char);
            border-width: 0 2px 2px 0;
            -webkit-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            transform: rotate(45deg) translate(-125%, -25%);
            transform-origin: center;
          }
        }

        &:hover input ~ .checkmark {
          background-color: var(--color-main);
        }
        & input:checked ~ .checkmark {
          border: 2px solid var(--color-char);
          &:after {
            display: block;
          }
        }
      }
    }
  }
  &:last-child {
    border-bottom: 1px solid var(--color-main);
  }
}
</style>
