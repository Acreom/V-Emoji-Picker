
<template>
  <span :class="['emoji', { 'border': withBorder } ]" :style="styleSize" v-html="emoji.data" />
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { IEmoji } from "@/models/Emoji";

@Component({})
export default class EmojiItem extends Vue {
  @Prop({}) emoji!: IEmoji;
  @Prop({}) size!: number;
  @Prop({}) withBorder!: boolean;

  get styleSize() {
    return {
      fontSize: `${this.size - 5}px`,
      lineHeight: `${this.size}px`,
      height: `${this.size}px`,
      width: `${this.size}px`
    };
  }
}
</script>

<style lang="scss" scoped>
.emoji {
  display: inline-block;
  text-align: center;
  padding: 3px;
  box-sizing: content-box;
  overflow: hidden;
  transition: transform 0.2s;
  cursor: default;

  &:hover {
    background: rgba(#d0d5dc, 0.13);
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.06),
    0px 12px 50px rgba(0, 0, 0, 0.05),
    inset 0px 0px 0px 1px rgba(241, 241, 241, 0.02);
  }

}

.border:hover {
  background: #00000010;
  border-radius: 8px;
}
</style>
