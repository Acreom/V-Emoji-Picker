<template>
  <div id="EmojiPicker" :class="['emoji-picker', {dark}]">
    <Categories
      v-if="showCategories"
      :categories="categoriesFiltered"
      :current="currentCategory"
      @select="changeCategory"
    />
    <InputSearch v-if="showSearch" :focus-on-open="focusSearchOnOpen" @update="onSearch" />
    <EmojiList
      :data="mapEmojis"
      :category="currentCategory"
      :filter="filterEmoji"
      :emojiWithBorder="emojiWithBorder"
      :emojiSize="emojiSize"
      :emojisByRow="emojisByRow"
      :hasSearch="showSearch"
      @select="onSelectEmoji"
    />
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue, Watch } from "vue-property-decorator";

import { Emoji, IEmoji } from "./models/Emoji";
import { ICategory } from "./models/Category";
import { MapEmojis } from "./models/MapEmojis";

import { emojisDefault } from "./utils/emojis";
import { categoriesDefault } from "./utils/categories";

import Categories from "./components/Categories.vue";
import EmojiList from "./components/EmojiList.vue";
import InputSearch from "./components/InputSearch.vue";

import locale from "./locale";

@Component({
  components: {
    Categories,
    EmojiList,
    InputSearch
  }
})
export default class VEmojiPicker extends Vue {
  @Prop({ default: () => emojisDefault }) customEmojis!: IEmoji[];
  @Prop({ default: () => categoriesDefault }) customCategories!: ICategory[];
  @Prop({ default: 15 }) limitFrequently!: number;
  @Prop({ default: 8 }) emojisByRow!: number;
  @Prop({ default: 20 }) emojiSize!: number;
  @Prop({ default: true }) emojiWithBorder!: boolean;
  @Prop({ default: true }) showSearch!: boolean;
  @Prop({ default: true }) showCategories!: boolean;
  @Prop({ default: false }) dark!: boolean;
  @Prop({ default: "Peoples" }) initialCategory!: string;
  @Prop({ default: true }) focusSearchOnOpen!: boolean;
  @Prop({ default: () => [] as ICategory[] }) exceptCategories!: ICategory[];
  @Prop({ default: () => [] as Emoji[] }) exceptEmojis!: IEmoji[];
  @Prop({}) i18n!: Object;

  mapEmojis: MapEmojis = {};

  currentCategory = this.initialCategory;
  filterEmoji = "";

  created() {
    const categoriesNames = this.customCategories.map(c => c.name);
    if (!categoriesNames.includes(this.initialCategory)) {
      this.initialCategory = categoriesNames[0];
    }

    // Create map
    this.mapperEmojisCategory(this.customEmojis);
    this.restoreFrequentlyEmojis();

    // Configure i18n
    if (this.i18n) {
      locale.i18n(this.i18n);
    }
  }

  beforeDestroy() {
    this.mapEmojis = {};
  }

  async onSearch(term: string) {
    this.filterEmoji = term;
  }

  async changeCategory(category: ICategory) {
    const hasEmojis = this.mapEmojis[category.name].length;
    this.currentCategory = category.name;

    if (hasEmojis) {
      await this.onChangeCategory(category);
    }
  }

  async updateFrequently(emoji: IEmoji) {
    const oldEmojis = this.mapEmojis["Frequently"];
    const emojis = [...new Set([emoji, ...oldEmojis])];

    this.mapEmojis["Frequently"] = emojis.slice(0, this.limitFrequently);

    await this.saveFrequentlyEmojis(emojis);
  }

  async mapperEmojisCategory(emojis: IEmoji[]) {
    this.$set(this.mapEmojis, "Frequently", []);

    emojis
      .filter(emoji => !this.exceptEmojis.includes(emoji))
      .forEach(emoji => {
        const _category = emoji.category;

        if (!this.mapEmojis[_category]) {
          this.$set(this.mapEmojis, _category, []);
        }

        this.mapEmojis[_category].push(emoji);
      });
  }

  async restoreFrequentlyEmojis() {
    const jsonMapIndexEmojis = localStorage.getItem("frequentlyEmojis");

    const mapIndexEmojis = JSON.parse(jsonMapIndexEmojis!!) || [];
    this.mapEmojis["Frequently"] = mapIndexEmojis.map(
      index => this.customEmojis[index]
    );
  }

  async saveFrequentlyEmojis(emojis: IEmoji[]) {
    const mapIndexEmojis = emojis.map(emoji => {
      return this.customEmojis.indexOf(emoji);
    });

    localStorage.setItem("frequentlyEmojis", JSON.stringify(mapIndexEmojis));
  }

  get categoriesFiltered() {
    return this.customCategories.filter(
      category => !this.exceptCategories.includes(category)
    );
  }

  @Emit("select")
  async onSelectEmoji(emoji: IEmoji) {
    await this.updateFrequently(emoji);

    return emoji;
  }

  @Emit("changeCategory")
  async onChangeCategory(category: ICategory) {
    return category;
  }

  @Watch("customEmojis")
  onChangeCustomEmojis(newEmojis: IEmoji[]) {
    if (newEmojis && newEmojis.length) {
      this.mapEmojis = {};
      this.mapperEmojisCategory(newEmojis);
    }
  }
}
</script>


<style lang="scss" scoped>
.emoji-picker {
  --ep-color-bg: #f0f0f0;
  --ep-color-sbg: #f6f6f6;
  --ep-color-border: #3e4856;
  --ep-color-text: #4a4a4a;
  --ep-color-active: #64D7DE;

  display: inline-flex;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeSpeed;
  flex-direction: column;
  align-items: center;
  background: none;
  border-radius: 4px;
  border: none;
  overflow: hidden;
  width: 250px;
  user-select: none;
}

.dark {
  --ep-color-bg: #f0f0f0;
  --ep-color-sbg: #f6f6f6;
  --ep-color-border: #3e4856;
  --ep-color-text: #4a4a4a;
  --ep-color-active: #64D7DE;
}
</style>
