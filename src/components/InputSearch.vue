<template>
  <div id="InputSearch">
    <div class="container-search">
      <input type="text" v-model="inputSearch" :placeholder="placeholder" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { t } from "@/locale";

const timemout = 500;
let listenInput: number;

@Component({})
export default class InputSearch extends Vue {
  inputSearch = "";

  @Watch("inputSearch")
  onInputChanged(newValue: any, old: any) {
    clearTimeout(listenInput);

    listenInput = setTimeout(() => this.$emit("update", newValue), timemout);
  }

  get placeholder() {
    return t("search");
  }
}
</script>

<style lang="scss" scoped>
#InputSearch {
  display: block;
  width: 100%;
  max-width: 100%;
}

.container-search {
  display: block;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  margin: 5px 0;

  input {
    font-style: normal;
    font-weight: 500;
    font-size: 12.37px;
    line-height: 18px;
    letter-spacing: -0.01em;
    width: 100%;
    padding: 6px 8px;
    box-sizing: border-box;
    border-radius: 8px;
    border: 1px solid #3e4856;
    background: rgba(#1e232d, 0.83);
    -webkit-backdrop-filter: blur(12px); /* Safari 9+ */
    backdrop-filter: blur(12px); /* Chrome and Opera */
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.06),
    0px 12px 50px rgba(0, 0, 0, 0.05),
    inset 0px 0px 0px 1px rgba(241, 241, 241, 0.02);
    color: white;
    outline: none;
  }
}
</style>
