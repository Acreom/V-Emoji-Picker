<template>
  <div id="Emojis">
    <div ref="container-emoji" class="container-emoji">
      <VirtualCollection
        ref="virtualCollection"
        :cell-size-and-position-getter="cellSizeAndPositionGetterList"
        :collection="emojis"
        :width="width"
        :height="height"
        :header-slot-height="0"
      >
        <div slot="cell" :ref="`${props.data.id}`" slot-scope="props">
          <CategoryLabel v-if="props.data.category" :name="props.data.label"  />
          <EmojiItem
            v-if="props.data.emoji"
            :key="`${props.data.category}-${props.data.index}`"
            :emoji="props.data.emoji"
            :size="emojiSize"
            :withBorder="emojiWithBorder"
            @click.native="onSelect(props.data.emoji)"
          />
        </div>
      </VirtualCollection>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue, Watch } from "vue-property-decorator";
import { Emoji } from "@/models/Emoji";

import EmojiItem from "./EmojiItem.vue";
import CategoryLabel from "./CategoryLabel.vue";
import {Category} from "@/models/Category";

@Component({
  components: {
    EmojiItem,
    CategoryLabel,
  }
})
export default class EmojiList extends Vue {
  @Prop({ required: true }) data!: any;
  @Prop({ required: true }) emojisByRow!: number;
  @Prop({}) emojiWithBorder!: boolean;
  @Prop({}) emojiSize!: number;
  @Prop({}) filter!: string;
  @Prop({}) continuousList!: boolean;
  @Prop({}) category!: string;
  @Prop({}) hasSearch!: boolean;

  width: number = 0;
  height: number = 0;

  searchByAlias(term: string, emoji: Emoji) {
    const isRelevant = (alias: string) => alias.toLowerCase().includes(term);
    return emoji.aliases.some((alias: string) => isRelevant(alias));
  }

  calcScrollTop() {
    return this.hasSearch ? 88 : 44;
  }

  scrollTo(top: number) {
    // @ts-ignore
    this.$refs['container-emoji'].firstElementChild?.scrollTo({
      top,
      behavior: 'instant',
    });
  }

  getRelevantEmojis(category: string) {
    const searchValue = this.filter.trim().toLowerCase();
    if (searchValue) {
      return this.data[category].filter((emoji: Emoji) =>
        this.searchByAlias(searchValue, emoji)
      );
    }
    else {
      return this.data[category];
    }
  }

  get emojis() {
    let index = 0;
    let offsetTop = 0;
    let categoryIndex = 0;
    let flattenedList: any[] = [];

    this.categories.forEach((category: string) => {
      index = 0;
      if (this.getRelevantEmojis(category).length) {
        flattenedList.push({
          data: {
            id: category,
            label: category,
            category: true,
            index: categoryIndex,
            x: 0,
            y: offsetTop
          }
        });
        offsetTop++;
        this.getRelevantEmojis(category).forEach((emoji: Emoji) => {
          flattenedList.push({
            data: {
              emoji,
              emojiCategory: emoji.category,
              id: emoji.data,
              x: (index % this.emojisByRow),
              y: offsetTop + Math.floor(index / this.emojisByRow)
            }
          });
          index++;
        });
        offsetTop = offsetTop + Math.ceil(index / this.emojisByRow);
      }
    });
    return flattenedList;
  }

  cellSizeAndPositionGetterList(item: any, index: number) {
      return {
        width: this.emojiSize,
        height: this.emojiSize,
        x: item.data.x * (this.emojiSize + 11),
        y: item.data.y * (this.emojiSize + 11),
      };
  }

  get categories(): any {
    return Object.keys(this.data);
  }

  get containerEmoji(): any {
    return this.$refs["container-emoji"];
  }

  @Emit("select")
  onSelect(emoji: Emoji) {
    return emoji;
  }

  @Watch("data")
  onDataChanged() {
    this.containerEmoji.scrollTop = 0;
  }

  @Watch("category")
  onCategoryChanged(newValue: any) {
    const element = this.emojis.find((element: any) => element.data.category && element.data.id === newValue);
    this.scrollTo(element.data.y * (this.emojiSize + 11))
  }

  mounted() {
    // @ts-ignore
    this.width = this.$refs['container-emoji']?.offsetWidth;
    // @ts-ignore
    this.height = this.$refs['container-emoji']?.offsetHeight;
  }
}
</script>

<style lang="scss" scoped>
#Emojis {
  font-family: Twemoji, NotomojiColor, Notomoji, EmojiOne Color, Symbola, Noto,
    Segoe UI Emoji, OpenSansEmoji, monospace;
  display: block;
  width: 100%;
  max-width: 100%;
  color: var(--ep-color-text);


  // Custom Scroll
  ::-webkit-scrollbar {
    border-radius: 4px;
    width: 4px;
    overflow: hidden;
  }
}

.container-emoji {
  overflow-x: hidden;
  overflow-y: scroll;
  height: 220px;
}

.grid-emojis {
  display: grid;
  margin: 5px 0;
  justify-items: center;
}
</style>
