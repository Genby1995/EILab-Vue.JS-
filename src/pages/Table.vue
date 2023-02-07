<template>
  <ag-grid-vue
    style="width: 802px; height: 500px"
    class="ag-theme-alpine"
    :columnDefs="columnDefs.value"
    :rowData="rowData.value"
    :defaultColDef ="defaultColDef"
    animateRows="true"
    rowSelection="multiple"
  >
  </ag-grid-vue>
</template>

<script>
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { AgGridVue } from "ag-grid-vue3";
import axios from "axios";
import { reactive, onMounted, ref } from "vue";

export default {
  name: "Table",
  components: {
    AgGridVue,
  },
  methods: {},
  setup() {
    const rowData = reactive({});
    onMounted(async () => {
      try {
        const response = await axios.get("https://ei-adult.way2wei.space/response.json");
        if (response?.data.length > 0) {
          const data = response?.data.map((item) => {
            console.log(item);
            const firstName = item?.questionnaire?.first_name || "";
            const lastName = item?.questionnaire?.last_name || "";
            const patronymic = item?.questionnaire?.patronymic || "";
            const fio =
              firstName && lastName && patronymic
                ? firstName + " " + lastName + " " + patronymic
                : "-";
            const status = item?.status || "-";
            const date = item?.finished_at || "-";
            const type = item?.report_type || "-";

            return {
              name: fio,
              status: status,
              date: date,
              type: type,
            };
          });
          console.log(data);
          rowData.value = data;
          console.log(rowData.value);
        }
      } catch (error) {
        alert("Ошибка");
      }
    });

    const defaultColDef = {
      filter: true,
      sortable: true,
    };

    const columnDefs = reactive({
      value: [
        { headerName: "ФИО", field: "name", width: "300px" },
        { headerName: "Статус", field: "status", width: "100px" },
        { headerName: "Дата прохождения", field: "date", width: "200px" },
        { headerName: "Тип отчета", field: "type", width: "200px" },
      ],
    });

    return {
      columnDefs,
      rowData,
      defaultColDef,
    };
  },
};
</script>

<style lang="scss" scoped>
.ag-theme-alpine {
    --ag-alpine-active-color: rgb(66, 185, 131)
    --ag-input-focus-border-color: rgba(66, 185, 131, 0.4);
    --ag-range-selection-background-color: rgba(66, 185, 131, 0.2);
    --ag-range-selection-background-color-2: rgba(66, 185, 131, 0.36);
    --ag-range-selection-background-color-3: rgba(66, 185, 131, 0.49);
    --ag-range-selection-background-color-4:rgba(66, 185, 131, 0.59);
    --ag-selected-row-background-color: rgba(66, 185, 131, 0.3);
    --ag-input-focus-border-color: rgba(66, 185, 131, 0.4)
    --ag-row-hover-color: rgba(66, 185, 131, 0.1);
    --ag-column-hover-color: rgba(66, 185, 131, 0.1);
}
</style>
