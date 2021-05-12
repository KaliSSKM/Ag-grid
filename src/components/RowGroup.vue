<template>
  <ag-grid-vue
                style="width: 100%; height: 100%;"
                class="ag-theme-alpine"
                id="myGrid"
                :gridOptions="gridOptions"
                @grid-ready="onGridReady"
                :defaultColDef="defaultColDef"
                :enableRangeSelection="true"
                :animateRows="true"
                :columnDefs="columnDefs"
                :rowData="rowData"
                :modules="AllModules"
                ></ag-grid-vue>
</template>

<script>
import { AgGridVue } from "ag-grid-vue";

export default {
  name: "RowGroup",
  components: {
    AgGridVue
  },
  data() {
    return {
      gridOptions: null,
      gridApi: null,
      columnApi: null,
      columnDefs: null,
      defaultColDef: null,
      autoGroupColumnDef: null,
      rowData: null,
    };
  },
  beforeMount() {
    this.gridOptions = {};
    this.columnDefs = [
      {
        field: 'country',
        rowGroup: true,
      },
      {
        field: 'year',
        rowGroup: true,
      },
      { field: 'sport' },
      { field: 'athlete' },
      { field: 'total' },
    ];
    this.defaultColDef = {
      flex: 1,
      minWidth: 100,
      filter: true,
      sortable: true,
      resizable: true,
    };
    this.autoGroupColumnDef = { minWidth: 200 };
  },
  mounted() {
    this.gridApi = this.gridOptions.api;
    this.gridColumnApi = this.gridOptions.columnApi;
  },
  methods: {
    onGridReady() {
      const updateData = (data) => {
        this.rowData = data;
      };

      fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
        .then((resp) => resp.json())
        .then((data) => updateData(data));
    },
  },
};
</script>

